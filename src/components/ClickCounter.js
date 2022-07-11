import React, { Component } from 'react';
import WithCounter from './WithCounter';

export class ClickCounter extends Component {
  render() {
    const { count, increment } = this.props;

    return (
      <div>
        <button onClick={increment}>click {count} times</button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter);
