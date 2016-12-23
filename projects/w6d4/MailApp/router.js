class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.onhashchange = () => this.render();
  }

  render() {
    this.node.innerHTML = "";
    let newNode = document.createElement("p");
    newNode.innerHTML = this.activeRoute();
    this.node.append(newNode);
  }

  activeRoute() {
    let hashFragment = window.location.hash;
    return hashFragment.slice(1);
  }
}

module.exports = Router;
