import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';

class Widget extends React.Component {
  render () {
    return (
      <div>
        <Tabs />
        <Clock />
      </div>
    );
  }
}

export default Widget;
