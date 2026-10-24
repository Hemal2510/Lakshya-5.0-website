
import PocketWatch from "../../components/PocketWatch/PocketWatch";

export default function Live() {
    return <PocketWatch />;

    import {
        useEffect,
        useMemo,
        useRef,
        useState,
        type MouseEvent as ReactMouseEvent,
        type ReactNode,
    } from "react";
    import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";

    type Status = "scheduled" | "live" | "completed";

    interface Match {
        id: string;
        sport: string;
        title: string;
        teamA: string;
        teamB: string;
        venue: string;
        mapUrl: string;
        startsAt: string; // ISO string, local time
        day: number; // 0, 1, 2, 3
        status: Status;
        scoreA?: string;
        scoreB?: string;
    }

    const DAYS = [
        { label: "DAY 00", date: "Thu Feb 12 2026" },
        { label: "DAY 01", date: "Fri Feb 13 2026" },
        { label: "DAY 02", date: "Sat Feb 14 2026" },
        { label: "DAY 03", date: "Sun Feb 15 2026" },
    ];

    const SPORTS = ["Aquatics", "Athletics", "Basketball", "Cricket", "Football", "Volleyball"];

    const SPORT_ICONS: Record<string, string> = {
        Aquatics: "🏊",
        Athletics: "🏃",
        Basketball: "🏀",
        Cricket: "🏏",
        Football: "⚽",
        Volleyball: "🏐",
    };

    const MATCHES: Match[] = [
        {
            id: "cr-001",
            sport: "Cricket",
            title: "Pool B - IPS Vs SVVV",
            teamA: "SVVV",
            teamB: "IPS",
            venue: "Cricket Ground",
            mapUrl: "https://maps.google.com",
            startsAt: "2026-02-12T17:00:00",
            day: 0,
            status: "completed",
            scoreA: "142/6",
            scoreB: "143/4",
        },
    ];

    function formatTime(iso: string) {
        return new Date(iso).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    /* =========================================================================
       VINTAGE WESTERN / FRONTIER SALOON THEME CSS
    ========================================================================= */
    const THEME_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Cinzel+Decorative:wght@700;900&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Rye&display=swap');

.western-body {
  font-family: 'Playfair Display', Georgia, serif;
  background-color: #0a0604;
  color: #e6c594;
}

.western-title {
  font-family: 'Cinzel Decorative', 'Rye', Georgia, serif;
  letter-spacing: 1px;
}

.western-serif {
  font-family: 'Cinzel', serif;
  letter-spacing: 1.5px;
}

/* Gold Gradient Text */
.gold-text {
  background: linear-gradient(135deg, #fff4db 0%, #ffd580 40%, #d49b55 75%, #8c521b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Brass & Gold Fill */
.gold-fill {
  background: linear-gradient(135deg, #ffd580 0%, #d49b55 55%, #8c521b 100%);
}

/* Saloon Plaque Badge */
.saloon-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 24px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(50, 26, 12, 0.85) 0%, rgba(28, 14, 6, 0.95) 100%);
  border: 1.5px solid #d49b55;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.7), 0 0 15px rgba(212, 155, 85, 0.2);
  color: #ffd580;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}
.saloon-badge:hover {
  border-color: #ffd580;
  box-shadow: 0 0 22px rgba(245, 200, 121, 0.35);
}

/* Frontier Gilded Card */
.saloon-card {
  position: relative;
  background: linear-gradient(180deg, #24140b 0%, #150a04 100%);
  border: 1.5px solid #5a2e0e;
  border-radius: 16px;
  box-shadow: 
    0 14px 28px rgba(0, 0, 0, 0.85),
    0 4px 10px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 220, 150, 0.12);
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out, box-shadow 0.35s ease, border-color 0.35s ease;
  will-change: transform;
}
.saloon-card:hover {
  border-color: #d49b55;
  box-shadow: 
    0 24px 50px rgba(0, 0, 0, 0.98),
    0 0 35px rgba(212, 155, 85, 0.35),
    inset 0 1px 0 rgba(255, 240, 180, 0.25);
}

/* Card Glare effect */
.saloon-glare {
  position: absolute; 
  inset: 0; 
  border-radius: inherit; 
  pointer-events: none;
  opacity: 0; 
  transition: opacity 0.3s ease;
  background: radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(212, 155, 85, 0.18), transparent 55%);
}
.saloon-card:hover .saloon-glare { opacity: 1; }

/* 3D Wall Tack Assembly */
.wall-tack-assembly {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}
.tack-puncture-hole {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #080301;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.95);
}
.tack-head {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff4db 0%, #d49b55 35%, #7a4214 70%, #291204 100%);
  border: 1px solid #1c0a02;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9), inset 0 1px 1.5px rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.tack-slot {
  width: 8px;
  height: 1.5px;
  background: #1c0a02;
  box-shadow: 0 0.5px 0 rgba(255, 230, 180, 0.4);
  transform: rotate(35deg);
}

/* Saloon Gas-Lamp Glow */
@keyframes lantern-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(220, 80, 20, 0.7); }
  50% { box-shadow: 0 0 0 7px rgba(220, 80, 20, 0); }
}
.lantern-dot { animation: lantern-glow 1.8s ease-out infinite; }

/* Subtle Night Blue Prairie Sky Arc */
.night-blue-arc-container {
  position: absolute;
  top: -110px;
  left: 50%;
  transform: translateX(-50%);
  width: 140vw;
  max-width: 1500px;
  height: 440px;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.night-blue-arc-glow {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at 50% 32%,
    rgba(28, 58, 115, 0.35) 0%,
    rgba(16, 35, 75, 0.20) 42%,
    rgba(10, 22, 50, 0.06) 68%,
    transparent 84%
  );
  border-bottom: 1px solid rgba(85, 145, 230, 0.16);
  box-shadow: 0 20px 70px -10px rgba(25, 55, 120, 0.25);
}

/* Background Stripes */
.gallery-bg-stripes {
  position: fixed;
  inset: 0;
  opacity: 0.035;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 28px,
    rgba(212, 155, 85, 0.6) 28px,
    rgba(212, 155, 85, 0.6) 29px
  );
}

@media (prefers-reduced-motion: reduce) {
  .lantern-dot { animation: none; }
  .saloon-card { transform: none !important; }
}
`;

    function Shell({ children }: { children: ReactNode }) {
        return (
            <div className="western-body relative min-h-screen overflow-x-hidden">
                <style>{THEME_CSS}</style>

                {/* Background Backdrop, Night Blue Top Arc & Gas-Lamp Ambient Glows */}
                <div className="pointer-events-none fixed inset-0 -z-0">
                    {/* Subtle Night Blue Arc Shade at the starting top part */}
                    <div className="night-blue-arc-container">
                        <div className="night-blue-arc-glow" />
                    </div>

                    {/* Base atmospheric lighting */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `
                            radial-gradient(ellipse 90% 450px at 50% 0%, rgba(25, 55, 115, 0.36) 0%, rgba(15, 32, 70, 0.20) 45%, rgba(9, 18, 42, 0.05) 75%, transparent 100%),
                            radial-gradient(ellipse at 50% 28%, rgba(200, 95, 25, 0.18) 0%, rgba(120, 50, 15, 0.08) 40%, transparent 65%),
                            radial-gradient(circle at 15% 35%, rgba(220, 120, 30, 0.12) 0%, transparent 45%),
                            radial-gradient(circle at 85% 65%, rgba(200, 100, 25, 0.12) 0%, transparent 45%),
                            radial-gradient(ellipse at 50% 100%, rgba(160, 70, 20, 0.15) 0%, transparent 60%)
                        `,
                        }}
                    />
                    <div className="gallery-bg-stripes" />
                </div>

                <div className="relative z-10">{children}</div>
            </div>
        );
    }

    /* ------------------------------------------------------------------ */
    /* SMALL COMPONENTS                                                   */
    /* ------------------------------------------------------------------ */

    function StatusBadge({ status }: { status: Status }) {
        if (status === "live") {
            return (
                <span className="western-serif inline-flex items-center gap-2 rounded-full border border-[#d49b55] bg-gradient-to-r from-[#4d1607] to-[#260a03] px-3.5 py-1 text-xs font-bold text-[#ffd580] shadow-[0_0_12px_rgba(212,155,85,0.3)]">
                    <span className="lantern-dot h-2 w-2 rounded-full bg-[#ff4a1c]" />
                    LIVE
                </span>
            );
        }
        if (status === "completed") {
            return (
                <span className="western-serif rounded-full border border-[#5a2e0e] bg-[#140803]/80 px-3.5 py-1 text-xs font-semibold text-[#a8896a]">
                    CONCLUDED
                </span>
            );
        }
        return (
            <span className="western-serif rounded-full border border-[#8c521b] bg-gradient-to-b from-[#2b170c] to-[#140a05] px-3.5 py-1 text-xs font-semibold text-[#ffd580] shadow-sm">
                SCHEDULED
            </span>
        );
    }

    function PinIcon() {
        return (
            <svg className="h-4 w-4 text-[#d49b55]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
            </svg>
        );
    }

    function ClockIcon() {
        return (
            <svg className="h-4 w-4 text-[#d49b55]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </svg>
        );
    }

    function SportDropdown({
        value,
        onChange,
    }: {
        value: string;
        onChange: (sport: string) => void;
    }) {
        const [open, setOpen] = useState(false);
        const boxRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const handleClick = (e: MouseEvent) => {
                if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
                    setOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClick);
            return () => document.removeEventListener("mousedown", handleClick);
        }, []);

        const options = ["All", ...SPORTS];

        return (
            <div ref={boxRef} className="relative w-full sm:w-64">
                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    className="western-serif flex w-full items-center justify-between rounded-full border border-[#8c521b] bg-gradient-to-b from-[#2b170c] to-[#140a05] px-5 py-2.5 text-sm font-bold text-[#ffd580] shadow-[0_4px_16px_rgba(0,0,0,0.7)] transition hover:border-[#d49b55] hover:shadow-[0_0_15px_rgba(212,155,85,0.25)] focus:outline-none"
                >
                    <span>{value === "All" ? "ALL SPORTS" : `${SPORT_ICONS[value]} ${value.toUpperCase()}`}</span>
                    <svg
                        className={`h-4 w-4 text-[#d49b55] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M5.5 7.5 10 12l4.5-4.5H5.5Z" />
                    </svg>
                </button>

                {open && (
                    <ul
                        role="listbox"
                        className="absolute z-30 mt-2 max-h-72 w-full overflow-auto rounded-2xl border border-[#8c521b] bg-[#1a0c06]/98 p-1.5 shadow-2xl shadow-black/90 backdrop-blur-xl"
                    >
                        {options.map((sport) => (
                            <li key={sport}>
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={sport === value}
                                    onClick={() => {
                                        onChange(sport);
                                        setOpen(false);
                                    }}
                                    className={`western-serif flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-xs font-bold tracking-wider transition ${sport === value
                                        ? "gold-fill text-[#150a04] shadow-md shadow-amber-950/40"
                                        : "text-[#c7b299] hover:bg-[#2b170c] hover:text-[#ffd580]"
                                        }`}
                                >
                                    <span className="w-5 text-center">
                                        {sport === "All" ? "" : SPORT_ICONS[sport]}
                                    </span>
                                    {sport === "All" ? "ALL SPORTS" : sport.toUpperCase()}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    function MatchCard({ match }: { match: Match }) {
        const navigate = useNavigate();
        const cardRef = useRef<HTMLDivElement>(null);
        const showScore = match.status !== "scheduled";
        const isLive = match.status === "live";

        const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
            const el = cardRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-4px)`;
            el.style.setProperty("--mx", `${x * 100}%`);
            el.style.setProperty("--my", `${y * 100}%`);
        };

        const handleLeave = () => {
            if (cardRef.current) cardRef.current.style.transform = "";
        };

        const open = () => navigate(`/match/${match.id}`);

        return (
            <div
                ref={cardRef}
                role="link"
                tabIndex={0}
                onClick={open}
                onKeyDown={(e) => e.key === "Enter" && open()}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className={`saloon-card group cursor-pointer p-6 focus:outline-none ${isLive ? "border-[#d49b55] shadow-[0_0_25px_rgba(212,155,85,0.3)]" : ""
                    }`}
            >
                {/* 3D Railroad Spike / Brass Wall Tack at top center */}
                <div className="wall-tack-assembly">
                    <div className="tack-puncture-hole" />
                    <div className="tack-head">
                        <div className="tack-slot" />
                    </div>
                </div>

                <div className="saloon-glare" />

                {/* Header: Sport badge & Status */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8c521b] bg-[#120703] text-2xl shadow-inner shadow-black/80">
                            {SPORT_ICONS[match.sport]}
                        </span>
                        <span className="western-serif text-sm font-bold tracking-wider text-[#ffd580]">
                            {match.sport.toUpperCase()}
                        </span>
                    </div>
                    <StatusBadge status={match.status} />
                </div>

                {/* Title / Pool */}
                <h3 className="western-serif mt-5 text-lg font-bold text-[#fff4df] group-hover:text-[#ffd580] transition-colors">
                    {match.title}
                </h3>

                {/* Teams and scores with brass VS medallion */}
                <div
                    className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center"
                    style={{ transform: "translateZ(26px)" }}
                >
                    <div>
                        <p className="western-serif text-base font-bold text-[#e6c594]">{match.teamA}</p>
                        {showScore && (
                            <p className="western-title gold-text mt-1 text-3xl font-black">{match.scoreA}</p>
                        )}
                    </div>

                    {/* Brass VS medallion */}
                    <div className="flex flex-col items-center">
                        <span className="gold-fill flex h-9 w-9 items-center justify-center rounded-full text-xs font-black text-[#150a04] shadow-[0_4px_12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                            VS
                        </span>
                    </div>

                    <div>
                        <p className="western-serif text-base font-bold text-[#e6c594]">{match.teamB}</p>
                        {showScore && (
                            <p className="western-title gold-text mt-1 text-3xl font-black">{match.scoreB}</p>
                        )}
                    </div>
                </div>

                {/* Bottom Card Footer Plate */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#4a270f] pt-4 text-xs text-[#c7b299]">
                    <div className="flex items-center gap-2">
                        <PinIcon />
                        <span>{match.venue}</span>
                        <a
                            href={match.mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#ffd580] underline decoration-[#d49b55]/50 underline-offset-4 hover:text-[#fff4df]"
                        >
                            View Map
                        </a>
                    </div>
                    <div className="western-serif flex items-center gap-2 text-[#ffd580]/90 font-medium">
                        <ClockIcon />
                        <span>{formatTime(match.startsAt)}</span>
                    </div>
                </div>
            </div>
        );
    }

    /* ------------------------------------------------------------------ */
    /* PAGES                                                              */
    /* ------------------------------------------------------------------ */

    type DayFilter = "event" | number;
    type StatusFilter = "all" | Status;

    const STATUS_TABS: { key: StatusFilter; label: string }[] = [
        { key: "all", label: "ALL SHOWDOWNS" },
        { key: "scheduled", label: "SCHEDULED" },
        { key: "live", label: "LIVE" },
        { key: "completed", label: "CONCLUDED" },
    ];

    function SchedulePage() {
        const [day, setDay] = useState<DayFilter>(0);
        const [sport, setSport] = useState("All");
        const [status, setStatus] = useState<StatusFilter>("all");

        const filtered = useMemo(() => {
            return MATCHES.filter((m) => {
                const dayOk = day === "event" ? true : m.day === day;
                const sportOk = sport === "All" || m.sport === sport;
                const statusOk = status === "all" || m.status === status;
                return dayOk && sportOk && statusOk;
            }).sort((a, b) => a.startsAt.localeCompare(b.startsAt));
        }, [day, sport, status]);

        const groups = useMemo(() => {
            const map = new Map<string, Match[]>();
            filtered.forEach((m) => {
                const key =
                    day === "event"
                        ? `${DAYS[m.day].date}, ${formatTime(m.startsAt)}`
                        : formatTime(m.startsAt);
                map.set(key, [...(map.get(key) ?? []), m]);
            });
            return Array.from(map.entries());
        }, [filtered, day]);

        const liveCount = MATCHES.filter((m) => m.status === "live").length;

        return (
            <Shell>
                <main className="px-4 pb-28 pt-12 sm:pt-16">
                    <div className="mx-auto max-w-3xl">
                        {/* Top Frontier Badge */}
                        <div className="text-center">
                            <div className="saloon-badge">
                                <span>★</span>
                                <span>PROVING GROUNDS LEDGER · IIT INDORE</span>
                                <span>★</span>
                            </div>

                            {/* Title */}
                            <h1 className="western-title mt-6 text-4xl sm:text-6xl font-black text-[#fff4df] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                                FRONTIER <span className="gold-text">SCHEDULE</span>
                            </h1>

                            {/* Woodcut Decorative Divider */}
                            <div className="flex justify-center items-center gap-3 my-4 text-[#8c4e20] text-sm select-none">
                                <span>════════════</span>
                                <span className="text-[#ffd580] text-lg">❖</span>
                                <span>════════════</span>
                            </div>

                            <p className="max-w-xl mx-auto text-sm sm:text-base text-[#c7b299] leading-relaxed">
                                The official battle ledger of Lakshya 5.0. Track live scores, upcoming clashes,
                                and historic verdicts etched onto the proving grounds.
                            </p>
                        </div>

                        {/* Day tabs in Saloon Wooden Plaque Frame */}
                        <div className="mt-9 flex justify-center">
                            <div className="flex max-w-full gap-1.5 overflow-x-auto rounded-full border border-[#8c521b] bg-gradient-to-b from-[#24140b] to-[#120804] p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.8)]">
                                <button
                                    onClick={() => setDay("event")}
                                    className={`western-serif whitespace-nowrap rounded-full px-5 py-2 text-xs font-extrabold tracking-wider transition ${day === "event"
                                        ? "gold-fill text-[#150a04] shadow-[0_0_15px_rgba(212,155,85,0.4)]"
                                        : "text-[#c7b299] hover:text-[#ffd580]"
                                        }`}
                                >
                                    ALL EXPEDITIONS
                                </button>
                                {DAYS.map((d, i) => (
                                    <button
                                        key={d.label}
                                        onClick={() => setDay(i)}
                                        className={`western-serif whitespace-nowrap rounded-full px-5 py-2 text-xs font-extrabold tracking-wider transition ${day === i
                                            ? "border border-[#d49b55] bg-[#3d1f0f] text-[#ffd580] shadow-[0_0_12px_rgba(212,155,85,0.3)]"
                                            : "text-[#c7b299] hover:text-[#ffd580]"
                                            }`}
                                    >
                                        {d.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="western-serif mt-3 text-center text-xs tracking-[3px] text-[#ffd580]/70 uppercase">
                            {day === "event" ? "All Event Days" : DAYS[day].date}
                        </p>

                        {/* Sport dropdown & status tabs */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <SportDropdown value={sport} onChange={setSport} />

                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {STATUS_TABS.map((s) => (
                                    <button
                                        key={s.key}
                                        onClick={() => setStatus(s.key)}
                                        className={`western-serif flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold tracking-wider transition ${status === s.key
                                            ? "border-[#d49b55] bg-gradient-to-b from-[#45220f] to-[#1e0d05] text-[#ffd580] shadow-[0_0_15px_rgba(212,155,85,0.3)]"
                                            : "border-[#5a2e0e] bg-[#1a0c06]/80 text-[#c7b299] hover:border-[#8c521b] hover:text-[#ffd580]"
                                            }`}
                                    >
                                        {s.key === "live" && (
                                            <span className="lantern-dot h-2 w-2 rounded-full bg-[#ff4a1c]" />
                                        )}
                                        {s.label}
                                        {s.key === "live" && liveCount > 0 && (
                                            <span className="text-[10px] text-[#ffd580]">({liveCount})</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Match list */}
                        <div className="mt-12 space-y-12">
                            {groups.length === 0 && (
                                <div className="saloon-card p-10 text-center">
                                    <p className="western-serif text-base text-[#ffd580]">
                                        No dispatches found for this selection.
                                    </p>
                                    <p className="text-xs text-[#a8896a] mt-1">
                                        Try adjusting your day, sport, or showdown status.
                                    </p>
                                </div>
                            )}

                            {groups.map(([timeLabel, matches]) => (
                                <section key={timeLabel}>
                                    {/* Plaque Header */}
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="western-serif text-lg sm:text-xl font-black text-[#ffd580] tracking-wider">
                                            ★ {timeLabel}
                                        </span>
                                        <div className="h-[2px] flex-1 bg-gradient-to-r from-[#8c521b] via-[#5a2e0e] to-transparent" />
                                    </div>
                                    <div className="space-y-5">
                                        {matches.map((m) => (
                                            <MatchCard key={m.id} match={m} />
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </main>
            </Shell>
        );
    }

    function MatchPage() {
        const { id } = useParams();
        const match = MATCHES.find((m) => m.id === id);

        if (!match) {
            return (
                <Shell>
                    <main className="px-4 pt-24 text-center">
                        <p className="western-serif text-xl text-[#ffd580]">Dispatch record not found.</p>
                        <Link to="/" className="mt-4 inline-block text-[#d49b55] underline hover:text-[#ffd580]">
                            ← Back to frontier schedule
                        </Link>
                    </main>
                </Shell>
            );
        }

        const showScore = match.status !== "scheduled";

        return (
            <Shell>
                <main className="px-4 pb-28 pt-12">
                    <div className="mx-auto max-w-3xl">
                        <Link
                            to="/"
                            className="saloon-badge mb-6"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M12.5 4.5 7 10l5.5 5.5-1.4 1.4L4.2 10l6.9-6.9 1.4 1.4Z" />
                            </svg>
                            <span>BACK TO SCHEDULE</span>
                        </Link>

                        {/* Master Gilded Frame */}
                        <div className="saloon-card p-6 sm:p-10">
                            {/* 3D Iron Railroad Spike */}
                            <div className="wall-tack-assembly">
                                <div className="tack-puncture-hole" />
                                <div className="tack-head">
                                    <div className="tack-slot" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#4a270f] pb-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8c521b] bg-[#120703] text-3xl shadow-inner">
                                        {SPORT_ICONS[match.sport]}
                                    </span>
                                    <div>
                                        <span className="western-serif text-sm font-bold tracking-wider text-[#ffd580]">
                                            {match.sport.toUpperCase()}
                                        </span>
                                        <p className="text-xs text-[#a8896a]">LAKSHYA 5.0 PROVING GROUNDS</p>
                                    </div>
                                </div>
                                <StatusBadge status={match.status} />
                            </div>

                            <h1 className="western-title mt-6 text-2xl sm:text-4xl font-bold text-[#fff4df]">
                                {match.title}
                            </h1>

                            {/* Western Scoreboard Display */}
                            <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl border border-[#5a2e0e] bg-[#140803] p-6 text-center shadow-inner">
                                <div>
                                    <p className="western-serif text-lg sm:text-xl font-bold text-[#e6c594]">{match.teamA}</p>
                                    {showScore && (
                                        <p className="western-title gold-text mt-2 text-4xl sm:text-6xl font-black">{match.scoreA}</p>
                                    )}
                                </div>
                                <span className="gold-fill flex h-11 w-11 items-center justify-center rounded-full text-xs font-black text-[#150a04] shadow-lg shadow-black/80">
                                    VS
                                </span>
                                <div>
                                    <p className="western-serif text-lg sm:text-xl font-bold text-[#e6c594]">{match.teamB}</p>
                                    {showScore && (
                                        <p className="western-title gold-text mt-2 text-4xl sm:text-6xl font-black">{match.scoreB}</p>
                                    )}
                                </div>
                            </div>

                            {/* Dispatch Details Grid */}
                            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-xl border border-[#5a2e0e] bg-[#160a04]/90 p-4">
                                    <dt className="western-serif text-xs font-bold text-[#a8896a] tracking-wider">DATE</dt>
                                    <dd className="western-serif mt-1 text-sm font-semibold text-[#ffd580]">
                                        {DAYS[match.day].date} ({DAYS[match.day].label})
                                    </dd>
                                </div>
                                <div className="rounded-xl border border-[#5a2e0e] bg-[#160a04]/90 p-4">
                                    <dt className="western-serif text-xs font-bold text-[#a8896a] tracking-wider">START TIME</dt>
                                    <dd className="western-serif mt-1 text-sm font-semibold text-[#ffd580]">{formatTime(match.startsAt)}</dd>
                                </div>
                                <div className="rounded-xl border border-[#5a2e0e] bg-[#160a04]/90 p-4">
                                    <dt className="western-serif text-xs font-bold text-[#a8896a] tracking-wider">ARENA VENUE</dt>
                                    <dd className="mt-1 text-sm text-[#e6c594]">
                                        {match.venue}{" "}
                                        <a
                                            href={match.mapUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block text-xs text-[#ffd580] underline decoration-[#d49b55]/50 hover:text-[#fff4df] mt-0.5"
                                        >
                                            Open Arena Map ↗
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </main>
            </Shell>
        );
    }

    export default function Live() {
        return (
            <Routes>
                <Route path="/" element={<SchedulePage />} />
                <Route path="/match/:id" element={<MatchPage />} />
            </Routes>
        );

    }
}