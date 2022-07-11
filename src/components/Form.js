import React, { Component } from 'react';
import axios from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // this.setState({
    // alert(`${this.state.username} ${this.state.number} `);
    // });
  };
  render() {
    const { title, body, userId } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Form Component</h3>

        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
