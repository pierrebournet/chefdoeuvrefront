import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Table } from 'react-bootstrap';

export const Dashboard: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const response = await fetch('http://localhost:3000/category');
    const data = await response.json();
    setCategories(data);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={4}>
          <h3>Categories</h3>
          <ListGroup>
            {categories.map((category: any) => (
              <ListGroup.Item key={category.id}>
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={8}>
          <h3>Products</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>{product.category.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
