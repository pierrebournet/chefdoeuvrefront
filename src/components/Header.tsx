import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import './Header.css';
import AuthContext from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className='nav-color'>
      <Navbar.Brand href="#home" className="logo">
      <img src="/images/logocafe.png" alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <LinkContainer to="/coffee">
            <Nav.Link className="nav-item-custom">Café</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/the">
            <Nav.Link className="nav-item-custom">Thé</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/bubble-tea">
            <Nav.Link className="nav-item-custom">Bubble Tea</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/shaker">
            <Nav.Link className="nav-item-custom">Shaker</Nav.Link>
          </LinkContainer>
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
                <Nav.Link className="nav-button">
                  S'enregistrer
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="nav-button">
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
