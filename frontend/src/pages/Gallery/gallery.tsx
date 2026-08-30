import { useState } from "react";
import PendulumTextReveal from "../../components/ui/pendulum.tsx";
import { motion } from "framer-motion";

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

const embers = [
    { left: "8%", size: 3, delay: 0, duration: 6 },
    { left: "18%", size: 5, delay: 1.2, duration: 7.5 },
    { left: "30%", size: 2, delay: 0.5, duration: 5.5 },
    { left: "42%", size: 4, delay: 2, duration: 8 },
    { left: "55%", size: 3, delay: 0.8, duration: 6.5 },
    { left: "67%", size: 5, delay: 1.6, duration: 7 },
    { left: "78%", size: 2, delay: 0.2, duration: 5 },
    { left: "88%", size: 4, delay: 2.4, duration: 7.8 },
];

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <>
            <div
                className="relative flex flex-col items-center justify-center h-[45vh] m-0 p-0 overflow-hidden "
                style={{
                    backgroundImage: `url(${herobg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 text-6xl font-bold text-white"
                >
                    <h1 className="text-[#dd8a20] text-[clamp(120px,9vw,120px)] font-extrabold leading-[1.05] tracking-[0.12em] mt-[20vh] flex justify-center items-center z-10">
                        GALLERY
                    </h1>


                </motion.div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center text-orange-100/60 text-sm tracking-[0.3em] uppercase mt-4"
            >
                <span className="relative z-10 text-orange-200/80 text-xl tracking-[0.35em] uppercase">
                    Scroll to relive it
                </span>
            </motion.p>


            <div className="relative flex flex-col items-center justify-center h-[35vh] m-10 rounded-lg overflow-hidden border border-orange-300/40 ">

            </div>

            <div className="columns-2 sm:columns-3 lg:columns-3 xl:columns-3 gap-4 px-10 pb-10">
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: (item.id % 6) * 0.06 }}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group relative mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer"
                        style={{
                            boxShadow:
                                hoveredId === item.id
                                    ? "0 12px 30px -8px rgba(255,110,60,0.45)"
                                    : "0 1px 3px rgba(0,0,0,0.08)",
                            transition: "box-shadow 0.3s ease",
                        }}
                    >
                        <motion.img
                            src={item.image}
                            alt={`Gallery photo ${item.id}`}
                            loading="lazy"
                            className="w-full block"
                            animate={{
                                scale: hoveredId === item.id ? 1.12 : 1,
                            }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        />


                    </motion.div>
                ))}
            </div>
        </>
    );
}