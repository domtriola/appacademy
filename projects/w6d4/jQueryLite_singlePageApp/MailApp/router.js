class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.onhashchange = () => this.render();
  }

  render() {
    let component = this.activeRoute();

    this.node.innerHTML = "";
    if (component !== undefined)
      this.node.appendChild(component.render());
  }

  activeRoute() {
    let hashFragment = window.location.hash;
    return this.routes[hashFragment.slice(1)];
  }
}

module.exports = Router;
