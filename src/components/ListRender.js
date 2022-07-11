import React, { Component } from 'react';
import People from './People';

class ListRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          name: 'laxmi',
          age: 30,
          job: 'software',
          role: 'senior',
        },
        {
          name: 'sruthi',
          age: 30,
          job: 'hardware',
          role: 'junior',
        },
        {
          name: 'prasanna',
          age: 30,
          job: 'accountant',
          role: 'fresher',
        },
      ],
      //   names: ['laxmi', 'prasanna', 'sruthi', 'tanya'],
    };
    // this.state = {
    //   newnames: this.state.names.map((name) => name),
    // };
    this.state = {
      newList: this.state.people.map((person, index) => (
        <h4>
          <People key={index} index={index} person={person} />
        </h4>
      )),
    };
  }
  render() {
    return (
      <div>
        <h2>Hello! I am</h2>
        {this.state.newList}
      </div>
      //   <div>Hello! I am {this.handeleMap}</div>
    );
  }
}

export default ListRender;

// import React from 'react';
// import People from './People';

// function ListRender() {
//   const people = [
//     {
//       name: 'laxmi',
//       age: 30,
//       job: 'software',
//       role: 'senior',
//     },
//     {
//       name: 'sruthi',
//       age: 30,
//       job: 'hardware',
//       role: 'junior',
//     },
//     {
//       name: 'prasanna',
//       age: 30,
//       job: 'accountant',
//       role: 'fresher',
//     },
//   ];
//   const newList = people.map((person) => <People person={person} />);
//   return (
//     <div>
//       <h3>Hello I'm</h3>
//       <h4>{newList}</h4>
//     </div>
//   );
// }

// export default ListRender;

// import React, { Component } from 'react';

// class ListRender extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       names: ['laxmi', 'prasanna', 'sruthi', 'tanya'],
//     };

//     this.state = {
//       newNames: this.state.names.map((name, index) => (
//         <h4>
//           {index}
//           {name}
//         </h4>
//       )),
//     };
//   }
//   render() {
//     return <div>{this.state.newNames}</div>;
//   }
// }

// export default ListRender;
