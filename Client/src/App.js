import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
import Charts from './components/Charts';
import Card from './components/Card'
import users from './components/users'
import {BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import {Line} from 'react-chartjs-2'
import Sidebars from './components/Sidebars';
import Footer from './components/Footer';

const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' },
]

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebars items={items} /> */}
      <div className="container">
      <Route path="/data" exact component={Data} />
      <Route path="/" component={users} />
      </div>
    </Router>
  );
}

export default App;
