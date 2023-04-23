import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSumit called');
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, isAdmin: false }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Utilisateur enregistré:', data);
        navigate('/login'); // Redirige l'utilisateur vers la page de connexion
      } else {
        console.error('Erreur lors de l\'enregistrement:', response);
        console.error('Status:', response.status); 
        const errorData = await response.json(); 
        console.error('Error data:', errorData);
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
    }
  };

  return (
    <Form className="register-container" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small className="password-hint">(8 caractères minimum)</small>
      </Form.Group>
      <Button className="register-button" type="submit">S'inscrire</Button>
    </Form>
  );
};

export default Register;
