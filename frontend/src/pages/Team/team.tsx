import FireSealBadge from "../../components/teams/FireSealBadge.tsx";
import TeamInfiniteScroll from "../../components/teams/TeamInfiniteScroll";
import TeamWheel from "../../components/teams/TeamWheel";
import FuzzyText from "../../assets/FuzzyText";
import { motion } from "framer-motion";
import Background from "@/components/background/Background.tsx";

import {
    leadership,
    heads,
    coreMembers,
} from "@/data/teamsData.ts";

export default function Team() {
    return (
        <div className="relative pointer-events-auto min-h-screen text-white overflow-hidden pb-20">
            {/* The Interactive Hexagon Grid Background */}
            <Background />

            <header className="relative z-10 pb-[60px] pt-[140px] text-center max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="flex flex-col items-center"
                >
                    {/* Western Dispatch Ribbon */}
                    <div className="inline-flex items-center gap-2 px-5 py-1.5 mb-4 border-y border-[#d49b55]/60 bg-[#160d07]/95 shadow-[0_0_20px_rgba(212,155,85,0.25)]">
                        <span className="text-xs font-serif font-black tracking-[0.35em] text-[#e0b070] uppercase">
                            ★ ❖ THE FRONTIER LEADERSHIP OF LAKSHYA 5.0 ❖ ★
                        </span>
                    </div>

                    {/* Main Title: Unique Retro Woodcut Serif Typography */}
                    <h1
                        className="bg-gradient-to-r from-[#fff5e6] via-[#ffd066] via-50% to-[#ff8a00] bg-clip-text text-[clamp(46px,8vw,88px)] font-black leading-[1.08] tracking-[0.14em] text-transparent drop-shadow-[0_4px_25px_rgba(255,122,0,0.4)] uppercase"
                        style={{
                            fontFamily: "'Cinzel Decorative', 'Rye', 'Playfair Display', serif",
                        }}
                    >
                        MEET THE TEAM
                    </h1>

                    <p className="mt-2 text-xs sm:text-sm font-serif italic tracking-[0.25em] text-[#e0b070]/90 max-w-lg">
                        — DRIVEN BY RELENTLESS PASSION & EXCELLENCE —
                    </p>
                </motion.div>

                {/* Overall Coordinator & Co-Overall Coordinator */}
                <div className="mt-[55px] mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 items-start justify-items-center">
                    {/* Overall Coordinator */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#ff8a00]" />
                            <FuzzyText
                                baseIntensity={0.12}
                                hoverIntensity={0.3}
                                enableHover
                                fontSize={28}
                                color="#ff8a00"
                            >
                                OVERALL COORDINATOR
                            </FuzzyText>
                            <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#ff8a00]" />
                        </div>

                        <div className="mt-5">
                            <FireSealBadge
                                {...leadership.overallCoordinator}
                                scale={1}
                                eyebrow="OVERALL COORDINATOR"
                            />
                        </div>
                    </div>

                    {/* Co-Overall Coordinator */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#ff8a00]" />
                            <FuzzyText
                                baseIntensity={0.12}
                                hoverIntensity={0.3}
                                enableHover
                                fontSize={28}
                                color="#ff8a00"
                            >
                                CO-OVERALL COORDINATOR
                            </FuzzyText>
                            <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#ff8a00]" />
                        </div>

                        <div className="mt-5">
                            <FireSealBadge
                                {...leadership.coOverallCoordinator}
                                scale={1}
                                eyebrow="CO-OVERALL COORDINATOR"
                            />
                        </div>
                    </div>
                </div>

                {/* General Secretary of Sports */}
                <div className="w-full flex flex-col items-center justify-center mb-[75px]">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#ff8a00]" />
                        <FuzzyText
                            baseIntensity={0.12}
                            hoverIntensity={0.3}
                            enableHover
                            fontSize={28}
                            color="#ff8a00"
                        >
                            GENERAL SECRETARY OF SPORTS
                        </FuzzyText>
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#ff8a00]" />
                    </div>

                    <div className="mt-5">
                        <FireSealBadge
                            {...leadership.generalSecretary}
                            scale={1}
                            eyebrow="GENERAL SECRETARY"
                        />
                    </div>
                </div>

                {/* HEADS SECTION (TeamWheel with Center Lakshya Logo) */}
                <div className="flex flex-col items-center justify-center mt-[70px] mb-[90px]">
                    <div className="flex flex-col items-center mb-12 sm:mb-14">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#ffd066]" />
                            <FuzzyText
                                baseIntensity={0.15}
                                hoverIntensity={0.35}
                                enableHover
                                fontSize={36}
                                color="#ffd066"
                            >
                                HEADS OF COMMITTEES
                            </FuzzyText>
                            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#ffd066]" />
                        </div>
                        <p className="mt-1 text-[11px] sm:text-xs font-serif italic tracking-[0.22em] text-[#d49b55]/80 uppercase">
                            — DIRECTING COMMITTEES & FRONTIER OPERATIONS —
                        </p>
                    </div>

                    <div className="w-full overflow-x-auto overflow-y-visible flex justify-center py-4 px-2">
                        <TeamWheel
                            members={heads}
                            centerImage="/lakshya-logo.png"
                            radius={400}
                            badgeScale={1}
                            size={1150}
                            centerSize={180}
                        />
                    </div>
                </div>

                {/* CORE MEMBERS SECTION (Infinite Marquee) */}
                <div className="flex flex-col items-center justify-center mt-[60px] mb-[40px]">
                    <div className="flex flex-col items-center mb-8">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#ffd066]" />
                            <FuzzyText
                                baseIntensity={0.15}
                                hoverIntensity={0.35}
                                enableHover
                                fontSize={36}
                                color="#ffd066"
                            >
                                CORE TEAM MEMBERS
                            </FuzzyText>
                            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#ffd066]" />
                        </div>
                        <p className="mt-1 text-[11px] sm:text-xs font-serif italic tracking-[0.22em] text-[#d49b55]/80 uppercase">
                            — THE PILLARS OF EXCELLENCE & DEDICATION —
                        </p>
                    </div>

                    <TeamInfiniteScroll
                        members={coreMembers}
                        speed={45}
                        cardScale={0.95}
                    />
                </div>
            </header>
        </div>
    );
}
