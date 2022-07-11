import React, { Component } from 'react';
import Purecomp from './PureComp';
import Regcomp from './RegComp';

class PrntComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'laxmi',
    };
  }
  componentDidMount() {
    this.setState({
      message: 'laxmi',
    });
  }
  render() {
    console.log('***************PARENT');
    return (
      <div>
        PrntComp
        <Regcomp message={this.state.message} />
        <Purecomp message={this.state.message} />
      </div>
    );
  }
}

export default PrntComp;
