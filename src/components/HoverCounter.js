import React, { Component } from 'react';
import WithCounter from './WithCounter';

class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h3 onMouseOver={increment}> hover {count} times</h3>
      </div>
    );
  }
}

export default WithCounter(HoverCounter);
