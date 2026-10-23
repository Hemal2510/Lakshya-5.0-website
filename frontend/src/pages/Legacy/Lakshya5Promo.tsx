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
        className="relative overflow-hidden rounded-2xl border border-[rgba(227,184,109,0.38)] bg-gradient-to-b from-[#1c1209]/95 via-[#130b06]/98 to-[#090503] p-8 md:p-14 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(210,157,68,0.15)]"
      >
        {/* Western Corner Brackets */}
        <span className="lk-card-corners" aria-hidden="true" />

        {/* Inner Ornate Border */}
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-[rgba(227,184,109,0.18)] border-dashed" />

        {/* Ambient Warm Gas-Lamp Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.2)_0%,transparent_70%)] blur-3xl" />

        {/* Top Western Badge */}
        <div className="lk-edition-badge mb-5">
          <span aria-hidden="true">★</span>
          <span>THE NEXT CHAPTER · 5TH GRAND EDITION</span>
          <span aria-hidden="true">★</span>
        </div>

        {/* Title */}
        <h2 className="promo-main-title mt-4">
          <span className="promo-title-light">LAKSHYA</span>{" "}
          <span className="promo-title-gold">5.0</span>
        </h2>

        {/* Ornamental Western Divider */}
        <div className="lk-brand-divider mx-auto my-4" aria-hidden="true">
          <span />
          <b>✥</b>
          <span />
        </div>

        <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#c7b299] font-serif">
          Four editions forged the bedrock — now, we ignite the ultimate frontier proving grounds.
          Lakshya 5.0 returns bigger, bolder, and more fiercely contested than ever at IIT Indore.
        </p>

        {/* Stats Grid (Frontier Bounty Plaques) */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights5.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-[rgba(227,184,109,0.22)] bg-[#140c07]/85 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#ffd580] hover:bg-[#20120a] hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
            >
              <span className="lk-card-corners" aria-hidden="true" />
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(227,184,109,0.35)] bg-[#2b170c]/80 transition-transform group-hover:scale-110 group-hover:border-[#ffd580] shadow-inner">
                {item.icon}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#fff0d0] font-serif">
                {item.value}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs font-semibold tracking-wider text-[#b89f84] font-sans">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/sports"
            className="lk-button lk-button--gold"
          >
            <span>EXPLORE 5.0 ARENAS</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/"
            className="lk-button lk-button--outline"
          >
            RETURN TO CAMPUS HOME
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
