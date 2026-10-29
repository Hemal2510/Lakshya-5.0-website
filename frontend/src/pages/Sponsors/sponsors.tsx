import { useEffect, useState, type CSSProperties } from "react";
import canyonFrontierBg from "../../assets/canyon-frontier-bg.jpg";
import "./sponsors.css";

/* ============================================================
   LAKSHYA 5.0 - WESTERN SPONSORS & ALLIES PAGE
   ────────────────────────────────────────────────────────────
   • Sarathy's modern Western layout & corner-bracketed cards
   • Cleaned up typography: Cinzel, Western Bang Bang, Playfair
   • Authentic Past Sponsors List (Plum Title, ICICI, Red Bull, etc.)
   • Hero with cinematic Canyon Vista backdrop (0.40 opacity)
   • Unwanted "Become a partner" section completely removed
   ============================================================ */

export type Partner = {
  name: string;
  role: string;
  logo: string;
  description?: string;
  website?: string;
};

export type PartnerTier = "gold" | "silver" | "associate";

/* ── 1. Presenting / Title Partner ── */
const FEATURED_PARTNER: Partner = {
  name: "Plum BodyLovin'",
  role: "GRAND TITLE PATRON",
  logo: "/images/sponsors/sponsor_title.jpg",
  description: "Lakshya Grand Title Patron — fueling the spirit, grit, and glory across every competitive arena of the frontier.",
  website: "https://plumgoodness.com/",
};

/* ── 2. The Gold Roster (Key Category Partners) ── */
const GOLD_PARTNERS: Partner[] = [
  {
    name: "ICICI Bank",
    role: "OFFICIAL BANKING PARTNER",
    logo: "/images/sponsors/sponsor_14.jpg",
    website: "https://www.icicibank.com/",
  },
  {
    name: "RED BULL",
    role: "OFFICIAL ENERGY PARTNER",
    logo: "/images/sponsors/sponsor_9.jpg",
    website: "https://www.redbull.com/in-en",
  },
  {
    name: "Campa Sure",
    role: "OFFICIAL HYDRATION PARTNER",
    logo: "/images/sponsors/sponsor_5.jpg",
  },
  {
    name: "Pepero",
    role: "OFFICIAL SNACKS PARTNER",
    logo: "/images/sponsors/sponsor_10.jpg",
  },
  {
    name: "Doon Merchandise",
    role: "APPAREL & MERCHANDISE PARTNER",
    logo: "/images/sponsors/sponsor_4.jpg",
  },
  {
    name: "Döner & Gyros",
    role: "FOOD & HOSPITALITY PARTNER",
    logo: "/images/sponsors/sponsor_12.jpg",
  },
];

/* ── 3. The Silver Roster ── */
const SILVER_PARTNERS: Partner[] = [
  {
    name: "ConfirmTkt",
    role: "TRAVEL & TRANSIT PARTNER",
    logo: "/images/sponsors/sponsor_3.jpg",
    website: "https://www.confirmtkt.com/",
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
];

/* ── 4. The Associate Roster ── */
const ASSOCIATE_PARTNERS: Partner[] = [
  {
    name: "Frontier Ally I",
    role: "OFFICIAL ASSOCIATE",
    logo: "/images/sponsors/sponsor_1.png",
  },
  {
    name: "Frontier Ally II",
    role: "OFFICIAL ASSOCIATE",
    logo: "/images/sponsors/sponsor_2.png",
  },
  {
    name: "Frontier Ally III",
    role: "OFFICIAL ASSOCIATE",
    logo: "/images/sponsors/sponsor_11.jpg",
  },
  {
    name: "Döner & Gyros Beverages",
    role: "BEVERAGE ASSOCIATE",
    logo: "/images/sponsors/sponsor_13.jpg",
  },
];

function SponsorMark({ partner }: { partner: Partner }) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [partner.logo]);

  if (!partner.logo || imageFailed) {
    return (
      <span className="partner-mark__fallback">
        {partner.name}
      </span>
    );
  }

  return (
    <img
      className="partner-mark__image"
      src={partner.logo}
      alt={`${partner.name} logo`}
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  );
}

function PartnerCard({
  partner,
  tier,
  index,
}: {
  partner: Partner;
  tier: PartnerTier;
  index: number;
}) {
  const delayStyle = { "--card-delay": `${index * 65}ms` } as CSSProperties;

  const contents = (
    <>
      {/* 4 Engraved Brass Corner Brackets */}
      <span className="partner-card__corner partner-card__corner--tl" aria-hidden="true" />
      <span className="partner-card__corner partner-card__corner--tr" aria-hidden="true" />
      <span className="partner-card__corner partner-card__corner--bl" aria-hidden="true" />
      <span className="partner-card__corner partner-card__corner--br" aria-hidden="true" />

      {/* Western Star Seal */}
      <span className="partner-card__seal" aria-hidden="true">✦</span>

      {/* Sponsor Logo Mark */}
      <span className="partner-card__mark-wrap">
        <SponsorMark partner={partner} />
      </span>

      {/* Filigree Divider */}
      <span className="partner-card__rule" aria-hidden="true" />

      {/* Partner Category / Role */}
      <span className="partner-card__role">{partner.role}</span>

      {partner.website && (
        <span className="partner-card__visit">
          VISIT PARTNER <span aria-hidden="true">↗</span>
        </span>
      )}
    </>
  );

  return (
    <article
      className={`partner-card partner-card--${tier} sponsor-reveal`}
      style={delayStyle}
    >
      {partner.website ? (
        <a
          className="partner-card__inner"
          href={partner.website}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${partner.name} website`}
        >
          {contents}
        </a>
      ) : (
        <div className="partner-card__inner">{contents}</div>
      )}
    </article>
  );
}

function PartnerSection({
  title,
  kicker,
  partners,
  tier,
}: {
  title: string;
  kicker: string;
  partners: Partner[];
  tier: PartnerTier;
}) {
  return (
    <section className={`partner-section partner-section--${tier}`} aria-labelledby={`${tier}-partners-heading`}>
      <div className="partner-section__heading sponsor-reveal">
        <div>
          <span className="section-kicker">{kicker}</span>
          <h2 id={`${tier}-partners-heading`}>{title}</h2>
        </div>
        <span className="partner-section__count" aria-label={`${partners.length} partners`}>
          <span>{String(partners.length).padStart(2, "0")}</span> PARTNERS
        </span>
        <span className="partner-section__line" aria-hidden="true" />
      </div>

      <div className={`partner-grid partner-grid--${tier}`}>
        {partners.map((partner, index) => (
          <PartnerCard key={partner.name} partner={partner} tier={tier} index={index} />
        ))}
      </div>
    </section>
  );
}

export default function SponsorsPage() {
  const [revealReady, setRevealReady] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setRevealReady(true);
      return;
    }

    setRevealReady(true);
    const elements = document.querySelectorAll<HTMLElement>(
      ".sponsors-page .sponsor-reveal",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`sponsors-page${revealReady ? " is-reveal-ready" : ""}`}>
      {/* =========================================================================
          1. CINEMATIC CANYON VISTA HERO BACKDROP (Team & Legacy vibe)
      ========================================================================= */}
      <div className="lk-sponsors-scene" aria-hidden="true">
        <img
          src={canyonFrontierBg}
          alt="Frontier Canyon Vista"
          className="lk-sponsors-scene-image"
        />
      </div>

      {/* Atmospheric Sweeping Light & Drifting Golden Dust Embers */}
      <div className="lk-sponsors-atmosphere" aria-hidden="true">
        <div className="lk-sponsors-light-sweep" />
        <div className="lk-sponsors-dust" style={{ top: "18%", left: "14%", animationDelay: "0s" }} />
        <div className="lk-sponsors-dust" style={{ top: "32%", left: "82%", animationDelay: "3s" }} />
        <div className="lk-sponsors-dust" style={{ top: "52%", left: "20%", animationDelay: "6s" }} />
        <div className="lk-sponsors-dust" style={{ top: "70%", left: "76%", animationDelay: "1.5s" }} />
        <div className="lk-sponsors-dust" style={{ top: "85%", left: "38%", animationDelay: "4.5s" }} />
      </div>

      <div className="lk-sponsors-grain" aria-hidden="true" />

      {/* =========================================================================
          2. HERO SECTION
      ========================================================================= */}
      <section className="sponsors-hero" aria-labelledby="sponsors-hero-title">
        <div className="sponsors-hero__content">
          <p className="sponsors-breadcrumb">
            <span>LAKSHYA 5.0</span><i aria-hidden="true">/</i><span>SPONSORS</span>
          </p>

          <p className="sponsors-hero__chapter">CHAPTER I — THE PEOPLE BEHIND THE GAME</p>

          <h1 id="sponsors-hero-title" className="sponsors-hero__title">
            <span>NO LEGEND</span>
            <em>RIDES ALONE.</em>
          </h1>

          <p className="sponsors-hero__description">
            Every champion has a story. Every great moment has stalwart allies behind it.
            Meet the esteemed brands and partners who fueled the fire across the proving
            grounds of Lakshya.
          </p>

          <a className="frontier-link" href="#partner-rosters">
            <span>EXPLORE OUR ALLIES</span><span className="frontier-link__arrow" aria-hidden="true">⟶</span>
          </a>
        </div>

        <div className="sponsors-hero__bottomline" aria-hidden="true">
          <span>BUILT BY PASSION</span><span>UNITED BY SPORT</span><span>DRIVEN BY AMBITION</span>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED / PRESENTING TITLE PARTNER
      ========================================================================= */}
      {FEATURED_PARTNER && (
        <section className="featured-partner" aria-label="Featured partner">
          <div className="featured-partner__texture" aria-hidden="true" />

          <div className="featured-partner__label">
            <span className="section-kicker">THE HEADLINER</span>
            <h2>Grand Title Patron</h2>
            <p>A sporting saga powered by a partner who champions the frontier spirit of youth.</p>
          </div>

          <div className="featured-partner__brand">
            <SponsorMark partner={FEATURED_PARTNER} />
          </div>

          <div className="featured-partner__details">
            <span className="featured-partner__eyebrow">{FEATURED_PARTNER.role}</span>
            <h3>{FEATURED_PARTNER.name}</h3>
            <p>{FEATURED_PARTNER.description}</p>
            {FEATURED_PARTNER.website && (
              <a href={FEATURED_PARTNER.website} target="_blank" rel="noreferrer" className="frontier-link">
                <span>VISIT OFFICIAL PATRON</span><span className="frontier-link__arrow" aria-hidden="true">⟶</span>
              </a>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          4. PARTNER ROSTERS (Gold, Silver, Associate)
      ========================================================================= */}
      <div id="partner-rosters" className="partner-rosters">
        <div className="partner-rosters__intro sponsor-reveal">
          <div>
            <span className="section-kicker">THE ALLIES OF LAKSHYA</span>
            <p>Different names. One unbroken belief in the valor of sport.</p>
          </div>
        </div>

        {/* The Gold Roster */}
        <PartnerSection
          title="The Gold Roster"
          kicker="01 / KEY CATEGORY PARTNERS"
          partners={GOLD_PARTNERS}
          tier="gold"
        />

        {/* The Silver Roster */}
        <PartnerSection
          title="The Silver Roster"
          kicker="02 / SILVER PARTNERS"
          partners={SILVER_PARTNERS}
          tier="silver"
        />

        {/* The Associate Roster */}
        <PartnerSection
          title="The Associate Roster"
          kicker="03 / FRONTIER ASSOCIATES"
          partners={ASSOCIATE_PARTNERS}
          tier="associate"
        />
      </div>
    </main>
  );
}
