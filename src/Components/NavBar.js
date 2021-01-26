import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button"
import logo from '../images/instance_soup_logo.png'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="component-navbar-brand align-middle">
      <img
        alt=""
        src={logo}
        width="60"
        className="d-inline-block align-middle"
      />{' '}
      <h1 className="d-inline-block align-middle text-secondary">Instance_Soup</h1>
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features"><Button variant="outline-success">Random Ramen</Button></Nav.Link>
          <Nav.Link href="#pricing"><Button variant="outline-success">Filter Soups</Button></Nav.Link>
          <Nav.Link href="#pricing"><Button variant="outline-success">Add a Recipe</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar;
