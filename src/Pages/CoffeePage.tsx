// Pages/CoffeePage.tsx

import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { Category } from '../types/categories';
import ProductCard from '../components/ProductCard'; // <ProductCard product={product} ></ProductCard>
import { Container, Row } from 'react-bootstrap';
import { useProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import HeaderConnect from '../components/HeaderConnect';
import './CoffeePage.css';
import { fetchCategories } from '../services/category.service';

const CoffeePage: React.FC = () => {
  const { products } = useProductContext();
  console.log(products);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]); 

  // Remplacez cette ligne par la logique appropriée pour vérifier si l'utilisateur est connecté
  const userIsConnected = false;

  console.log('Categories:', categories);
console.log('Products:', products);

useEffect(() => {
  const getCategories = async()=> { setCategories(await fetchCategories())}
  getCategories() 
  const cafeCategory = categories?.find(category => category.name === 'Café')?.id;
  console.log('Café category ID:', cafeCategory);
  
  if (cafeCategory) {
    const filtered = products.filter(product => Number(product.categoryId) === cafeCategory);
    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
  }
}, [products, categories]);


  return (
    <>
      {userIsConnected ? <HeaderConnect /> : <Header />}
      <Container>
        <Row>
          <img src="/images/ilovecafe.jpg" alt="I Love Café" className="coffee-banner" />
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

export default CoffeePage;
