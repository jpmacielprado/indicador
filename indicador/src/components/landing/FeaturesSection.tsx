import { TrendingUp, Zap, ShieldCheck } from 'lucide-react';
import { ScrollAnimation } from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { GlowOrb, BackgroundGrid, AnimatedGlowLine, CornerAccent, SectionLabel } from './ui';

export default function FeaturesSection() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">
            <BackgroundGrid opacity={0.02} />
            <GlowOrb className="w-125 h-75 bg-blue-700 top-0 left-1/2 -translate-x-1/2" />

            <ScrollAnimation delay={0.05}>
                <SectionLabel text="Recursos principais" />
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                <ScrollAnimation delay={0.1}>
                    <motion.div
                        className="group relative h-full flex flex-col items-center text-center bg-[#0a0f1d]/70 border border-slate-800/60 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-black/30 hover:border-blue-500/40 hover:shadow-blue-950/30 transition-all duration-500"
                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    >
                        <CornerAccent position="tl" color="blue" />
                        <CornerAccent position="br" color="blue" />
                        <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-blue-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="bg-blue-500/10 border border-blue-500/10 p-5 rounded-2xl mb-6 group-hover:bg-blue-500/20 transition-colors duration-300 relative">
                            <div className="absolute inset-0 rounded-2xl bg-blue-400/5 group-hover:bg-blue-400/10 transition-colors" />
                            <TrendingUp className="text-blue-500 relative z-10" size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Multi-Timeframe</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Monitore de M1 a Semanal simultaneamente para encontrar o ponto exato de entrada.</p>
                        <AnimatedGlowLine className="w-full mt-6" />
                    </motion.div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                    <motion.div
                        className="group relative h-full flex flex-col items-center text-center bg-[#0a0f1d]/70 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-emerald-950/20 hover:border-emerald-400/50 hover:shadow-emerald-900/30 transition-all duration-500 md:-translate-y-2"
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                        <CornerAccent position="tl" color="emerald" />
                        <CornerAccent position="br" color="emerald" />
                        <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-emerald-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-black px-3 py-0.5 rounded-full tracking-widest whitespace-nowrap">
                            DESTAQUE
                        </div>
                        <div className="bg-emerald-500/10 border border-emerald-500/10 p-5 rounded-2xl mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300 relative">
                            <div className="absolute inset-0 rounded-2xl bg-emerald-400/5 group-hover:bg-emerald-400/10 transition-colors" />
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Zap className="text-emerald-500 relative z-10" size={32} />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Velocidade Real</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Dados processados via WebSocket para que você não perca nenhum segundo de movimento.</p>
                        <AnimatedGlowLine className="w-full mt-6" />
                    </motion.div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                    <motion.div
                        className="group relative h-full flex flex-col items-center text-center bg-[#0a0f1d]/70 border border-slate-800/60 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-black/30 hover:border-purple-500/40 hover:shadow-purple-950/20 transition-all duration-500"
                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    >
                        <CornerAccent position="tl" color="purple" />
                        <CornerAccent position="br" color="purple" />
                        <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-purple-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="bg-purple-500/10 border border-purple-500/10 p-5 rounded-2xl mb-6 group-hover:bg-purple-500/20 transition-colors duration-300 relative">
                            <div className="absolute inset-0 rounded-2xl bg-purple-400/5 group-hover:bg-purple-400/10 transition-colors" />
                            <ShieldCheck className="text-purple-500 relative z-10" size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Força Atual</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Saiba quais moedas estão fortes e quais estão fracas antes mesmo de abrir o gráfico.</p>
                        <AnimatedGlowLine className="w-full mt-6" />
                    </motion.div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
