import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: '#C4C4C4' }}>
      <Navbar.Brand href="#home" className="logo">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="nav-item-custom" href="#cafe">Café</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#the">Thé</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#bubble-tea">Bubble Tea</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#shake">Shake</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login" className="login-button">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
