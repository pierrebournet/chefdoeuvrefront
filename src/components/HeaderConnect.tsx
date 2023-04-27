import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import './HeaderConnect.css'
import { LinkContainer } from 'react-router-bootstrap';

const HeaderConnect: React.FC = () => {
  const { isLoggedIn, user, login, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#C4C4C4' }}>
      <Navbar.Brand as={Link} to="/connect">
        Coffee & Tea
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
          <Nav.Link as={Link} to="/connect" className="nav-item-custom">
            Accueil
          </Nav.Link>
          {user && user.isAdmin && (
            <Nav.Link as={Link} to="/dashboard" className="nav-item-custom">
              Dashboard
            </Nav.Link>
          )}
          {isLoggedIn && (
            <Nav.Link as={Link} to="/cart" className="nav-item-custom">
              Panier
            </Nav.Link>
          )}
        </Nav>
        {isLoggedIn ? (
          <Button className="headerconnect-logout" onClick={handleLogout}>
            Se déconnecter
          </Button>
        ) : (
          <Nav>
            <Nav.Link as={Link} to="/register">
              S'enregistrer
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderConnect;
