import { useEffect, useState } from "react";
import sponsorsFrontierBg from "../../assets/sponsors-frontier-bg.jpg";
import "./sponsors.css";

/* ============================================================
   LAKSHYA 5.0 - OUR PAST SPONSORS
   ────────────────────────────────────────────────────────────
   • Clean, minimal Western Hero: "OUR PAST SPONSORS"
   • 1 Prominent Main Sponsor (Plum BodyLovin' Grand Title Patron)
   • Seamless Associate Sponsors Grid (No Gold/Silver split, No outer box)
   • Enlarged, high-prominence brand logos with Western corner accents
   ============================================================ */

export type Sponsor = {
  name: string;
  role: string;
  logo: string;
  website?: string;
  description?: string;
};

/* ── 1. Grand Title Patron ── */
const MAIN_SPONSOR: Sponsor = {
  name: "Plum BodyLovin'",
  role: "GRAND TITLE PATRON",
  logo: "/images/sponsors/sponsor_title.jpg",
  description: "Grand Title Patron of Lakshya — fueling the spirit, grit, and glory across every championship proving ground.",
  website: "https://plumgoodness.com/",
};

/* ── 2. Unified Associate Sponsors Roster ── */
const ASSOCIATE_SPONSORS: Sponsor[] = [
  {
    name: "ICICI Bank",
    role: "BANKING PARTNER",
    logo: "/images/sponsors/sponsor_14.jpg",
    website: "https://www.icicibank.com/",
  },
  {
    name: "RED BULL",
    role: "ENERGY PARTNER",
    logo: "/images/sponsors/sponsor_9.jpg",
    website: "https://www.redbull.com/in-en",
  },
  {
    name: "DECATHLON",
    role: "EQUIPMENT PARTNER",
    logo: "/images/sponsors/sponsor_1.png",
    website: "https://www.decathlon.in/",
  },
  {
    name: "PUMA",
    role: "SPORTSWEAR PARTNER",
    logo: "/images/sponsors/sponsor_2.png",
    website: "https://in.puma.com/",
  },
  {
    name: "Campa Sure",
    role: "HYDRATION PARTNER",
    logo: "/images/sponsors/sponsor_5.jpg",
  },
  {
    name: "Pepero",
    role: "SNACKS PARTNER",
    logo: "/images/sponsors/sponsor_10.jpg",
  },
  {
    name: "ConfirmTkt",
    role: "TRAVEL & TRANSIT PARTNER",
    logo: "/images/sponsors/sponsor_3.jpg",
    website: "https://www.confirmtkt.com/",
  },
  {
    name: "Doon Merchandise",
    role: "APPAREL & MERCHANDISE",
    logo: "/images/sponsors/sponsor_4.jpg",
  },
  {
    name: "Döner & Gyros",
    role: "FOOD & HOSPITALITY",
    logo: "/images/sponsors/sponsor_12.jpg",
  },
  {
    name: "Beanzy",
    role: "REFRESHMENT PARTNER",
    logo: "/images/sponsors/sponsor_6.jpg",
  },
  {
    name: "Circuit One",
    role: "GAMING & TECH PARTNER",
    logo: "/images/sponsors/sponsor_7.jpg",
  },
  {
    name: "Elindore",
    role: "FRONTIER PARTNER",
    logo: "/images/sponsors/sponsor_8.jpg",
  },
  {
    name: "Beverage Partner",
    role: "BEVERAGE ASSOCIATE",
    logo: "/images/sponsors/sponsor_13.jpg",
  },
  {
    name: "Campus Partner",
    role: "CAMPUS ASSOCIATE",
    logo: "/images/sponsors/sponsor_11.jpg",
  },
];

export default function SponsorsPage() {
  const [revealReady, setRevealReady] = useState(false);

  useEffect(() => {
    setRevealReady(true);
    const elements = document.querySelectorAll<HTMLElement>(".sponsors-page .sp-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`sponsors-page${revealReady ? " is-reveal-ready" : ""}`}>
      {/* =========================================================================
          1. CINEMATIC CANYON HORIZON BACKDROP & ATMOSPHERE
      ========================================================================= */}
      <div className="lk-sponsors-scene" aria-hidden="true">
        <img
          src={sponsorsFrontierBg}
          alt="Western Frontier Horizon"
          className="lk-sponsors-scene-image"
        />
      </div>

      <div className="lk-sponsors-atmosphere" aria-hidden="true">
        <div className="lk-sponsors-light-sweep" />
        <div className="lk-sponsors-dust" style={{ top: "20%", left: "15%", animationDelay: "0s" }} />
        <div className="lk-sponsors-dust" style={{ top: "35%", left: "80%", animationDelay: "3s" }} />
        <div className="lk-sponsors-dust" style={{ top: "55%", left: "22%", animationDelay: "6s" }} />
        <div className="lk-sponsors-dust" style={{ top: "75%", left: "72%", animationDelay: "1.5s" }} />
      </div>

      <div className="lk-sponsors-grain" aria-hidden="true" />

      {/* =========================================================================
          2. CLEAN MINIMAL HERO SECTION
      ========================================================================= */}
      <section className="sp-hero">
        <div className="sp-hero-inner sp-reveal">
          <div className="sp-hero-ribbon">
            <span>★ LAKSHYA 5.0 ALLIES ★</span>
          </div>

          <h1 className="sp-hero-title">OUR PAST SPONSORS</h1>

          <div className="sp-divider">
            <span className="sp-divider-line" />
            <span className="sp-divider-star">✥</span>
            <span className="sp-divider-line right" />
          </div>

          <p className="sp-hero-subtitle">
            Honoring the esteemed brands and stalwart partners who powered the glory of Lakshya.
          </p>
        </div>
      </section>

      {/* =========================================================================
          3. MAIN TITLE SPONSOR (GRAND PLAQUE SPOTLIGHT)
      ========================================================================= */}
      <section className="sp-main-section sp-reveal">
        <div className="sp-section-header">
          <span className="sp-badge-kicker">★ THE HEADLINER ★</span>
          <h2 className="sp-section-heading">GRAND TITLE PATRON</h2>
        </div>

        <div className="sp-main-card">
          {/* Corner Filigree Brackets */}
          <span className="sp-corner sp-corner--tl" aria-hidden="true" />
          <span className="sp-corner sp-corner--tr" aria-hidden="true" />
          <span className="sp-corner sp-corner--bl" aria-hidden="true" />
          <span className="sp-corner sp-corner--br" aria-hidden="true" />

          {/* Large Prominent Logo Box */}
          <div className="sp-main-logo-wrap">
            <img
              src={MAIN_SPONSOR.logo}
              alt={MAIN_SPONSOR.name}
              className="sp-main-logo-img"
            />
          </div>

          {/* Details */}
          <div className="sp-main-info">
            <span className="sp-main-role">{MAIN_SPONSOR.role}</span>
            <h3 className="sp-main-name">{MAIN_SPONSOR.name}</h3>
            {MAIN_SPONSOR.description && (
              <p className="sp-main-desc">{MAIN_SPONSOR.description}</p>
            )}

            {MAIN_SPONSOR.website && (
              <a
                href={MAIN_SPONSOR.website}
                target="_blank"
                rel="noreferrer"
                className="sp-btn"
              >
                <span>VISIT OFFICIAL PARTNER</span>
                <span className="sp-btn-arrow">↗</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ASSOCIATE SPONSORS (SEAMLESS CLEAN GRID - NO BOX WRAPPER)
      ========================================================================= */}
      <section className="sp-associate-section">
        <div className="sp-section-header sp-reveal">
          <span className="sp-badge-kicker">★ OFFICIAL PARTNERS & ALLIES ★</span>
          <h2 className="sp-section-heading">ASSOCIATE SPONSORS</h2>
          <div className="sp-divider">
            <span className="sp-divider-line" />
            <span className="sp-divider-star">✦</span>
            <span className="sp-divider-line right" />
          </div>
        </div>

        <div className="sp-grid">
          {ASSOCIATE_SPONSORS.map((sponsor, index) => {
            const cardContent = (
              <>
                {/* 4 Engraved Corner Notches */}
                <span className="sp-corner sp-corner--tl" aria-hidden="true" />
                <span className="sp-corner sp-corner--tr" aria-hidden="true" />
                <span className="sp-corner sp-corner--bl" aria-hidden="true" />
                <span className="sp-corner sp-corner--br" aria-hidden="true" />

                {/* Big Prominent Logo Mark */}
                <div className="sp-card-logo-wrap">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="sp-card-logo-img"
                    loading="lazy"
                  />
                </div>

                <div className="sp-card-divider" aria-hidden="true" />

                {/* Role & Name */}
                <div className="sp-card-info">
                  <span className="sp-card-role">{sponsor.role}</span>
                  <h4 className="sp-card-name">{sponsor.name}</h4>
                </div>

                {sponsor.website && (
                  <span className="sp-card-hover-visit">
                    VISIT <span>↗</span>
                  </span>
                )}
              </>
            );

            return sponsor.website ? (
              <a
                key={sponsor.name + index}
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="sp-card sp-reveal"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={sponsor.name + index}
                className="sp-card sp-reveal"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
