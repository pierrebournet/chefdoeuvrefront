import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/User';

interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | null;
  isAdmin: boolean;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  setAuthContextData: (isLoggedIn: boolean, isAdmin: boolean, user: User | null, token: string | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  user: null,
  isAdmin: false,
  token: null,
  login: async () => {},
  logout: () => {},
  setAuthContextData: () => {},
});

export default AuthContext;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Récupérer les données d'authentification depuis le serveur ou le stockage local
  }, []);

  const login = async (username: string, password: string) => {
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
        setIsLoggedIn(true);
        setIsAdmin(data.isAdmin);
        setUser(data);
        setToken(data.access_token);

        localStorage.setItem('token', data.access_token);
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

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUser(null);
    setToken(null);

    localStorage.removeItem('token');
  };

  const setAuthContextData = (isLoggedIn: boolean, isAdmin: boolean, user: User | null, token: string | null) => {
    setIsLoggedIn(isLoggedIn);
    setIsAdmin(isAdmin);
    setUser(user);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, isAdmin, token, login, logout, setAuthContextData }}>
      {children}
    </AuthContext.Provider>
  );
};
