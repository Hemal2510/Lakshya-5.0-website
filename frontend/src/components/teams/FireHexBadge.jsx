import React from "react";

/**
 * FireHexBadge
 * ------------------------------------------------------------------
 * Same fire palette / motifs as FireSealBadge, but clipped into a
 * vertical hexagon instead of a drippy oval. Meant to be used inside
 * whatever section/background your page already has — this component
 * does NOT paint its own background, so it stays transparent by design.
 * ------------------------------------------------------------------
 */

const ICONS = {
  linkedin: (
    <path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.06 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" />
  ),
  instagram: (
    <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.3 0 12 0zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" />
  ),
  github: (
    <path d="M12 .3a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" />
  ),
  twitter: (
    <path d="M23.5 3.6c-.8.36-1.7.6-2.6.7a4.6 4.6 0 002-2.5c-.87.5-1.83.87-2.86 1.07a4.5 4.5 0 00-7.7 4.1A12.8 12.8 0 011.6 2.16a4.5 4.5 0 001.4 6 4.4 4.4 0 01-2.04-.56v.06a4.5 4.5 0 003.6 4.4 4.5 4.5 0 01-2.03.08 4.5 4.5 0 004.2 3.13A9.05 9.05 0 010 17.55 12.75 12.75 0 006.9 19.6c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.39-.01-.58a9.2 9.2 0 002.26-2.34c-.82.36-1.7.6-2.5.7z" />
  ),
};

const DEFAULT_SOCIALS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
];

export default function FireHexBadge({
  eyebrow = "LAKSHAYA · 2026",
  name = "Suryansh Nagar",
  role = "Co-organiser",
  photoUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  socials = DEFAULT_SOCIALS,
  scale = 1,
}) {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  return (
    <div className="fbc-root inline-block overflow-visible">
      <style>{`
        @keyframes fbc-rise {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          8%   { opacity: .9; }
          100% { transform: translateY(-560px) translateX(var(--drift, 20px)) scale(.3); opacity: 0; }
        }
        @keyframes fbc-spin { to { transform: rotate(360deg); } }
        .fbc-ember { animation: fbc-rise linear infinite; }
        .fbc-ring { animation: fbc-spin 6s linear infinite; }
        .fbc-seal { transition: transform .5s cubic-bezier(.22,1,.36,1), filter .5s ease; }
        .fbc-group:hover .fbc-seal { transform: translateY(-8px) scale(1.015); }
        .fbc-group:hover .fbc-ring { animation-duration: 1.6s; }
        .fbc-group:hover .fbc-ember { animation-duration: 2.4s !important; }
        .fbc-group:hover .fbc-glow { opacity: 1; transform: scale(1.15); }
        .fbc-social-item { transform: translateY(14px); opacity: 0; transition: transform .45s cubic-bezier(.22,1,.36,1), opacity .4s ease; }
        .fbc-group:hover .fbc-social-item { transform: translateY(0); opacity: 1; }
        .fbc-social-item:nth-child(1) { transition-delay: .05s; }
        .fbc-social-item:nth-child(2) { transition-delay: .12s; }
        .fbc-social-item:nth-child(3) { transition-delay: .19s; }
        .fbc-hex-icon:hover { transform: translateY(-4px) scale(1.08); border-color: #ff7a00; box-shadow: 0 10px 24px -6px rgba(255,122,0,.6); }
      `}</style>

      <div className="fbc-group relative" style={{ width: 360 * scale, height: 460 * scale }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>


          {/* halo behind the badge */}
          <div
            className="fbc-glow pointer-events-none absolute left-1/2 top-[36%] -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl transition-all duration-500"
            style={{ background: "radial-gradient(circle, rgba(255,122,0,.55) 0%, transparent 70%)" }}
          />

          {/* THE HEX — vertical hexagon plate */}
          <div
            className="fbc-seal relative z-[2] mx-auto"
            style={{
              width: 340,
              height: 440,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <div
              className="h-full w-full"
              style={{
                background: "linear-gradient(155deg,#ffb627 0%,#e83600 42%,#7a0c02 100%)",
                padding: 3,
                clipPath: "inherit",
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  clipPath: "inherit",
                  background:
                    "radial-gradient(120% 70% at 50% 100%, rgba(232,54,0,.35) 0%, transparent 60%), linear-gradient(180deg,#0c0603 0%,#160b06 55%,#1e0d05 100%)",
                }}
              >
                {/* heat-line texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(115deg, #fff4e0 0 1px, transparent 1px 26px)",
                  }}
                />

                <div className="flex h-full flex-col items-center pt-14 px-8 pb-8">
                  {/* photo */}
                  <div className="relative mb-4 h-[140px] w-[140px]">
                    <div
                      className="fbc-ring absolute inset-0 rounded-full p-[4px]"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #ffb627, #e83600, #7a0c02, #ff7a00, #ffb627)",
                      }}
                    >
                      <div className="h-full w-full overflow-hidden rounded-full border-[3px] border-[#070402] bg-black">
                        <img
                          src={photoUrl}
                          alt={name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* text */}
                  <p className="mb-1.5 text-center font-mono text-[10px] font-bold tracking-[0.32em] text-[#ffb627]">
                    {eyebrow}
                  </p>
                  <h1
                    className="mb-2 text-center text-[28px] font-normal uppercase leading-[0.92] tracking-wide"
                    style={{
                      fontFamily: "'Anton', 'Arial Narrow', sans-serif",
                      backgroundImage:
                        "linear-gradient(180deg,#fff4e0 0%,#ff7a00 55%,#e83600 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      filter: "drop-shadow(0 2px 10px rgba(232,54,0,.45))",
                    }}
                  >
                    {first}
                    {last ? (
                      <>
                        <br />
                        {last}
                      </>
                    ) : null}
                  </h1>
                  <p className="mb-5 flex items-center justify-center gap-2 text-center font-mono text-[11px] tracking-[0.26em] text-[#ffd9a8]">
                    <span className="h-px w-4 bg-gradient-to-r from-transparent to-[#ff7a00]" />
                    {role}
                    <span className="h-px w-4 bg-gradient-to-l from-transparent to-[#ff7a00]" />
                  </p>

                  {/* socials — hidden until hover, rise in staggered */}
                  <div className="flex justify-center gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="fbc-social-item fbc-hex-icon flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,150,60,.4)] transition-all duration-300"
                        style={{
                          background: "linear-gradient(155deg,rgba(255,122,0,.18),rgba(232,54,0,.05))",
                        }}
                      >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-[#ffb627]">
                          {ICONS[s.icon]}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Embers() {
  const embers = React.useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        size: 2 + Math.random() * 4,
        left: Math.random() * 360,
        drift: Math.random() * 60 - 30,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute -inset-x-20 -top-32 -bottom-32 z-0">
      {embers.map((e) => (
        <div
          key={e.id}
          className="fbc-ember absolute bottom-0 rounded-full blur-[0.2px]"
          style={{
            width: e.size,
            height: e.size,
            left: e.left,
            "--drift": `${e.drift}px`,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            background: "radial-gradient(circle, #fff4e0 0%, #ff7a00 45%, transparent 75%)",
          }}
        />
      ))}
    </div>
  );
}
