import React, { Component } from 'react';

class Operator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 0,
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      message: prevState.message + 1,
    }));
    console.log(this.state.message);
  };
  render() {
    // if (this.state.first) {
    //   return <div>Operator</div>;
    // } else return <div> NOT Operator</div>;

    // let message;
    // if (this.state.first) {
    //   message = <div>Operator</div>;
    // } else {
    //   message = <div> NOT Operator</div>;
    // }

    // return this.state.first ? <div>Operator</div> : <div> NOT Operator</div>;

    return (
      <div>
        <h1>count {this.state.message}</h1>
        <button onClick={this.handleClick}>click Me</button>
      </div>
    );
  }
}

export default Operator;
