import { NewProduct, Product } from "../types/Product";

export async function createUpdateProduct(newProduct:NewProduct, token?: string ,editingProduct?:Product){
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


 export const fetchProducts = async (token?: string) => {
    const response = await fetch('http://localhost:3000/products', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

export const deleteProduct= async (productId : number, token?: string) => {
  const response = await fetch(`http://localhost:3000/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return response;

}