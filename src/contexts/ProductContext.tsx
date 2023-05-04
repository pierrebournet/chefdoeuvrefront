import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types/Product';

interface ProductContextValue {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductContext = createContext<ProductContextValue>({
  products: [],
  setProducts: () => {},
});

export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products'); // Remplacez par l'URL de votre API
        const productsData = await response.json();
        console.log('Fetched products data:', productsData);
        
        setProducts(productsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
