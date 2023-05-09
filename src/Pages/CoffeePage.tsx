import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { Category } from '../types/categories';
import ProductCard from '../components/ProductCard';
import { Container, Row } from 'react-bootstrap';
import { useProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import HeaderConnect from '../components/HeaderConnect';
import './CoffeePage.css';
import { fetchCategories } from '../services/category.service';

const CoffeePage: React.FC = () => {
  const { products } = useProductContext();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [userIsConnected, setUserIsConnected] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setCategories(await fetchCategories());
    };
    getCategories();
  }, []);

  useEffect(() => {
    const cafeCategory = categories.find((category) => category.name === 'Café')?.id;
    if (cafeCategory) {
      const filtered = products.filter((product) => Number(product.categoryId) === cafeCategory);
      setFilteredProducts(filtered);
    }
  }, [categories, products]);

  return (
    <>
      {userIsConnected ? <HeaderConnect /> : <Header />}
      <Container>
        <Row>
          <img src="/images/ilovecafe.jpg" alt="I Love Café" className="coffee-banner" />
        </Row>
        <Row>
          <div className="product-cards">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CoffeePage;
