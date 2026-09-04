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

  // Base dimensions tuned for crisp layout with zero wheel overlap
  const cardW = Math.round(210 * scale);
  const cardH = Math.round(300 * scale);
  const photoW = Math.round(135 * scale);
  const photoH = Math.round(128 * scale);

  return (
    <CardContainer className="inter-var" containerClassName="py-0">
      <CardBody className="w-auto h-auto bg-transparent">
        <div className="relative inline-block overflow-visible select-none group">
          <style>{`
            /* Realistic paper lift on hover with tactile lighting */
            .real-paper-card {
              transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease;
            }
            .group:hover .real-paper-card {
              transform: translateY(-6px) scale(1.02);
              box-shadow: 
                0 22px 45px rgba(0,0,0,0.95), 
                0 0 35px rgba(212,155,85,0.4), 
                inset 0 0 32px rgba(70, 30, 8, 0.55);
            }

            /* PHOTO ALONE: Black & White sepia developing smoothly into full vibrant color on hover */
            .paper-photo {
              filter: grayscale(100%) contrast(1.22) brightness(0.92) sepia(22%);
              transition: filter 0.65s ease, transform 0.65s cubic-bezier(.22,1,.36,1);
            }
            .group:hover .paper-photo {
              filter: grayscale(0%) contrast(1.04) brightness(1) sepia(0%);
              transform: scale(1.06);
            }

            .paper-btn {
              transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
            }
            .paper-btn:hover {
              transform: translateY(-1.5px);
              box-shadow: 0 4px 10px rgba(0,0,0,0.6);
            }
          `}</style>

          {/* =========================================================================
              REALISTIC AGED DUSTY BROWN WESTERN PAPER POSTER
          ========================================================================= */}
          <div
            className="real-paper-card relative z-10 rounded-xs p-3 text-center overflow-hidden flex flex-col justify-between"
            style={{
              width: cardW,
              minHeight: cardH,
              /* Dusty Antique Brown Multi-Layer Parchment with Burnt Edges & Stains */
              background: `
                radial-gradient(ellipse at 50% 12%, rgba(244, 224, 194, 0.95) 0%, rgba(218, 187, 148, 0.92) 45%, rgba(184, 143, 98, 0.95) 80%, rgba(98, 54, 20, 0.98) 100%),
                radial-gradient(circle at 12% 18%, rgba(80, 38, 10, 0.22) 0%, transparent 40%),
                radial-gradient(circle at 88% 82%, rgba(65, 28, 8, 0.28) 0%, transparent 45%),
                linear-gradient(175deg, #dbc29f 0%, #c3986a 50%, #ab7c4b 100%)
              `,
              border: "2px solid #3d1e0a",
              boxShadow: `
                0 14px 32px rgba(0,0,0,0.9), 
                0 4px 12px rgba(0,0,0,0.7),
                inset 0 0 28px rgba(70, 30, 8, 0.5), 
                inset 0 0 55px rgba(35, 12, 4, 0.35)
              `,
            }}
          >
            {/* Realistic Paper Fiber & Crease Texture Overlays */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.16]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(80, 38, 10, 0.55) 2px, rgba(80, 38, 10, 0.55) 3px),
                  repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(80, 38, 10, 0.35) 3px, rgba(80, 38, 10, 0.35) 4px)
                `,
              }}
            />

            {/* Subtle Diagonal Paper Fold Highlight */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.09]"
              style={{
                background: "linear-gradient(135deg, transparent 46%, rgba(255,255,255,0.6) 49%, rgba(0,0,0,0.45) 52%, transparent 55%)",
              }}
            />

            {/* Weathered Double Etched Inner Frame */}
            <div className="absolute inset-1.5 border-2 border-[#47220b]/80 pointer-events-none rounded-xs" />
            <div className="absolute inset-2 border border-[#663515]/45 pointer-events-none rounded-xs" />

            {/* Corner Star Rivets */}
            <span className="absolute top-2 left-2 text-[#47220b] text-[8px] pointer-events-none select-none font-serif">★</span>
            <span className="absolute top-2 right-2 text-[#47220b] text-[8px] pointer-events-none select-none font-serif">★</span>
            <span className="absolute bottom-2 left-2 text-[#47220b] text-[8px] pointer-events-none select-none font-serif">★</span>
            <span className="absolute bottom-2 right-2 text-[#47220b] text-[8px] pointer-events-none select-none font-serif">★</span>

            {/* TOP HEADER: Bold Woodcut Slab-Serif Branding */}
            <div className="relative z-10 pt-1">
              <h1
                className="font-serif font-black uppercase leading-none tracking-[0.18em] text-[#160b04]"
                style={{
                  fontSize: Math.max(16, Math.round(18 * scale)),
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  textShadow: "1px 1px 0px rgba(255,245,230,0.5)",
                }}
              >
                LAKSHYA 5.0
              </h1>
              
              {/* Header Ribbon / Subtitle with dash accents */}
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <span className="h-px w-3 bg-[#5c2d10]/75" />
                <p
                  className="font-serif font-black tracking-[0.22em] text-[#3d1a07] uppercase"
                  style={{ fontSize: Math.max(7.5, Math.round(8.5 * scale)) }}
                >
                  {eyebrow}
                </p>
                <span className="h-px w-3 bg-[#5c2d10]/75" />
              </div>
            </div>

            {/* WEATHERED PHOTO FRAME (Woodcut Border with Bevel) */}
            <CardItem translateZ={45} className="w-full flex justify-center my-1">
              <div
                className="relative p-1 bg-[#140a04] border-2 border-[#331808] shadow-[inset_0_0_10px_rgba(0,0,0,0.95),0_2px_8px_rgba(0,0,0,0.45)] rounded-xs overflow-hidden"
                style={{ width: photoW, height: photoH }}
              >
                {/* Vintage Photo Inner Vignette Shadow */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_12px_rgba(0,0,0,0.8)] z-10" />

                <div className="w-full h-full overflow-hidden bg-[#180e07]">
                  <img
                    src={photoUrl}
                    alt={name}
                    className="paper-photo w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardItem>

            {/* BOXED WOODCUT NAMEPLATE */}
            <CardItem translateZ={60} className="w-full relative z-10 px-0.5">
              <div
                className="py-1 px-1.5 rounded-xs border-2 border-[#331808] shadow-[inset_0_0_8px_rgba(75,35,8,0.3),0_1px_4px_rgba(0,0,0,0.25)]"
                style={{
                  background: "linear-gradient(180deg, #f5ecd8 0%, #e6d3b6 100%)",
                }}
              >
                <h2
                  className="font-serif font-black uppercase tracking-[0.08em] text-[#120803] leading-tight truncate"
                  style={{
                    fontSize: Math.max(12, Math.round(13.5 * scale)),
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    textShadow: "0.5px 0.5px 0px rgba(255,255,255,0.7)",
                  }}
                >
                  {first} {last}
                </h2>
              </div>
            </CardItem>

            {/* ROLE & DETAILS */}
            <div className="relative z-10 my-0.5">
              <p
                className="font-serif italic font-black tracking-[0.06em] text-[#331505] truncate max-w-[180px] mx-auto"
                style={{ fontSize: Math.max(9, Math.round(10 * scale)) }}
              >
                {role}
              </p>
              <p
                className="font-serif font-bold text-[7.5px] tracking-[0.16em] text-[#5c2d10] uppercase mt-0.5"
              >
                — IIT INDORE · 2026 —
              </p>
            </div>

            {/* VINTAGE WAX STAMP SOCIAL BUTTONS */}
            <div className="relative z-10 flex items-center justify-center gap-1.5 pt-1 border-t border-[#5c2d10]/35">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="paper-btn flex items-center gap-1 px-2.5 py-0.5 border border-[#331505] bg-[#1a0b03] hover:bg-[#331505] text-[#f4e4cf] text-[8.5px] font-serif font-bold tracking-wider rounded-xs shadow-xs"
                >
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-[#d49b55]">
                    {ICONS.linkedin}
                  </svg>
                  <span>LINKEDIN</span>
                </a>
              )}

              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="paper-btn flex items-center gap-1 px-2.5 py-0.5 border border-[#331505] bg-[#1a0b03] hover:bg-[#331505] text-[#f4e4cf] text-[8.5px] font-serif font-bold tracking-wider rounded-xs shadow-xs"
                >
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-[#d49b55]">
                    {ICONS.instagram}
                  </svg>
                  <span>INSTAGRAM</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
