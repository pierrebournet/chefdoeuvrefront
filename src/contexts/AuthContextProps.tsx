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

export default AuthContextProps;
