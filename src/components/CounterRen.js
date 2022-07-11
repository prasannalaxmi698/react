import React, { Component } from 'react';

class CounterRen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  };
  render() {
    return <div>{this.props.render(this.state.count, this.increment)}</div>;
  }
}

export default CounterRen;
