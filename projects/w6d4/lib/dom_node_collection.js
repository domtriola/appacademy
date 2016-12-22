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

  attr() {}
  addClass() {}
  removeClass() {}
}

module.exports = DOMNodeCollection;
