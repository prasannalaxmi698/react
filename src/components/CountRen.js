import React, { Component } from 'react';

class CountRen extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>Click {count} times</button>
      </div>
    );
  }
}

export default CountRen;
