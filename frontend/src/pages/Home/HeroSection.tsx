import { useEffect, useState } from "react";
import frontierBackground from "../../assets/night-cowboy-hero-uhd.webp";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const DEFAULT_EVENT_TIME = "2027-01-29T09:00:00+05:30"; // 29 Jan 2027, 9:00 AM IST

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type PosterUnit = "DAYS" | "HOURS" | "MINUTES" | "SECONDS";

type PosterData = {
  unit: PosterUnit;
  value: string;
};

export type LakshyaFrontierHeroProps = {
  /** Optional URL/path to the official transparent Lakshya emblem. */
  logoSrc?: string;
  /** Countdown target. Include a timezone, e.g. 2027-01-15T09:00:00+05:30. */
  eventTime?: string;
  /** Anchor/link for the existing sports section. This component does not render that section. */
  sportsHref?: string;
};

type WantedPosterProps = {
  unit: PosterUnit;
  value: string;
};

function getTimeLeft(targetTime: string): TimeLeft {
  const targetMs = new Date(targetTime).getTime();
  const remaining = Number.isNaN(targetMs)
    ? 0
    : Math.max(0, targetMs - Date.now());

  return {
    days: String(Math.floor(remaining / 86_400_000)).padStart(3, "0"),
    hours: String(Math.floor((remaining % 86_400_000) / 3_600_000)).padStart(2, "0"),
    minutes: String(Math.floor((remaining % 3_600_000) / 60_000)).padStart(2, "0"),
    seconds: String(Math.floor((remaining % 60_000) / 1_000)).padStart(2, "0"),
  };
}

function WantedPoster({ unit, value }: WantedPosterProps) {
  return (
    <article className="lkh-poster" aria-label={`${value} ${unit}`}>
      <div className="lkh-poster-frame" aria-hidden="true" />
      <p className="lkh-poster-kicker">WANTED</p>
      <p className="lkh-poster-name">THE FINAL STRETCH</p>
      <div className="lkh-poster-stars" aria-hidden="true">
        ✦ ✦ ✦
      </div>
      <div className="lkh-poster-number" aria-label={value}>
        {value.split("").map((digit, index) => (
          <span className="lkh-digit" key={`${index}-${digit}`}>
            {digit}
          </span>
        ))}
      </div>
      <p className="lkh-poster-unit">{unit}</p>
      <div className="lkh-poster-divider" aria-hidden="true">
        <span>✦</span>
      </div>
      <p className="lkh-poster-footer">LAKSHYA 5.0 · IIT INDORE</p>
    </article>
  );
}

/**
 * Frontier-style Lakshya 5.0 hero and live countdown.
 * Navbar, sports cards/"Choose Your Arena", and footer are intentionally excluded.
 */
export default function LakshyaFrontierHero({
  logoSrc = "",
  eventTime = DEFAULT_EVENT_TIME,
  sportsHref = "#sports",
}: LakshyaFrontierHeroProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(eventTime));
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Relative offset from window center (-1 to 1)
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      // Moving in the direction of the cursor for panoramic feel
      targetX = nx * 38;
      targetY = ny * 22;
    };

    const updateLoop = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;
      setParallax({
        x: Math.round(currentX * 100) / 100,
        y: Math.round(currentY * 100) / 100,
      });
      animId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  useEffect(() => {
    const update = (): void => setTimeLeft(getTimeLeft(eventTime));
    update();
    const timerId = window.setInterval(update, 1000);
    return () => window.clearInterval(timerId);
  }, [eventTime]);

  const posters: PosterData[] = [
    { unit: "DAYS", value: timeLeft.days },
    { unit: "HOURS", value: timeLeft.hours },
    { unit: "MINUTES", value: timeLeft.minutes },
    { unit: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="lkh-hero" id="lakshya-home" aria-label="Lakshya 5.0 home">
      {/* Animated scenery layer */}
      <div className="lkh-scene" aria-hidden="true">
        <img
          className="lkh-scene-image"
          src={frontierBackground}
          alt="Frontier Landscape"
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.09)`,
          }}
        />
      </div>
      <div className="lkh-shade" aria-hidden="true" />

      {/* Lightweight dust and amber light effects */}
      
<div className="lkh-atmosphere" aria-hidden="true">
  {/* Keep the existing light sweep */}
  <span className="lkh-light-sweep" />
  {/* Large Western decorative details */}
<span className="lkh-western-seal" />
<span className="lkh-western-corners" />
<span className="lkh-frontier-rail">
  THE FRONTIER · LAKSHYA V · IIT INDORE
</span>
  {/* New Western bullet-hole decorations */}
  <span className="lkh-bullet-hole lkh-bullet-hole-1" />
  <span className="lkh-bullet-hole lkh-bullet-hole-2" />
  <span className="lkh-bullet-hole lkh-bullet-hole-3" />
  <span className="lkh-bullet-hole lkh-bullet-hole-4" />

  {/* Keep the existing floating dust particles */}
  <span className="lkh-dust lkh-dust-1" />
  <span className="lkh-dust lkh-dust-2" />
  <span className="lkh-dust lkh-dust-3" />
  <span className="lkh-dust lkh-dust-4" />
  <span className="lkh-dust lkh-dust-5" />
  <span className="lkh-dust lkh-dust-6" />
  <span className="lkh-dust lkh-dust-7" />
  <span className="lkh-dust lkh-dust-8" />
</div>


      <div className="lkh-hero-inner">
        <div className="lkh-hero-copy">
          {logoSrc ? (
            <img className="lkh-hero-emblem lkh-reveal" src={logoSrc} alt="Lakshya emblem" />
          ) : null}



          <p className="lkh-overline lkh-reveal lkh-delay-1">
            THE FRONTIER IS YOURS TO CLAIM
          </p>

          
<h1 className="lkh-brand-title lkh-reveal lkh-delay-1">
  <span className="lkh-brand-name">LAKSHYA</span>
  <span className="lkh-brand-version">5.0</span>
</h1>

<div
  className="lkh-brand-divider lkh-reveal lkh-delay-2"
  aria-hidden="true"
>
  <span />
  <b>✥</b>
  <span />
</div>

<p className="lkh-brand-tagline lkh-reveal lkh-delay-2">
  CHASE WHAT LIES BEYOND
</p>


          <p className="lkh-description lkh-reveal lkh-delay-2">
            A new frontier. A thousand stories. One unrelenting spirit.
            Get ready for Central India’s biggest celebration of sport.
          </p>

          <div className="lkh-actions lkh-reveal lkh-delay-3">
            <Link
            className="lkh-action lkh-action-primary"
            to={sportsHref.startsWith("#") ? "/sports" : sportsHref}
            >
              EXPLORE THE GAMES <span aria-hidden="true">↗</span>
            </Link>
            <a className="lkh-action lkh-action-secondary" href="#lakshya-countdown">
              COUNTDOWN <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <section
          className="lkh-countdown lkh-reveal lkh-delay-4"
          id="lakshya-countdown"
          aria-label="Countdown to Lakshya 5.0"
        >
          <div className="lkh-countdown-heading">
            <span aria-hidden="true">✦</span>
            <p>THE EXPEDITION BEGINS IN</p>
            <span aria-hidden="true">✦</span>
          </div>

          <div className="lkh-poster-row" aria-live="off">
            {posters.map((poster) => (
              <WantedPoster key={poster.unit} unit={poster.unit} value={poster.value} />
            ))}
          </div>

          <p className="lkh-countdown-footnote">
            15 JANUARY 2027 · 09:00 AM IST
          </p>
        </section>
      </div>

      <div className="lkh-scroll-cue" aria-hidden="true">
        <span>RIDE FURTHER</span>
        <i />
      </div>
    </section>
  );
}
