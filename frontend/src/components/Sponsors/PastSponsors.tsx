import React from "react";
import { PAST_SPONSORS } from "./SponsorsData";
import { SponsorBoardCard } from "./SponsorBoardCard";
import "./Sponsors.css";

export const PastSponsors: React.FC = () => {
    const titleSponsor = PAST_SPONSORS.find((s) => s.tier === "title");
    const categorySponsors = PAST_SPONSORS.filter((s) => s.tier === "category");
    const associateSponsors = PAST_SPONSORS.filter((s) => s.tier === "associate");

    return (
        <div className="western-sponsors-page w-full min-h-screen text-[#f3e5ab] relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
            {/* Ambient Background Glows & Western Dust Particles */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(217,119,6,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />
            <div className="absolute top-[40%] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(180,83,9,0.08)_0%,transparent_70%)] pointer-events-none blur-2xl" />
            <div className="absolute top-[65%] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,119,6,0.08)_0%,transparent_70%)] pointer-events-none blur-2xl" />

            {/* Page Header Section */}
            <div className="max-w-5xl mx-auto text-center relative z-10 pt-6 pb-12">
                {/* Western Star & Saloon Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23140a]/80 border border-[#8c6534]/50 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-['Cinzel'] mb-5 shadow-md">
                    <span>★</span>
                    <span>HALL OF ALLIES</span>
                    <span>★</span>
                </div>

                {/* Hero Title */}
                <h1
                    className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider uppercase text-[#fdf6e2] font-['Cinzel_Decorative'] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                    style={{ textShadow: "0 2px 10px rgba(245, 158, 11, 0.25), 0 0 20px rgba(0,0,0,0.8)" }}
                >
                    Past Sponsors
                </h1>

                {/* Western Subtitle */}
                <p className="mt-4 text-base sm:text-lg text-[#c2a67e] max-w-2xl mx-auto font-['Space_Grotesk'] leading-relaxed">
                    Honoring the stalwart brands and loyal partners who fueled the fire across past editions of Lakshya.
                </p>

                {/* Western Filigree Divider */}
                <div className="flex items-center justify-center gap-3 my-8 opacity-80">
                    <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#b8860b] to-[#d4af37]" />
                    <span className="text-[#ffd580] text-sm tracking-widest font-serif">♦ ★ ♦</span>
                    <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#b8860b] to-[#d4af37]" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-20 pb-20">
                {/* 1. TITLE SPONSOR (GRAND MASTER CENTERPIECE) */}
                {titleSponsor && (
                    <section className="flex flex-col items-center justify-center title-sponsor-pedestal">
                        <div className="western-banner-ribbon mb-8">
                            <span className="font-['Cinzel'] font-bold text-sm sm:text-base text-[#ffd580] tracking-[0.2em] uppercase">
                                ★ Grand Title Patron ★
                            </span>
                        </div>

                        <div className="p-4 sm:p-6 rounded-3xl bg-radial from-[#2a170c]/60 to-transparent border border-[#b8860b]/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-[2px]">
                            <SponsorBoardCard
                                sponsor={titleSponsor}
                                size="title"
                                className="scale-105"
                            />
                        </div>
                    </section>
                )}

                {/* 2. CATEGORY PARTNERS (ORGANIC STAGGERED ROW LAYOUT) */}
                {categorySponsors.length > 0 && (
                    <section className="space-y-8">
                        <div className="text-center">
                            <div className="western-banner-ribbon">
                                <span className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#ffd580] tracking-[0.2em] uppercase">
                                    ★ Key Category Partners ★
                                </span>
                            </div>
                        </div>

                        {/* Staggered Row Container */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 items-center justify-center max-w-6xl mx-auto pt-4">
                            {categorySponsors.map((sponsor, index) => {
                                // Organic staggered vertical offsets for visual natural saloon look
                                const offsetClass = index % 2 === 1 ? "sm:translate-y-4" : "sm:-translate-y-2";
                                return (
                                    <div
                                        key={sponsor.id}
                                        className={`flex justify-center transition-transform duration-500 ${offsetClass}`}
                                    >
                                        <SponsorBoardCard
                                            sponsor={sponsor}
                                            size="regular"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* 3. ASSOCIATE PARTNERS (ORGANIC TRAIL LINUPE) */}
                {associateSponsors.length > 0 && (
                    <section className="space-y-8 pt-6">
                        <div className="text-center">
                            <div className="western-banner-ribbon">
                                <span className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#ffd580] tracking-[0.2em] uppercase">
                                    ★ Frontier Associates ★
                                </span>
                            </div>
                        </div>

                        {/* Staggered Row / Grid for Associates */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center max-w-5xl mx-auto pt-2">
                            {associateSponsors.map((sponsor, index) => {
                                const offsetClass = index % 3 === 1 ? "translate-y-3" : index % 3 === 2 ? "-translate-y-2" : "translate-y-0";
                                return (
                                    <div
                                        key={sponsor.id}
                                        className={`flex justify-center transition-transform duration-500 ${offsetClass}`}
                                    >
                                        <SponsorBoardCard
                                            sponsor={sponsor}
                                            size="compact"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default PastSponsors;
