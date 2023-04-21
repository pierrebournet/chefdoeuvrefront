import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SelectionSection.css';

const SelectionSection: React.FC = () => {
  const coffeeCards = [
    { src: 'cafebrazil.jpg', name: 'Café Brazil', price: '€10' },
    { src: 'cafe2.jpg', name: 'Café Sachetan', price: '€9.80' },
    { src: 'cafe3.jpg', name: 'Café Vietnamien', price: '€6.50' },
    { src: 'cafe4.jpg', name: 'Café Colombien', price: '€12' },
    { src: 'cafe5.jpg', name: 'Café Titanic', price: '€11' },
    { src: 'cafevanille.jpg', name: 'Café Vanille', price: '€14' },
  ];

  return (
    <div className="selection-section">
      <Container>
        <Row>
          <Col>
            <h2 className="title">Notre Sélection</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius consectetur mauris, non ullamcorper dolor malesuada ut.</p>
          </Col>
        </Row>
        <Row className="menu-items">
          <Col>
            <span className="menu-item">Café</span>
          </Col>
          <Col>
            <span className="menu-item">Thé</span>
          </Col>
          <Col>
            <span className="menu-item">Shake</span>
          </Col>
          <Col>
            <span className="menu-item">Bubble Tea</span>
          </Col>
        </Row>
        <Row className="coffee-cards">
          {coffeeCards.map((coffee, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card className="coffee-card">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/" + coffee.src}
                  alt={coffee.name}
                />
                <Card.Footer className="coffee-card-footer">
                  <div className="coffee-name">{coffee.name}</div>
                  <div className="coffee-price">{coffee.price}</div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="separator" /> 
    </div>
  );
};

export default SelectionSection;
