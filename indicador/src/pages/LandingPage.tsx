import { useNavigate } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-emerald-500/30">

            {/* HERO SECTION */}
            <header className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Tecnologia em Tempo Real</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                    Domine o Mercado com <br />
                    <span className="bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        Precisão Matemática
                    </span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    O indicador definitivo para traders que buscam confluência de timeframes e força de moeda em um único dashboard profissional.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-xl font-black text-lg transition-all"
                    >
                        ACESSAR INDICADOR AGORA
                    </button>
                </div>
            </header>

            {/* FEATURES */}
            <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-500/10 p-4 rounded-2xl mb-6">
                            <TrendingUp className="text-blue-500" size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Multi-Timeframe</h3>
                        <p className="text-slate-400 text-sm">Monitore de M1 a Mensal simultaneamente para encontrar o ponto exato de entrada.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-emerald-500/10 p-4 rounded-2xl mb-6">
                            <Zap className="text-emerald-500" size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Velocidade Real</h3>
                        <p className="text-slate-400 text-sm">Dados processados via WebSocket para que você não perca nenhum segundo de movimento.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-purple-500/10 p-4 rounded-2xl mb-6">
                            <ShieldCheck className="text-purple-500" size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Currency Strength</h3>
                        <p className="text-slate-400 text-sm">Saiba quais moedas estão fortes e quais estão fracas antes mesmo de abrir o gráfico.</p>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="bg-slate-900/50 py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Planos Disponíveis</h2>
                        <p className="text-slate-500">Escolha a melhor opção para sua jornada no trading</p>
                    </div>

                    <div className="bg-[#111827] border-2 border-emerald-500/50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-black px-10 py-2 rotate-45 translate-x-8 translate-y-2">
                            MAIS VENDIDO
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h3 className="text-2xl font-black mb-2 uppercase">Acesso Vitalício</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                                        <CheckCircle2 className="text-emerald-500" size={18} /> Todos os ativos liberados
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                                        <CheckCircle2 className="text-emerald-500" size={18} /> Suporte VIP 24/7
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                                        <CheckCircle2 className="text-emerald-500" size={18} /> Atualizações vitalícias
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center md:text-right">
                                <div className="text-slate-500 line-through text-lg">R$ 497</div>
                                <div className="text-5xl font-black text-white mb-6">R$ 197</div>
                                <button
                                    onClick={() => navigate('/indicador')}
                                    className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-xl font-black hover:bg-slate-200 transition-all shadow-xl"
                                >
                                    QUERO MINHA LICENÇA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em]">
                © 2026 INDICADOR PRO - Trading Analytics Systems
            </footer>
        </div>
    );
}