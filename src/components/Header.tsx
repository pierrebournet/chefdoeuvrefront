import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';
import AuthContext from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { isLoggedIn, user } = useContext(AuthContext); 

  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: '#C4C4C4' }}>
      <Navbar.Brand href="#home" className="logo">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <LinkContainer to="/coffee">
            <Nav.Link className="nav-item-custom">Café</Nav.Link>
          </LinkContainer>
          <Nav.Link className="nav-item-custom" href="#the">Thé</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#bubble-tea">Bubble Tea</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#shake">Shake</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <>
              <Nav.Link>{user?.username}</Nav.Link>
              <Nav.Link href="#cart">Panier</Nav.Link>
            </>
          ) : (
            <>
              <LinkContainer to="/register">
                <Nav.Link className="register-button">
                  S'enregistrer
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="login-button">
                  Login
                </Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
