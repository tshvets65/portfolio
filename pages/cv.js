import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class CVPage extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>CV Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default CVPage;