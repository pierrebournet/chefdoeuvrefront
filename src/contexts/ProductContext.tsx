import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types/Product';
import AuthContext from '../contexts/AuthContext';
import { fetchProducts } from '../services/product.service';
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
  const { user, token } = useContext(AuthContext);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts(token?? undefined); // Remplacez par l'URL de votre API
        console.log('Fetched products data:', response);
        
        setProducts(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
