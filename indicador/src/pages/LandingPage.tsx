import { useNavigate } from 'react-router-dom';
import {
    TrendingUp, Zap, ShieldCheck, ArrowRight, MousePointer2,
    Search, Users, BarChart, Lightbulb, ShoppingCart, Sparkles,
    BrainCircuit, HeadphonesIcon, ChevronDown, HelpCircle,
} from 'lucide-react';
import Graph from '../assets/graph.svg';
import Work1 from '../assets/work1.svg';
import Work2 from '../assets/work2.svg';
import Work3 from '../assets/work3.svg';
import { ScrollAnimation } from '../components/ScrollAnimation';
import Banner from '../components/Banner';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Step {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: React.ReactNode;
}

interface PartnerItem {
    icon: React.ReactNode;
    title: string;
    highlight: string;
    description: string;
}

interface PerkItem {
    title: string;
    desc: string;
    icon: React.ReactNode;
    bgColor: string;
    borderColor: string;
}

interface FaqItem {
    question: string;
    answer: string;
}

// ─── Decorative glow orb ──────────────────────────────────────────────────────
const GlowOrb = ({ className }: { className?: string }) => (
    <div className={`absolute rounded-full pointer-events-none select-none blur-[120px] opacity-[0.18] ${className}`} />
);

// ─── Gradient section divider ─────────────────────────────────────────────────
const SectionDivider = () => (
    <div className="w-full h-px bg-linear-to-r from-transparent via-slate-700/70 to-transparent" />
);

export default function LandingPage() {
    const navigate = useNavigate();

    const steps: Step[] = [
        {
            number: "1",
            title: "Escolha o par de moedas",
            description: "Selecione o mercado que deseja analisar.",
            icon: <MousePointer2 className="text-blue-400" size={32} />,
            image: <img src={Work1} alt="Laptop com pares de moedas" className="h-40 object-contain mx-auto" />
        },
        {
            number: "2",
            title: "Veja a força real",
            description: "O sistema analisa múltiplos tempos automaticamente.",
            icon: <Search className="text-cyan-400" size={32} />,
            image: <img src={Work2} alt="Análise de força de mercado" className="h-40 object-contain mx-auto" />
        },
        {
            number: "3",
            title: "Tome a decisão",
            description: "Comprar, vender ou aguardar com clareza visual.",
            icon: <TrendingUp className="text-rose-500" size={32} />,
            image: <img src={Work3} alt="Decisão visual clara" className="h-40 object-contain mx-auto" />
        }
    ];

    const partner: PartnerItem[] = [
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

    const perks: PerkItem[] = [
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

    const faqs: FaqItem[] = [
        {
            question: "Preciso ter experiência prévia em Forex?",
            answer: "Não. O indicador foi desenhado para simplificar o mercado. Se você sabe identificar as cores verde (compra) e vermelho (venda), você já consegue utilizar a ferramenta."
        },
        {
            question: "O acesso é vitalício?",
            answer: "Não! Você poderá escolher entre a opção do plano semestral ou anual, podendo renovar o acesso ao final do período escolhido. Assim, garantimos que você sempre tenha acesso a uma ferramenta atualizada e de qualidade."
        },
        {
            question: "Funciona em quais dispositivos?",
            answer: "Por ser uma plataforma web otimizada, você pode acessar pelo seu navegador, sendo recomendado o acesso via desktop, sem precisar instalar nada pesado."
        },
        {
            question: "Como recebo o acesso?",
            answer: "Para realizar o pagamento você precisará ter uma conta criada em nossa plataforma, e ao finalizar a compra, o acesso é liberado automaticamente para o seu perfil, podendo ser utilizado imediatamente."
        }
    ];

    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <div className="min-h-screen text-white font-sans bg-linear-to-br from-[#020617] to-[#0f172a] overflow-x-hidden">

            {/* ══════════════════════════════════════════
                HERO
            ══════════════════════════════════════════ */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-28">

                <GlowOrb className="w-175 h-125 bg-blue-600 -top-40 -left-60" />
                <GlowOrb className="w-112.5 h-112.5 bg-cyan-500 top-10 right-0" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* LEFT */}
                    <ScrollAnimation delay={0.1}>
                        <div className="flex flex-col space-y-8">

                            {/* Credibility badge */}
                            <div className="w-fit flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                Ferramenta de análise Forex em tempo real
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-4xl font-black leading-snug">
                                    Veja o mercado com{' '}
                                    <span className="text-cyan-400 drop-shadow-[0_0_24px_rgba(34,211,238,0.45)]">clareza.</span><br />
                                    Decida com{' '}
                                    <span className="text-emerald-400 drop-shadow-[0_0_24px_rgba(52,211,153,0.45)]">confiança.</span>
                                </h1>

                                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
                                    Transformando dados complexos do Forex em decisões visuais simples,
                                    para você saber quando{' '}
                                    <span className="text-emerald-400 font-bold">comprar</span>,
                                    <span className="text-rose-500 font-bold"> vender</span> ou{' '}
                                    <span className="text-yellow-300 font-bold">esperar</span>,
                                    em segundos.
                                </p>
                            </div>

                            {/* CTA with glow */}
                            <div className="relative w-fit group">
                                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse" />
                                <button
                                    onClick={() => navigate('/login')}
                                    className="relative w-fit flex items-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-10 py-5 rounded-xl font-black text-lg transition-all active:scale-95 shadow-2xl shadow-blue-950/50"
                                >
                                    ACESSAR AGORA
                                    <ArrowRight size={22} />
                                </button>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* RIGHT: image with glass frame */}
                    <ScrollAnimation delay={0.2}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-linear-to-br from-blue-600/15 to-cyan-500/10 rounded-3xl blur-xl" />
                            <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm p-3 shadow-2xl shadow-blue-950/60">
                                <div className="flex items-center gap-1.5 mb-3 px-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                                </div>
                                <img src={Graph} className="rounded-xl w-full" alt="Dashboard Preview" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </header>

            <SectionDivider />

            {/* ══════════════════════════════════════════
                FEATURES
            ══════════════════════════════════════════ */}
            <section className="relative max-w-7xl mx-auto px-6 py-24">
                <GlowOrb className="w-125 h-75 bg-blue-700 top-0 left-1/2 -translate-x-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                    <ScrollAnimation delay={0.1}>
                        <div className="group relative h-full flex flex-col items-center text-center bg-[#0a0f1d]/70 border border-slate-800/60 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-black/30 hover:border-blue-500/40 hover:shadow-blue-950/30 transition-all duration-500">
                            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                            <div className="bg-blue-500/10 border border-blue-500/10 p-5 rounded-2xl mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                                <TrendingUp className="text-blue-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Multi-Timeframe</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Monitore de M1 a Semanal simultaneamente para encontrar o ponto exato de entrada.</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2}>
                        <div className="group relative h-full flex flex-col items-center text-center bg-[#0a0f1d]/70 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-emerald-950/20 hover:border-emerald-400/50 hover:shadow-emerald-900/30 transition-all duration-500 md:-translate-y-2">
                            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-black px-3 py-0.5 rounded-full tracking-widest whitespace-nowrap">
                                DESTAQUE
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/10 p-5 rounded-2xl mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
                                <Zap className="text-emerald-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Velocidade Real</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Dados processados via WebSocket para que você não perca nenhum segundo de movimento.</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.3}>
                        <div className="group relative h-full flex flex-col items-center text-center bg-[#0a0f1d]/70 border border-slate-800/60 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-black/30 hover:border-purple-500/40 hover:shadow-purple-950/20 transition-all duration-500">
                            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                            <div className="bg-purple-500/10 border border-purple-500/10 p-5 rounded-2xl mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                                <ShieldCheck className="text-purple-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Força Atual</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Saiba quais moedas estão fortes e quais estão fracas antes mesmo de abrir o gráfico.</p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <SectionDivider />

            {/* ══════════════════════════════════════════
                HOW IT WORKS
            ══════════════════════════════════════════ */}
            <section className="relative py-28 px-6 bg-[#070d1a] overflow-hidden">
                <GlowOrb className="w-175 h-100 bg-cyan-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-7xl mx-auto text-center relative z-10">

                    <ScrollAnimation delay={0.1}>
                        <div className="inline-block mb-20">
                            <h2 className="text-4xl md:text-5xl font-black relative inline-block">
                                Como funciona.
                                <div className="h-1.5 w-2/3 bg-linear-to-r from-transparent via-cyan-500 to-transparent absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full blur-[2px]" />
                            </h2>
                        </div>
                    </ScrollAnimation>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Connector line desktop */}
                        <div className="hidden md:block absolute top-14 left-[18%] right-[18%] h-px bg-linear-to-r from-blue-500/20 via-cyan-400/50 to-blue-500/20 z-0" />

                        {steps.map((step, i) => (
                            <ScrollAnimation key={step.number} delay={0.15 * (i + 1)}>
                                <div className="relative group z-10">
                                    <div className="h-full bg-[#0a0f1d]/80 border border-slate-800/60 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-[#0a0f1d] group-hover:shadow-xl group-hover:shadow-cyan-950/30 flex flex-col items-center">

                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-linear-to-br from-[#1e293b] to-[#0f172a] border-4 border-[#070d1a] rounded-full flex items-center justify-center font-black text-xl text-white shadow-[0_0_30px_rgba(59,130,246,0.55)] z-10">
                                            {step.number}
                                        </div>

                                        <div className="mt-4 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">{step.description}</p>

                                        <div className="w-full mt-auto">
                                            {step.image}
                                            <div className="w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mt-8 opacity-50 blur-[1px]" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* BANNER */}
            <Banner />

            <SectionDivider />

            {/* ══════════════════════════════════════════
                PARTNERS
            ══════════════════════════════════════════ */}
            <section className="relative max-w-7xl mx-auto px-6 py-24">
                <GlowOrb className="w-125 h-100 bg-blue-700 -top-10 right-0" />

                <div className="max-w-6xl mx-auto text-center relative z-10">

                    <ScrollAnimation delay={0.1}>
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-black mb-2">
                                Você foca na estratégia.
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                                Nós cuidamos da leitura no mercado.
                            </h3>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {partner.map((item, index) => (
                            <ScrollAnimation key={index} delay={0.2 + index * 0.1}>
                                <div className="group relative flex flex-col items-center bg-[#0a0f1d]/60 border border-slate-800/60 rounded-2xl p-10 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-[#0a0f1d]/80 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-950/20">

                                    <div className="w-20 h-20 rounded-full border border-slate-700 flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                        <div className="absolute inset-1 rounded-full border border-slate-800 bg-[#0a0f1d]" />
                                        <div className="relative z-10">{item.icon}</div>
                                    </div>

                                    <h4 className="text-lg font-bold mb-3">
                                        {item.title}
                                        <span className="text-cyan-400">{item.highlight}</span>
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-60">{item.description}</p>

                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* ══════════════════════════════════════════
                PRICING
            ══════════════════════════════════════════ */}
            <section className="relative py-28 px-6 bg-[#070d1a]">
                <GlowOrb className="w-150 h-125 bg-blue-800 bottom-0 left-0" />
                <GlowOrb className="w-100 h-100 bg-cyan-800 top-0 right-0" />

                <div className="max-w-6xl mx-auto relative z-10">

                    <ScrollAnimation delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
                            A ferramenta que pode mudar <br /> sua vida profissional.
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* LEFT: Perks */}
                        <div className="lg:col-span-7 flex flex-col justify-center gap-5">
                            {perks.map((perk, index) => (
                                <ScrollAnimation key={index} delay={0.2 + index * 0.08}>
                                    <div className={`group bg-[#0a0f1d]/70 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm flex gap-5 items-start transition-all duration-300 hover:shadow-lg hover:shadow-black/40 ${perk.borderColor}`}>
                                        <div className={`p-3 ${perk.bgColor} rounded-xl shrink-0 transition-transform group-hover:scale-110 shadow-lg`}>
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

                        {/* RIGHT: Price card */}
                        <div className="lg:col-span-5 relative group">
                            <ScrollAnimation delay={0.5}>
                                <div className="absolute -inset-2 bg-linear-to-b from-blue-600 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-45 transition-all duration-700" />
                                <div className="absolute -inset-px bg-linear-to-b from-blue-500/20 to-cyan-400/10 rounded-3xl" />

                                <div className="relative h-full bg-[#0a0f1d] border border-blue-500/40 rounded-3xl p-10 flex flex-col shadow-2xl shadow-blue-950/60">

                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-2 rounded-xl text-sm font-black tracking-widest shadow-lg shadow-blue-900/40 whitespace-nowrap">
                                        Pagamento
                                    </div>

                                    <div className="mt-6 mb-2 pb-6 border-b border-slate-800/60">
                                        <p className="text-slate-500 line-through text-lg">De R$360</p>
                                        <p className="text-slate-300 text-sm mt-1">por apenas 12x de</p>
                                        <h3 className="text-6xl font-black text-white mt-2 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">R$ 30,00</h3>
                                    </div>

                                    <ul className="space-y-3 my-8">
                                        {["Acelera leitura do mercado", "Mostra a força real das moedas", "Decisões claras em segundos", "Mais controle nas decisões"].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                                <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                                                    <Sparkles className="text-cyan-400" size={12} />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="relative mt-auto group/btn">
                                        <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-40 group-hover/btn:opacity-70 transition-all duration-300" />
                                        <a
                                            className="relative w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95"
                                            href="LINK_DO_MERCADO_PAGO"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ShoppingCart size={22} />
                                            Comprar agora
                                        </a>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* ══════════════════════════════════════════
                FAQ
            ══════════════════════════════════════════ */}
            <section className="relative py-28 px-6">
                <GlowOrb className="w-125 h-125 bg-blue-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-3xl mx-auto relative z-10">

                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <div className="flex justify-center mb-4">
                                <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-500/20 flex items-center gap-2">
                                    <HelpCircle size={14} /> DÚVIDAS FREQUENTES
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white">
                                Perguntas comuns
                            </h2>
                        </div>
                    </ScrollAnimation>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <ScrollAnimation key={index} delay={index * 0.08}>
                                <div className={`border rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${activeIdx === index
                                    ? 'bg-[#0a0f1d]/80 border-blue-500/30 shadow-lg shadow-blue-950/20'
                                    : 'bg-[#0a0f1d]/40 border-slate-800/60 hover:border-slate-700'
                                    }`}>
                                    <button
                                        onClick={() => setActiveIdx(activeIdx === index ? null : index)}
                                        className="w-full p-6 flex items-center justify-between text-left transition-colors"
                                    >
                                        <span className={`font-bold transition-colors duration-300 ${activeIdx === index ? 'text-white' : 'text-slate-200'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${activeIdx === index
                                            ? 'bg-blue-500/20 border border-blue-500/40'
                                            : 'bg-slate-800/60 border border-slate-700'
                                            }`}>
                                            <motion.div
                                                animate={{ rotate: activeIdx === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown
                                                    className={activeIdx === index ? 'text-blue-400' : 'text-slate-500'}
                                                    size={16}
                                                />
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIdx === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>

                    <ScrollAnimation delay={0.4}>
                        <div className="mt-16 text-center">
                            <p className="text-slate-500 text-sm mb-6">Ainda tem dúvidas? Fale com nosso suporte.</p>
                            <a
                                href="https://api.whatsapp.com/send?phone=5512988971084&text=Olá! Gostaria de tirar algumas dúvidas sobre o Indicador."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group cursor-pointer"
                            >
                                Chamar no WhatsApp
                                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* FOOTER */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />
            <footer className="bg-[#020617] py-10 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em]">
                © 2026 INDICADOR - Trading Analytics Systems
            </footer>
        </div>
    );
}
