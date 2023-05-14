// HeaderAdmin.tsx

import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthContext from '../contexts/AuthContext';
import './HeaderAdmin.css';

const HeaderAdmin: React.FC = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: '#C4C4C4' }}>
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
            <Nav.Link className="nav-item-custom">Shake</Nav.Link>
          </LinkContainer>
          <Nav.Link className="nav-item-custom" href="#contact">Contact</Nav.Link>
          <Nav.Link href="#home" className="nav-item-custom">
            Accueil
          </Nav.Link>
        </Nav>
        <Nav>
          {isLoggedIn && user && user.isAdmin && (
            <>
              <Nav.Link>{user.username}</Nav.Link>
              <LinkContainer to="/admin/dashboard">
                <Button className="headeradmin-dashboard">Dashboard</Button>
              </LinkContainer>
              <Button onClick={handleLogout} className="headeradmin-logout">Se déconnecter</Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderAdmin;
