// src/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  // If user is logged in, allow access to the page, else redirect to Login page
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}