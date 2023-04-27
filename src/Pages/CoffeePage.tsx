import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderConnect from '../components/HeaderConnect';
import ProductCard from '../components/ProductCard';
import './CoffeePage.css';


const CoffeePage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Café 1',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/150',
      imageHoverUrl: 'https://via.placeholder.com/150/00ff00',
    },
    // Ajoutez ici d'autres produits
  ];

  return (
    <>
      <HeaderConnect />
      <Container fluid className="coffee-page">
        <img
          src={process.env.PUBLIC_URL + "/images/ilovecafe.jpg"}
          alt="Bannière Café"
          className="coffee-banner"
        />
        <Row>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CoffeePage;
