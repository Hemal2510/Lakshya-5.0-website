import { useMemo } from "react";

interface Star {
  id: number;
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  color: string;
  twinkleClass?: string;
  flare?: boolean;
}

export default function NightSkyBackdrop() {
  // Deterministic procedural stars (crystal sharp, zero blur, scalable across all screen resolutions)
  const stars: Star[] = useMemo(() => {
    const starList: Star[] = [];
    const colors = ["#ffffff", "#e0f2fe", "#bae6fd", "#fef3c7", "#93c5fd"];
    
    // Pseudo-random deterministic generator for consistent starfield
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // 140 Background Stars
    for (let i = 0; i < 140; i++) {
      const cx = Math.round(random() * 1920 * 10) / 10;
      const cy = Math.round(random() * 1080 * 10) / 10;
      const r = Math.round((0.75 + random() * 1.3) * 10) / 10;
      const opacity = Math.round((0.35 + random() * 0.55) * 100) / 100;
      const color = colors[Math.floor(random() * colors.length)];
      const twinkleType = i % 4 === 0 ? "star-twinkle-1" : i % 4 === 1 ? "star-twinkle-2" : i % 4 === 2 ? "star-twinkle-3" : undefined;
      
      starList.push({
        id: i,
        cx,
        cy,
        r,
        opacity,
        color,
        twinkleClass: twinkleType,
      });
    }

    // 16 Major Radiant Constellation Stars with Diamond Flare
    const majorCoordinates = [
      { x: 320, y: 180 },
      { x: 540, y: 120 },
      { x: 780, y: 220 },
      { x: 1150, y: 150 },
      { x: 1420, y: 190 },
      { x: 1650, y: 280 },
      { x: 210, y: 380 },
      { x: 480, y: 460 },
      { x: 890, y: 340 },
      { x: 1320, y: 420 },
      { x: 1580, y: 490 },
      { x: 1780, y: 180 },
      { x: 680, y: 90 },
      { x: 1040, y: 260 },
      { x: 1240, y: 110 },
      { x: 1520, y: 360 },
    ];

    majorCoordinates.forEach((pt, idx) => {
      starList.push({
        id: 200 + idx,
        cx: pt.x,
        cy: pt.y,
        r: 2.4,
        opacity: 0.95,
        color: idx % 2 === 0 ? "#ffffff" : "#bae6fd",
        twinkleClass: "star-twinkle-major",
        flare: true,
      });
    });

    return starList;
  }, []);

  return (
    <div className="night-sky-backdrop-wrapper">
      {/* 1. Deep Midnight Cosmic Gradient Layers */}
      <div className="night-sky-deep-base" />
      <div className="night-sky-nebula-sapphire" />
      <div className="night-sky-nebula-cyan" />
      <div className="night-sky-nebula-horizon" />

      {/* 2. Scalable High-Definition Star Canvas */}
      <svg
        className="night-sky-stars-svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="starHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Render Stars */}
        {stars.map((star) => (
          <g key={star.id} className={star.twinkleClass}>
            {star.flare && (
              <>
                <circle cx={star.cx} cy={star.cy} r={8} fill="url(#starHalo)" />
                <line
                  x1={star.cx - 6}
                  y1={star.cy}
                  x2={star.cx + 6}
                  y2={star.cy}
                  stroke="#ffffff"
                  strokeWidth="0.75"
                  strokeOpacity="0.7"
                />
                <line
                  x1={star.cx}
                  y1={star.cy - 6}
                  x2={star.cx}
                  y2={star.cy + 6}
                  stroke="#ffffff"
                  strokeWidth="0.75"
                  strokeOpacity="0.7"
                />
              </>
            )}
            <circle
              cx={star.cx}
              cy={star.cy}
              r={star.r}
              fill={star.color}
              opacity={star.opacity}
            />
          </g>
        ))}

        {/* 3. Distant Desert Canyon Mesa Mountains Silhouette */}
        <path
          d="M 0 1080 L 0 940 Q 180 910, 320 940 T 580 920 L 720 890 L 810 890 L 880 930 Q 1100 900, 1260 930 L 1420 880 L 1510 880 L 1590 925 Q 1760 895, 1920 930 L 1920 1080 Z"
          fill="#060302"
          opacity="0.85"
        />

        <path
          d="M 0 1080 L 0 980 Q 240 960, 480 975 T 960 955 T 1440 965 T 1920 970 L 1920 1080 Z"
          fill="#040201"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}
