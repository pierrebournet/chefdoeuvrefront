import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/LoginPage';
import Register from './Pages/RegisterPage';
import HomeAdmin from './Pages/HomeAdmin';
import HomeConnect from './Pages/HomeConnect';
import DashboardPage from './Pages/DashboardPage';
import AuthWrapper from './components/AuthWrapper';
import './App.css';
import AuthProvider from './components/Authprovider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AuthWrapper><HomeAdmin /></AuthWrapper>} />
          <Route path="/dashboard" element={<AuthWrapper adminRoute><DashboardPage /></AuthWrapper>} />
          <Route path="/connect" element={<AuthWrapper><HomeConnect /></AuthWrapper>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
