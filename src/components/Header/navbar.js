import React from "react";
import {Nav , Navbar ,Container} from 'react-bootstrap';
import logo from './../../assests/logo-light.png';
import './navbar.css';

function Navs() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="headerContainer">
        <Navbar.Brand className="logoImg" href="#home">
          <img  src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navList" href="#home">Home</Nav.Link>
            <Nav.Link className="navList" href="#link">Shop</Nav.Link>
            <Nav.Link className="navList" href="#link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  export default Navs;