import React from 'react';
import Register from '../components/Register';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  return (
    <div className="registerpage-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/registerlogin.jpg)` }}>
      <h1 className="registerpage-title">Inscription</h1>
      <Register />
    </div>
  );
};

export default RegisterPage;
