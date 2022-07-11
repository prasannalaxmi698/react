import React, { Component } from 'react';
import { UserConsumer } from './userContex';

class ContexF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
            <div>
              <h1>hello!!!!!!! {username}</h1>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ContexF;
