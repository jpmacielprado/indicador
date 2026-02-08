import { motion } from "framer-motion";

export default function Banner() {
    const phrases = [
        "DADOS EM TEMPO REAL",
        "•",
        "SINAIS ESTRATÉGICOS",
        "•",
        "MERCADO FOREX",
        "•",
        "ANÁLISE AUTOMÁTICA",
        "•",
        "ALTA ASSERTIVIDADE",
        "•",
    ];

    return (
        <div className="relative flex overflow-hidden bg-blue-600 py-3 select-none">
            {/* Container que move */}
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                }}
            >

                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-10 px-5">
                        {phrases.map((phrase, idx) => (
                            <span
                                key={idx}
                                className="text-sm font-black text-white uppercase tracking-[0.3em]"
                            >
                                {phrase}
                            </span>
                        ))}
                    </div>
                ))}
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-blue-600 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-blue-600 to-transparent z-10"></div>
        </div>
    );
}