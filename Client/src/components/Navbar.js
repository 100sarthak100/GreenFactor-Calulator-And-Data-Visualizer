import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

export default class NavbarTop extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">GreenFactor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/data">App Data</Nav.Link>
              <Nav.Link href="/user">User Data</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}