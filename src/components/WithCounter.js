import React from 'react';

const WithCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
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
      return (
        <WrappedComponent count={this.state.count} increment={this.increment} />
      );
    }
  }
  return WithCounter;
};

export default WithCounter;
