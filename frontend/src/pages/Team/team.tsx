import React from "react";
import ShapeGrid from "../../components/ShapeGrid";
import FireSealBadge from "../../components/FireSealBadge";
import TeamInfiniteScroll from "../../components/TeamInfiniteScroll";
import FireHexBadge from "../../components/FireHexBadge";
import TeamWheel from "../../components/TeamWheel";
import FuzzyText from "../../assets/FuzzyText";
import { motion } from "framer-motion";



const team = [
    {
        name: "member1",
        role: "OC1",
        photoUrl: "",
        socials: [{ label: "LinkedIn", href: "#", icon: "linkedin" }],
    },
    {
        name: "member 2",
        role: "OC2",
        photoUrl: "/photos/.jpg",
    },
    {
        name: "member 3",
        role: "role",
        photoUrl: "",
    },
    {
        name: "member 4",
        role: "role",
        photoUrl: "/photosjpg",
    },
    {
        name: "member 5",
        role: "role",
        photoUrl: "",
    },
    {
        name: "member 6",
        role: "role",
        photoUrl: "",
    },
    {
        name: "member 7",
        role: "role",
        photoUrl: "",
    },
    {
        name: "member 8",
        role: "role",
        photoUrl: "",
    },
];


export default function Team() {
    return (
        <div className="relative">

        <div className="absolute top-0 left-0 w-full h-full">
                <ShapeGrid
                    speed={0.5}
                    squareSize={23}
                    direction="up"
                    borderColor="#600707"
                    hoverFillColor="#c3621f"
                    shape="hexagon"
                    hoverTrailAmount={2}
                />
            </div>

            <div className="relative pointer-events-auto">

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



                    <div className="flex justify-center mt-[50px] mb-[50px] text-[40px]">

                        <FuzzyText
                            baseIntensity={0.1}
                            hoverIntensity={0.2}
                            enableHover
                            fontSize={40}
                        >


                            OVERALL CORDINATORS



                        </FuzzyText>
                    </div>



                    <FireSealBadge
                        eyebrow="LAKSHAYA · 2026"
                        name="oc1"
                        role="Team Lead"
                        photoUrl=""
                        socials={[
                            { label: "LinkedIn", href: ".", icon: "linkedin" },
                            { label: "GitHub", href: "", icon: "github" },

                        ]}
                        scale={0.8}
                    />
                    <FireSealBadge
                        eyebrow="LAKSHAYA · 2026"
                        name="oc2"
                        role="Team Lead"
                        photoUrl=""
                        socials={[
                            { label: "LinkedIn", href: ".", icon: "linkedin" },
                            { label: "GitHub", href: "", icon: "github" },

                        ]}
                        scale={0.8}

                    />

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
                    <TeamWheel members={team} centerImage="../../assets/lakshya-flame.jpg" radius={400} badgeScale={0.7} />

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
                    <TeamInfiniteScroll members={team} speed={40} cardScale={0.8} />;






                </header>






            </div >
        </div >


    );
}

