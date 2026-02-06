import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl font-black mb-4 text-center">
                Indicador de Tendência <span className="text-emerald-500">PRO</span>
            </h1>
            <p className="text-slate-400 text-xl mb-10 text-center max-w-2xl">
                Analise múltiplos timeframes em tempo real e tome decisões baseadas em dados reais do mercado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-5xl">
                {/* Card de Preço */}
                <div className="bg-[#111827] border border-slate-800 p-8 rounded-2xl text-center">
                    <h3 className="text-lg font-bold mb-2">Plano Mensal</h3>
                    <div className="text-4xl font-black mb-6">R$ 97<span className="text-sm text-slate-500">/mês</span></div>
                    <button
                        onClick={() => navigate('/indicador')}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 py-3 rounded-xl font-bold transition-all"
                    >
                        Acessar Agora
                    </button>
                </div>
            </div>

            <footer className="text-slate-600 text-sm">
                © 2026 Seu SaaS de Trading - Todos os direitos reservados.
            </footer>
        </div>
    );
}