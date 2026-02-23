
import { motion } from 'framer-motion';

export const GlowOrb = ({ className }: { className?: string }) => (
    <div className={`absolute rounded-full pointer-events-none select-none blur-[120px] opacity-[0.18] ${className}`} />
);

export const SectionDivider = () => (
    <div className="relative w-full h-px overflow-hidden">
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-700/70 to-transparent" />
        <motion.div
            className="absolute top-0 left-0 h-px w-32 bg-linear-to-r from-transparent via-cyan-400/60 to-transparent"
            animate={{ x: ['0%', '400%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: '-10%' }}
        />
    </div>
);

export const BackgroundGrid = ({ opacity = 0.03 }: { opacity?: number }) => (
    <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
            backgroundImage: `
                linear-gradient(rgba(34,211,238,${opacity}) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,${opacity}) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
        }}
    />
);

export const NoiseLayer = ({ opacity = 0.025 }: { opacity?: number }) => (
    <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            opacity,
            mixBlendMode: 'overlay' as const,
        }}
    />
);

export const ScanLine = () => (
    <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none select-none z-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.12), transparent)' }}
        animate={{ top: ['-5%', '105%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
    />
);

export const AnimatedGlowLine = ({ className }: { className?: string }) => (
    <div className={`relative overflow-hidden ${className}`}>
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />
        <motion.div
            className="absolute top-0 h-px w-24 bg-linear-to-r from-transparent via-cyan-400 to-transparent"
            animate={{ left: ['-20%', '120%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
        />
    </div>
);

export const CornerAccent = ({
    position = 'tl',
    color = 'cyan',
}: {
    position?: 'tl' | 'tr' | 'bl' | 'br';
    color?: string;
}) => {
    const posClass = {
        tl: 'top-0 left-0',
        tr: 'top-0 right-0 rotate-90',
        bl: 'bottom-0 left-0 -rotate-90',
        br: 'bottom-0 right-0 rotate-180',
    }[position];

    return (
        <div className={`absolute w-5 h-5 pointer-events-none ${posClass}`}>
            <div className={`absolute top-0 left-0 w-full h-px bg-${color}-400/60`} />
            <div className={`absolute top-0 left-0 h-full w-px bg-${color}-400/60`} />
        </div>
    );
};

export const AbstractShape = ({ className }: { className?: string }) => (
    <svg
        className={`absolute pointer-events-none select-none ${className}`}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M40,20 L160,20 L180,40 L180,160 L160,180 L40,180 L20,160 L20,40 Z" stroke="rgba(34,211,238,0.07)" strokeWidth="1" />
        <path d="M60,20 L60,180 M140,20 L140,180 M20,60 L180,60 M20,140 L180,140" stroke="rgba(34,211,238,0.04)" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
    </svg>
);

export const FloatingParticle = ({
    x,
    y,
    delay,
    size = 2,
}: {
    x: string;
    y: string;
    delay: number;
    size?: number;
}) => (
    <motion.div
        className="absolute rounded-full pointer-events-none select-none"
        style={{ left: x, top: y, width: size, height: size, background: 'rgba(34,211,238,0.5)' }}
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
);

export const LivePulse = () => (
    <span className="relative inline-flex items-center justify-center w-2 h-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
    </span>
);

export const SectionLabel = ({ text }: { text: string }) => (
    <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-px bg-linear-to-r from-transparent to-slate-600" />
        <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">{text}</span>
        <div className="w-12 h-px bg-linear-to-l from-transparent to-slate-600" />
    </div>
);
