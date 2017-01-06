import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return (
      <ul>
        <li>{this.props.item.name}</li>
        <li>{this.props.item.happiness}</li>
        <li>{this.props.item.price}</li>
      </ul>
    );
  }
}

export default ItemDetail;
