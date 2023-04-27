import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import AuthContext from '../contexts/AuthContext';

export const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories] = useState<string[]>(['Café', 'Thé', 'Bubble Tea', 'Shake']);
  const { user,token } = useContext(AuthContext);
console.log('user et token',user, token);

  const fetchProducts = async()=> {
    const response = await fetch('http://localhost:3000/products', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    if (user && token) {
      fetchProducts();
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const newProduct = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      categoryId: (categories.indexOf(formData.get('category') as string) + 1),
      imageUrl: formData.get('imageUrl') as string,
      imageHoverUrl: formData.get('imageHoverUrl') as string,
    };
console.log(newProduct, user);

    if (user && token) {
      
      try {
        const response = await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(newProduct),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.log('Error data:', errorData);
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        console.log(response);

        fetchProducts();
        form.reset();
      } catch (error) {
        console.error('Error in handleSubmit:', error);
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={4}>
        <Link to="/admin">
            <Button variant="secondary" className="mb-3">
              Retour à HomeAdmin
            </Button>
            </Link>
          <h3>Créer un produit</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Prix</Form.Label>
              <Form.Control type="number" step="0.01" name="price" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Catégorie</Form.Label>
              <Form.Control as="select" name="category" required>
                {categories.map((category, index) => (
                  <option key={index} value={index}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>URL de l'image</Form.Label>
              <Form.Control type="text" name="imageUrl" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>URL de l'image au survol</Form.Label>
              <Form.Control type="text" name="imageHoverUrl" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Créer
            </Button>
          </Form>
        </Col>
        <Col lg={8}>
          <h3>Liste des produits</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Catégorie</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>{categories[product.categoryId]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
              }  