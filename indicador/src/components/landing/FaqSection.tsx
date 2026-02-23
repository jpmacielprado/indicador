import { HelpCircle, ChevronDown } from 'lucide-react';
import { ScrollAnimation } from '../ScrollAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { GlowOrb, BackgroundGrid } from './ui';

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "Preciso ter experiência prévia em Forex?",
        answer: "Não. O indicador foi desenhado para simplificar o mercado. Se você sabe identificar as cores verde (compra) e vermelho (venda), você já consegue utilizar a ferramenta.",
    },
    {
        question: "O acesso é vitalício?",
        answer: "Não! Você poderá escolher entre a opção do plano semestral ou anual, podendo renovar o acesso ao final do período escolhido. Assim, garantimos que você sempre tenha acesso a uma ferramenta atualizada e de qualidade.",
    },
    {
        question: "Funciona em quais dispositivos?",
        answer: "Por ser uma plataforma web otimizada, você pode acessar pelo seu navegador, sendo recomendado o acesso via desktop, sem precisar instalar nada pesado.",
    },
    {
        question: "Como recebo o acesso?",
        answer: "Para realizar o pagamento você precisará ter uma conta criada em nossa plataforma, e ao finalizar a compra, o acesso é liberado automaticamente para o seu perfil, podendo ser utilizado imediatamente.",
    },
];

export default function FaqSection() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <section className="relative py-28 px-6 overflow-hidden">
            <BackgroundGrid opacity={0.02} />
            <GlowOrb className="w-125 h-125 bg-blue-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-3xl mx-auto relative z-10">

                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-4">
                            <motion.span
                                className="bg-blue-500/10 text-blue-400 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-500/20 flex items-center gap-2"
                                whileHover={{ scale: 1.04, borderColor: 'rgba(59,130,246,0.4)' }}
                            >
                                <HelpCircle size={14} /> DÚVIDAS FREQUENTES
                            </motion.span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            Perguntas comuns
                        </h2>
                        <motion.div
                            className="mx-auto mt-3 h-px w-20 bg-linear-to-r from-transparent via-blue-400/50 to-transparent"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        />
                    </div>
                </ScrollAnimation>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <ScrollAnimation key={index} delay={index * 0.08}>
                            <motion.div
                                className={`border rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${activeIdx === index
                                    ? 'bg-[#0a0f1d]/80 border-blue-500/30 shadow-lg shadow-blue-950/20'
                                    : 'bg-[#0a0f1d]/40 border-slate-800/60 hover:border-slate-700'
                                    }`}
                                whileHover={{ x: activeIdx === index ? 0 : 2, transition: { duration: 0.2 } }}
                            >
                                {activeIdx === index && (
                                    <div className="h-px w-full bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
                                )}

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
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation delay={0.4}>
                    <div className="mt-16 text-center">
                        <p className="text-slate-500 text-sm mb-6">Ainda tem dúvidas? Fale com nosso suporte.</p>
                        <motion.a
                            href="https://api.whatsapp.com/send?phone=5512988971084&text=Olá! Gostaria de tirar algumas dúvidas sobre o Indicador."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group cursor-pointer"
                            whileHover={{ x: 3 }}
                        >
                            Chamar no WhatsApp
                            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </motion.a>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
