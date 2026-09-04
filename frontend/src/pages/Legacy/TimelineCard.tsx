import { useState } from "react";
import { motion } from "framer-motion";
import { Film } from "lucide-react";
import WesternTimelineNode from "./WesternTimelineNode.tsx";

interface TimelineCardProps {
  year: string;
  season: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  videoId: string;
  reverse?: boolean;
}

export default function TimelineCard({
  year,
  season,
  title,
  subtitle,
  description,
  highlights,
  videoId,
  reverse = false,
}: TimelineCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`timeline-row ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ================= VIDEO (SALOON THEATER SCREEN) ================= */}
      <div className="timeline-video">
        <div className="saloon-theater-box">
          {/* Header Bar */}
          <div className="theater-header-bar">
            <div className="flex items-center gap-2">
              <Film size={15} className="text-[#f5c879]" />
              <span className="theater-header-title">ARCHIVAL FOOTAGE · LAKSHYA {season}.0</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#ffd580] font-mono tracking-wider font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>OFFICIAL TAPE</span>
            </div>
          </div>

          {/* Large Video Screen */}
          <div className="theater-screen-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* ================= CENTER (CONTINUOUS SPINE & REVOLVER NODE) ================= */}
      <div className="timeline-center">
        {/* Continuous Solid Gold Timeline Spine */}
        <div className="timeline-spine-track" />

        {/* 6-Chamber Revolver Node */}
        <WesternTimelineNode season={season} isHovered={isHovered} />
      </div>

      {/* ================= CONTENT (WEATHERED DISPATCH LEDGER) ================= */}
      <div className="timeline-content">
        {/* Western Engraved Brass Year Plaque */}
        <div className={`year-pill ${reverse ? "year-right" : "year-left"}`}>
          <span className="year-star">★</span>
          <span>EST. {year}</span>
          <span className="year-star">★</span>
        </div>

        <div className="content-card">
          {/* Parchment Inner Border Frame */}
          <div className="parchment-inner-border" />

          {/* Chamber Rounds Status Header */}
          <div className="flex items-center justify-between gap-2 mb-4 select-none">
            <div className="flex items-center gap-2 text-[#9a5d2c] text-xs font-serif">
              <span>═════</span>
              <span className="text-[#d49b55]">❖</span>
              <span>═════</span>
            </div>
            <div className="chamber-status-badge">
              <span className="bullet-indicator">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className={i < season ? "bullet-loaded" : "bullet-empty"}>
                    ●
                  </span>
                ))}
              </span>
              <span className="chamber-label">CHAMBER {season}/6</span>
            </div>
          </div>

          <h2 className="dispatch-title">{title}</h2>

          <h4 className="dispatch-subtitle">{subtitle}</h4>

          <p className="dispatch-desc">{description}</p>

          <div className="highlights-header">
            <span>★ FRONTIER ACHIEVEMENTS ★</span>
          </div>

          <ul className="dispatch-list">
            {highlights.map((item, i) => (
              <li key={i}>
                <span className="bullet-star">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}