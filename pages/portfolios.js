import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {Link} from '../routes'
import axios from 'axios';

class PortfoliosPage extends Component {
  
  static async getInitialProps(context) {
    let posts = [];

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch (err) {
      console.log(err);
    }
    return {posts: posts.splice(0, 10)};
  }

  renderPosts = posts => (
    posts.map(post => 
      <li key={post.id}>
        <Link route={`/portfolio/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    )
  );

  render() {
    const {posts} = this.props;
    return (
      <BaseLayout>
        <h1>Portfolios Page</h1>
        <ul>
          {this.renderPosts(posts)}
        </ul>
      </BaseLayout>
    );
  }
}

export default PortfoliosPage;