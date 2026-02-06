import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // SIMULAÇÃO: No futuro, aqui você faz a chamada para sua API
        if (email && password) {
            localStorage.setItem('user_status', 'active');
            navigate('/indicador');
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-[#111827] border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Área do <span className="text-emerald-500">Trader</span></h2>
                    <p className="text-slate-500 text-sm mt-2 font-medium">Insira suas credenciais para acessar o painel</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-600" size={18} />
                            <input
                                type="email"
                                required
                                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-emerald-500 transition-all text-sm"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Senha</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-slate-600" size={18} />
                            <input
                                type="password"
                                required
                                className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-emerald-500 transition-all text-sm"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
                    >
                        ENTRAR NO TERMINAL
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
                    <p className="text-slate-500 text-xs">
                        Não tem uma licença?
                        <button onClick={() => navigate('/')} className="text-emerald-500 ml-1 font-bold hover:underline">Ver Planos</button>
                    </p>
                </div>
            </div>
        </div>
    );
}