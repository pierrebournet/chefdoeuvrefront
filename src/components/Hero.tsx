import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Hero.css'; // Mettez à jour cette ligne

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Bienvenue sur notre boutique en ligne</h1>
      <p className="hero-text">
        Profitez de nos délicieux thés et cafés, soigneusement sélectionnés pour vous.
      </p>
      <div className="hero-buttons">
        <LinkContainer to="/login">
          <Button variant="outline-light">Login</Button>
        </LinkContainer>
        <LinkContainer to="/register">
          <Button variant="outline-light">S'enregistrer</Button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default Hero;
