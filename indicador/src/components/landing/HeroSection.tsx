import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Graph from '../assets/graph.svg';
import { ScrollAnimation } from '../ScrollAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
    GlowOrb,
    BackgroundGrid,
    NoiseLayer,
    ScanLine,
    AbstractShape,
    FloatingParticle,
    LivePulse,
} from './ui';

export default function HeroSection() {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <header ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-28 overflow-hidden">
            <BackgroundGrid opacity={0.025} />
            <NoiseLayer opacity={0.02} />
            <ScanLine />

            <AbstractShape className="w-96 h-96 top-0 right-0 opacity-60" />
            <AbstractShape className="w-64 h-64 bottom-10 left-0 opacity-30" />

            <FloatingParticle x="15%" y="20%" delay={0} />
            <FloatingParticle x="80%" y="15%" delay={1.2} size={1.5} />
            <FloatingParticle x="65%" y="70%" delay={0.7} />
            <FloatingParticle x="30%" y="80%" delay={2} size={1} />
            <FloatingParticle x="90%" y="50%" delay={0.4} size={1.5} />

            <GlowOrb className="w-175 h-125 bg-blue-600 -top-40 -left-60" />
            <GlowOrb className="w-112.5 h-112.5 bg-cyan-500 top-10 right-0" />

            <div className="absolute top-0 left-1/4 w-px h-64 bg-linear-to-b from-cyan-400/20 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/3 w-px h-40 bg-linear-to-b from-blue-400/15 to-transparent pointer-events-none" />

            <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
            >
                {/* LEFT */}
                <ScrollAnimation delay={0.1}>
                    <div className="flex flex-col space-y-8">

                        <motion.div
                            className="w-fit flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm"
                            whileHover={{ scale: 1.03, borderColor: 'rgba(59,130,246,0.5)' }}
                        >
                            <LivePulse />
                            Ferramenta de análise Forex em tempo real
                        </motion.div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-4xl font-black leading-snug relative">
                                <span className="absolute -left-4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-cyan-400/40 to-transparent hidden md:block" />
                                Veja o mercado com{' '}
                                <span className="relative inline-block text-cyan-400 drop-shadow-[0_0_24px_rgba(34,211,238,0.45)]">
                                    clareza.
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-cyan-400/80 to-transparent"
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                    />
                                </span>
                                <br />
                                Decida com{' '}
                                <span className="relative inline-block text-emerald-400 drop-shadow-[0_0_24px_rgba(52,211,153,0.45)]">
                                    confiança.
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-emerald-400/80 to-transparent"
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1, duration: 0.6 }}
                                    />
                                </span>
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

                        <div className="relative w-fit group">
                            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse" />
                            <motion.div
                                className="absolute -inset-3 bg-linear-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-lg"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.button
                                onClick={() => navigate('/login')}
                                className="relative w-fit flex items-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-10 py-5 rounded-xl font-black text-lg transition-all active:scale-95 shadow-2xl shadow-blue-950/50"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                ACESSAR AGORA
                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight size={22} />
                                </motion.span>
                            </motion.button>
                        </div>

                        <div className="flex items-center gap-6 pt-2">
                            {['Multi-Timeframe', 'Tempo Real', 'Sem Instalação'].map((tag, i) => (
                                <motion.div
                                    key={tag}
                                    className="flex items-center gap-1.5 text-slate-500 text-xs"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + i * 0.1 }}
                                >
                                    <span className="w-1 h-1 rounded-full bg-cyan-500/60" />
                                    {tag}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>

                {/* RIGHT */}
                <ScrollAnimation delay={0.2}>
                    <motion.div
                        className="relative"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <div className="absolute -inset-6 pointer-events-none">
                            <div className="absolute top-0 left-0 w-8 h-px bg-cyan-400/40" />
                            <div className="absolute top-0 left-0 w-px h-8 bg-cyan-400/40" />
                            <div className="absolute top-0 right-0 w-8 h-px bg-blue-400/40" />
                            <div className="absolute top-0 right-0 w-px h-8 bg-blue-400/40" />
                            <div className="absolute bottom-0 left-0 w-8 h-px bg-cyan-400/40" />
                            <div className="absolute bottom-0 left-0 w-px h-8 bg-cyan-400/40" />
                            <div className="absolute bottom-0 right-0 w-8 h-px bg-blue-400/40" />
                            <div className="absolute bottom-0 right-0 w-px h-8 bg-blue-400/40" />
                        </div>

                        <div className="absolute -inset-4 bg-linear-to-br from-blue-600/15 to-cyan-500/10 rounded-3xl blur-xl" />

                        <motion.div
                            className="absolute -inset-1 rounded-2xl"
                            style={{
                                background: 'conic-gradient(from 0deg, transparent, rgba(34,211,238,0.15), transparent, rgba(59,130,246,0.15), transparent)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                        />

                        <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm p-3 shadow-2xl shadow-blue-950/60">
                            <div className="flex items-center gap-1.5 mb-3 px-1">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                                <div className="ml-2 flex-1 h-4 bg-slate-800/60 rounded-sm flex items-center px-2">
                                    <span className="text-slate-600 text-[8px] font-mono">indicador.app/dashboard</span>
                                </div>
                                <LivePulse />
                            </div>
                            <div className="relative">
                                <img src={Graph} className="rounded-xl w-full" alt="Dashboard Preview" />
                                <div className="absolute inset-0 rounded-xl bg-linear-to-b from-white/3 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </ScrollAnimation>
            </motion.div>
        </header>
    );
}
