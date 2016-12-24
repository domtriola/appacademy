import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.timerInterval = null;
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
        {this.state.time.toString()}
      </div>
    );
  }
}

export default Clock;
