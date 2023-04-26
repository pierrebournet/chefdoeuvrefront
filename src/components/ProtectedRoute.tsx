import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
  adminRoute?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps & RouteProps> = ({
  isLoggedIn,
  isAdmin,
  adminRoute = false,
  ...routeProps
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to="/connect" />;
  }

  return <Route {...routeProps} />;
};

export default ProtectedRoute;
