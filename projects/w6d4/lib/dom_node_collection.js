class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html(innerHTML) {
    if (innerHTML === undefined) {
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach(el => {
        el.innerHTML = innerHTML;
      });
    }
  }

  empty() {
    this.HTMLElements.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(item) {
    if (typeof item === "string") {
      this.innerHTML = item;
    } else if (item instanceof HTMLElement) {
      const outerHTML = item.outerHTML;
      this.HTMLElements.forEach(el => {
        el.innerHTML += item.outerHTML;
      });
    } else if (item instanceof DOMNodeCollection) {
      const htmlItems = Array.prototype.slice.call(item.HTMLElements, 0);
      const totalHTML = htmlItems.reduce((accum, el) => {
        return accum + el.outerHTML;
      }, "");
      this.HTMLElements.forEach(el => {
        el.innerHTML += totalHTML;
      });
    }
  }

  attr(attribute, value) {
    if (value === undefined)
      return this.HTMLElements[0].getAttribute(attribute);
    else
      this.HTMLElements.forEach(el => el.setAttribute(attribute, value));
  }

  addClass(className) {
    this.HTMLElements.forEach(el => el.classList.add(className));
  }

  removeClass(className) {
    this.HTMLElements.forEach(el => el.classList.remove(className));
  }

  children() {
    let children = [];
    this.HTMLElements.forEach(node => {
      let nodeChildren = Array.prototype.slice.call(node.children, 0);
      children = children.concat(nodeChildren);
    });

    return new DOMNodeCollection(children);
  }

  parent() {
    const parents = [];
    this.HTMLElements.forEach(node => {
      if (parents.indexOf(node.parentNode) === -1)
        parents.push(node.parentNode);
    });

    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let children = [];
    this.HTMLElements.forEach(node => {
      let found = Array.prototype.slice
                       .call(node.querySelectorAll(selector), 0);
      children = children.concat(found);
    });

    return new DOMNodeCollection(children);
  }

  remove() {
    this.HTMLElements.forEach(node => {
      node.remove();
    });
  }
}

module.exports = DOMNodeCollection;
