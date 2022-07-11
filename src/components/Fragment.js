import React, { Component } from 'react';

class Fragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [
        {
          title: 'Name',
          result: 'end',
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        fragment
        <React.Fragment>
          {this.state.members.map((person) => (
            <h4>
              {person.title} and {person.result}
            </h4>
          ))}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default Fragment;
