import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem('token');

    // Se não tem token, manda pro login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};