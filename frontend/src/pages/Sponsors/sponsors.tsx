import { useEffect, useState, type CSSProperties } from "react";
import "./sponsors.css";

type Partner = {
  name: string;
  role: string;
  logo?: string;
  website?: string;
};

type PartnerTier = "gold" | "silver" | "associate";

const GOLD_PARTNERS: Partner[] = [
  {
    name: "adidas",
    role: "SPORTSWEAR PARTNER",
    logo: "/images/sponsors/adidas.svg",
    website: "https://www.adidas.co.in/",
  },
  {
    name: "Red Bull",
    role: "ENERGY PARTNER",
    logo: "/images/sponsors/red-bull.svg",
    website: "https://www.redbull.com/in-en",
  },
  {
    name: "SBI",
    role: "BANKING PARTNER",
    logo: "/images/sponsors/sbi.svg",
    website: "https://sbi.co.in/",
  },
  {
    name: "Bisleri",
    role: "HYDRATION PARTNER",
    logo: "/images/sponsors/bisleri.svg",
    website: "https://www.bisleri.com/",
  },
];

const SILVER_PARTNERS: Partner[] = [
  {
    name: "DECATHLON",
    role: "EQUIPMENT PARTNER",
    logo: "/images/sponsors/decathlon.svg",
    website: "https://www.decathlon.in/",
  },
  {
    name: "PUMA",
    role: "APPAREL PARTNER",
    logo: "/images/sponsors/puma.svg",
    website: "https://in.puma.com/",
  },
  {
    name: "TITAN",
    role: "TIMEKEEPING PARTNER",
    logo: "/images/sponsors/titan.svg",
    website: "https://www.titan.co.in/",
  },
  {
    name: "Livguard",
    role: "POWER PARTNER",
    logo: "/images/sponsors/livguard.svg",
    website: "https://www.livguard.com/",
  },
];

const ASSOCIATE_PARTNERS: Partner[] = [
  {
    name: "NIVIA",
    role: "FOOTWEAR PARTNER",
    logo: "/images/sponsors/nivia.svg",
    website: "https://www.niviasports.com/",
  },
  {
    name: "Fast&Up",
    role: "NUTRITION PARTNER",
    logo: "/images/sponsors/fastandup.svg",
    website: "https://www.fastandup.in/",
  },
  {
    name: "SWIGGY",
    role: "FOOD PARTNER",
    logo: "/images/sponsors/swiggy.svg",
    website: "https://www.swiggy.com/",
  },
  {
    name: "Jio",
    role: "CONNECTIVITY PARTNER",
    logo: "/images/sponsors/jio.svg",
    website: "https://www.jio.com/",
  },
  {
    name: "bookmyshow",
    role: "TICKETING PARTNER",
    logo: "/images/sponsors/bookmyshow.svg",
    website: "https://in.bookmyshow.com/",
  },
  {
    name: "campus",
    role: "MEDIA PARTNER",
    logo: "/images/sponsors/campus.svg",
    website: "https://www.campusshoes.com/",
  },
];

/*
 * Keep this null if Lakshya has no confirmed title/presenting sponsor.
 * When one is confirmed, replace null with a real partner, for example:
 *
 * const FEATURED_PARTNER: Partner | null = {
 *   name: "Actual Sponsor Name",
 *   role: "TITLE PARTNER",
 *   logo: "/images/sponsors/actual-sponsor.svg",
 *   website: "https://official-website.example/",
 * };
 */
const FEATURED_PARTNER: Partner | null = null;

/* Replace this with the real sponsorship enquiry email or form URL. */
const SPONSOR_CONTACT_HREF = "mailto:replace-with-your-team-email@example.com";

function SponsorMark({ partner }: { partner: Partner }) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [partner.logo]);

  if (!partner.logo || imageFailed) {
    return (
      <span className={`partner-mark__fallback partner-mark__fallback--${partner.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}>
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
      <span className="partner-card__corner partner-card__corner--tl" aria-hidden="true" />
      <span className="partner-card__corner partner-card__corner--tr" aria-hidden="true" />
      <span className="partner-card__corner partner-card__corner--bl" aria-hidden="true" />
      <span className="partner-card__corner partner-card__corner--br" aria-hidden="true" />
      <span className="partner-card__seal" aria-hidden="true">✦</span>
      <span className="partner-card__mark-wrap">
        <SponsorMark partner={partner} />
      </span>
      <span className="partner-card__rule" aria-hidden="true" />
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
    if (!("IntersectionObserver" in window)) return;

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
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`sponsors-page${revealReady ? " is-reveal-ready" : ""}`}>
      {/* The site's existing navbar is intentionally not included here. */}
      <section className="sponsors-hero" aria-labelledby="sponsors-hero-title">
        <div className="sponsors-hero__map" aria-hidden="true" />
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
            Every champion has a story. Every great moment has people behind it.
            Meet the partners who help bring the spirit of sport, ambition, and
            Lakshya to life.
          </p>
          <a className="frontier-link" href="#partner-rosters">
            <span>MEET OUR PARTNERS</span><span className="frontier-link__arrow" aria-hidden="true">⟶</span>
          </a>
          
        </div>
        <div className="sponsors-hero__bottomline" aria-hidden="true">
          <span>BUILT BY PASSION</span><span>UNITED BY SPORT</span><span>DRIVEN BY AMBITION</span>
        </div>
      </section>

      {FEATURED_PARTNER && (
        <section className="featured-partner" aria-label="Featured partner">
          <div className="featured-partner__texture" aria-hidden="true" />
          <div className="featured-partner__label">
            <span className="section-kicker">THE HEADLINER</span>
            <h2>Presenting Partner</h2>
            <p>A journey made possible by a partner who believes in the next generation.</p>
          </div>
          <div className="featured-partner__brand">
            <SponsorMark partner={FEATURED_PARTNER} />
          </div>
          <div className="featured-partner__details">
            <span className="featured-partner__eyebrow">OFFICIAL {FEATURED_PARTNER.role}</span>
            <h3>{FEATURED_PARTNER.name}</h3>
            <p>Supporting the athletes, ideas, and moments that make Lakshya.</p>
            {FEATURED_PARTNER.website && (
              <a href={FEATURED_PARTNER.website} target="_blank" rel="noreferrer" className="frontier-link">
                <span>VISIT PARTNER</span><span className="frontier-link__arrow" aria-hidden="true">⟶</span>
              </a>
            )}
          </div>
        </section>
      )}

      <div id="partner-rosters" className="partner-rosters">
        <div className="partner-rosters__intro sponsor-reveal">
          <span className="section-kicker">THE ALLIES OF LAKSHYA</span>
          <p>Different names. One shared belief in the power of sport.</p>
        </div>
        <PartnerSection
          title="The Gold Roster"
          kicker="01 / GOLD PARTNERS"
          partners={GOLD_PARTNERS}
          tier="gold"
        />
        <PartnerSection
          title="The Silver Roster"
          kicker="02 / SILVER PARTNERS"
          partners={SILVER_PARTNERS}
          tier="silver"
        />
        <PartnerSection
          title="The Associate Roster"
          kicker="03 / ASSOCIATE PARTNERS"
          partners={ASSOCIATE_PARTNERS}
          tier="associate"
        />
      </div>

      <section className="sponsors-cta" aria-labelledby="sponsors-cta-title">
        <div className="sponsors-cta__image" aria-hidden="true" />
        <div className="sponsors-cta__shade" aria-hidden="true" />
        <div className="sponsors-cta__content sponsor-reveal">
          <span className="section-kicker">YOUR STORY. OUR NEXT CHAPTER.</span>
          <h2 id="sponsors-cta-title">BACK THE NEXT<br /><em>GENERATION.</em></h2>
          <p>
            Partner with Lakshya and stand behind a celebration of sport,
            student talent, and limitless ambition.
          </p>
          <a className="frontier-button" href={SPONSOR_CONTACT_HREF}>
            <span>BECOME A PARTNER</span><span aria-hidden="true">⟶</span>
          </a>
          <span className="sponsors-cta__signature">LAKSHYA 5.0 <i>✦</i> IIT INDORE</span>
        </div>
        <div className="sponsors-cta__coordinates" aria-hidden="true">22°31' N&nbsp; / &nbsp;75°55' E</div>
      </section>
      {/* Leave your existing site footer outside this component, as before. */}
    </main>
  );
}
