import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { Container, Row } from 'react-bootstrap';
import { useProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import HeaderConnect from '../components/HeaderConnect';
import { useCategoryContext } from '../contexts/CategoryContext';
import ProductCard from '../components/ProductCard';
import './ThePage.css';

const ThePage: React.FC = () => {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { categories } = useCategoryContext();
  const userIsConnected = false;

  useEffect(() => {
    const theCategory = categories.find(category => category.name === 'Thé')?.id;

    if (theCategory) {
      const filtered = products.filter(product => Number(product.categoryId) === theCategory);
      setFilteredProducts(filtered);
    }
  }, [products, categories]);

  return (
    <>
      {userIsConnected ? <HeaderConnect /> : <Header />}
      <Container>
        <Row>
          <img src="/images/ilovecafe.jpg" alt="I Love Thé" className="the-banner" />
        </Row>
        <Row>
          <div className="product-cards"> {/* Ligne modifiée */}
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ThePage;
