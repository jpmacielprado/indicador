import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    delay?: number;
}

export const ScrollAnimation = ({ children, delay = 0 }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }} // Começa invisível e 30px abaixo
            whileInView={{ opacity: 1, y: 0 }} // Quando aparece, sobe e fica visível
            viewport={{ once: true, margin: "-100px" }} // Anima apenas uma vez
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Transição suave "premium"
            }}
        >
            {children}
        </motion.div>
    );
};