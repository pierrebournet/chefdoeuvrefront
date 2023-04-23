import { createContext } from 'react';

export interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean; // Ajoutez cette ligne
}

export interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  setAuthContextData: (isAuthenticated: boolean, user: User | null) => void;
}

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  user: null,
  setAuthContextData: () => {},
});

export default AuthContext;
