import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="footer-title">Thé et café</h3>
            <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper sem...</p>
          </Col>
          <Col>
            <h3 className="footer-title">Support</h3>
            <ul className="footer-list">
              <li>A propos</li>
              <li>FAQ</li>
              <li>Politique de confidentialité</li>
              <li>Termes et conditions</li>
            </ul>
          </Col>
          <Col>
            <h3 className="footer-title">Contact</h3>
            <p className="footer-email">theetcafe@gmail.com</p>
            {/* Ajoutez les icônes de médias sociaux ici */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
