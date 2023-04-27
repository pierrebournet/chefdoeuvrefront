import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

interface AuthWrapperProps {
  adminRoute?: boolean;
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ adminRoute, children }) => {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (adminRoute && !isLoggedIn) {
      navigate('/login');
    } else if (adminRoute && !isAdmin) {
      navigate('/connect');
    }
  }, [adminRoute, isLoggedIn, isAdmin, navigate]);

  return <>{children}</>;
};

export default AuthWrapper;
