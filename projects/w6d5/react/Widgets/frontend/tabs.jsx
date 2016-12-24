import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentTab: 0};
  }

  render() {
    return (
      <div className = "tabs">
        <h1>Tabs</h1>
        <div className="headers">
          <div onClick={this.updateTab.bind(this, 0)}><p>One</p></div>
          <div onClick={this.updateTab.bind(this, 1)}><p>Two</p></div>
          <div onClick={this.updateTab.bind(this, 2)}><p>Three</p></div>
        </div>

        <div className="tabs-content">
          <article className={this.state.currentTab === 0 ? "selected" : ""}>
            First tab</article>
          <article className={this.state.currentTab === 1 ? "selected" : ""}>
            Second tab</article>
          <article className={this.state.currentTab === 2 ? "selected" : ""}>
            Third tab</article>
        </div>
      </div>
    );
  }

  updateTab (tab) {
    this.setState({currentTab: tab});
  }

}
export default Tabs;
