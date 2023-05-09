import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { Container, Row, Col } from 'react-bootstrap'; // Ajoutez Col
import { useProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import HeaderConnect from '../components/HeaderConnect';
import './BubbleTeaPage.css';
import { Category } from '../types/categories';
import { useCategoryContext } from '../contexts/CategoryContext';
import ProductCard from '../components/ProductCard'; // Ajoutez l'importation de ProductCard

const BubbleTeaPage: React.FC = () => {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { categories } = useCategoryContext();
  const userIsConnected = false;

  useEffect(() => {
    const bubbleTeaCategory = categories.find(category => category.name === 'Bubble Tea')?.id;

    if (bubbleTeaCategory) {
      const filtered = products.filter(product => Number(product.categoryId) === bubbleTeaCategory);
      setFilteredProducts(filtered);
    }
  }, [products, categories]);

  return (
    <>
      {userIsConnected ? <HeaderConnect /> : <Header />}
      <Container>
        <Row>
          <img src="/images/ilovecafe.jpg" alt="I Love Bubble Tea" className="bubbletea-banner" />
        </Row>
        <Row className="product-cards"> // Ajoutez className="product-cards"
          {filteredProducts.map(product => (
            <Col md={4} key={product.id}> // Ajoutez Col
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BubbleTeaPage;
