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
  centerImage = "/lakshya-logo.png",
  radius = 400,
  badgeScale = 1,
  centerSize = 180,
  size = 1150,
}: TeamWheelProps) {
  const eight = members.slice(0, 8);

  return (
    <div
      className="relative mx-auto flex items-center justify-center select-none"
      style={{ width: size, height: size, maxWidth: "100%" }}
    >
      {/* Decorative Antique Compass Guide Circle */}
      <div
        className="absolute rounded-full pointer-events-none border border-[#d49b55]/20"
        style={{
          width: radius * 2,
          height: radius * 2,
          boxShadow: "0 0 35px rgba(212, 155, 85, 0.06)",
        }}
      />

      {/* Center Lakshya Emblem with Western Gold Halo */}
      <div
        className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full p-3 group cursor-pointer"
        style={{
          width: centerSize,
          height: centerSize,
          background: "radial-gradient(circle, rgba(212, 155, 85, 0.35) 0%, rgba(20, 12, 7, 0.94) 60%, transparent 75%)",
          boxShadow: "0 0 45px rgba(212, 155, 85, 0.45), 0 0 20px rgba(0, 162, 255, 0.2), inset 0 0 20px rgba(212, 155, 85, 0.25)",
          border: "2px solid rgba(212, 155, 85, 0.6)",
        }}
      >
        <img
          src={centerImage}
          alt="Lakshya 5.0"
          className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(212,155,85,0.65)] group-hover:scale-108 transition-transform duration-300"
        />
      </div>

      {/* 8 badges positioned evenly around the circle */}
      {eight.map((member, i) => {
        const angle = (i / eight.length) * 2 * Math.PI - Math.PI / 2; // start at top, go clockwise
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={member.name ?? i}
            className="absolute left-1/2 top-1/2 z-10"
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
  );
}
