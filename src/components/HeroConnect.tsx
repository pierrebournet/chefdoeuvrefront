import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import './HeroConnect.css';

const HeroConnect: React.FC = () => {
  const navigate = useNavigate();
  const { setAuthContextData } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthContextData(false, null);
    navigate('/');
  };

  return (
    <div className="hero-connect">
      <h1>Bienvenue sur notre boutique en ligne</h1>
      <p>Profitez de nos délicieux produits</p>
      <Button className="logout-button" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </div>
  );
};

export default HeroConnect;
