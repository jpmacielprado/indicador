import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

// Função fake para exemplificar a checagem de assinatura
const hasActiveSubscription = () => {
  // Aqui você integraria com seu backend ou Stripe/MercadoPago
  return localStorage.getItem('user_status') === 'active';
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública */}
        <Route path="/" element={<Landing />} />

        {/* Rota Protegida */}
        <Route
          path="/indicador"
          element={
            hasActiveSubscription() ? <Dashboard /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;