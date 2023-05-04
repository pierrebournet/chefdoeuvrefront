import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/Product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
  addToCart: (product: Product) => void;
  removeItem: (productId: number) => void;
}

const CartContext = createContext<CartContextValue>({
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  removeItem: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeItem = (productId: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
