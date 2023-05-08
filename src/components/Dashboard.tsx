import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import AuthContext from '../contexts/AuthContext';
import { useProductContext } from '../contexts/ProductContext';
import { Category } from '../types/categories'
import { createUpdateProduct, fetchProducts, deleteProduct } from '../services/product.service';
import { fetchCategories } from '../services/category.service';
import { useCategoryContext } from '../contexts/CategoryContext';
export const Dashboard: React.FC = () => {
  const { products, setProducts } = useProductContext();
  const { categories, setCategories } = useCategoryContext();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { user, token } = useContext(AuthContext);

  // Ajout des variables d'état pour les champs du formulaire
  const [id, setId] = useState<number | null>();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number| null>(1);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageHoverUrl, setImageHoverUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {

  }, [])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  
    let newProduct = {
      name: name,
      description: description,
      price: price,
      categoryId: categoryId?? undefined,
      imageUrl: imageUrl,
      imageHoverUrl: imageHoverUrl,
    };
    
    console.log(newProduct);
    try {
      console.log('createProduct')
      const response = await createUpdateProduct(newProduct,token?? undefined, editingProduct ?? undefined)
  
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const savedProduct = await response.json();
      setLoading(true);
      if (editingProduct) {
        setProducts(
          products.map((product) =>
            product.id === savedProduct.id ? savedProduct : product
          )
        );
        } else {
          // Ajoutez cette ligne pour mettre à jour l'état des produits
          setProducts([...products, savedProduct]);
        }
  
        clearForm();
      } catch (error) {
        console.error('Error in handleSubmit:', error);
      }
  };
  
  
  const handleUpdate = async (productId: number) => {
    const productToUpdate = products.find((product) => product.id === productId);
    if (productToUpdate) {
      setEditingProduct(productToUpdate);
      setId(productToUpdate.id);
      setName(productToUpdate.name);
      setDescription(productToUpdate.description);
      setPrice(productToUpdate.price);
      setCategoryId(productToUpdate.categoryId);
      setImageUrl(productToUpdate.imageUrl);
      setImageHoverUrl(productToUpdate.imageHoverUrl);
    }
  };
  
  const handleDelete = async (productId: number) => {
    try {
      const response = await deleteProduct(productId, token?? undefined);
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const fetchedProducts = await fetchProducts(token?? undefined);
      setProducts(fetchedProducts)
      setLoading(true);
    } catch (error) {
      console.error('Error in handleDelete:', error);
    }

  };
  
  
  
  const clearForm = () => {
    setId(null);
    setName('');
    setDescription('');
    setPrice(0);
    setCategoryId(null);
    setImageUrl('');
    setImageHoverUrl('');
    setEditingProduct(null);
  };
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Dashboard</h1>
          <Form onSubmit={handleSubmit}>
            {editingProduct && (
              <Form.Group>
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" name="id" value={id ?? undefined} readOnly />

              </Form.Group>
            )}
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Catégorie</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={categoryId?categoryId:undefined} // sa correspond à un if else 
                onChange={(e) => setCategoryId(Number(e.target.value))}
                required
              >
                {categories.map((category: Category) => (
                  <option key={category?.id} value={category?.id}>
                    {category?.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>URL de l'image</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>URL de l'image au survol</Form.Label>
              <Form.Control
                type="text"
                name="imageHoverUrl"
                value={imageHoverUrl}
                onChange={(e) => setImageHoverUrl(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editingProduct ? 'Mettre à jour' : 'Créer'}
            </Button>
            {editingProduct && (
              <Button variant="secondary" onClick={clearForm} className="ml-2">
                Annuler
              </Button>
            )}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive className="mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Catégorie</th>
                <th>Image</th>
                <th>Image au survol</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{typeof product.price === 'number' ? product.price.toFixed(2) : product.price}</td>
                <td>{categories.filter((category: Category)=>category.id===product.categoryId)[0]?.name}</td>
                <td>
                  {product.imageUrl && (
                    <a href={product.imageUrl} target="_blank" rel="noreferrer">
                      Voir l'image
                    </a>
                  )}
                </td>
                <td>
                  {product.imageHoverUrl && (
                    <a href={product.imageHoverUrl} target="_blank" rel="noreferrer">
                      Voir l'image au survol
                    </a>
                  )}
                </td>
                <td>
                  <Button variant="warning" onClick={() => handleUpdate(product.id)}>
                    Modifier
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(product.id)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
    <Row>
      <Col>
        <Link to="/logout">Se déconnecter</Link>
      </Col>
    </Row>
  </Container>
);
                  }

  

export default Dashboard;