import { ShoppingCart, Sparkles, ArrowRight, BrainCircuit, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { ScrollAnimation } from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { GlowOrb, BackgroundGrid, NoiseLayer, CornerAccent } from './ui';

interface PerkItem {
    title: string;
    desc: string;
    icon: React.ReactNode;
    bgColor: string;
    borderColor: string;
}

const perks: PerkItem[] = [
    {
        title: "Torne-se um trader com maestria.",
        desc: "Comece agora com confiança e tenha o domínio do mercado.",
        icon: <BrainCircuit className="text-blue-400" size={28} />,
        bgColor: "bg-blue-500/10",
        borderColor: "group-hover:border-blue-500/30",
    },
    {
        title: "Pagamento protegido",
        desc: "Compra segura e sem risco, acesso imediato após o pagamento.",
        icon: <ShieldCheck className="text-cyan-400" size={28} />,
        bgColor: "bg-cyan-500/10",
        borderColor: "group-hover:border-cyan-500/30",
    },
    {
        title: "Suporte especializado",
        desc: "Nosso time está pronto para te ajudar a extrair o máximo da ferramenta.",
        icon: <HeadphonesIcon className="text-indigo-400" size={28} />,
        bgColor: "bg-indigo-500/10",
        borderColor: "group-hover:border-indigo-500/30",
    },
];

export default function PricingSection() {
    return (
        <section
            className="relative py-28 px-6 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #070d1a 0%, #060b18 60%, #070d1a 100%)' }}
        >
            <BackgroundGrid opacity={0.03} />
            <NoiseLayer opacity={0.015} />
            <GlowOrb className="w-150 h-125 bg-blue-800 bottom-0 left-0" />
            <GlowOrb className="w-100 h-100 bg-cyan-800 top-0 right-0" />
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate-700/20 to-transparent pointer-events-none" />
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate-700/20 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                <ScrollAnimation delay={0.1}>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-linear-to-r from-transparent to-slate-600" />
                            <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">Investimento</span>
                            <div className="w-12 h-px bg-linear-to-l from-transparent to-slate-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            A ferramenta que pode mudar <br /> sua vida profissional.
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT: Perks */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-5">
                        {perks.map((perk, index) => (
                            <ScrollAnimation key={index} delay={0.2 + index * 0.08}>
                                <motion.div
                                    className={`group relative bg-[#0a0f1d]/70 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm flex gap-5 items-start transition-all duration-300 hover:shadow-lg hover:shadow-black/40 ${perk.borderColor}`}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    <div className="absolute left-0 top-4 bottom-4 w-px bg-linear-to-b from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                    <div className={`p-3 ${perk.bgColor} rounded-xl shrink-0 transition-transform group-hover:scale-110 shadow-lg`}>
                                        {perk.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white leading-tight">{perk.title}</h4>
                                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{perk.desc}</p>
                                    </div>
                                </motion.div>
                            </ScrollAnimation>
                        ))}
                    </div>

                    {/* RIGHT: Price card */}
                    <div className="lg:col-span-5 relative group">
                        <ScrollAnimation delay={0.5}>
                            <div className="absolute -inset-2 bg-linear-to-b from-blue-600 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-45 transition-all duration-700" />
                            <div className="absolute -inset-px bg-linear-to-b from-blue-500/20 to-cyan-400/10 rounded-3xl" />

                            <motion.div
                                className="absolute inset-0 rounded-3xl"
                                style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            <div className="relative h-full bg-[#0a0f1d] border border-blue-500/40 rounded-3xl p-10 flex flex-col shadow-2xl shadow-blue-950/60">
                                <CornerAccent position="tl" color="blue" />
                                <CornerAccent position="tr" color="cyan" />
                                <CornerAccent position="bl" color="cyan" />
                                <CornerAccent position="br" color="blue" />

                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-2 rounded-xl text-sm font-black tracking-widest shadow-lg shadow-blue-900/40 whitespace-nowrap">
                                    Pagamento
                                </div>

                                <div className="mt-6 mb-2 pb-6 border-b border-slate-800/60">
                                    <p className="text-slate-500 line-through text-lg">De R$360</p>
                                    <p className="text-slate-300 text-sm mt-1">por apenas 12x de</p>
                                    <motion.h3
                                        className="text-6xl font-black text-white mt-2"
                                        animate={{ textShadow: ['0 0 20px rgba(34,211,238,0.2)', '0 0 50px rgba(34,211,238,0.4)', '0 0 20px rgba(34,211,238,0.2)'] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        R$ 30,00
                                    </motion.h3>
                                </div>

                                <ul className="space-y-3 my-8">
                                    {["Acelera leitura do mercado", "Mostra a força real das moedas", "Decisões claras em segundos", "Mais controle nas decisões"].map((item, i) => (
                                        <motion.li
                                            key={item}
                                            className="flex items-center gap-3 text-slate-300 text-sm font-medium"
                                            initial={{ opacity: 0, x: -8 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + i * 0.08 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                                                <Sparkles className="text-cyan-400" size={12} />
                                            </div>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="relative mt-auto group/btn">
                                    <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-40 group-hover/btn:opacity-70 transition-all duration-300" />
                                    <motion.a
                                        className="relative w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95"
                                        href="LINK_DO_MERCADO_PAGO"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <ShoppingCart size={22} />
                                        Comprar agora
                                        <motion.span
                                            animate={{ x: [0, 3, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight size={18} />
                                        </motion.span>
                                    </motion.a>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
}
