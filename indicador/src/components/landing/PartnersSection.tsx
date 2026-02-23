import { Users, BarChart, Lightbulb } from 'lucide-react';
import { ScrollAnimation } from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { GlowOrb, BackgroundGrid, CornerAccent } from './ui';

interface PartnerItem {
    icon: React.ReactNode;
    title: string;
    highlight: string;
    description: string;
}

const partner: PartnerItem[] = [
    {
        icon: <Users size={32} className="text-cyan-400" />,
        title: "Estamos ao ",
        highlight: "seu lado.",
        description: "Monitoramos o mercado em tempo para você.",
    },
    {
        icon: <BarChart size={32} className="text-cyan-400" />,
        title: "Simples e ",
        highlight: "direto.",
        description: "Análises automáticas e sinais claros, para decisões assertivas.",
    },
    {
        icon: <Lightbulb size={32} className="text-cyan-400" />,
        title: "Sem ",
        highlight: "complicação.",
        description: "Você age com confiança mesmo sem ser especialista.",
    },
];

export default function PartnersSection() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">
            <BackgroundGrid opacity={0.02} />
            <GlowOrb className="w-125 h-100 bg-blue-700 -top-10 right-0" />

            <div className="max-w-6xl mx-auto text-center relative z-10">

                <ScrollAnimation delay={0.1}>
                    <div className="mb-20">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-linear-to-r from-transparent to-slate-600" />
                            <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">Por que escolher</span>
                            <div className="w-12 h-px bg-linear-to-l from-transparent to-slate-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-2">
                            Você foca na estratégia.
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                            Nós cuidamos da leitura no mercado.
                        </h3>
                        <motion.div
                            className="mx-auto mt-4 h-px w-32 bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        />
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {partner.map((item, index) => (
                        <ScrollAnimation key={index} delay={0.2 + index * 0.1}>
                            <motion.div
                                className="group relative flex flex-col items-center bg-[#0a0f1d]/60 border border-slate-800/60 rounded-2xl p-10 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-[#0a0f1d]/80 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-950/20"
                                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            >
                                <CornerAccent position="tl" color="cyan" />
                                <CornerAccent position="br" color="cyan" />
                                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-cyan-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-20 h-20 rounded-full border border-slate-700 flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                    <div className="absolute inset-1 rounded-full border border-slate-800 bg-[#0a0f1d]" />
                                    <motion.div
                                        className="absolute inset-0 rounded-full border border-cyan-500/0 group-hover:border-cyan-500/20"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                    />
                                    <div className="relative z-10">{item.icon}</div>
                                </div>

                                <h4 className="text-lg font-bold mb-3">
                                    {item.title}
                                    <span className="text-cyan-400">{item.highlight}</span>
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-60">{item.description}</p>

                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
