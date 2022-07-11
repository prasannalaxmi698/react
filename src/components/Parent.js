import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: 'PARENT',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = (child) => {
    alert(`Hello, ${this.state.parent} from ${child}`);
  };
  render() {
    return (
      <div>
        <Child clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default Parent;
