import React, { useState } from "react";
import type { SponsorItem } from "./SponsorsData";
import "./Sponsors.css";

interface SponsorBoardCardProps {
    sponsor: SponsorItem;
    size?: "title" | "regular" | "compact";
    className?: string;
}

export const SponsorBoardCard: React.FC<SponsorBoardCardProps> = ({
    sponsor,
    size = "regular",
    className = ""
}) => {
    const [imageError, setImageError] = useState(false);

    // Dimension presets for target plates
    const cardDimensions = {
        title: "w-56 h-56 sm:w-64 sm:h-64",
        regular: "w-44 h-44 sm:w-48 sm:h-48",
        compact: "w-36 h-36 sm:w-40 sm:h-40"
    }[size];

    return (
        <div
            className={`sponsor-card-container group select-none ${className}`}
            tabIndex={0}
        >
            {/* 1. Square Sponsor Card: Spins Fast INWARD into Laptop (-720deg) */}
            <div className={`sponsor-target-stage ${cardDimensions}`}>
                <div className="sponsor-target-card">
                    {/* Front Face: The Clean Sponsor Logo */}
                    <div className="sponsor-target-face sponsor-target-front">
                        {!imageError ? (
                            <img
                                src={sponsor.src}
                                alt={`${sponsor.desc} logo`}
                                className="w-full h-full object-contain p-3 rounded-xl filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            /* Fallback typography badge when image is not present */
                            <div className="flex flex-col items-center justify-center text-center p-3">
                                <span className="text-[#f59e0b] text-base font-serif mb-1">★</span>
                                <span className="font-['Cinzel'] font-bold text-[#f3e5ab] text-sm tracking-wider uppercase line-clamp-2 px-1 leading-tight">
                                    {sponsor.name}
                                </span>
                                <span className="text-[10px] text-[#b89768] font-mono tracking-widest uppercase mt-1 opacity-80">
                                    {sponsor.desc}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Back Face: Western Forged Steel Target Plate (Visible during 3D Flip) */}
                    <div className="sponsor-target-face sponsor-target-back">
                        <div className="flex flex-col items-center justify-center text-center p-4">
                            <span className="text-[#ffd580] text-2xl font-serif">★</span>
                            <span className="font-['Cinzel'] font-bold text-[#f3e5ab] text-xs uppercase tracking-[0.2em] mt-1.5">
                                LAKSHYA 5.0
                            </span>
                            <span className="text-[9px] text-[#b89768] font-mono tracking-widest mt-0.5 opacity-75">
                                TARGET HIT
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Sponsor Type Plate: Only what kind of sponsor, spins OUTWARD (+720deg), color shifts from White to Golden */}
            <div className="mt-3.5 w-full flex justify-center overflow-visible">
                <div className="sponsor-heading-plate text-center select-none">
                    <span className="sponsor-category-badge">
                        {sponsor.desc}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SponsorBoardCard;
