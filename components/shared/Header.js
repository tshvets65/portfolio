import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

const BsNavLink = ({ route, title }) => {
  return (
    <Link href={route}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </Link>
  )
}

const Login = (props) => {
  return (
    <span className='nav-link port-navbar-link clickable'>Login</span>
  )
}

const Logout = (props) => {
  return (
    <span className='nav-link port-navbar-link clickable'>Logout</span>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='port-navbar port-default absolute' color="transparent" dark expand="md">
          <NavbarBrand className='port-navbar-brand' href="/">Tetyana Shvets</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/' title='Home'/>
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/about' title='About'/>
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/portfolios' title='Portfolio'/>
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/blog' title='Blog'/>
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/cv' title='CV'/>
              </NavItem>
              <NavItem className='port-navbar-item'>
                <NavLink className='port-navbar-link' href="https://github.com/tshvets65">GitHub</NavLink>
              </NavItem>

              <NavItem className='port-navbar-item'>
                <Login />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <Logout />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}