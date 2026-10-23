import FireHexBadge, { type FireHexBadgeProps } from "./FireHexBadge";

export interface TeamWheelProps {
  members: Array<FireHexBadgeProps>;
  centerImage?: string;
  radius?: number;
  badgeScale?: number;
  centerSize?: number;
  size?: number;
}

export default function TeamWheel({
  members,
  radius = 500,
  badgeScale = 1.05,
  size = 1350,
}: TeamWheelProps) {
  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* =========================================================================
          DESKTOP VIEW (lg+): ELEGANT CIRCULAR WHEEL WITH ZERO OVERLAP
      ========================================================================= */}
      <div
        className="hidden lg:flex relative items-center justify-center overflow-visible"
        style={{ width: size, height: size }}
      >
        {/* Outer Orbit Guide Ring */}
        <div
          className="absolute rounded-full pointer-events-none border border-[#d49b55]/20"
          style={{
            width: radius * 2,
            height: radius * 2,
            boxShadow: "0 0 50px rgba(212, 155, 85, 0.06)",
          }}
        />

        {/* Inner Concentric Celestial Rings */}
        <div
          className="absolute rounded-full pointer-events-none border border-dashed border-[#d49b55]/15"
          style={{ width: radius * 1.35, height: radius * 1.35 }}
        />
        <div
          className="absolute rounded-full pointer-events-none border border-[#d49b55]/10"
          style={{ width: radius * 0.75, height: radius * 0.75 }}
        />

        {/* Center Western Antique Compass Rose Watermark (Replaces Center Logo) */}
        <div className="absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none opacity-40 select-none">
          <div className="relative flex items-center justify-center w-52 h-52">
            {/* Cardinal Crosshairs */}
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#d49b55]/40 to-transparent" />
            <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#d49b55]/40 to-transparent" />
            
            {/* Cardinal Letters */}
            <span className="absolute -top-6 text-[10px] font-serif font-black tracking-widest text-[#d49b55]">N</span>
            <span className="absolute -bottom-6 text-[10px] font-serif font-black tracking-widest text-[#d49b55]">S</span>
            <span className="absolute -left-6 text-[10px] font-serif font-black tracking-widest text-[#d49b55]">W</span>
            <span className="absolute -right-6 text-[10px] font-serif font-black tracking-widest text-[#d49b55]">E</span>

            {/* Central Engraved Brass Sunburst */}
            <div className="flex flex-col items-center justify-center p-4 rounded-full border border-[#d49b55]/30 bg-[#140b05]/60 shadow-[0_0_30px_rgba(212,155,85,0.15)]">
              <span className="text-xl text-[#e3b86d] drop-shadow-[0_0_8px_rgba(227,184,109,0.6)]">★</span>
              <span className="text-[9px] font-serif font-black tracking-[0.28em] text-[#d49b55] uppercase mt-1">
                LAKSHYA
              </span>
              <span className="text-[7.5px] font-serif tracking-[0.2em] text-[#a37943]">
                FRONTIER
              </span>
            </div>
          </div>
        </div>

        {/* All committee heads evenly distributed with generous radial clearance */}
        {members.map((member, i) => {
          const total = members.length;
          const angle = (i / total) * 2 * Math.PI - Math.PI / 2; // start at 12 o'clock, clockwise
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={member.name ?? i}
              className="absolute left-1/2 top-1/2 z-10 transition-transform duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <FireHexBadge
                {...member}
                scale={badgeScale}
                eyebrow="HEAD OF COMMITTEE"
              />
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          RESPONSIVE FALLBACK (Mobile & Tablet < lg): STAGGERED WESTERN GRID
      ========================================================================= */}
      <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 justify-items-center w-full max-w-5xl px-4 py-6">
        {members.map((member, i) => (
          <div key={member.name ?? i} className="flex justify-center w-full">
            <FireHexBadge
              {...member}
              scale={0.96}
              eyebrow="HEAD OF COMMITTEE"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
