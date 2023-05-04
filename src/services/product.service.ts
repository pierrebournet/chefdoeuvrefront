import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { NewProduct, Product } from "../types/Product";

const { user, token } = useContext(AuthContext);
export async function createUpdateProduct(newProduct:NewProduct,editingProduct:Product){
    const response = await fetch(
        `http://localhost:3000/products${editingProduct ? `/${editingProduct.id}` : ''}`,
        {
          method: editingProduct ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(newProduct),
    })
    return response

    
}


export const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };