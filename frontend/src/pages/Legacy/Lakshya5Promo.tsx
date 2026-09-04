import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Trophy, Users, Flame, ArrowRight } from "lucide-react";

export default function Lakshya5Promo() {
  const highlights5 = [
    {
      icon: <Users className="w-5 h-5 text-amber-400" />,
      value: "3000+",
      label: "ATHLETES EXPECTED",
    },
    {
      icon: <Trophy className="w-5 h-5 text-orange-400" />,
      value: "20+",
      label: "SPORTING ARENAS",
    },
    {
      icon: <Flame className="w-5 h-5 text-red-400" />,
      value: "60+",
      label: "PREMIER INSTITUTES",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-yellow-300" />,
      value: "₹10L+",
      label: "TOTAL CASH POOL",
    },
  ];

  return (
    <section className="relative my-20 mx-auto max-w-5xl px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-b from-[#1c1109]/90 via-[#120a05]/85 to-[#0a0502]/95 p-8 md:p-14 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(255,120,0,0.15)]"
      >
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-orange-500/20 to-transparent blur-3xl" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wider text-amber-300 shadow-[0_0_20px_rgba(255,140,0,0.2)]">
          <Sparkles className="w-4 h-4 animate-pulse text-amber-400" />
          <span>THE NEXT CHAPTER · 5TH EDITION</span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          LAKSHYA <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-red-500 bg-clip-text text-transparent">5.0</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
          Four editions built the foundation — now, we ignite the ultimate arena. Lakshya 5.0 returns bigger, bolder, and more competitive than ever at IIT Indore.
        </p>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights5.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-orange-500/20 bg-black/40 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-orange-500/50 hover:bg-black/60 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,120,0,0.25)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                {item.value}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/sports"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 px-7 py-3.5 text-sm md:text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,0,0.5)]"
          >
            <span>EXPLORE 5.0 SPORTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/5 px-7 py-3.5 text-sm md:text-base font-semibold text-zinc-200 transition-all duration-300 hover:bg-white/10 hover:border-orange-400/60"
          >
            REGISTER NOW
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
