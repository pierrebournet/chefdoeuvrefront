import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { Container, Row } from 'react-bootstrap';
import { useProductContext } from '../contexts/ProductContext';
import { useCategoryContext } from '../contexts/CategoryContext';
import Header from '../components/Header';
import HeaderConnect from '../components/HeaderConnect';
import ProductCard from '../components/ProductCard';
import './ShakerPage.css';

const ShakerPage: React.FC = () => {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { categories } = useCategoryContext();
  const userIsConnected = false;

  useEffect(() => {
    const shakerCategory = categories.find(category => category.name === 'Shaker')?.id;

    if (shakerCategory) {
      const filtered = products.filter(product => Number(product.categoryId) === shakerCategory);
      setFilteredProducts(filtered);
    }
  }, [products, categories]);

  return (
    <>
      {userIsConnected ? <HeaderConnect /> : <Header />}
      <Container>
        <Row>
          <img src="/images/ilovecafe.jpg" alt="I Love Shaker" className="shaker-banner" />
        </Row>
        <Row>
          <div className="product-cards">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ShakerPage;
