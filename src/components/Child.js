import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.clickHandler('CHILD')}>Select</button>
      </div>
    );
  }
}

export default Child;

// import React from 'react';

// function Child(props) {
//   return (
//     <div>
//       <button onClick={props.clickHandler}>Child</button>
//     </div>
//   );
// }

// export default Child;
