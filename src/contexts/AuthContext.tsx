import { createContext } from 'react';
import { User } from '../types/User';

export type AuthContextData = {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: User | null;
  setAuthContextData: (isAuthenticated: boolean, isAdmin: boolean, user: User | null) => void;
};

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  isAdmin: false,
  user: null,
  setAuthContextData: () => {},
});

export default AuthContext;
