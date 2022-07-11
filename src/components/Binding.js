import React, { Component } from 'react';

class Binding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'this is text',
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: 'goodbye',
  //     });
  //   }
  clickHandler = () => {
    this.setState({ message: 'goodbye' });
  };
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me */}
        <button
          //   onClick={() => {
          //     this.clickHandler();
          //   }}
          // >
          onClick={this.clickHandler}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Binding;
