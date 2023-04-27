import React, { useState, createContext } from 'react';
import { User } from '../types/User';

export interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | null;
  isAdmin: boolean;
  setAuthContextData: (user: User, token: string) => void; // Ajout du paramètre token
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  user: null,
  isAdmin: false,
  setAuthContextData: () => {}, // Ajout d'une fonction vide par défaut
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authContextData, _setAuthContextData] = useState<AuthContextProps>({
    isLoggedIn: false,
    user: null,
    isAdmin: false,
    setAuthContextData: () => {}, // Ajout d'une fonction vide par défaut
  });

  const setAuthContextData = (user: User, token: string) => {
    const isAdmin = user.roles.includes('ROLE_ADMIN');
    _setAuthContextData((prevState: AuthContextProps) => ({
      ...prevState,
      isLoggedIn: true,
      user: {
        ...user,
        token, // Ajout du token dans l'objet user
      },
      isAdmin,
      setAuthContextData, 
    }));
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
