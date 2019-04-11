import React, { Component } from 'react';
// import logo from './logo.svg';
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
      <div className="demo-1">
      <div id="large-header" className="large-header">
					<canvas id="demo-canvas"></canvas>
					<h1 className="main-title">COMPUTACIÓN <span className="thin">CUÁNTICA</span></h1>
				</div>
      </div>
      </div>
    );
  }
}

export default App;
