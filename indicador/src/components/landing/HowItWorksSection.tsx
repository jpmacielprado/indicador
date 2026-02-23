import { MousePointer2, Search, TrendingUp } from 'lucide-react';
import Work1 from '../assets/work1.svg';
import Work2 from '../assets/work2.svg';
import Work3 from '../assets/work3.svg';
import { ScrollAnimation } from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { GlowOrb, BackgroundGrid, NoiseLayer, CornerAccent } from './ui';

interface Step {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: React.ReactNode;
}

const steps: Step[] = [
    {
        number: "1",
        title: "Escolha o par de moedas",
        description: "Selecione o mercado que deseja analisar.",
        icon: <MousePointer2 className="text-blue-400" size={32} />,
        image: <img src={Work1} alt="Laptop com pares de moedas" className="h-40 object-contain mx-auto" />,
    },
    {
        number: "2",
        title: "Veja a força real",
        description: "O sistema analisa múltiplos tempos automaticamente.",
        icon: <Search className="text-cyan-400" size={32} />,
        image: <img src={Work2} alt="Análise de força de mercado" className="h-40 object-contain mx-auto" />,
    },
    {
        number: "3",
        title: "Tome a decisão",
        description: "Comprar, vender ou aguardar com clareza visual.",
        icon: <TrendingUp className="text-rose-500" size={32} />,
        image: <img src={Work3} alt="Decisão visual clara" className="h-40 object-contain mx-auto" />,
    },
];

export default function HowItWorksSection() {
    return (
        <section
            className="relative py-28 px-6 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #070d1a 0%, #060b18 50%, #070d1a 100%)' }}
        >
            <BackgroundGrid opacity={0.03} />
            <NoiseLayer opacity={0.015} />
            <GlowOrb className="w-175 h-100 bg-cyan-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-cyan-400/8 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center relative z-10">

                <ScrollAnimation delay={0.1}>
                    <div className="inline-block mb-20">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-px bg-linear-to-r from-transparent to-cyan-500/40" />
                            <span className="text-cyan-500/60 text-xs font-bold tracking-widest uppercase">Processo</span>
                            <div className="w-12 h-px bg-linear-to-l from-transparent to-cyan-500/40" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black relative inline-block">
                            Como funciona.
                            <div className="h-1.5 w-2/3 bg-linear-to-r from-transparent via-cyan-500 to-transparent absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full blur-[2px]" />
                            <motion.div
                                className="h-px w-1/3 bg-linear-to-r from-transparent via-blue-400 to-transparent absolute -bottom-6 left-1/2 -translate-x-1/2"
                                animate={{ opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="hidden md:block absolute top-14 left-[18%] right-[18%] h-px bg-linear-to-r from-blue-500/20 via-cyan-400/50 to-blue-500/20 z-0" />
                    <motion.div
                        className="hidden md:block absolute top-13.25 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] z-10"
                        animate={{ left: ['18%', '82%', '18%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {steps.map((step, i) => (
                        <ScrollAnimation key={step.number} delay={0.15 * (i + 1)}>
                            <motion.div
                                className="relative group z-10"
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            >
                                <div className="h-full bg-[#0a0f1d]/80 border border-slate-800/60 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-[#0a0f1d] group-hover:shadow-xl group-hover:shadow-cyan-950/30 flex flex-col items-center">
                                    <CornerAccent position="tl" color="cyan" />
                                    <CornerAccent position="br" color="cyan" />
                                    <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-cyan-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-linear-to-br from-[#1e293b] to-[#0f172a] border-4 border-[#070d1a] rounded-full flex items-center justify-center font-black text-xl text-white shadow-[0_0_30px_rgba(59,130,246,0.55)] z-10">
                                        {step.number}
                                    </div>

                                    <div className="mt-4 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{step.description}</p>

                                    <div className="w-full mt-auto">
                                        <div className="relative">
                                            {step.image}
                                            <div className="absolute inset-0 bg-linear-to-t from-cyan-500/5 to-transparent pointer-events-none" />
                                        </div>
                                        <div className="w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mt-8 opacity-50 blur-[1px]" />
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
