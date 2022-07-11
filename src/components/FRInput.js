import React, { Component } from 'react';

class FRInput extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.refRef = React.forwardRef(props, ref);
  //   }

  render() {
    React.forwardRef((props, ref) => {
      this.output = this.ref;
    });
    return (
      <div>
        <input type="text" ref={this.output}></input>
      </div>
    );
  }
}

export default FRInput;
// import React from 'react';

// const FRInput = React.forwardRef((props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref}></input>
//     </div>
//   );
// });
// export default FRInput;
