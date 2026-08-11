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

const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14, photo15,
    photo16, photo17, photo18, photo19, photo20,
];

const galleryItems = photos.map((photo, index) => ({
    id: index + 1,
    image: photo,
}));

export default function Gallery() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="text-6xl font-bold text-white"
            >
                <h1
                    className="bg-gradient-to-r from-[#2b0e05] from-0% via-[#995218] via-40% to-[#340202] bg-clip-text text-[clamp(48px,9vw,96px)] font-extrabold leading-[1.05] tracking-[0.12em] text-transparent mt-[20vh] flex justify-center items-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #e9e6df 0%, #e9e6df 40%, #ffb15e 65%, #ff4d4d 100%)",
                    }}
                >
                    GALLERY
                </h1>
            </motion.div>

            <div className="flex flex-col items-center h-[35vh] justify-center border-3 rounded-lg border-orange-300 m-10 border-glow">
            </div>

            <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 px-10 pb-10">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-sm bg-white"
                    >
                        <img
                            src={item.image}
                            alt={`Gallery photo ${item.id}`}
                            loading="lazy"
                            className="w-full block"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}