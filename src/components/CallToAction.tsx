import React from 'react';
import { Button } from 'react-bootstrap';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  return (
    <div className="call-to-action">
      <h2 className="cta-text">
        Profitez d'avantages exclusifs en devenant membre dès maintenant et faites partie de notre communauté !
      </h2>
      <Button variant="custom" className="cta-button">
        Créer un compte
      </Button>
    </div>
  );
};

export default CallToAction;
