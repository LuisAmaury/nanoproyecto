import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Undefined</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#video">Video</Nav.Link>
            <Nav.Link href="#equipo">
              Equipo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default App;
