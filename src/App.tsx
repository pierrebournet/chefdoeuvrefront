import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/LoginPage'; 
import Register from './components/Register'; 
import HomeAdmin from './Pages/HomeAdmin';
import HomeConnect from './Pages/HomeConnect';
import DashboardPage from './Pages/DashboardPage';
import AuthWrapper from './components/AuthWrapper';
import CoffeePage from './Pages/CoffeePage';
import './App.css';
import { AuthProvider } from './contexts/AuthContext'; // Correction ici

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> // Correction ici
          <Route path="/register" element={<Register />} /> // Correction ici
          <Route path="/admin" element={<AuthWrapper><HomeAdmin /></AuthWrapper>} />
          <Route path="/dashboard" element={<AuthWrapper adminRoute><DashboardPage /></AuthWrapper>} />
          <Route path="/connect" element={<AuthWrapper><HomeConnect /></AuthWrapper>} />
          <Route path="/coffee" element={<CoffeePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
