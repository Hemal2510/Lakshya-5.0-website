import React from "react";

import FireSealBadge from "../../components/teams/FireSealBadge.tsx";
import TeamInfiniteScroll from "../../components/teams/TeamInfiniteScroll";
import FireHexBadge from "../../components/teams/FireHexBadge";
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



            <div className="relative pointer-events-auto">

                <Background />

                <header className=" pb-[70px] pt-[180px] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="text-6xl font-bold text-white"
                    >
                        <div className="mb-[22px] text-xs font-semibold tracking-[0.25em] text-[#ff7a3d]">
                            THE ONES BEHIND LAKSHAYA
                        </div>

                        <h1
                            className="bg-gradient-to-r from-[#e9e6df] from-0% via-[#e9e6df] via-40% to-[#ff4d4d] bg-clip-text text-[clamp(48px,9vw,96px)] font-extrabold leading-[1.05] tracking-[0.12em] text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #e9e6df 0%, #e9e6df 40%, #ffb15e 65%, #ff4d4d 100%)",
                            }}
                        >

                            MEET THE
                            TEAM
                        </h1>
                    </motion.div>


                    <div className="mt-[50px] mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Overall Coordinator */}
                        <div className="flex flex-col items-center">
                            <FuzzyText
                                baseIntensity={0.1}
                                hoverIntensity={0.2}
                                enableHover
                                fontSize={40}
                            >
                                OVERALL COORDINATOR
                            </FuzzyText>

                            <div className="mt-10">
                                <FireSealBadge
                                    eyebrow="LAKSHAYA · 2026"
                                    {...leadership.overallCoordinator}
                                    scale={0.8}
                                />
                            </div>
                        </div>

                        {/* Co-Overall Coordinator */}
                        <div className="flex flex-col items-center">
                            <FuzzyText
                                baseIntensity={0.1}
                                hoverIntensity={0.2}
                                enableHover
                                fontSize={40}
                            >
                                CO-OVERALL COORDINATOR
                            </FuzzyText>

                            <div className="mt-10">
                                <FireSealBadge
                                    eyebrow="LAKSHAYA · 2026"
                                    {...leadership.coOverallCoordinator}
                                    scale={0.8}
                                    />
                            </div>
                        </div>



                    </div>

                    {/* General Secretary of Sports */}
                    <div className="w-full flex flex-col items-center justify-center mb-[60px]">

                        <FuzzyText
                            baseIntensity={0.1}
                            hoverIntensity={0.2}
                            enableHover
                            fontSize={36}
                        >
                            GENERAL SECRETARY OF SPORTS
                        </FuzzyText>

                        <div className="mt-10">
                            <FireSealBadge
                                eyebrow="LAKSHAYA · 2026"
                                {...leadership.generalSecretary}
                                scale={0.8}
                            />
                        </div>

                    </div>

                    <div className="flex justify-center mt-[50px] mb-[200px]">

                        <FuzzyText
                            baseIntensity={0.1}
                            hoverIntensity={0.2}
                            enableHover
                            fontSize={40}
                        >


                            HEADS



                        </FuzzyText>
                    </div>
                    <TeamWheel members={heads} centerImage="../../assets/lakshya-flame.jpg" radius={400} badgeScale={0.7} />

                    <div className="flex justify-center mt-[50px] mb-[50px]">

                        <FuzzyText
                            baseIntensity={0.1}
                            hoverIntensity={0.2}
                            enableHover
                            fontSize={40}
                        >


                            CORE MEMBERS



                        </FuzzyText>
                    </div>
                    <TeamInfiniteScroll members={coreMembers} speed={40} cardScale={0.8} />;






                </header>






            </div >



    );
}

