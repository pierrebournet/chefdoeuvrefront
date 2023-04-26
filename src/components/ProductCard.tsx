import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ProductCard.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  imageHoverUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card
        className="product-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => console.log('Redirect to product details page')}
      >
        <Card.Img
          variant="top"
          src={hover ? product.imageHoverUrl : product.imageUrl}
          alt={product.name}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{`$${product.price}`}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
