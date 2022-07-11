import React, { Component } from 'react';

class Bind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'hello Prasanna',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({
      message: 'GoodBye Prasanna',
    });
  };
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleClick}>CLICK</button>
      </div>
    );
  }
}

export default Bind;
