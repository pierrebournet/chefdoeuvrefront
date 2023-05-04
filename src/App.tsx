// App.tsx

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
import ThePage from './Pages/ThePage';
import BubbleTeaPage from './Pages/BubbleTeaPage';
import ShakerPage from './Pages/ShakerPage';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { ProductContextProvider } from './contexts/ProductContext';

function App() {
  return (
    <AuthProvider>
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AuthWrapper><HomeAdmin /></AuthWrapper>} />
            <Route path="/dashboard" element={<AuthWrapper adminRoute><DashboardPage /></AuthWrapper>} />
            <Route path="/connect" element={<AuthWrapper><HomeConnect /></AuthWrapper>} />
            <Route path="/coffee" element={<CoffeePage />} />
            <Route path="/the" element={<ThePage />} />
            <Route path="/bubble-tea" element={<BubbleTeaPage />} />
            <Route path="/shaker" element={<ShakerPage />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </AuthProvider>
  );
}

export default App;
