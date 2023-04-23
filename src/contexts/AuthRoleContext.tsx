import { createContext } from 'react';

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  isAdmin: boolean;
}

export interface AuthRoleContextData {
  isAuthenticated: boolean;
  user: User | null;
  isAdmin: boolean;
  setAuthRoleContextData: (isAuthenticated: boolean, user: User | null) => void;
}

const AuthRoleContext = createContext<AuthRoleContextData>({
  isAuthenticated: false,
  user: null,
  isAdmin: false,
  setAuthRoleContextData: () => {},
});

export default AuthRoleContext;
