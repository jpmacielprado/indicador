import { motion } from 'framer-motion';
import { BackgroundGrid } from './ui';

export default function Footer() {
    return (
        <>
            <div className="relative w-full overflow-hidden">
                <div className="w-full h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />
                <motion.div
                    className="absolute top-0 h-px w-48 bg-linear-to-r from-transparent via-cyan-400/40 to-transparent"
                    animate={{ left: ['-20%', '120%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                />
            </div>
            <footer className="relative bg-[#020617] py-10 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em] overflow-hidden">
                <BackgroundGrid opacity={0.015} />
                <span className="relative z-10">© 2026 INDICADOR - Trading Analytics Systems</span>
            </footer>
        </>
    );
}
