import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import HomeConnect from './Pages/HomeConnect';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { Dashboard } from './components/Dashboard'
import AuthContext, { AuthContextData, User } from './contexts/AuthContext';

function App() {
  const [authContextData, _setAuthContextData] = useState<AuthContextData>({
    isAuthenticated: false,
    user: null,
    setAuthContextData: () => {},
  });

  const setAuthContextData = (isAuthenticated: boolean, user: User | null) => {
    _setAuthContextData({ ...authContextData, isAuthenticated, user, setAuthContextData });
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ ...authContextData, setAuthContextData }}>
        <Router>
          <Routes>
            {authContextData.isAuthenticated ? (
              <Route path="/" element={<HomeConnect />} />
            ) : (
              <Route path="/" element={<Home />} />
            )}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {authContextData.user && authContextData.user.role === 'admin' && (
              <Route path="/dashboard" element={<Dashboard />} />
            )}
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
