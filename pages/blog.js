import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class BlogsPage extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>Blogs Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogsPage;