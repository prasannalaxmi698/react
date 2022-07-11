import React, { Component } from 'react';

class Hero extends Component {
  render() {
    const { heroname } = this.props;
    if (heroname === 'joker') {
      throw new Error('not a  hero');
    }
    return (
      <div>
        <h1>{heroname}</h1>
      </div>
    );
  }
}

export default Hero;
