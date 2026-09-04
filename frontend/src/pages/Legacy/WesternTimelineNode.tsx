import { motion } from "framer-motion";

interface WesternTimelineNodeProps {
  season?: number; // 1, 2, 3, 4
  isHovered?: boolean;
}

export default function WesternTimelineNode({ season = 1, isHovered = false }: WesternTimelineNodeProps) {
  // 6 chamber angles
  const chamberAngles = [270, 330, 30, 90, 150, 210];

  return (
    <div className="western-node-container relative flex items-center justify-center">
      {/* Saloon Lantern Warm Radial Backlight */}
      <div className="western-node-glow" />

      {/* Revolver Cylinder Body */}
      <motion.div
        className="western-revolver-node"
        animate={{
          rotate: isHovered ? [0, 360] : 0,
        }}
        transition={{
          rotate: {
            duration: isHovered ? 2.5 : 0,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          },
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)]"
        >
          <defs>
            {/* Dark Gunmetal Steel Cylinder Gradient */}
            <radialGradient id={`steelGradient-${season}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3d2617" />
              <stop offset="55%" stopColor="#221209" />
              <stop offset="85%" stopColor="#120904" />
              <stop offset="100%" stopColor="#472611" />
            </radialGradient>

            {/* Antique Brass Outer Rim Gradient */}
            <linearGradient id={`brassRim-${season}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff2c2" />
              <stop offset="25%" stopColor="#f5c879" />
              <stop offset="60%" stopColor="#b88339" />
              <stop offset="100%" stopColor="#f5c879" />
            </linearGradient>

            {/* Loaded Gold Bullet Primer Gradient */}
            <radialGradient id={`loadedBullet-${season}`} cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#ffe699" />
              <stop offset="60%" stopColor="#f5c879" />
              <stop offset="85%" stopColor="#c78328" />
              <stop offset="100%" stopColor="#6e390c" />
            </radialGradient>

            {/* Empty Chamber Gradient */}
            <radialGradient id={`emptyChamber-${season}`} cx="45%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#050302" />
              <stop offset="70%" stopColor="#170c06" />
              <stop offset="100%" stopColor="#2e160a" />
            </radialGradient>

            {/* Center Sheriff Star Gold Gradient */}
            <linearGradient id={`starGold-${season}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#ffd580" />
              <stop offset="80%" stopColor="#e5a93c" />
              <stop offset="100%" stopColor="#965a15" />
            </linearGradient>
          </defs>

          {/* Outer Gear Fluted Rim */}
          <circle
            cx="50"
            cy="50"
            r="47.5"
            fill={`url(#steelGradient-${season})`}
            stroke={`url(#brassRim-${season})`}
            strokeWidth="3.5"
          />

          {/* Outer Rivets around perimeter */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 50 + 44.5 * Math.cos(rad);
            const y = 50 + 44.5 * Math.sin(rad);
            return (
              <circle
                key={`rivet-${i}`}
                cx={x}
                cy={y}
                r="2"
                fill="#ffe299"
                stroke="#4a2a0c"
                strokeWidth="0.6"
              />
            );
          })}

          {/* Decorative Inner Ring */}
          <circle
            cx="50"
            cy="50"
            r="41"
            fill="none"
            stroke="#73431e"
            strokeWidth="1.2"
            strokeDasharray="2.5, 2.5"
          />

          {/* 6 Revolver Chambers */}
          {chamberAngles.map((deg, idx) => {
            const rad = (deg * Math.PI) / 180;
            const cx = 50 + 26 * Math.cos(rad);
            const cy = 50 + 26 * Math.sin(rad);
            const isLoaded = idx < season;

            return (
              <g key={`chamber-${idx}`}>
                {/* Chamber Bore Ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="11"
                  fill="#0c0704"
                  stroke={isLoaded ? "#d49b55" : "#42230e"}
                  strokeWidth="1.4"
                />

                {isLoaded ? (
                  // LOADED GOLD BULLET
                  <>
                    {/* Bullet Casing */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="9.2"
                      fill={`url(#loadedBullet-${season})`}
                      stroke="#8c581a"
                      strokeWidth="1"
                    />
                    {/* Primer Pocket */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="3.8"
                      fill="#3d1f08"
                      stroke="#ffe699"
                      strokeWidth="1"
                    />
                    {/* Primer Center Pin */}
                    <circle cx={cx} cy={cy} r="1.4" fill="#ffffff" />
                  </>
                ) : (
                  // EMPTY CHAMBER
                  <>
                    <circle
                      cx={cx}
                      cy={cy}
                      r="8.8"
                      fill={`url(#emptyChamber-${season})`}
                      stroke="#1e0e06"
                      strokeWidth="0.8"
                    />
                    <circle cx={cx} cy={cy} r="3.2" fill="#000000" />
                  </>
                )}
              </g>
            );
          })}

          {/* Center Extractor Star Hub */}
          <circle
            cx="50"
            cy="50"
            r="15"
            fill={`url(#steelGradient-${season})`}
            stroke={`url(#brassRim-${season})`}
            strokeWidth="2.5"
          />

          {/* Center Sheriff 6-Point Star */}
          <path
            d="M 50 36.5 
               L 53.2 44 
               L 61.5 44 
               L 55 49 
               L 57.5 57 
               L 50 52.5 
               L 42.5 57 
               L 45 49 
               L 38.5 44 
               L 46.8 44 Z"
            fill={`url(#starGold-${season})`}
            stroke="#45270c"
            strokeWidth="0.9"
            className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
          />

          {/* Center Pin */}
          <circle
            cx="50"
            cy="50"
            r="2.8"
            fill="#fff0cc"
            stroke="#5c3510"
            strokeWidth="0.7"
          />
        </svg>
      </motion.div>

      {/* Season Badge */}
      <div className="absolute -bottom-3.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#2c170b] via-[#472611] to-[#2c170b] border border-[#d49b55] shadow-[0_2px_8px_rgba(0,0,0,0.8)] z-20 text-[10px] font-bold text-[#ffd580] tracking-widest whitespace-nowrap select-none font-serif">
        ★ {season}/6 ROUNDS ★
      </div>
    </div>
  );
}
