import { useEffect, useState } from "react";
import sponsorsFrontierBg from "../../assets/sponsors-frontier-bg.jpg";
import "./sponsors.css";

/* ============================================================
   LAKSHYA 5.0 - OUR PAST SPONSORS & PARTNERS
   ────────────────────────────────────────────────────────────
   • Clean, minimal Western Hero: "OUR PAST SPONSORS"
   • All 15 past sponsors treated with equal prominence in a unified grid
   • Western corner-notched cards with high-prominence logo badges
   • Western "Become a Partner" CTA section with interactive Contact Dossier
   ============================================================ */

export type Sponsor = {
  name: string;
  role: string;
  logo: string;
  website?: string;
  description?: string;
};

/* ── Unified Past Sponsors Roster (All Treated Equally) ── */
const ALL_PAST_SPONSORS: Sponsor[] = [
  {
    name: "Plum BodyLovin'",
    role: "TITLE PATRON",
    logo: "/images/sponsors/sponsor_title.jpg",
    website: "https://plumgoodness.com/",
  },
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
  const [showContactModal, setShowContactModal] = useState(false);

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
          3. UNIFIED PAST SPONSORS GRID (ALL TREATED EQUALLY)
      ========================================================================= */}
      <section className="sp-associate-section">
        <div className="sp-grid">
          {ALL_PAST_SPONSORS.map((sponsor, index) => {
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
                style={{ animationDelay: `${index * 35}ms` }}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={sponsor.name + index}
                className="sp-card sp-reveal"
                style={{ animationDelay: `${index * 35}ms` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. BECOME A PARTNER / SPONSOR LAKSHYA 5.0 (VINTAGE COMPASS MAP HERO)
      ========================================================================= */}
      <section className="sponsors-cta sp-reveal" aria-labelledby="sponsors-cta-title">
        <div className="sponsors-cta__image" aria-hidden="true" />
        <div className="sponsors-cta__shade" aria-hidden="true" />
        <div className="sponsors-cta__content">
          <span className="section-kicker">YOUR STORY. OUR NEXT CHAPTER.</span>
          <h2 id="sponsors-cta-title">
            BACK THE NEXT<br /><em>GENERATION.</em>
          </h2>
          <p>
            Partner with Lakshya and stand behind a celebration of sport,
            student talent, and limitless ambition.
          </p>
          <button
            type="button"
            className="frontier-button"
            onClick={() => setShowContactModal(true)}
          >
            <span>BECOME A PARTNER</span><span aria-hidden="true">⟶</span>
          </button>
          <span className="sponsors-cta__signature">
            LAKSHYA 5.0 <i>✦</i> IIT INDORE
          </span>
        </div>
        <div className="sponsors-cta__coordinates" aria-hidden="true">
          22°31' N&nbsp; / &nbsp;75°55' E
        </div>
      </section>

      {/* =========================================================================
          5. INTERACTIVE CONTACT MODAL (DOSSIER)
      ========================================================================= */}
      {showContactModal && (
        <div
          className="sp-contact-backdrop"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setShowContactModal(false);
          }}
        >
          <div
            className="sp-contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sp-contact-title"
          >
            <button
              type="button"
              className="sp-contact-close"
              onClick={() => setShowContactModal(false)}
              aria-label="Close contact details"
            >
              ✕
            </button>

            <span className="sp-corner sp-corner--tl" aria-hidden="true" />
            <span className="sp-corner sp-corner--tr" aria-hidden="true" />
            <span className="sp-corner sp-corner--bl" aria-hidden="true" />
            <span className="sp-corner sp-corner--br" aria-hidden="true" />

            <div className="sp-contact-header">
              <span className="sp-badge-kicker">★ SPONSORSHIP SECRETARIAT ★</span>
              <h3 id="sp-contact-title" className="sp-contact-title">
                GET IN TOUCH
              </h3>
              <p className="sp-contact-subtitle">
                Reach out to discuss partnerships, brand integration, and customized packages for Lakshya 5.0.
              </p>
            </div>

            <div className="sp-contact-grid">
              {/* Card 1: Official Email */}
              <div className="sp-contact-box">
                <span className="sp-contact-box-label">OFFICIAL EMAIL</span>
                <a
                  href="mailto:sponsorship.lakshya@iiti.ac.in"
                  className="sp-contact-box-val sp-contact-link"
                >
                  sponsorship.lakshya@iiti.ac.in
                </a>
                <span className="sp-contact-box-sub">Direct queries & proposals</span>
              </div>

              {/* Card 2: Convener Phone */}
              <div className="sp-contact-box">
                <span className="sp-contact-box-label">SPONSORSHIP HEAD</span>
                <a
                  href="tel:+919876543210"
                  className="sp-contact-box-val sp-contact-link"
                >
                  +91 98765 43210
                </a>
                <span className="sp-contact-box-sub">Available Mon–Sat (9 AM – 8 PM)</span>
              </div>

              {/* Card 3: Sports Secretariat */}
              <div className="sp-contact-box">
                <span className="sp-contact-box-label">SPORTS COUNCIL</span>
                <a
                  href="mailto:sports.secy@iiti.ac.in"
                  className="sp-contact-box-val sp-contact-link"
                >
                  sports.secy@iiti.ac.in
                </a>
                <span className="sp-contact-box-sub">General Secretary, Sports</span>
              </div>

              {/* Card 4: Postal Address */}
              <div className="sp-contact-box">
                <span className="sp-contact-box-label">CAMPUS ADDRESS</span>
                <p className="sp-contact-address">
                  Sports Complex, IIT Indore, Khandwa Road, Simrol, Indore 453552
                </p>
              </div>
            </div>

            <div className="sp-contact-actions">
              <a
                href="mailto:sponsorship.lakshya@iiti.ac.in?subject=Lakshya%205.0%20Sponsorship%20Inquiry"
                className="sp-btn sp-btn--primary"
              >
                <span>SEND AN EMAIL</span>
                <span className="sp-btn-arrow">↗</span>
              </a>
              <button
                type="button"
                className="sp-btn sp-btn--secondary"
                onClick={() => setShowContactModal(false)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
