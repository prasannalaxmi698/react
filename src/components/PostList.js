import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: '',
    };
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')

      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })

      .catch((error) => {
        console.log(error);
        this.setState({
          error: 'url is not correct',
        });
      });
  }
  render() {
    const { posts, error } = this.state;
    return (
      <div>
        <h1>posts</h1>
        {posts.length
          ? posts.map((post) => <div key={post.userId}>{post.id}</div>)
          : error}
      </div>
    );
  }
}

export default PostList;
