import React from 'react';
import './App.css';
import Data from './components/Data';
import users from './components/users'
import {BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebars';
import Footer from './components/Footer';
import {Container, Row, Col } from "react-bootstrap";

const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' },
]

function App() {
  return (
    <Router>
      <Navbar />
      <Container fluid>
        <Row>
            <Col xs={2} id="sidebar-wrapper">
              <Sidebar />
            </Col>
            <Col xs={10} align="center" id="page-content-wrapper">
              <Route path="/data" exact component={Data} />
              <Route path="/" component={users} />
            </Col> 
        </Row>

      </Container>
      <Footer />
    </Router>
  );
}

export default App;


