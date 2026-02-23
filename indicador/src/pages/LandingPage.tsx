import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { SectionDivider } from '../components/landing/ui';
import HeroSection      from '../components/landing/HeroSection';
import FeaturesSection  from '../components/landing/FeaturesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import PartnersSection  from '../components/landing/PartnersSection';
import PricingSection   from '../components/landing/PricingSection';
import FaqSection       from '../components/landing/FaqSection';
import Footer           from '../components/landing/Footer';

export default function LandingPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen text-white font-sans bg-linear-to-br from-[#020617] to-[#0f172a] overflow-x-hidden">

            {/* Global cursor glow */}
            <motion.div
                className="fixed pointer-events-none z-0 rounded-full"
                style={{
                    width: 600,
                    height: 600,
                    x: mousePos.x - 300,
                    y: mousePos.y - 300,
                    background: 'radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)',
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            />

            <HeroSection />
            <SectionDivider />

            <FeaturesSection />
            <SectionDivider />

            <HowItWorksSection />
            <SectionDivider />

            <Banner />
            <SectionDivider />

            <PartnersSection />
            <SectionDivider />

            <PricingSection />
            <SectionDivider />

            <FaqSection />

            <Footer />
        </div>
    );
}
