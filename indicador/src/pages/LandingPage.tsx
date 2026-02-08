import { useNavigate } from 'react-router-dom';
import { TrendingUp, Zap, ShieldCheck, ArrowRight, MousePointer2, Search } from 'lucide-react';
import Graph from '../assets/graph.svg'
import Work1 from '../assets/work1.svg'
import Work2 from '../assets/work2.svg'
import Work3 from '../assets/work3.svg'



export default function LandingPage() {
    const navigate = useNavigate();

    const steps = [
        {
            number: "1",
            title: "Escolha o par de moedas",
            description: "Selecione o mercado que deseja analisar.",
            icon: <MousePointer2 className="text-blue-400" size={32} />,
            image: (
                <img src={Work1} alt="Laptop com pares de moedas" className="h-40 object-contain mx-auto" />
            )
        },
        {
            number: "2",
            title: "Veja a força real",
            description: "O sistema analisa múltiplos tempos automaticamente.",
            icon: <Search className="text-cyan-400" size={32} />,
            image: (
                <img src={Work2} alt="Análise de força de mercado" className="h-40 object-contain mx-auto" />
            )
        },
        {
            number: "3",
            title: "Tome a decisão",
            description: "Comprar, vender ou aguardar com clareza visual.",
            icon: <TrendingUp className="text-rose-500" size={32} />,
             image: (
                <img src={Work3} alt="Decisão visual clara" className="h-40 object-contain mx-auto" />
            )
        }
    ];

    return (
        <div className="min-h-screen text-white font-sans bg-linear-to-r from-[#020617] to-[#0f172a] ">
            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* COLUNA ESQUERDA: TEXTO */}
                    <div className="flex flex-col space-y-8">

                        {/* TÍTULO PRINCIPAL */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-4xl font-black leading-snug">
                                Veja o mercado com <span className="text-cyan-400">clareza.</span><br />
                                Decida com <span className="text-emerald-400">confiança.</span>
                            </h1>

                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
                                Transformando dados complexos do Forex em decisões visuais simples,
                                para você saber quando <span className="text-emerald-400 font-bold">comprar</span>,
                                <span className="text-rose-500 font-bold"> vender</span> ou <span className="text-yellow-300 font-bold">esperar</span>,
                                em segundos.
                            </p>
                        </div>

                        {/* BOTÃO CTA */}
                        <button
                            onClick={() => navigate('/login')}
                            className="w-fit flex items-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 hover:transform hover:scale-101 text-white px-10 py-5 rounded-xl font-black text-lg transition-all active:scale-95"
                        >
                            ACESSAR AGORA
                            <ArrowRight size={22} />
                        </button>
                    </div>

                    {/* COLUNA DIREITA: IMAGEM/ELEMENTOS VISUAIS */}
                    <div className="relative">
                        {/* CARD PRINCIPAL (A imagem do gráfico/celular) */}
                        <div>
                            <img src={Graph} />
                        </div>
                    </div>
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

            {/* HOW IT WORKS */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Título da Seção */}
                    <h2 className="text-4xl md:text-5xl font-black mb-20 relative inline-block">
                        Como funciona.
                        <div className="h-1.5 w-1/2 bg-cyan-500 absolute -bottom-4 left-1/4 rounded-full blur-[1px]"></div>
                    </h2>

                    {/* Grid de Passos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div key={step.number} className="relative group">
                                {/* Card Container */}
                                <div className="h-full bg-[#0a0f1d]/60 border border-slate-800/50 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-[#0a0f1d]/80 flex flex-col items-center">

                                    {/* Número flutuante com Glow */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1e293b] border-4 border-[#020617] rounded-full flex items-center justify-center font-black text-xl text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                        {step.number}
                                    </div>

                                    <div className="mt-4 mb-4 opacity-50">{step.icon}</div>

                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    {/* Ilustração Visual Inferior */}
                                    <div className="w-full mt-auto">
                                        {step.image}
                                        {/* Base de brilho inferior */}
                                        <div className="w-full h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent mt-8 opacity-40 blur-[2px]"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em]">
                © 2026 INDICADOR PRO - Trading Analytics Systems
            </footer>
        </div>
    );
}