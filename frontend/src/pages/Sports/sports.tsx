import { useEffect, useMemo, useState } from "react";

import "./sports.css";

import { CATEGORY_FILTERS, SPORTS, type Sport, type SportCategory } from "./sportsData";

type SportFilter = "all" | SportCategory;

function ArrowUpRight({ size = 18 }: { size?: number }) {

  return (

    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">

      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function ArrowDown({ size = 17 }: { size?: number }) {

  return (

    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">

      <path d="M12 4v15m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function SearchIcon() {

  return (

    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">

      <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.6" />

      <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

    </svg>

  );

}

export default function SportsPage() {

  const [activeFilter, setActiveFilter] = useState<SportFilter>("all");

  const [query, setQuery] = useState("");

  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);

  const filteredSports = useMemo(() => {

    const normalisedQuery = query.trim().toLowerCase();

    return SPORTS.filter((sport) => {

      const matchesCategory = activeFilter === "all" || sport.category === activeFilter;

      const matchesSearch =

        normalisedQuery.length === 0 ||

        sport.name.toLowerCase().includes(normalisedQuery) ||

        sport.categoryLabel.toLowerCase().includes(normalisedQuery) ||

        sport.format.toLowerCase().includes(normalisedQuery);

      return matchesCategory && matchesSearch;

    });

  }, [activeFilter, query]);

  useEffect(() => {

    if (!selectedSport) return;

    const onKeyDown = (event: KeyboardEvent) => {

      if (event.key === "Escape") setSelectedSport(null);

    };

    document.addEventListener("keydown", onKeyDown);

    document.body.classList.add("lk-modal-open");

    return () => {

      document.removeEventListener("keydown", onKeyDown);

      document.body.classList.remove("lk-modal-open");

    };

  }, [selectedSport]);

  return (

    <main className="lk-sports-page" id="home">

      <div className="lk-page-grain" aria-hidden="true" />
      <div className="lk-header-spacer" aria-hidden="true" style={{ height: "clamp(75px, 7.6vw, 135px)" }} />

      {/* Western Hero Section */}
      <section className="lk-hero" aria-labelledby="lk-hero-title">
        <div className="lk-hero__image" aria-hidden="true" />
        <div className="lk-hero__vignette" aria-hidden="true" />

        {/* Western Atmosphere Layer (Inspired by Home Hero) */}
        <div className="lk-atmosphere" aria-hidden="true">
          <span className="lk-light-sweep" />
          <span className="lk-western-seal" />
          <span className="lk-western-corners" />
          <span className="lk-frontier-rail">
            ARENA ROSTER · LAKSHYA V · IIT INDORE
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

        <div className="lk-hero__content">
          <div className="lk-edition-badge">
            <span aria-hidden="true">★</span>
            <span>THE FRONTIER ARENA · LAKSHYA 5.0</span>
            <span aria-hidden="true">★</span>
          </div>

          <p className="lk-overline">CHASE WHAT LIES BEYOND · IIT INDORE</p>

          <h1 id="lk-hero-title" className="lk-hero-western-title">
            <span className="lk-hero-title-light">CHASE WHAT</span>
            <span className="lk-hero-title-gold">LIES BEYOND</span>
          </h1>

          <div className="lk-brand-divider" aria-hidden="true">
            <span />
            <b>✥</b>
            <span />
          </div>

          <p className="lk-hero__copy">
            Thirteen battlegrounds carved into the frontier dust. The early mornings, the relentless drills,
            and the fierce pursuit of triumph. This is where legends stake their claim.
          </p>

          <div className="lk-hero__actions">
            <a className="lk-button lk-button--gold" href="#sports">
              EXPLORE THE ARENAS <ArrowDown />
            </a>
            <span className="lk-hero__edition">
              IIT INDORE <b>·</b> CENTRAL INDIA'S PREMIER SPORTS SPECTACLE
            </span>
          </div>
        </div>

        <div className="lk-hero__index" aria-hidden="true">
          <span>★ 01</span><i /> 13 ARENAS
        </div>
      </section>

      {/* Saloon Timber Marquee */}
      <div className="lk-marquee" aria-label="Sports at Lakshya">
        <div className="lk-marquee__track">
          {[0, 1].map((copy) => (
            <div className="lk-marquee__group" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
              <span>CRICKET</span><b>★</b><span>FOOTBALL</span><b>★</b><span>HOCKEY</span><b>★</b>
              <span>BASKETBALL</span><b>★</b><span>ATHLETICS</span><b>★</b><span>BADMINTON</span><b>★</b>
              <span>CHESS</span><b>★</b><span>VOLLEYBALL</span><b>★</b><span>WATERPOLO</span><b>★</b>
              <span>AQUATICS</span><b>★</b><span>TABLE TENNIS</span><b>★</b><span>TENNIS</span><b>★</b>
              <span>SQUASH</span><b>★</b>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Directory */}
      <section className="lk-sport-directory" id="sports" aria-labelledby="lk-sports-title">
        <div className="lk-section-topline">
          <span>✦ CHAPTER II · THE ARENA ROSTER ✦</span>
          <span>THIRTEEN DISCIPLINES · ONE UNYIELDING SPIRIT</span>
        </div>

        <div className="lk-directory-heading">
          <div>
            <p className="lk-eyebrow lk-eyebrow--muted">★ CHOOSE YOUR BATTLEGROUND ★</p>
            <h2 id="lk-sports-title" className="lk-section-heading">
              CHOOSE <em>YOUR</em><br className="lk-mobile-break" /> ARENA.
            </h2>
          </div>

          <p className="lk-directory-heading__copy">
            From the opening sprint to the championship standoff, every discipline tests your endurance, skill, and iron resolve. Find your arena and carve your name.
          </p>
        </div>

        <div className="lk-directory-tools">
          <div className="lk-filter-list" role="group" aria-label="Filter sports by category">
            {CATEGORY_FILTERS.map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={`lk-filter${activeFilter === filter.value ? " is-active" : ""}`}
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label.toUpperCase()}
              </button>
            ))}
          </div>

          <label className="lk-search">
            <SearchIcon />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search arena or discipline..."
              aria-label="Search arena or discipline"
            />
            <span>↵</span>
          </label>
        </div>

        <div className="lk-results-note" aria-live="polite">
          <span>★ {String(filteredSports.length).padStart(2, "0")} ARENAS IN ROSTER</span>
          <span>SELECT A DISCIPLINE TO EXPLORE <ArrowUpRight size={14} /></span>
        </div>

        {filteredSports.length > 0 ? (
          <div className="lk-sport-grid">
            {filteredSports.map((sport, index) => (
              <button
                type="button"
                className={`lk-sport-card${index < 2 && activeFilter === "all" && query.length === 0 ? " lk-sport-card--featured" : ""}`}
                key={sport.id}
                onClick={() => setSelectedSport(sport)}
                aria-label={`Explore ${sport.name}`}
              >
                {/* Western Corner Brackets for Saloon Plaque Look */}
                <span className="lk-card-corners" aria-hidden="true" />

                <img
                  className="lk-sport-card__image"
                  src={sport.image}
                  alt=""
                  loading={index > 2 ? "lazy" : "eager"}
                  style={{ objectPosition: sport.imagePosition ?? "center" }}
                />

                <span className="lk-sport-card__scrim" aria-hidden="true" />

                <span className="lk-sport-card__top">
                  <span>★ {sport.number} / {sport.categoryLabel}</span>
                  <span className="lk-sport-card__arrow"><ArrowUpRight size={19} /></span>
                </span>

                <span className="lk-sport-card__bottom">
                  <span className="lk-sport-card__format">
                    {sport.format}
                  </span>

                  <span className="lk-sport-card__venue">
                    GROUND / {sport.venue.toUpperCase()} ARENA
                  </span>

                  <span className="lk-sport-card__name">
                    {sport.name}
                  </span>

                  <span className="lk-sport-card__discover">
                    EXPLORE ARENA <i>↗</i>
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="lk-empty-state">
            <span className="lk-empty-state__mark">★</span>
            <h3>NO ARENAS FOUND</h3>
            <p>Try another discipline name or choose a different category from the roster.</p>
            <button type="button" className="lk-button lk-button--outline" onClick={() => { setQuery(""); setActiveFilter("all"); }}>
              RESET ROSTER FILTERS <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </section>

      

      {/* Sport Detail Modal / Dossier */}
      {selectedSport && (
        <div className="lk-modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedSport(null);
        }}>
          <section className="lk-sport-modal" role="dialog" aria-modal="true" aria-labelledby="lk-modal-title">
            <button type="button" className="lk-modal-close" onClick={() => setSelectedSport(null)} aria-label="Close sport details">×</button>

            <div className="lk-sport-modal__image-wrap">
              <img src={selectedSport.image} alt="" className="lk-sport-modal__image" />
              <span className="lk-sport-modal__image-shade" />
              <span className="lk-sport-modal__number">★ {selectedSport.number} / LAKSHYA V DISCIPLINE</span>
            </div>

            <div className="lk-sport-modal__body">
              <span className="lk-card-corners" aria-hidden="true" />
              <p className="lk-eyebrow lk-eyebrow--muted">★ {selectedSport.categoryLabel} ★</p>

              <h2 id="lk-modal-title">{selectedSport.name.toUpperCase()}<span>.</span></h2>

              <p className="lk-sport-modal__format">{selectedSport.format}</p>

              <p className="lk-sport-modal__description">{selectedSport.description}</p>

              <div className="lk-modal-info-line">
                <span>FIXTURES</span>
                <b>PENDING OFFICIAL DISPATCH</b>
              </div>

              <div className="lk-modal-info-line">
                <span>ARENA GROUNDS</span>
                <b>{selectedSport.venue.toUpperCase()} ARENA</b>
              </div>

              <button type="button" className="lk-button lk-button--gold lk-modal-done" onClick={() => setSelectedSport(null)}>
                RETURN TO ALL ARENAS <ArrowUpRight size={16} />
              </button>
            </div>
          </section>
        </div>
      )}

    </main>

  );

}
