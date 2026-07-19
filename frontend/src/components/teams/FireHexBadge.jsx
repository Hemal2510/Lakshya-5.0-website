import React from "react";
import {
    CardContainer,
    CardBody,
    CardItem,
} from "@/components/ui/3d-card";

const ICONS = {
  linkedin: (
    <path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.06 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" />
  ),
  instagram: (
    <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.3 0 12 0zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" />
  ),
};



const DEFAULT_SOCIALS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
];

// Pixel-flash configuration
const PIXEL_COLS = 18;
const PIXEL_ROWS = 24;
const PIXEL_PALETTE = ["#ffe3c9", "#ffd4c2", "#f7c9b8", "#fbe8d3", "#e9d3c0"];

function usePixelCells() {
  return React.useMemo(() => {
    const cells = [];
    const centerR = (PIXEL_ROWS - 1) / 2;
    const centerC = (PIXEL_COLS - 1) / 2;
    const maxDist = Math.hypot(centerR, centerC);
    for (let r = 0; r < PIXEL_ROWS; r++) {
      for (let c = 0; c < PIXEL_COLS; c++) {
        const dist = Math.hypot(r - centerR, c - centerC) / maxDist;
        const delay = dist * 420 + Math.random() * 140;
        const color = PIXEL_PALETTE[Math.floor(Math.random() * PIXEL_PALETTE.length)];
        cells.push({ id: `${r}-${c}`, delay, color });
      }
    }
    return cells;
  }, []);
}

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
  const pixelCells = usePixelCells();

  // Normalize socials prop format to support both Array and Object lookups
  const isArraySocials = Array.isArray(socials);
  const linkedinUrl = isArraySocials ? socials.find(s => s.icon === 'linkedin')?.href : socials?.linkedin;
  const instagramUrl = isArraySocials ? socials.find(s => s.icon === 'instagram')?.href : socials?.instagram;

  return (
      <CardContainer
          className="inter-var"
          containerClassName="py-0"
      >
          <CardBody className="w-auto h-auto bg-transparent">

              <div className="fbc-root inline-block overflow-visible">
      <style>{`
        @keyframes fbc-rise {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          8%   { opacity: .9; }
          100% { transform: translateY(-560px) translateX(var(--drift, 20px)) scale(.3); opacity: 0; }
        }
        @keyframes fbc-flicker {
          0%, 100% { filter: brightness(1); }
          45% { filter: brightness(1.08); }
          55% { filter: brightness(.96); }
        }
        @keyframes fbc-pixel-pop {
          0%   { opacity: 0; transform: scale(.6); }
          40%  { opacity: .55; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.3); }
        }
        .fbc-ember { animation: fbc-rise linear infinite; }
        .fbc-seal { transition: transform 1s cubic-bezier(.22,1,.36,1); }
        .fbc-group:hover .fbc-seal { transform: translateY(-4px) scale(1.008); }
        .fbc-group:hover .fbc-ember { animation-duration: 2.4s !important; }
        .fbc-group:hover .fbc-glow { opacity: 1; transform: scale(1.06); }
        .fbc-social-item { transform: translateY(14px); opacity: 0; transition: transform .45s cubic-bezier(.22,1,.36,1), opacity .4s ease; }
        .fbc-group:hover .fbc-social-item { transform: translateY(0); opacity: 1; }
        .fbc-social-item:nth-child(1) { transition-delay: .05s; }
        .fbc-social-item:nth-child(2) { transition-delay: .12s; }
        .fbc-social-item:nth-child(3) { transition-delay: .19s; }
        .fbc-hex-icon:hover { transform: translateY(-4px) scale(1.08); border-color: #ff7a00; box-shadow: 0 10px 24px -6px rgba(255,122,0,.6); }

        /* Grayscale to full color reveal transition */
        .fbc-bw {
          filter: grayscale(1);
          transition: filter 1.6s ease;
        }
        .fbc-group:hover .fbc-bw {
          filter: grayscale(0);
        }

        /* Scrim that desaturates the card background layer below typography */
        .fbc-bg-scrim {
          backdrop-filter: grayscale(1);
          -webkit-backdrop-filter: grayscale(1);
          transition: backdrop-filter 1.6s ease, -webkit-backdrop-filter 1.6s ease;
        }
        .fbc-group:hover .fbc-bg-scrim {
          backdrop-filter: grayscale(0);
          -webkit-backdrop-filter: grayscale(0);
        }

        /* Photo expansion effect */
        .fbc-photo-img {
          transform: scale(1);
          transition: transform 1.6s cubic-bezier(.22,1,.36,1);
        }
        .fbc-group:hover .fbc-photo-img {
          transform: scale(1.05);
        }

        /* Pixel Burst Mesh Overlay */
        .fbc-pixel-grid {
          position: absolute;
          inset: 0;
          z-index: 40;
          display: grid;
          grid-template-columns: repeat(${PIXEL_COLS}, 1fr);
          grid-template-rows: repeat(${PIXEL_ROWS}, 1fr);
          pointer-events: none;
        }
        .fbc-pixel {
          opacity: 0;
        }
        .fbc-group:hover .fbc-pixel {
          animation: fbc-pixel-pop 1.4s ease forwards;
        }
      `}</style>

      <div className="fbc-group relative" style={{ width: 420 * scale, height: 520 * scale }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>

          {/* Halo behind the badge (reconfigured with .fbc-bw) */}
          <div
            className="fbc-glow fbc-bw pointer-events-none absolute left-1/2 top-[36%] -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl transition-all duration-500"
            style={{ background: "radial-gradient(circle, rgba(255,122,0,.55) 0%, transparent 70%)" }}
          />

          {/* THE HEX — vertical hexagon plate */}
          <div
            className="fbc-seal relative z-[2] mx-auto"
            style={{
              width: 380,
              height: 480,
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
                {/* Desaturation scrim layer */}
                <div className="fbc-bg-scrim pointer-events-none absolute inset-0" />

                {/* Heat-line texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(115deg, #fff4e0 0 1px, transparent 1px 26px)",
                  }}
                />

                <div className="flex h-full flex-col items-center pt-12 px-6 pb-6">
                  {/* Photo with inner scaling and outer desaturation behavior */}
                  <div className="relative mb-4 h-[200px] w-[200px]">
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
                          className="fbc-photo-img fbc-bw h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Eyebrow text */}
                  <p className="fbc-bw mb-1.5 text-center font-mono text-[10px] font-bold tracking-[0.32em] text-[#ffb627]">
                    {eyebrow}
                  </p>

                  {/* Name (remains colorful by default per design style) */}
                  <h1
                    className="mb-2 text-center text-[25px] font-normal uppercase leading-[0.92] tracking-[0.10em]"
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

                  {/* Role text */}
                  <p className="fbc-bw mb-5 flex items-center justify-center gap-2 text-center font-mono text-[15px] tracking-[0.26em] text-[#ffd9a8]">
                    <span className="h-px w-4 bg-gradient-to-r from-transparent to-[#ff7a00]" />
                    {role}
                    <span className="h-px w-4 bg-gradient-to-l from-transparent to-[#ff7a00]" />
                  </p>

                  {/* Staggered social item containers */}
                  <div className="flex justify-center gap-3">
                    {linkedinUrl && (
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="fbc-social-item fbc-hex-icon flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,150,60,.4)] transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(155deg,rgba(255,122,0,.18),rgba(232,54,0,.05))",
                        }}
                      >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-[#ffb627]">
                          {ICONS.linkedin}
                        </svg>
                      </a>
                    )}

                    {instagramUrl && (
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="fbc-social-item fbc-hex-icon flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,150,60,.4)] transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(155deg,rgba(255,122,0,.18),rgba(232,54,0,.05))",
                        }}
                      >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-[#ffb627]">
                          {ICONS.instagram}
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Pixel burst component bound within the clipped hexagon area */}
                <div className="fbc-pixel-grid">
                  {pixelCells.map((cell) => (
                    <div
                      key={cell.id}
                      className="fbc-pixel"
                      style={{
                        backgroundColor: cell.color,
                        animationDelay: `${cell.delay}ms`,
                      }}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</CardBody>
</CardContainer>

  );
}