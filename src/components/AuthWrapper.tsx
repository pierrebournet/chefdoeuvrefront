import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

interface AuthWrapperProps {
  adminRoute?: boolean;
  children?: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ adminRoute, children }) => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (adminRoute && !isAdmin) {
      navigate('/connect');
    }
  }, [isAuthenticated, isAdmin, navigate, adminRoute]);

  return <>{children}</>;
};

export default AuthWrapper;
