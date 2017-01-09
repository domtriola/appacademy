import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  render() {
    let greeting;

    if (this.props.currentUser) {
      greeting = (
        <div>
          <h4>Welcome {this.props.currentUser.username}!</h4>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      greeting = (
        <div>
          <Link to="/signup">Sign Up</Link> | <Link to="/login">Log In</Link>
        </div>
      );
    }

    return (
      <div>
        {greeting}
      </div>
    );
  }
}

export default Greeting;
