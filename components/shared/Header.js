import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  
  render() {
    debugger;
    const title = this.props.title;
    return (
      <React.Fragment>
        <p>{title}</p>
        <Link href='/blogs'>
          <a>Blogs</a>
        </Link>
        <Link href='/portfolios'>
          <a>Portfolio</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/cv'>
          <a>CV</a>
        </Link>
      </React.Fragment>
    );
  }
}

export default Header;