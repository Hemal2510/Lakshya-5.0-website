import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Users, Shield, ArrowRight, Award } from "lucide-react";

export default function Lakshya5Promo() {
  const highlights5 = [
    {
      icon: <Users className="w-5 h-5 text-[#f5c879]" />,
      value: "3000+",
      label: "FRONTIER ATHLETES",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#f5c879]" />,
      value: "20+",
      label: "SPORTING ARENAS",
    },
    {
      icon: <Award className="w-5 h-5 text-[#f5c879]" />,
      value: "60+",
      label: "PREMIER INSTITUTES",
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#f5c879]" />,
      value: "₹10L+",
      label: "TOTAL BOUNTY POOL",
    },
  ];

  return (
    <section className="relative my-24 mx-auto max-w-5xl px-4 z-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border-2 border-[#8c531b]/60 bg-gradient-to-b from-[#1c120a]/95 via-[#130b06]/95 to-[#0a0502]/98 p-8 md:p-14 text-center backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(184,84,31,0.15)]"
      >
        {/* Ornate Corner Star Rivets */}
        <span className="card-rivet top-left">★</span>
        <span className="card-rivet top-right">★</span>
        <span className="card-rivet bottom-left">★</span>
        <span className="card-rivet bottom-right">★</span>

        {/* Inner Ornate Border */}
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#d49b55]/20 border-dashed" />

        {/* Ambient Warm Gas-Lamp Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-[#b8541f]/25 to-transparent blur-3xl" />

        {/* Top Western Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d49b55]/40 bg-[#3d2010]/60 px-5 py-1.5 text-xs md:text-sm font-semibold tracking-widest text-[#fce09b] shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          <span className="text-[#f5c879]">★</span>
          <span style={{ fontFamily: "'Cinzel', serif" }}>THE NEXT CHAPTER · 5TH GRAND EDITION</span>
          <span className="text-[#f5c879]">★</span>
        </div>

        {/* Title */}
        <h2
          className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-wider text-[#fff4df]"
          style={{ fontFamily: "'Cinzel Decorative', 'Rye', serif" }}
        >
          LAKSHYA <span className="gold-text">5.0</span>
        </h2>

        {/* Woodcut Decorative Divider */}
        <div className="flex justify-center items-center gap-3 my-4 text-[#8a4a22]/80 text-sm font-serif select-none">
          <span>════════════</span>
          <span className="text-[#d49b55] text-lg">❖</span>
          <span>════════════</span>
        </div>

        <p
          className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#c7b299]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Four editions built the foundation — now, we ignite the ultimate frontier proving grounds.
          Lakshya 5.0 returns bigger, bolder, and more fiercely contested than ever at IIT Indore.
        </p>

        {/* Stats Grid (Frontier Bounty Plaques) */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights5.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-[#6b3c14]/50 bg-[#160d07]/80 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#d49b55]/70 hover:bg-[#20130a]/90 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#8c531b]/40 bg-[#2b170c]/80 transition-transform group-hover:scale-110 group-hover:border-[#d49b55]">
                {item.icon}
              </div>
              <div
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#fff0d0]"
                style={{ fontFamily: "'Cinzel', 'Rye', serif" }}
              >
                {item.value}
              </div>
              <div
                className="mt-1 text-[10px] sm:text-xs font-semibold tracking-wider text-[#a88d72]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/sports"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#d49b55] via-[#f5c879] to-[#b88339] px-8 py-3.5 text-sm md:text-base font-black text-[#1c1109] tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,200,121,0.4)] border border-[#ffd580]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span>EXPLORE 5.0 ARENAS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#8c531b] bg-[#24150b]/80 px-8 py-3.5 text-sm md:text-base font-bold text-[#e6c594] tracking-wider transition-all duration-300 hover:bg-[#382011] hover:border-[#d49b55] hover:text-[#fff]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            REGISTER NOW
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
