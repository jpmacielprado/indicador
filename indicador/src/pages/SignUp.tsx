import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

const Signup: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Enviando para a API Java criar no MySQL
            await api.post('/auth/register', { name, email, password });

            // Após criar, mandamos para o login ou logamos automaticamente
            alert('Conta criada com sucesso! Agora faça seu login.');
            navigate('/login');
        } catch (err: any) {
            setError('Erro ao criar conta. Verifique os dados ou tente outro e-mail.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-[#0f172a] border border-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Criar Conta</h2>
                    <p className="text-slate-400">Junte-se aos traders de elite</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm p-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 outline-none"
                            placeholder="João Silva"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">E-mail</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 outline-none"
                            placeholder="seu@email.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Senha</label>
                        <input
                            type="password"
                            required
                            className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 outline-none"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 hover:transform hover:scale-101 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50"
                    >
                        {loading ? 'Processando...' : 'Finalizar Cadastro'}
                    </button>
                </form>

                <p className="text-center text-slate-400 mt-6 text-sm">
                    Já tem uma conta? <Link to="/login" className="text-cyan-400 hover:underline">Entrar</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;