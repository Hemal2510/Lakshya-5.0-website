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

export interface FireHexBadgeProps {
  eyebrow?: string;
  name?: string;
  role?: string;
  photoUrl?: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    [key: string]: any;
  } | Array<{ label: string; href: string; icon: string }>;
  scale?: number;
}

/** Deterministic seed from name so each card's torn pattern is unique */
function seedFrom(s: string) {
  return (s.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 18) + 2;
}

/** Sanitise name to a valid XML id fragment */
function idFrom(s: string) {
  return s.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}

export default function FireHexBadge({
  name = "Suryansh Nagar",
  role = "Co-organiser",
  photoUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  socials,
  scale = 1,
  eyebrow = "HEAD OF COMMITTEE",
}: FireHexBadgeProps) {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  const isArraySocials = Array.isArray(socials);
  const linkedinUrl = isArraySocials
    ? socials.find((s) => s.icon === "linkedin")?.href
    : socials?.linkedin;
  const instagramUrl = isArraySocials
    ? socials.find((s) => s.icon === "instagram")?.href
    : socials?.instagram;

  const cardW = Math.round(204 * scale);
  const cardH = Math.round(296 * scale);
  const photoW = Math.round(132 * scale);
  const photoH = Math.round(124 * scale);

  // SVG filter IDs — unique per card name
  const uid   = idFrom(name);
  const seed  = seedFrom(name);
  const filterId = `tp-f-${uid}`;
  const gradId   = `tp-g-${uid}`;
  const grad2Id  = `tp-n-${uid}`;  // noise overlay gradient

  // Bleed around the card so torn edges spill outside original bounds
  const bleed = 14;
  const svgW  = cardW + bleed * 2;
  const svgH  = cardH + bleed * 2;

  return (
    <CardContainer className="inter-var" containerClassName="py-0">
      <CardBody className="w-auto h-auto bg-transparent">
        <div className="relative inline-block overflow-visible select-none group">
          <style>{`
            .tp-sm-wrap {
              transition: transform 0.38s cubic-bezier(.22,1,.36,1), filter 0.38s ease;
            }
            .group:hover .tp-sm-wrap {
              transform: translateY(-7px) scale(1.03) rotate(-0.5deg);
              filter: drop-shadow(0 22px 30px rgba(0,0,0,0.78))
                      drop-shadow(0  0  22px rgba(140,70,8,0.45));
            }
            /* B&W sepia → full colour on hover */
            .tp-photo-sm {
              filter: grayscale(100%) contrast(1.18) brightness(0.93) sepia(24%);
              transition: filter 0.62s ease, transform 0.62s cubic-bezier(.22,1,.36,1);
            }
            .group:hover .tp-photo-sm {
              filter: grayscale(0%) contrast(1.04) brightness(1.02) sepia(0%);
              transform: scale(1.06);
            }
            .tp-btn-sm {
              transition: transform 0.18s ease, background 0.18s ease;
            }
            .tp-btn-sm:hover {
              transform: translateY(-2px);
              background: rgba(90,46,8,0.24) !important;
            }
          `}</style>

          {/* ===================================================================
              WANTED POSTER — small (FireHexBadge)

              The torn silhouette is created by an SVG feTurbulence +
              feDisplacementMap filter applied to a filled rectangle.
              This gives truly organic torn/crumpled paper edges — no images.

              Layer stack (bottom → top):
                1. SVG torn-paper background  (absolute, behind content)
                2. Paper crinkle noise overlay (absolute, behind content)
                3. Card content               (relative, on top)
          =================================================================== */}

          {/* Wrapper — drop-shadow follows the torn SVG silhouette */}
          <div
            className="tp-sm-wrap"
            style={{
              position: "relative",
              width: cardW,
              minHeight: cardH,
              filter: `drop-shadow(0 14px 26px rgba(0,0,0,0.72))
                       drop-shadow(3px 5px 10px rgba(50,18,2,0.56))`,
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
                {/*
                  feTurbulence generates the noise map.
                  Low baseFrequency → large, organic distortion (not tiny zigzags).
                  feDisplacementMap pushes rect edge pixels by the noise map → torn look.
                */}
                <filter
                  id={filterId}
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  colorInterpolationFilters="sRGB"
                >
                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.032 0.048"
                    numOctaves="4"
                    seed={seed}
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="15"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>

                {/*
                  Radial gradient — matches the reference image:
                  pale cream/tan center → warm amber mid → very dark brown edges
                */}
                <radialGradient
                  id={gradId}
                  cx="50%"
                  cy="44%"
                  r="70%"
                  gradientUnits="objectBoundingBox"
                >
                  {/* Bright cream/tan centre — like authentic parchment paper */}
                  <stop offset="0%"   stopColor="#f8f0d0" />
                  <stop offset="22%"  stopColor="#f0de9a" />
                  <stop offset="44%"  stopColor="#d8b45a" />
                  <stop offset="62%"  stopColor="#9a5c14" />
                  <stop offset="78%"  stopColor="#521e04" />
                  <stop offset="92%"  stopColor="#230900" />
                  <stop offset="100%" stopColor="#0e0400" />
                </radialGradient>

                {/* Secondary age-stain blotch — subtle, stays light */}
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

              {/* Main paper shape — turbulence tears the edges organically */}
              <rect
                x={bleed}
                y={bleed}
                width={cardW}
                height={cardH}
                fill={`url(#${gradId})`}
                filter={`url(#${filterId})`}
                rx="3"
              />

              {/* Age-stain overlay — same filter so it stays within torn shape */}
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

            {/* ── PAPER FIBRE TEXTURE (CSS, behind content) ────────────── */}
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
              className="relative flex flex-col justify-between text-center p-3"
              style={{
                width: cardW,
                minHeight: cardH,
                zIndex: 2,
                background: "transparent",
              }}
            >
              {/* Printed inner border — matches old typeset poster frames */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 10,
                  border: "1px solid rgba(80,40,5,0.40)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Corner stars */}
              <span style={{ position:"absolute", top:8, left:9, color:"#5a2e06", fontSize:7, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>
              <span style={{ position:"absolute", top:8, right:9, color:"#5a2e06", fontSize:7, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>
              <span style={{ position:"absolute", bottom:8, left:9, color:"#5a2e06", fontSize:7, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>
              <span style={{ position:"absolute", bottom:8, right:9, color:"#5a2e06", fontSize:7, fontFamily:"serif", pointerEvents:"none", zIndex:3 }}>★</span>

              {/* ---- HEADER ---- */}
              <div className="relative z-10 pt-1">
                <h1
                  style={{
                    fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
                    fontWeight: 900,
                    fontSize: Math.max(15, Math.round(17 * scale)),
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#1a0b02",
                    textShadow: "1px 1px 0 rgba(255,248,220,0.65)",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  LAKSHYA 5.0
                </h1>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginTop:4 }}>
                  <span style={{ height:1, width:14, background:"rgba(80,40,5,0.55)", display:"block" }} />
                  <p style={{ fontFamily:"Georgia,serif", fontWeight:700, fontSize:Math.max(7, Math.round(8 * scale)), letterSpacing:"0.2em", color:"#3d1a05", textTransform:"uppercase", margin:0 }}>
                    {eyebrow}
                  </p>
                  <span style={{ height:1, width:14, background:"rgba(80,40,5,0.55)", display:"block" }} />
                </div>
              </div>

              {/* ---- PHOTO FRAME ---- */}
              <CardItem translateZ={40} className="w-full flex justify-center my-1 relative z-10">
                <div
                  style={{
                    width: photoW,
                    height: photoH,
                    border: "2px solid #5a2e08",
                    boxShadow: "inset 0 0 10px rgba(0,0,0,0.68), 0 2px 6px rgba(0,0,0,0.36)",
                    background: "#1a0e06",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position:"absolute", inset:0, boxShadow:"inset 0 0 12px rgba(0,0,0,0.75)", zIndex:10, pointerEvents:"none" }} />
                  <img src={photoUrl} alt={name} className="tp-photo-sm" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                </div>
              </CardItem>

              {/* ---- NAMEPLATE ---- */}
              <CardItem translateZ={55} className="w-full relative z-10">
                <div style={{ borderTop:"1.5px solid #6b3808", borderBottom:"1.5px solid #6b3808", padding:"2px 6px" }}>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 900,
                      fontSize: Math.max(12, Math.round(13.5 * scale)),
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#160803",
                      textShadow: "0.5px 0.5px 0 rgba(255,240,210,0.85)",
                      lineHeight: 1.2,
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
              <div className="relative z-10" style={{ margin:"2px 0" }}>
                <p style={{ fontFamily:"Georgia,serif", fontStyle:"italic", fontWeight:700, fontSize:Math.max(8.5, Math.round(9.5 * scale)), letterSpacing:"0.05em", color:"#3d1a05", margin:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:172 }}>
                  {role}
                </p>
                <p style={{ fontFamily:"Georgia,serif", fontWeight:700, fontSize:7, letterSpacing:"0.14em", color:"rgba(107,56,8,0.88)", textTransform:"uppercase", margin:"2px 0 0" }}>
                  — IIT INDORE · 2026 —
                </p>
              </div>

              {/* ---- SOCIAL BUTTONS ---- */}
              <div style={{ position:"relative", zIndex:10, display:"flex", alignItems:"center", justifyContent:"center", gap:6, paddingTop:4, borderTop:"1px solid rgba(107,56,8,0.30)" }}>
                {linkedinUrl && (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="tp-btn-sm"
                    style={{ display:"flex", alignItems:"center", gap:4, padding:"2px 10px", border:"1.5px solid #5a2e08", background:"rgba(90,46,8,0.14)", borderRadius:2, fontFamily:"Georgia,serif", fontWeight:700, fontSize:8, letterSpacing:"0.12em", color:"#1a0b02", textDecoration:"none" }}>
                    <svg viewBox="0 0 24 24" style={{ width:10, height:10, fill:"#5a2e08", flexShrink:0 }}>{ICONS.linkedin}</svg>
                    <span>LINKEDIN</span>
                  </a>
                )}
                {instagramUrl && (
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="tp-btn-sm"
                    style={{ display:"flex", alignItems:"center", gap:4, padding:"2px 10px", border:"1.5px solid #5a2e08", background:"rgba(90,46,8,0.14)", borderRadius:2, fontFamily:"Georgia,serif", fontWeight:700, fontSize:8, letterSpacing:"0.12em", color:"#1a0b02", textDecoration:"none" }}>
                    <svg viewBox="0 0 24 24" style={{ width:10, height:10, fill:"#5a2e08", flexShrink:0 }}>{ICONS.instagram}</svg>
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
