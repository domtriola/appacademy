import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  add(e) {
    e.preventDefault();
    const sum = this.state.num1 + this.state.num2;
    const result = this.state.num1 && this.state.num2 ? sum : 0;
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    const difference = this.state.num1 - this.state.num2;
    const result = this.state.num1 && this.state.num2 ? difference : 0;
    this.setState({ result });
  }

  multiply(e) {
    e.preventDefault();
    const product = this.state.num1 * this.state.num2;
    const result = this.state.num1 && this.state.num2 ? product : 0;
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    const quotient = this.state.num1 / this.state.num2;
    const result = this.state.num1 && this.state.num2 ? quotient : 0;
    this.setState({ result });
  }

  clear() {
    const num1 = "";
    const num2 = "";
    this.setState({ num1, num2 });
  }

  render () {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>{result}</h1>
        <input value={num1} onChange={this.setNum1}/><br/>
        <input value={num2} onChange={this.setNum2}/><br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <br/>
        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}

export default Calculator;
