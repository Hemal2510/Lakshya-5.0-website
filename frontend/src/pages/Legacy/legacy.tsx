import "./legacy.css";
import TimelineSection from "./TimelineSection.tsx";
import Lakshya5Promo from "./Lakshya5Promo.tsx";
import { Trophy, Calendar, Users, Zap } from "lucide-react";
import legacyFrontierBg from "@/assets/legacy-frontier-bg.jpg";

const stats = [
  {
    icon: <Calendar size={28} className="text-[#ffd580]" />,
    value: "4",
    title: "YEARS OF VALOR",
    desc: "Four glorious chapters etched into the frontier archives.",
  },
  {
    icon: <Users size={28} className="text-[#ffd580]" />,
    value: "2500+",
    title: "FRONTIER ATHLETES",
    desc: "Brave contenders battling across every competitive arena.",
  },
  {
    icon: <Zap size={28} className="text-[#ffd580]" />,
    value: "20+",
    title: "SPORTING ARENAS",
    desc: "High-stakes showdowns, duels, and championship bouts.",
  },
  {
    icon: <Trophy size={28} className="text-[#ffd580]" />,
    value: "50+",
    title: "PREMIER INSTITUTES",
    desc: "Contingents enlisting from every corner of the nation.",
  },
];

export default function Legacy() {
  return (
    <section className="legacy-section relative select-none">
      {/* =========================================================================
          WESTERN ATMOSPHERIC BACKDROP & EFFECTS (Inspired by Home & Sports)
      ========================================================================= */}
      {/* =========================================================================
          WESTERN FRONTIER PANORAMA (Team Page Vibe with Steam Locomotive)
      ========================================================================= */}
      <div className="lk-legacy-scene">
        <img
          src={legacyFrontierBg}
          alt="Legacy Frontier Locomotive"
          className="lk-legacy-scene-image"
        />
      </div>

      <div className="legacy-bg-backdrop">
        <div className="legacy-bg-glow" />
      </div>

      {/* Western Atmosphere Layer */}
      <div className="lk-atmosphere" aria-hidden="true">
        <span className="lk-light-sweep" />
        <span className="lk-western-seal" />
        <span className="lk-western-corners" />
        <span className="lk-frontier-rail">
          THE ARCHIVES · FOUR EDITIONS OF VALOR · IIT INDORE
        </span>

        {/* Western Bullet-Hole Impacts */}
        <span className="lk-bullet-hole lk-bullet-hole-1" />
        <span className="lk-bullet-hole lk-bullet-hole-2" />
        <span className="lk-bullet-hole lk-bullet-hole-3" />

        {/* Floating Saloon Dust / Golden Embers */}
        <span className="lk-dust lk-dust-1" />
        <span className="lk-dust lk-dust-2" />
        <span className="lk-dust lk-dust-3" />
        <span className="lk-dust lk-dust-4" />
        <span className="lk-dust lk-dust-5" />
        <span className="lk-dust lk-dust-6" />
      </div>

      {/* =========================================================================
          HERO SECTION (WESTERN ARCHIVES BANNER)
      ========================================================================= */}
      <div className="legacy-hero relative z-10">
        {/* Western Edition Badge */}
        <div className="lk-edition-badge">
          <span aria-hidden="true">★</span>
          <span>THE HISTORIC ARCHIVES · IIT INDORE</span>
          <span aria-hidden="true">★</span>
        </div>

        <p className="legacy-overline">FOUR EDITIONS OF UNBROKEN VALOR</p>

        {/* Main Western Display Title */}
        <h1 className="legacy-main-title">
          <span className="legacy-title-light">LEGACY OF</span>
          <span className="legacy-title-gold">EXCELLENCE.</span>
        </h1>

        {/* Ornamental Western Divider */}
        <div className="lk-brand-divider mx-auto" aria-hidden="true">
          <span />
          <b>✥</b>
          <span />
        </div>

        <p className="legacy-hero-desc">
          Four editions of raw grit, relentless determination, and unforgettable sporting
          glory that paved the frontier trail for every athlete stepping onto our proving grounds.
        </p>
      </div>

      {/* =========================================================================
          STATS GRID (SALOON LEDGER PLAQUES)
      ========================================================================= */}
      <div className="stats-grid relative z-10">
        {stats.map((card, index) => (
          <div className="stat-card" key={index}>
            {/* Western Engraved Corner Brackets */}
            <span className="lk-card-corners" aria-hidden="true" />

            <div className="stat-card-badge">
              <span>★ RECORD #{index + 1} ★</span>
            </div>

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