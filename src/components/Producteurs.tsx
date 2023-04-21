import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Producteurs.css';

const Producteurs: React.FC = () => {
  const producteursData = [
    {
      nom: 'MANG KARDUM',
      pays: 'Chine',
      image: 'producteur1.jpg',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      nom: 'SITI SARAH',
      pays: 'Colombie',
      image: 'producteur2.jpg',
      lorem: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      nom: 'MAX DUPONT',
      pays: 'France',
      image: 'producteur3.jpg',
      lorem: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <div className="Producteurs">
      <h2 className="title">Producteurs</h2>
      <Container>
        <Row>
          {producteursData.map((producteur, index) => (
            <Col key={index} md={4} className="producteur-col">
              <div className="producteur-info">
                <img
                  src={process.env.PUBLIC_URL + '/images/' + producteur.image}
                  alt={producteur.nom}
                  className="producteur-image"
                />
                <div>
                  <h3 className="producteur-nom">{producteur.nom}</h3>
                  <p className="producteur-pays">{producteur.pays}</p>
                </div>
              </div>
              <p className="producteur-lorem">{producteur.lorem}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Producteurs;
