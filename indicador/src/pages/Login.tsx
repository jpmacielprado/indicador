import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api'; // Importando o seu "garçom"

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // 1. Envia os dados para a API Java
            const response = await api.post('/auth/login', { email, password });

            // 2. Recebe o JWT do Back-end
            const { token, status } = response.data;

            // 3. Salva o "crachá" no navegador
            localStorage.setItem('token', token);
            localStorage.setItem('user_status', status || 'active'); // Se quiser manter o status do usuário

            // 4. Manda o usuário para o Indicador
            navigate('/indicador');
        } catch (err: any) {
            setError('E-mail ou senha inválidos. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-[#0f172a] border border-slate-800 p-8 rounded-2xl shadow-xl">

                {/* Logo/Título */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
                    <p className="text-slate-400">Acesse o painel do Indicador</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm p-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">E-mail</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Senha</label>
                        <input
                            type="password"
                            required
                            className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 hover:transform hover:scale-101 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50"
                    >
                        {loading ? 'Autenticando...' : 'Entrar na Plataforma'}
                    </button>
                </form>

                <p className="text-center text-slate-400 mt-8 text-sm">
                    Ainda não tem acesso?{' '}
                    <Link to="/signup" className="text-cyan-400 hover:underline">Criar conta</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;