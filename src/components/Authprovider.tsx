import React, { useState, useEffect } from 'react';
import AuthContext, { AuthContextData } from '../contexts/AuthContext';
import { User } from '../types/User'

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authContextData, _setAuthContextData] = useState<AuthContextData>({
    isAuthenticated: false,
    user: null,
    isAdmin: false,
    setAuthContextData: (isAuthenticated: boolean, isAdmin: boolean, user: User | null) => {
      _setAuthContextData({ ...authContextData, isAuthenticated, isAdmin, user });
    },
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';

    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      _setAuthContextData((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        user,
        isAdmin: storedIsAdmin,
      }));
    }
  }, []);

  return (
    <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
