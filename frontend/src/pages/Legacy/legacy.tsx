import "./Legacy.css";
import TimelineSection from "./TimelineSection.tsx";
import Lakshya5Promo from "./Lakshya5Promo.tsx";
import { Trophy, Calendar, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: <Calendar size={30} className="text-[#ffd580]" />,
    value: "4",
    title: "YEARS OF VALOR",
    desc: "Four glorious editions etched into the frontier archives.",
  },
  {
    icon: <Users size={30} className="text-[#ffd580]" />,
    value: "2500+",
    title: "FRONTIER ATHLETES",
    desc: "Brave contenders competing across every arena.",
  },
  {
    icon: <Zap size={30} className="text-[#ffd580]" />,
    value: "20+",
    title: "SPORTING ARENAS",
    desc: "Fierce duels, matches, and championship showdowns.",
  },
  {
    icon: <Trophy size={30} className="text-[#ffd580]" />,
    value: "50+",
    title: "PREMIER INSTITUTES",
    desc: "Contingents enlisting from all across the territory.",
  },
];

export default function Legacy() {
  return (
    <section className="legacy-section relative select-none">
      {/* =========================================================================
          WARM & BRIGHT RETRO WESTERN BACKGROUND
      ========================================================================= */}
      <div className="legacy-bg-backdrop">
        {/* Warm Saloon & Sunset Canyon Radial Glows */}
        <div className="legacy-bg-glow" />

        {/* Subtle Horizontal Timber / Railway Track Lines */}
        <div className="legacy-bg-stripes" />
      </div>

      {/* =========================================================================
          HERO SECTION (WESTERN DISPATCH BANNER)
      ========================================================================= */}
      <div className="legacy-hero relative z-10">
        {/* Top Western Badge */}
        <div className="legacy-badge">
          <span className="badge-star">★</span>
          <span>THE HISTORIC ARCHIVES · IIT INDORE</span>
          <span className="badge-star">★</span>
        </div>

        {/* Main Western Title */}
        <h1 className="legacy-main-title">
          LEGACY OF <span className="gold-text">EXCELLENCE</span>
        </h1>

        {/* Woodcut Decorative Divider */}
        <div className="flex justify-center items-center gap-3 my-4 text-[#a35e2b] text-sm font-serif select-none">
          <span>════════════</span>
          <span className="text-[#ffd580] text-lg">❖</span>
          <span>════════════</span>
        </div>

        <p className="legacy-hero-desc">
          Four editions of raw grit, relentless determination, and unforgettable sporting
          glory that paved the road for every athlete stepping onto our proving grounds.
        </p>
      </div>

      {/* =========================================================================
          STATS GRID (SALOON LEDGER PLAQUES)
      ========================================================================= */}
      <div className="stats-grid relative z-10">
        {stats.map((card, index) => (
          <div className="stat-card" key={index}>
            {/* Corner Brass Star Rivets */}
            <span className="card-rivet top-left">★</span>
            <span className="card-rivet top-right">★</span>
            <span className="card-rivet bottom-left">★</span>
            <span className="card-rivet bottom-right">★</span>

            {/* Inner Border */}
            <div className="stat-card-inner-border" />

            <div className="icon-box">
              {card.icon}
            </div>

            <h2 className="stat-value">{card.value}</h2>

            <h4 className="stat-title">{card.title}</h4>

            <p className="stat-desc">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* =========================================================================
          TIMELINE SECTION (RAILWAY & REVOLVER CYLINDER)
      ========================================================================= */}
      <TimelineSection />

      {/* =========================================================================
          LAKSHYA 5.0 PROCLAMATION (GOLD-RUSH PROMO)
      ========================================================================= */}
      <Lakshya5Promo />
    </section>
  );
}