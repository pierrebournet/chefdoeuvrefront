import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthContext from '../contexts/AuthContext';
import './HeaderAdmin.css';

const HeaderAdmin: React.FC = () => {
  const { isAuthenticated, isAdmin, user, setAuthContextData } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthContextData(false, false, null);
  };

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
          <Nav.Link href="#home" className="nav-item-custom">
            Accueil
          </Nav.Link>
        </Nav>
        <Nav>
          {isAuthenticated && isAdmin && (
            <>
              <Nav.Link>{user?.username}</Nav.Link>
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
