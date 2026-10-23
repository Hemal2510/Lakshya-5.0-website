import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";

type Social = {
  instagram?: string;
  linkedin?: string;
};

export interface FireSealBadgeProps {
  eyebrow?: string;
  name?: string;
  role?: string;
  photoUrl?: string;
  socials?: Social;
  scale?: number;
}

const ICONS = {
  linkedin: (
    <path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.06 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" />
  ),
  instagram: (
    <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.3 0 12 0zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" />
  ),
};

const DEFAULT_SOCIALS: Social = { instagram: "#", linkedin: "#" };

function seedFrom(s: string) {
  return (s.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 18) + 2;
}

function idFrom(s: string) {
  return s.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}

export default function FireSealBadge({
  name = "Suryansh Nagar",
  role = "Co-organiser",
  photoUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  socials = DEFAULT_SOCIALS,
  scale = 1,
  eyebrow = "LEADERSHIP DISPATCH",
}: FireSealBadgeProps) {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  const cardW = Math.round(288 * scale);
  const cardH = Math.round(414 * scale);
  const photoW = Math.round(184 * scale);
  const photoH = Math.round(172 * scale);

  const uid      = idFrom(name);
  const seed     = seedFrom(name);
  const filterId = `tpl-f-${uid}`;
  const gradId   = `tpl-g-${uid}`;
  const grad2Id  = `tpl-n-${uid}`;

  const bleed = 16;
  const svgW  = cardW + bleed * 2;
  const svgH  = cardH + bleed * 2;

  return (
    <CardContainer className="inter-var" containerClassName="py-0">
      <CardBody className="w-auto h-auto bg-transparent">
        <div className="relative inline-block overflow-visible select-none group">
          <style>{`
            .tp-lg-wrap {
              transition: transform 0.38s cubic-bezier(.22,1,.36,1), filter 0.38s ease;
            }
            .group:hover .tp-lg-wrap {
              transform: translateY(-8px) scale(1.025) rotate(-0.4deg);
              filter: drop-shadow(0 28px 38px rgba(0,0,0,0.80))
                      drop-shadow(0  0  26px rgba(140,70,8,0.48));
            }
            .tp-photo-lg {
              filter: grayscale(100%) contrast(1.18) brightness(0.93) sepia(24%);
              transition: filter 0.62s ease, transform 0.62s cubic-bezier(.22,1,.36,1);
            }
            .group:hover .tp-photo-lg {
              filter: grayscale(0%) contrast(1.04) brightness(1.02) sepia(0%);
              transform: scale(1.06);
            }
            .tp-btn-lg {
              transition: transform 0.18s ease, background 0.18s ease;
            }
            .tp-btn-lg:hover {
              transform: translateY(-2px);
              background: rgba(90,46,8,0.24) !important;
            }
          `}</style>

          {/* ===================================================================
              WANTED POSTER — large (FireSealBadge / Leadership)

              SVG feTurbulence + feDisplacementMap creates the organic torn silhouette.
              Radial gradient: pale cream centre → rich amber → charred dark edges.
          =================================================================== */}

          <div
            className="tp-lg-wrap"
            style={{
              position: "relative",
              width: cardW,
              minHeight: cardH,
              filter: `drop-shadow(0 16px 32px rgba(0,0,0,0.74))
                       drop-shadow(4px 6px 12px rgba(45,16,2,0.58))`,
            }}
          >
            {/* ── TORN PAPER SVG BACKGROUND ──────────────────────────────── */}
            <svg
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -bleed,
                left: -bleed,
                width: svgW,
                height: svgH,
                overflow: "visible",
                zIndex: 0,
                pointerEvents: "none",
              }}
              viewBox={`0 0 ${svgW} ${svgH}`}
            >
              <defs>
                <filter
                  id={filterId}
                  x="-22%"
                  y="-22%"
                  width="144%"
                  height="144%"
                  colorInterpolationFilters="sRGB"
                >
                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.028 0.042"
                    numOctaves="4"
                    seed={seed}
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="17"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>

                <radialGradient
                  id={gradId}
                  cx="50%"
                  cy="44%"
                  r="73%"
                  gradientUnits="objectBoundingBox"
                >
                  {/* Authentic golden wanted poster parchment matching the wheel heads exactly */}
                  <stop offset="0%"   stopColor="#f8f0d0" />
                  <stop offset="25%"  stopColor="#f0de9a" />
                  <stop offset="48%"  stopColor="#d8b45a" />
                  <stop offset="66%"  stopColor="#9a5c14" />
                  <stop offset="82%"  stopColor="#521e04" />
                  <stop offset="93%"  stopColor="#230900" />
                  <stop offset="100%" stopColor="#0e0400" />
                </radialGradient>

                <radialGradient
                  id={grad2Id}
                  cx="38%"
                  cy="55%"
                  r="42%"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%"   stopColor="#e8c860" stopOpacity="0.18" />
                  <stop offset="55%"  stopColor="#a06820" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#200800" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Main torn paper shape */}
              <rect
                x={bleed}
                y={bleed}
                width={cardW}
                height={cardH}
                fill={`url(#${gradId})`}
                filter={`url(#${filterId})`}
                rx="3"
              />

              {/* Age stain overlay */}
              <rect
                x={bleed}
                y={bleed}
                width={cardW}
                height={cardH}
                fill={`url(#${grad2Id})`}
                filter={`url(#${filterId})`}
                rx="3"
                opacity="0.55"
              />
            </svg>

            {/* ── PAPER FIBRE TEXTURE ────────────────────────────────────── */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
                opacity: 0.12,
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px,
                    rgba(100,60,10,0.55) 2px, rgba(100,60,10,0.55) 3px),
                  repeating-linear-gradient(90deg, transparent, transparent 4px,
                    rgba(100,60,10,0.32) 4px, rgba(100,60,10,0.32) 5px)
                `,
              }}
            />

            {/* ── CARD CONTENT ──────────────────────────────────────────── */}
            <div
              className="relative flex flex-col justify-between text-center p-4"
              style={{
                width: cardW,
                minHeight: cardH,
                zIndex: 2,
                background: "transparent",
              }}
            >
              {/* Printed inner frame */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 12,
                  border: "1px solid rgba(80,40,5,0.42)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 14,
                  border: "1px solid rgba(80,40,5,0.18)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Corner stars */}
              <span style={{ position:"absolute", top:10, left:11, color:"#5a2e06", fontSize:9, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>
              <span style={{ position:"absolute", top:10, right:11, color:"#5a2e06", fontSize:9, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>
              <span style={{ position:"absolute", bottom:10, left:11, color:"#5a2e06", fontSize:9, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>
              <span style={{ position:"absolute", bottom:10, right:11, color:"#5a2e06", fontSize:9, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>

              {/* ---- HEADER ---- */}
              <div className="relative z-10 pt-1">
                <h1
                  style={{
                    fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
                    fontWeight: 900,
                    fontSize: Math.max(20, Math.round(24 * scale)),
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#1a0b02",
                    textShadow: "1.5px 1.5px 0 rgba(255,248,215,0.70)",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  LAKSHYA 5.0
                </h1>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginTop:5 }}>
                  <span style={{ height:1, width:18, background:"rgba(80,40,5,0.55)", display:"block" }} />
                  <p style={{ fontFamily:"Georgia,serif", fontWeight:700, fontSize:Math.max(8.5, Math.round(10 * scale)), letterSpacing:"0.24em", color:"#3d1a05", textTransform:"uppercase", margin:0 }}>
                    {eyebrow}
                  </p>
                  <span style={{ height:1, width:18, background:"rgba(80,40,5,0.55)", display:"block" }} />
                </div>
              </div>

              {/* ---- PHOTO FRAME ---- */}
              <CardItem translateZ={45} className="w-full flex justify-center relative z-10" style={{ margin:"6px 0" }}>
                <div
                  style={{
                    width: photoW,
                    height: photoH,
                    border: "2.5px solid #5a2e08",
                    boxShadow: "inset 0 0 14px rgba(0,0,0,0.70), 0 3px 8px rgba(0,0,0,0.40)",
                    background: "#1a0e06",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position:"absolute", inset:0, boxShadow:"inset 0 0 14px rgba(0,0,0,0.74)", zIndex:10, pointerEvents:"none" }} />
                  <img src={photoUrl} alt={name} className="tp-photo-lg" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                </div>
              </CardItem>

              {/* ---- NAMEPLATE ---- */}
              <CardItem translateZ={60} className="w-full relative z-10">
                <div style={{ borderTop:"2px solid #6b3808", borderBottom:"2px solid #6b3808", padding:"4px 10px" }}>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 900,
                      fontSize: Math.max(15, Math.round(18 * scale)),
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      color: "#160803",
                      textShadow: "0.5px 0.5px 0 rgba(255,240,200,0.85)",
                      lineHeight: 1.25,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {first} {last}
                  </h2>
                </div>
              </CardItem>

              {/* ---- ROLE ---- */}
              <div className="relative z-10" style={{ margin:"4px 0" }}>
                <p style={{ fontFamily:"Georgia,serif", fontStyle:"italic", fontWeight:700, fontSize:Math.max(10.5, Math.round(12 * scale)), letterSpacing:"0.07em", color:"#3d1a05", margin:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:240 }}>
                  {role}
                </p>
                <p style={{ fontFamily:"Georgia,serif", fontWeight:700, fontSize:8, letterSpacing:"0.18em", color:"rgba(107,56,8,0.88)", textTransform:"uppercase", margin:"3px 0 0" }}>
                  — CENTRAL INDIA'S LARGEST SPORTS FEST · IIT INDORE —
                </p>
              </div>

              {/* ---- SOCIAL BUTTONS ---- */}
              <div style={{ position:"relative", zIndex:10, display:"flex", alignItems:"center", justifyContent:"center", gap:8, paddingTop:6, borderTop:"1px solid rgba(107,56,8,0.32)" }}>
                {socials?.linkedin && (
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="tp-btn-lg"
                    style={{ display:"flex", alignItems:"center", gap:5, padding:"3px 12px", border:"1.5px solid #5a2e08", background:"rgba(90,46,8,0.14)", borderRadius:2, fontFamily:"Georgia,serif", fontWeight:700, fontSize:9, letterSpacing:"0.12em", color:"#1a0b02", textDecoration:"none" }}>
                    <svg viewBox="0 0 24 24" style={{ width:13, height:13, fill:"#5a2e08", flexShrink:0 }}>{ICONS.linkedin}</svg>
                    <span>LINKEDIN</span>
                  </a>
                )}
                {socials?.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="tp-btn-lg"
                    style={{ display:"flex", alignItems:"center", gap:5, padding:"3px 12px", border:"1.5px solid #5a2e08", background:"rgba(90,46,8,0.14)", borderRadius:2, fontFamily:"Georgia,serif", fontWeight:700, fontSize:9, letterSpacing:"0.12em", color:"#1a0b02", textDecoration:"none" }}>
                    <svg viewBox="0 0 24 24" style={{ width:13, height:13, fill:"#5a2e08", flexShrink:0 }}>{ICONS.instagram}</svg>
                    <span>INSTAGRAM</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
