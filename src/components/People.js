import React, { Component } from 'react';

class People extends Component {
  render() {
    const { person, index } = this.props;
    return (
      <div>
        <h3>
          {index} {person.name} {person.age}year old working as {person.job} in{' '}
          {person.role} role
        </h3>
      </div>
    );
  }
}

export default People;

// import React from 'react';

// function People({ person }) {
//   return (
//     <div>
//       <h4>
//         {person.name} and {person.age} years old {person.job} as {person.role}{' '}
//         role
//       </h4>
//     </div>
//   );
// }

// export default People;
