import React from 'react';
import { Button } from 'react-bootstrap';
import './Hero.css';

const Hero: React.FC = () => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="hero">
      <h2 className="hero-text">Gout et Qualitée</h2>
      <h1 className="hero-title">THÉ ET CAFÉ</h1>
      <p className="hero-subtitle">Démarer la journée avec notre sélection de thé et de café.</p>
      <Button
        href="/login"
        variant="light"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: hovered ? '#8B4513' : 'transparent',
          borderColor: hovered ? '#8B4513' : 'white',
          color: 'white', // Ajout de la couleur du texte en blanc
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Hero;
