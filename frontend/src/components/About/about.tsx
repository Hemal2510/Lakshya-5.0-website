import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Users, Landmark } from "lucide-react";
import CountUp from "../ui/CountUp.tsx";
import "./about.css";

// Import sample photos from data and public assets (flexible for any number of photos)
import photo1 from "../../data/TeamsPhoto/photo1.jpeg";
import photo2 from "../../data/TeamsPhoto/photo2.jpeg";
import photo3 from "../../data/TeamsPhoto/photo3.jpeg";
import photo4 from "../../data/TeamsPhoto/photo4.jpeg";
import photo5 from "../../data/TeamsPhoto/photo5.jpeg";
import photo6 from "../../data/TeamsPhoto/photo6.jpeg";

const festivalPhotos = [
  { id: 1, src: "/images/sports1.JPG", title: "Main Athletic Arena", location: "IIT Indore Grounds" },
  { id: 2, src: photo1, title: "Clash of Titans", location: "Championship Court" },
  { id: 3, src: "/images/sports2.JPG", title: "Spirit of Champions", location: "Track & Field" },
  { id: 4, src: photo2, title: "Grit & Glory", location: "Indoor Complex" },
  { id: 5, src: "/images/sports3.JPG", title: "Unbroken Brotherhood", location: "Arena Central" },
  { id: 6, src: photo3, title: "Victory Roar", location: "Podium Grounds" },
  { id: 7, src: photo4, title: "The Deciding Point", location: "Battleground East" },
  { id: 8, src: photo5, title: "Forged in Passion", location: "Athletic Circle" },
  { id: 9, src: photo6, title: "Unstoppable Drive", location: "Frontier Arena" },
];

export default function About() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollability);
      return () => el.removeEventListener("scroll", checkScrollability);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="western-poster-section relative">
      {/* 1. Sunkissed Desert Canyon Radial Backdrop */}
      <div className="desert-sunburst-glow" />
      <div className="desert-horizon-mesa" />

      <div className="western-poster-container">
        {/* ========================================================
            2. TOP ARCHED POSTER HEADER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="western-poster-header"
        >
          {/* Arched Top Badge */}
          <div className="western-arched-badge">
            <span>★ 5TH EDITION · IIT INDORE ATHLETIC EXPEDITION ★</span>
          </div>

          {/* Grand Woodcut Poster Title */}
          <h2 className="western-poster-title">
            THE FRONTIER OF <span>CHAMPIONS</span>
          </h2>

          {/* Western Star Divider */}
          <div className="western-poster-divider">
            <span className="divider-mesa-line" />
            <span className="divider-star">★ ❖ ★</span>
            <span className="divider-mesa-line" />
          </div>
        </motion.div>

        {/* ========================================================
            3. MAIN NARRATIVE & WESTERN EMBLEM DISPATCH
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="western-story-banner"
        >
          <div className="story-banner-inner">
            <p className="story-lead-text">
              Lakshya is Central India's grandest inter-collegiate sporting spectacle—a legendary proving ground hosted at IIT Indore where thousands of collegiate contenders converge. It is more than competition; it is where passion meets relentless perseverance, where rivalries forge lifelong bonds, and where champions etch their names in history under the open western sky.
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            4. VINTAGE WESTERN BADGES (STATS)
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="western-emblem-strip"
        >
          {/* Badge 1: Contenders */}
          <div className="western-badge-card">
            <div className="badge-sun-icon">
              <Users className="w-5 h-5 text-[#f5b041]" />
            </div>
            <div className="badge-info">
              <div className="badge-stat-num">
                <CountUp end={2500} suffix="+" />
              </div>
              <span className="badge-stat-title">ATHLETES & CONTENDERS</span>
              <span className="badge-stat-sub">Across 50+ Top Universities</span>
            </div>
          </div>

          {/* Badge 2: Sports */}
          <div className="western-badge-card">
            <div className="badge-sun-icon">
              <Trophy className="w-5 h-5 text-[#f5b041]" />
            </div>
            <div className="badge-info">
              <div className="badge-stat-num">
                <CountUp end={12} suffix="+" />
              </div>
              <span className="badge-stat-title">SPORTING DISCIPLINES</span>
              <span className="badge-stat-sub">High-Stakes Arena Battles</span>
            </div>
          </div>

          {/* Badge 3: Institutes */}
          <div className="western-badge-card">
            <div className="badge-sun-icon">
              <Landmark className="w-5 h-5 text-[#f5b041]" />
            </div>
            <div className="badge-info">
              <div className="badge-stat-num">
                <CountUp end={50} suffix="+" />
              </div>
              <span className="badge-stat-title">PREMIER INSTITUTES</span>
              <span className="badge-stat-sub">Nationwide Delegation</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            5. FRONTIER PHOTO WALL & POSTCARD REEL
        ======================================================== */}
        <div className="western-gallery-block">
          <div className="gallery-header-row">
            <div>
              <span className="gallery-tag">★ FRONTIER ARCHIVE DISPATCH ★</span>
              <h3 className="gallery-heading">MOMENTS FORGED IN GLORY</h3>
            </div>

            {/* Scroll Navigation Arrows */}
            <div className="gallery-arrows">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="gallery-arrow-btn"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="gallery-arrow-btn"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Multi-Photo Horizontal Reel */}
          <div
            ref={scrollContainerRef}
            className="gallery-scroll-reel"
          >
            {festivalPhotos.map((item, index) => {
              // Subtle vintage polaroid tilt angles
              const tiltAngle = (index % 2 === 0 ? 1 : -1) * (1.2 + (index % 3) * 0.6);

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.03, rotate: 0, y: -6 }}
                  style={{ rotate: `${tiltAngle}deg` }}
                  transition={{ duration: 0.25 }}
                  className="frontier-postcard-card group"
                >
                  {/* Photo Canvas */}
                  <div className="postcard-image-box">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="postcard-img"
                      loading="lazy"
                    />
                    <div className="postcard-sun-overlay" />
                    
                    {/* Corner Stamp */}
                    <div className="postcard-stamp">
                      <span>NO. 0{index + 1}</span>
                    </div>
                  </div>

                  {/* Postcard Label */}
                  <div className="postcard-caption">
                    <h4 className="postcard-title">{item.title}</h4>
                    <span className="postcard-location">{item.location}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
