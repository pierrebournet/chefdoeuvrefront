import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../contexts/AuthContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthContextData } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Utilisateur connecté:', data);

        localStorage.setItem('token', data.token);

        setAuthContextData(true, data.user);

        if (data.user.isAdmin) {
          navigate('/dashboard'); // Redirigez l'administrateur vers la page du tableau de bord
        } else {
          navigate('/'); // Redirigez l'utilisateur vers la page d'accueil
        }
      } else {
        console.error('Erreur lors de la connexion:', response);
        console.error('Status:', response.status);
        const errorData = await response.json();
        console.error('Error data:', errorData);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <div className="loginpage-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/registerlogin.jpg)` }}>
      <h1 className="loginpage-title">Connexion</h1>
      <Form className="login-container" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="password-form-group">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="login-button" type="submit">Se connecter</Button>
        <Link to="/register">
          <Button className="register-button" type="button">S'inscrire</Button>
        </Link>
      </Form>
    </div>
  );
};

export default LoginPage;
