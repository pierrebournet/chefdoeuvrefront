import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  return (
    <div className="call-to-action">
      <h2>Commencez dès maintenant</h2>
      <p>
        Rejoignez notre communauté et profitez de nos produits de haute qualité
      </p>
      <LinkContainer to="/register">
        <Button variant="outline-dark" className="create-account-button">
          Créer un compte
        </Button>
      </LinkContainer>
    </div>
  );
};

export default CallToAction;
