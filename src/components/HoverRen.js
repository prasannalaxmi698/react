import React, { Component } from 'react';

class HoverRen extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h2 onMouseOver={increment}>Hover {count} times</h2>
      </div>
    );
  }
}

export default HoverRen;
