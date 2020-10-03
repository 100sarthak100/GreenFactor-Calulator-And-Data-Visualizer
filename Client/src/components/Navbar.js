import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/data" className="navbar-brand">GreenFactor</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/data" className="nav-link">App Data</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">User Data</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}