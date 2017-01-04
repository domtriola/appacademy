import React, { Component } from 'react';
import GiphysIndex from './giphys_index';

export default class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "" };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(" ").join("+");
    this.props.fetchSearchGiphys(searchTerm);
  }

  render() {
    let { giphys } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.updateSearchTerm}
            value={this.state.searchTerm} />
          <input type="submit" />
        </form>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}
