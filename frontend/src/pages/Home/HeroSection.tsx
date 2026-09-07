import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import TextType from "@/components/ui/TextType.tsx";
import WesternCountdown from "./WesternCountdown";
import NightSkyBackdrop from "./NightSkyBackdrop";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <section className="western-hero-section relative select-none">
            {/* ========================================================
                1. HANDCRAFTED CRYSTAL-SHARP NIGHT SKY BACKDROP
            ======================================================== */}
            <NightSkyBackdrop />

            {/* ========================================================
                2. AMBIENT VIGNETTE & SMOOTH PAGE BLEND
            ======================================================== */}
            <div className="starry-hero-vignette" />

            {/* ========================================================
                3. MAIN HERO CENTERPIECE
            ======================================================== */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto text-center pt-8">

                {/* Western Top Star Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="western-top-badge"
                >
                    <span className="text-[#ffd580]">★</span>
                    <span>5TH EDITION · IIT INDORE ATHLETIC EXPEDITION</span>
                    <span className="text-[#ffd580]">★</span>
                </motion.div>

                {/* Grand Lakshya Blue Torch Logo Emblem */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="emblem-wrapper"
                >
                    <div className="emblem-sunburst-halo" />
                    <img
                        src="/lakshya-logo-blue.png"
                        alt="Lakshya 5.0 Blue Torch Emblem"
                        className="western-logo-img w-36 sm:w-44 md:w-50 lg:w-54 object-contain"
                    />
                </motion.div>

                {/* Chiseled Woodcut Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="western-hero-title"
                >
                    LAKSHYA 5.0
                </motion.h1>

                {/* Animated Typewriter Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="western-typewriter-wrapper"
                >
                    <TextType
                        text={[
                            "Central India's Largest Sports Fest",
                            "Chase What Lies Beyond",
                            "Where Champions Forge Their Legacy",
                        ]}
                        typingSpeed={45}
                        deletingSpeed={25}
                        pauseDuration={2400}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </motion.div>

                {/* Woodcut Decorative Star Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="western-woodcut-divider select-none"
                >
                    <span>════════════</span>
                    <span className="text-[#ffd580] text-base">❖</span>
                    <span>════════════</span>
                </motion.div>

                {/* Western Saloon Mechanical Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <WesternCountdown />
                </motion.div>

                {/* Call-to-Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="western-cta-row"
                >
                    {/* Primary Registration Button */}
                    <button className="western-primary-btn group">
                        <span>REGISTER FOR FEST</span>
                        <ArrowRight className="w-4 h-4 text-[#ffd580] group-hover:translate-x-1.5 transition-transform" />
                    </button>

                    {/* Secondary Explore Sports Button */}
                    <Link to="/sports" className="western-secondary-btn group">
                        <Compass className="w-4 h-4 text-[#60a5fa] group-hover:rotate-45 transition-transform" />
                        <span>EXPLORE ARENA</span>
                    </Link>
                </motion.div>
            </div>

            {/* ========================================================
                4. SCROLL DOWN INDICATOR
            ======================================================== */}
            <div className="western-scroll-indicator">
                <span className="scroll-text">DESCEND INTO ARENA</span>
                <ChevronDown size={22} className="text-[#d49b55] animate-bounce" />
            </div>
        </section>
    );
}