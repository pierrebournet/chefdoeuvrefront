import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import './HeaderConnect.css'
const HeaderConnect: React.FC = () => {
  const { isAuthenticated, isAdmin, user, setAuthContextData } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthContextData(false, false, null);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#C4C4C4' }}>
      <Navbar.Brand as={Link} to="/connect">
        Coffee & Tea
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="nav-item-custom" href="#cafe">Café</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#the">Thé</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#bubble-tea">Bubble Tea</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#shake">Shake</Nav.Link>
          <Nav.Link className="nav-item-custom" href="#contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/connect" className="nav-item-custom">
            Accueil
          </Nav.Link>
          {isAdmin && (
            <Nav.Link as={Link} to="/dashboard" className="nav-item-custom">
              Dashboard
            </Nav.Link>
          )}
          {isAuthenticated && (
            <Nav.Link as={Link} to="/cart" className="nav-item-custom">
              Panier
            </Nav.Link>
          )}
        </Nav>
        {isAuthenticated ? (
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
