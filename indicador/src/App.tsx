import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

/**
 * COMPONENTE DE ROTA PRIVADA
 * * Ele verifica se o usuário tem a "assinatura ativa" no localStorage.
 * React.ReactNode é a tipagem correta para resolver o erro 'Cannot find namespace JSX'.
 */
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // Simulando a checagem de assinatura
  const isAuthenticated = localStorage.getItem('user_status') === 'active';

  if (!isAuthenticated) {
    // Se não tiver assinatura, manda de volta para a Landing Page
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial: Landing Page (Pública) */}
        <Route path="/" element={<LandingPage />} />

        {/* Área do Indicador: Protegida por assinatura */}
        <Route
          path="/indicador"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Rota de segurança: Se o usuário digitar qualquer URL errada, volta para a Landing */}
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;