import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';
import { useCartContext } from '../contexts/CartContext';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartContext();

  const [showMore, setShowMore] = useState(false);
  const truncatedDescription = product.description.slice(0, 60) + "...";

  const handleAddToCart = () => {
    addToCart(product);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className={`product-card ${showMore ? 'expanded' : ''}`}> {/* Ligne modifiée */}
      <Card.Img className="the-banner" variant="top" src={product.imageUrl} alt={product.name} />
      <Card.Body style={{ backgroundColor: "#F5F5F5", boxShadow: "5px 5px rgba(0, 0, 0, 0.1)" }}>
        <div className="d-flex product-name-price">
          <h5 style={{ color: "orange" }}>{product.name}</h5>
          <p className="text-orange">{`$${product.price}`}</p>
        </div>
        <p className={`product-description ${showMore ? '' : 'truncate'}`}>
          {showMore ? product.description : truncatedDescription}
        </p>
        <div className="read-more-button-container">
          <button onClick={toggleShowMore} className="read-more-button">
            {showMore ? "Lire moins" : "Lire la suite"}
          </button>
        </div>
        <Button 
          variant="coffee" 
          onClick={handleAddToCart} 
          style={{ color: "white", backgroundColor: "#4C2F27", borderColor: "#4C2F27", marginTop: "20px" }}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
