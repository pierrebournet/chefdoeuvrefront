import React, { useContext } from 'react';
import { Navbar, Nav, Button, Badge, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import { useCartContext } from '../contexts/CartContext';
import './HeaderConnect.css';
import { LinkContainer } from 'react-router-bootstrap';

const HeaderConnect: React.FC = () => {
  const { isLoggedIn, user, login, logout } = useContext(AuthContext);
  const { cartItems, removeItem } = useCartContext();

  const handleLogout = () => {
    logout();
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

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
            <Dropdown as="div" className="nav-item-custom">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-cart">
              Panier <Badge bg="primary">{totalItemsInCart}</Badge>
            </Dropdown.Toggle>
          
            <Dropdown.Menu className= "Header-connect-align">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <Dropdown.Item key={item.product.id}>
                    {item.product.name} - x{item.quantity}
                    <button
                      className="btn btn-danger btn-sm ml-2"
                      onClick={() => removeItem(item.product.id)}
                    >
                      X
                    </button>
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item>Panier vide</Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/cart">Voir le panier</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
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
