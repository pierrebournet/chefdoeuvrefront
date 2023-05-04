import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { Container, Row } from 'react-bootstrap';
import { useProductContext } from '../contexts/ProductContext';
import { categories } from '../types/categories';
import Header from '../components/Header';
import HeaderConnect from '../components/HeaderConnect';
import './BubbleTeaPage.css';

const BubbleTeaPage: React.FC = () => {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const userIsConnected = false;

  useEffect(() => {
    const bubbleTeaCategory = categories.find(category => category.name === 'Bubble Tea')?.id;
    
    if (bubbleTeaCategory) {
      const filtered = products.filter(product => Number(product.categoryId) === bubbleTeaCategory);
      setFilteredProducts(filtered);
    }
  }, [products]);

  return (
    <>
      {userIsConnected ? <HeaderConnect /> : <Header />}
      <Container>
        <Row>
          <img src="/images/ilovebubbletea.jpg" alt="I Love Bubble Tea" className="bubbletea-banner" />
        </Row>
        <Row>
          <div className="product-cards">
            {filteredProducts.map(product => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default BubbleTeaPage;
