import React from 'react';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);

    let benches = this.props.benches ? this.props.benches : [];
    this.state = { benches};
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ benches: nextProps.benches });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.benches.map((bench, i) => (
            <BenchIndexItem key={i} bench={bench} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
