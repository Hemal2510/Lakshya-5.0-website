import React from "react";
import FireHexBadge from "./FireHexBadge";


export default function TeamWheel({
  members,
  centerImage = "../../assets/lakshya-flame.jpg",
  radius = 420,
  badgeScale = 1,
  centerSize = 170,
  size = 1100,
}) {
  const eight = members.slice(0, 8);

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
    >
      {/* center flame/logo */}
      <div
        className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{
          width: centerSize,
          height: centerSize,
          background: "radial-gradient(circle, rgba(255,122,0,.28) 0%, transparent 72%)",
        }}
      >
        <img

          src=""

          alt="Lakshaya"
          className="h-full w-full object-contain drop-shadow-[0_0_28px_rgba(255,122,0,.55)]"
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
            className="absolute left-1/2 top-1/2 z-[1]"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <FireHexBadge {...member} scale={badgeScale} />
          </div>
        );
      })}
    </div>
  );
}
