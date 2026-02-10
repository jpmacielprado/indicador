import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

/**
 * COMPONENTE DE ROTA PRIVADA ATUALIZADO
 * Agora ele foca na existência do Token JWT.
 */
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // O token é o que prova que o usuário fez login
  const token = localStorage.getItem('token');

  // Se não tiver token, mandamos para o /login em vez da Home
  // Isso é melhor para a experiência do usuário (UX)
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- ROTAS PÚBLICAS --- */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* --- ROTA PROTEGIDA --- */}
        <Route
          path="/indicador"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* --- FALLBACK --- */}
        {/* Se o usuário tentar qualquer coisa inexistente, volta para a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;