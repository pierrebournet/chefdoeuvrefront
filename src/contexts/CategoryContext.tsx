import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Category } from '../types/categories';
import AuthContext from '../contexts/AuthContext';
import { fetchCategories } from '../services/category.service';
interface CategoryContextValue {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

const CategoryContext = createContext<CategoryContextValue>({
  categories: [],
  setCategories: () => {},
});

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { user, token } = useContext(AuthContext);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories(token?? undefined); // Remplacez par l'URL de votre API
        console.log('Fetched categories data:', response);
        
        setCategories(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des categories:', error);
      }
    };

    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
