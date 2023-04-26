import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HeroConnect.css';

const HeroConnect: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ajoutez ici le code pour gérer la déconnexion (suppression du token, mise à jour du contexte d'authentification, etc.)
    navigate('home/');
  };

  return (
    <div className="hero-connect">
      <div className="hero">
        <h1 className="hero-title">Bienvenue sur notre boutique en ligne</h1>
        <p className="hero-text">
          Profitez de nos délicieux thés et cafés, soigneusement sélectionnés pour vous.
        </p>
      </div>
      <Button variant="outline-light" className="logout-button" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </div>
  );
};

export default HeroConnect;
