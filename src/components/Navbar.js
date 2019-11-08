import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Link from '../components/filteredlink';

import logo from '../img/logo-horiz.svg';

class NavbarComponent extends Component {
  state = {
    open: false
  };
  render() {
    const { open } = this.state;
    return (
      <Navbar active={open}>
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/">
            <img src={logo} width="300" height="25" alt="Logo-1" />
          </Navbar.Item>
          <Navbar.Burger
            onClick={() =>
              this.setState({
                open: !open
              })
            }
          />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container position="end">
            <Navbar.Item renderAs={Link} to="/">
              Home
            </Navbar.Item>
            {/* <Navbar.Item renderAs={Link} to="/blogs">
              Blogs
            </Navbar.Item> */}
            <Navbar.Item renderAs={Link} to="/customers">
              Customers
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to="/about">
              About
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to="/contact-us">
              Contact
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default NavbarComponent;
