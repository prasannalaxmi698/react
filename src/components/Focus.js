import React, { Component } from 'react';
import Input from './Input';

class Focus extends Component {
  constructor(props) {
    super(props);

    this.component = React.createRef();
  }
  clickHandle = () => {
    this.component.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.component} />
        <button onClick={this.clickHandle}>Focus</button>
      </div>
    );
  }
}

export default Focus;
