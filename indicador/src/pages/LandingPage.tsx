import { useNavigate } from 'react-router-dom';
import { TrendingUp, Zap, ShieldCheck, ArrowRight, MousePointer2, Search, Users, BarChart, Lightbulb, ShoppingCart, Sparkles, BrainCircuit, HeadphonesIcon, } from 'lucide-react';
import Graph from '../assets/graph.svg'
import Work1 from '../assets/work1.svg'
import Work2 from '../assets/work2.svg'
import Work3 from '../assets/work3.svg'
import { ScrollAnimation } from '../components/ScrollAnimation';



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

    const partner = [
        {
            icon: <Users size={32} className="text-cyan-400" />,
            title: "Estamos ao ",
            highlight: "seu lado.",
            description: "Monitoramos o mercado em tempo para você."
        },
        {
            icon: <BarChart size={32} className="text-cyan-400" />,
            title: "Simples e ",
            highlight: "direto.",
            description: "Análises automáticas e sinais claros, para decisões assertivas."
        },
        {
            icon: <Lightbulb size={32} className="text-cyan-400" />,
            title: "Sem ",
            highlight: "complicação.",
            description: "Você age com confiança mesmo sem ser especialista."
        }
    ];

    const perks = [
        {
            title: "Torne-se um trader com maestria.",
            desc: "Comece agora com confiança e tenha o domínio do mercado.",
            icon: <BrainCircuit className="text-blue-400" size={28} />,
            bgColor: "bg-blue-500/10",
            borderColor: "group-hover:border-blue-500/30"
        },
        {
            title: "Pagamento protegido",
            desc: "Compra segura e sem risco, acesso imediato após o pagamento.",
            icon: <ShieldCheck className="text-cyan-400" size={28} />,
            bgColor: "bg-cyan-500/10",
            borderColor: "group-hover:border-cyan-500/30"
        },
        {
            title: "Suporte especializado",
            desc: "Nosso time está pronto para te ajudar a extrair o máximo da ferramenta.",
            icon: <HeadphonesIcon className="text-indigo-400" size={28} />,
            bgColor: "bg-indigo-500/10",
            borderColor: "group-hover:border-indigo-500/30"
        }
    ];

    return (
        <div className="min-h-screen text-white font-sans bg-linear-to-r from-[#020617] to-[#0f172a] ">

            {/* HERO */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* COLUNA ESQUERDA: TEXTO */}
                    <ScrollAnimation delay={0.1}>
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
                    </ScrollAnimation>

                    {/* COLUNA DIREITA: IMAGEM/ELEMENTOS VISUAIS */}
                    <ScrollAnimation delay={0.2}>
                        <div>
                            <img src={Graph} />
                        </div>
                    </ScrollAnimation>
                </div>
            </header>

            {/* FEATURES */}
            <section className="max-w-7xl mx-auto px-6 py-20 border-y border-slate-800/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* FEATURE 1 */}
                    <ScrollAnimation delay={0.1}>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-blue-500/10 p-4 rounded-2xl mb-6">
                                <TrendingUp className="text-blue-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Multi-Timeframe</h3>
                            <p className="text-slate-400 text-sm">Monitore de M1 a Mensal simultaneamente para encontrar o ponto exato de entrada.</p>
                        </div>
                    </ScrollAnimation>

                    {/* FEATURE 2 */}
                    <ScrollAnimation delay={0.2}>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-emerald-500/10 p-4 rounded-2xl mb-6">
                                <Zap className="text-emerald-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Velocidade Real</h3>
                            <p className="text-slate-400 text-sm">Dados processados via WebSocket para que você não perca nenhum segundo de movimento.</p>
                        </div>
                    </ScrollAnimation>

                    {/* FEATURE 3 */}
                    <ScrollAnimation delay={0.3}>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-purple-500/10 p-4 rounded-2xl mb-6">
                                <ShieldCheck className="text-purple-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Currency Strength</h3>
                            <p className="text-slate-400 text-sm">Saiba quais moedas estão fortes e quais estão fracas antes mesmo de abrir o gráfico.</p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Título da Seção */}
                    <ScrollAnimation delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-black mb-20 relative inline-block">
                            Como funciona.
                            <div className="h-1.5 w-1/2 bg-cyan-500 absolute -bottom-4 left-1/4 rounded-full blur-[1px]"></div>
                        </h2>
                    </ScrollAnimation>

                    {/* Grid de Passos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <ScrollAnimation delay={0.2}>
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
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS */}
            <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/50">
                <div className="max-w-6xl mx-auto text-center">

                    {/* TÍTULO PRINCIPAL */}
                    <ScrollAnimation delay={0.1}>
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-black mb-2">
                                Você foca na estratégia.
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-cyan-400">
                                Nós cuidamos da leitura no mercado.
                            </h3>
                        </div>
                    </ScrollAnimation>

                    {/* GRID DE RECURSOS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {partner.map((item, index) => (
                            <ScrollAnimation delay={0.2 + index * 0.1}>
                                <div key={index} className="flex flex-col items-center group">

                                    {/* ÍCONE CIRCULAR COM GLOW */}
                                    <div className="w-20 h-20 rounded-full border border-slate-700 flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                        {/* Círculo Interno de Brilho */}
                                        <div className="absolute inset-1 rounded-full border border-slate-800 bg-[#0a0f1d]"></div>
                                        <div className="relative z-10">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* TEXTO */}
                                    <h4 className="text-lg font-bold mb-3">
                                        {item.title}
                                        <span className="text-cyan-400">{item.highlight}</span>
                                    </h4>

                                    <p className="text-slate-400 text-sm leading-relaxed max-w-60]">
                                        {item.description}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>

                </div>
            </section>

            {/* PRICING */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <ScrollAnimation delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
                            A ferramenta que pode mudar <br /> sua vida profissional.
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* COLUNA ESQUERDA: Cards */}
                        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
                            {perks.map((perk, index) => (
                                <ScrollAnimation key={index} delay={0.2 + index * 0.1}>
                                    <div
                                        key={index}
                                        className={`group bg-[#0a0f1d]/60 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm flex gap-6 items-start transition-all duration-300 ${perk.borderColor}`}
                                    >
                                        <div className={`p-3 ${perk.bgColor} rounded-xl shrink-0 transition-transform group-hover:scale-110`}>
                                            {perk.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white leading-tight">{perk.title}</h4>
                                            <p className="text-slate-400 text-sm mt-1 leading-relaxed">{perk.desc}</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>

                        {/* COLUNA DIREITA: Card de Preço */}
                        <div className="lg:col-span-5 relative group">
                            <ScrollAnimation delay={0.5}>
                                <div className="absolute -inset-1 bg-linear-to-b from-blue-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                                <div className="relative h-full bg-[#0a0f1d] border border-blue-500/30 rounded-3xl p-10 flex flex-col shadow-2xl">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-2 rounded-xl text-sm font-black tracking-widest shadow-lg">
                                        Pagamento
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-slate-500 line-through text-lg">De R$360</p>
                                        <p className="text-slate-300 text-sm mt-1">por apenas 12x de</p>
                                        <h3 className="text-6xl font-black text-white mt-2 mb-8">R$ 30,00</h3>
                                    </div>

                                    <ul className="space-y-4 mb-10">
                                        {["Acelera leitura do mercado", "Mostra a força real das moedas", "Decisões claras em segundos", "Mais controle nas decisões"].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                                <Sparkles className="text-cyan-400" size={18} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full mt-auto bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95">
                                        <ShoppingCart size={22} />
                                        Comprar agora
                                    </button>
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em]">
                © 2026 INDICADOR PRO - Trading Analytics Systems
            </footer>
        </div>
    );
}