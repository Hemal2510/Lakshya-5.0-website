import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Camera } from "lucide-react";

import photo1 from "../../data/TeamsPhoto/photo1.jpeg";
import photo2 from "../../data/TeamsPhoto/photo2.jpeg";
import photo3 from "../../data/TeamsPhoto/photo3.jpeg";
import photo4 from "../../data/TeamsPhoto/photo4.jpeg";
import photo5 from "../../data/TeamsPhoto/photo5.jpeg";
import photo6 from "../../data/TeamsPhoto/photo6.jpeg";
import photo7 from "../../data/TeamsPhoto/photo7.jpeg";
import photo8 from "../../data/TeamsPhoto/photo8.jpeg";
import photo9 from "../../data/TeamsPhoto/photo9.jpeg";
import photo10 from "../../data/TeamsPhoto/photo10.jpeg";
import photo11 from "../../data/TeamsPhoto/photo11.jpeg";
import photo12 from "../../data/TeamsPhoto/photo12.jpeg";
import photo13 from "../../data/TeamsPhoto/photo13.jpeg";
import photo14 from "../../data/TeamsPhoto/photo14.jpeg";
import photo15 from "../../data/TeamsPhoto/photo15.jpeg";
import photo16 from "../../data/TeamsPhoto/photo16.jpeg";
import photo17 from "../../data/TeamsPhoto/photo17.jpeg";
import photo18 from "../../data/TeamsPhoto/photo18.jpeg";
import photo19 from "../../data/TeamsPhoto/photo19.jpeg";
import photo20 from "../../data/TeamsPhoto/photo20.jpeg";
import photo21 from "../../data/TeamsPhoto/photo21.jpeg";
import photo22 from "../../data/TeamsPhoto/photo22.jpeg";
import photo23 from "../../data/TeamsPhoto/photo23.jpeg";
import photo24 from "../../data/TeamsPhoto/photo24.jpeg";
import photo25 from "../../data/TeamsPhoto/photo25.jpeg";
import photo26 from "../../data/TeamsPhoto/photo26.jpeg";
import photo27 from "../../data/TeamsPhoto/photo27.jpeg";
import herobg from "../../data/TeamsPhoto/collage.png";

const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14, photo15,
    photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25,
    photo26, photo27
];

const galleryItems = photos.map((photo, index) => ({
    id: index + 1,
    image: photo,
}));

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#090909] text-white">
            {/* Top Hero Banner with Navbar Clearance */}
            <div
                className="relative flex flex-col items-center justify-center min-h-[48vh] md:min-h-[55vh] pt-32 pb-16 px-4 overflow-hidden"
                style={{
                    backgroundImage: `url(${herobg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Gradient overlay for navbar contrast & readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#090909] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center text-center mt-6"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-widest text-amber-300 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(255,140,0,0.15)]">
                        <Camera className="w-4 h-4 text-amber-400" />
                        <span>CAPTURED MOMENTS</span>
                    </div>

                    <h1 className="bg-gradient-to-r from-amber-200 via-orange-400 to-red-500 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider uppercase drop-shadow-[0_4px_25px_rgba(255,140,0,0.3)]">
                        GALLERY
                    </h1>

                    <p className="mt-3 text-orange-200/80 text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] uppercase">
                        Scroll to relive the spirit & intensity
                    </p>
                </motion.div>
            </div>

            {/* Featured Creative Team Collage Container (Expanded Height) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 my-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex flex-col items-center justify-center min-h-[55vh] md:min-h-[62vh] rounded-3xl overflow-hidden border-2 border-dashed border-orange-500/30 bg-gradient-to-b from-[#180e07]/70 via-[#100904]/80 to-[#0a0502]/90 backdrop-blur-md shadow-[0_0_40px_rgba(255,120,0,0.12)] p-6 text-center group"
                >
                    <div className="pointer-events-none absolute inset-0 bg-radial from-orange-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 border border-orange-500/30 shadow-[0_0_20px_rgba(255,120,0,0.3)]">
                            <Sparkles className="w-7 h-7 text-amber-400 animate-pulse" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                            Featured Creative Collage Spotlight
                        </h3>
                        <p className="max-w-md text-xs sm:text-sm text-zinc-400">
                            Upcoming high-res showcase banner designed by the Lakshya Creative Team.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Pinterest-Style Masonry Photo Grid */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pb-20">
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: (item.id % 4) * 0.05 }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-[#161616] border border-white/5 cursor-pointer transition-all duration-300"
                            style={{
                                boxShadow:
                                    hoveredId === item.id
                                        ? "0 16px 36px -8px rgba(255,120,30,0.45)"
                                        : "0 4px 12px rgba(0,0,0,0.4)",
                            }}
                        >
                            <motion.img
                                src={item.image}
                                alt={`Lakshya moment ${item.id}`}
                                loading="lazy"
                                className="w-full h-auto block object-cover"
                                animate={{
                                    scale: hoveredId === item.id ? 1.08 : 1,
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />

                            {/* Subtle Ambient Hover Glow Overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}