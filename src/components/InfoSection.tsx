import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './InfoSection.css';

const InfoSection: React.FC = () => {
  const infoData = [
    { title: "L'excellence", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Nos baristas pro', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Nos sélections de thé', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'Bubble Tea', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return (
    <div className="info-section">
      <Container fluid>
        <Row>
          <Col md={4}>
            <div className="info-cards">
              {infoData.map((info, index) => (
                <Card key={index} className={`info-card ${index === 0 ? "first-card" : ""}`}>
                  <Card.Body>
                    <Card.Title className="card-title">{info.title}</Card.Title>
                    <Card.Text className="card-text">{info.text}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
              <Button variant="warning" className="info-button">
                Plus d'info
              </Button>
            </div>
          </Col>
          <Col md={8} className="image-col">
            <img
              src={process.env.PUBLIC_URL + "/tcafe.png"}
              alt="Thé et café"
              className="info-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
