import React, { Component } from 'react';
import ContexF from './ContexF';
import UserContext, { UserConsumer } from './userContex';

class ContexE extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return (
            <div>
              <h4>goodbye {name}</h4>
              <ContexF />
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ContexE;
