import { useEffect, useRef, useState } from "react";
import "./PocketWatch.css";

export default function PocketWatch() {
  const pendulumRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const [activeLetters, setActiveLetters] = useState<Set<number>>(new Set());
  const [secondsAngle, setSecondsAngle] = useState<number>(0);
  const [settleProgress, setSettleProgress] = useState<number>(0);
  const [isFullySettled, setIsFullySettled] = useState<boolean>(false);

  const text = "COMING SOON";
  const letters = text.split("");

  // Ticking sweep seconds inside watch movement
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsAngle((prev) => (prev + 6) % 360);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Exact Pendulum Physics & Motion Architecture from user's pendulum
  useEffect(() => {
    const pendulum = pendulumRef.current;
    const string = stringRef.current;
    const container = string?.parentElement;
    if (!pendulum || !string || !container) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const containerHeight = container.clientHeight;

    // Longer chain length (410px on desktop, 300px on mobile)
    const config = {
      length: isMobile ? 160 : 220,
      stringHeight: isMobile
        ? containerHeight * 0.62
        : window.innerWidth > 740
        ? 410
        : 450,
      ballSize: isMobile ? 155 : 210, // Big, bold pocket watch
      ballTop: isMobile ? containerHeight * 0.62 : 410,
      gravity: 0.52,
      damping: 0.9985, // Smooth natural oscillation
    };

    string.style.height = `${config.stringHeight}px`;
    pendulum.style.width = `${config.ballSize}px`;
    pendulum.style.height = `${config.ballSize}px`;
    pendulum.style.top = `${config.ballTop}px`;

    let animationId: number;
    let angle = -Math.PI / 3; // -60 degrees initial swing
    let angularVelocity = 0;
    let lastTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = Math.min((timestamp - lastTime) / 16, 2);
      lastTime = timestamp;

      const angularAcceleration =
        (-config.gravity / config.length) * Math.sin(angle);

      angularVelocity += angularAcceleration * deltaTime;
      angularVelocity *= config.damping;
      angle += angularVelocity * deltaTime;

      // Transforms the string & the watch in BOTH X and Y axes simultaneously
      string.style.transform = `rotate(${(angle * 180) / -Math.PI}deg)`;

      // Measure current oscillation energy
      const currentEnergy = Math.abs(angle) + Math.abs(angularVelocity) * 6;
      const progress = Math.max(0, Math.min(1, 1 - (currentEnergy / 0.85)));
      setSettleProgress(progress);

      // Check if settled: triggers 100% full illumination across all letters
      if (Math.abs(angle) < 0.015 && Math.abs(angularVelocity) < 0.001) {
        setIsFullySettled(true);
        setActiveLetters(new Set(Array.from({ length: letters.length }, (_, i) => i)));
      } else {
        setIsFullySettled(false);

        const normalizedX = (Math.sin(angle) + 1) / 2;
        const ballCenter = normalizedX * letters.length;
        const ballRadius = 1.45;

        const newActiveLetters = new Set<number>();
        for (let i = 0; i < letters.length; i++) {
          if (Math.abs(i - ballCenter) <= ballRadius) {
            newActiveLetters.add(i);
          }
        }
        setActiveLetters(newActiveLetters);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [letters.length]);

  return (
    <div className="pocket-watch-page relative w-full select-none">
      {/* Subtle Western Saloon & Desert Dust Ambience */}
      <div className="watch-saloon-backdrop">
        <div className={`watch-ambient-glow ${isFullySettled ? "settled" : ""}`} />

        {/* Very subtle floating dust motes drifting in the lantern light */}
        {[
          { left: "22%", top: "45%", size: 3, delay: "0s", dur: "7s" },
          { left: "38%", top: "60%", size: 2, delay: "2s", dur: "9s" },
          { left: "52%", top: "35%", size: 3.5, delay: "1.2s", dur: "8s" },
          { left: "68%", top: "52%", size: 2.5, delay: "3.5s", dur: "10s" },
          { left: "78%", top: "40%", size: 2, delay: "0.8s", dur: "7.5s" },
          { left: "45%", top: "70%", size: 3, delay: "4s", dur: "8.5s" },
        ].map((mote, i) => (
          <div
            key={i}
            className="dust-mote"
            style={{
              left: mote.left,
              top: mote.top,
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              animationDelay: mote.delay,
              animationDuration: mote.dur,
            }}
          />
        ))}
      </div>

      {/* Main Pendulum Motion Container - Extended height for longer chain */}
      <div className="relative w-full max-w-4xl h-[34rem] md:h-[43rem] flex items-start justify-center">
        {/* Ceiling Iron Anchor Peg */}
        <div className="watch-ceiling-mount" />

        {/* PENDULUM STRING / EXTENDED CHAIN CONTAINER - Rotates from top center */}
        <div
          ref={stringRef}
          className="absolute"
          style={{
            top: "0px",
            width: "6px",
            transformOrigin: "top center",
          }}
        >
          {/* Extended Antique Hanging Chain Links SVG */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[14px] h-full overflow-visible pointer-events-none"
            viewBox="0 0 14 460"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pendulumChainGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#876b4a" />
                <stop offset="40%" stopColor="#4e3c28" />
                <stop offset="100%" stopColor="#251c12" />
              </linearGradient>
            </defs>

            {/* Repeating interlocking antique brass chain links spanning full extended length */}
            {Array.from({ length: 32 }).map((_, i) => {
              const yPos = i * 14 + 8;
              const isFront = i % 2 === 0;
              return isFront ? (
                <ellipse
                  key={i}
                  cx="7"
                  cy={yPos}
                  rx="4"
                  ry="7.5"
                  fill="none"
                  stroke="url(#pendulumChainGrad)"
                  strokeWidth="2.2"
                />
              ) : (
                <line
                  key={i}
                  x1="7"
                  y1={yPos - 6}
                  x2="7"
                  y2={yPos + 6}
                  stroke="#261b11"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* ==============================================================
              THE GRAND WESTERN POCKET WATCH (Attached to bottom of pendulum)
              Moves along circular arc in both X and Y axis!
          ============================================================== */}
          <div
            ref={pendulumRef}
            className="absolute rounded-full"
            style={{
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            <svg
              viewBox="0 0 220 220"
              className="w-full h-full select-none overflow-visible"
              filter="drop-shadow(0 20px 35px rgba(0,0,0,0.92))"
            >
              <defs>
                {/* Antique Weathered Brass & Aged Bronze Gradients */}
                <radialGradient id="caseDarkBronze" cx="45%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#7a6245" />
                  <stop offset="30%" stopColor="#52402b" />
                  <stop offset="65%" stopColor="#302417" />
                  <stop offset="90%" stopColor="#1e160e" />
                  <stop offset="100%" stopColor="#120c07" />
                </radialGradient>

                <radialGradient id="dialVintageDark" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#201a14" />
                  <stop offset="55%" stopColor="#15110d" />
                  <stop offset="100%" stopColor="#0b0806" />
                </radialGradient>

                <linearGradient id="gearBrassGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ad8f63" />
                  <stop offset="50%" stopColor="#7a603e" />
                  <stop offset="100%" stopColor="#473620" />
                </linearGradient>

                <radialGradient id="rubyJewelGrad" cx="35%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#ff5252" />
                  <stop offset="45%" stopColor="#c62828" />
                  <stop offset="85%" stopColor="#7f0000" />
                  <stop offset="100%" stopColor="#3e0000" />
                </radialGradient>

                <linearGradient id="glassCurvedSheen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.04" />
                  <stop offset="65%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="85%" stopColor="#ffffff" stopOpacity="0.07" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Top Stirrup Bow Ring (Hangs on chain) */}
              <path
                d="M 94,18 C 94,2 126,2 126,18"
                fill="none"
                stroke="#6b5338"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Knurled Winding Onion Crown Knob at 12 o'clock */}
              <g transform="translate(110, 20)">
                <rect
                  x="-8"
                  y="-4"
                  width="16"
                  height="10"
                  rx="2"
                  fill="#4a3925"
                  stroke="#6b5439"
                  strokeWidth="1.2"
                />
                {[-5, -2, 1, 4].map((rx) => (
                  <line
                    key={rx}
                    x1={rx}
                    y1="-3"
                    x2={rx}
                    y2="5"
                    stroke="#8c6f4a"
                    strokeWidth="1"
                  />
                ))}
              </g>

              {/* Watch Case Center Origin is at (110, 115) */}
              <g transform="translate(110, 115)">
                {/* Outer Case Flange (Aged Patina Bronze/Gunmetal) */}
                <circle
                  cx="0"
                  cy="0"
                  r="95"
                  fill="url(#caseDarkBronze)"
                  stroke="#5c4731"
                  strokeWidth="2.5"
                />

                {/* Coin-Edge Milled Rim Bezel */}
                <circle
                  cx="0"
                  cy="0"
                  r="90"
                  fill="none"
                  stroke="#291f15"
                  strokeWidth="5"
                  strokeDasharray="2 3"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="87"
                  fill="none"
                  stroke="#695136"
                  strokeWidth="1"
                />

                {/* Deep Antique Dial Face */}
                <circle
                  cx="0"
                  cy="0"
                  r="84"
                  fill="url(#dialVintageDark)"
                  stroke="#382a1c"
                  strokeWidth="1.5"
                />

                {/* Railroad Track Minute Chapter Ring */}
                <circle
                  cx="0"
                  cy="0"
                  r="78"
                  fill="none"
                  stroke="#5c4933"
                  strokeWidth="1.2"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="72"
                  fill="none"
                  stroke="#423424"
                  strokeWidth="0.8"
                />

                {/* Minute Tick Marks */}
                {Array.from({ length: 60 }).map((_, i) => {
                  const isHour = i % 5 === 0;
                  const tickLen = isHour ? 6 : 3;
                  const rad = (i * 6 * Math.PI) / 180;
                  const x1 = Math.sin(rad) * 78;
                  const y1 = -Math.cos(rad) * 78;
                  const x2 = Math.sin(rad) * (78 - tickLen);
                  const y2 = -Math.cos(rad) * (78 - tickLen);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isHour ? "#8a6f4e" : "#4a3a29"}
                      strokeWidth={isHour ? 1.5 : 0.8}
                    />
                  );
                })}

                {/* Classic Roman Numerals around dial */}
                {[
                  { num: "XII", angle: 0 },
                  { num: "I", angle: 30 },
                  { num: "II", angle: 60 },
                  { num: "III", angle: 90 },
                  { num: "IV", angle: 120 },
                  { num: "V", angle: 150 },
                  { num: "VI", angle: 180 },
                  { num: "VII", angle: 210 },
                  { num: "VIII", angle: 240 },
                  { num: "IX", angle: 270 },
                  { num: "X", angle: 300 },
                  { num: "XI", angle: 330 },
                ].map(({ num, angle }) => {
                  const rad = ((angle - 90) * Math.PI) / 180;
                  const rx = 63 * Math.cos(rad);
                  const ry = 63 * Math.sin(rad);
                  return (
                    <text
                      key={num}
                      x={rx}
                      y={ry}
                      className="roman-numeral-western"
                    >
                      {num}
                    </text>
                  );
                })}

                {/* ==============================================================
                    LAKSHYA 5.0 & MOTTO IN THE CENTER
                ============================================================== */}
                <g transform="translate(0, -32)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fill="#dfbe8b"
                    fontSize="10"
                    fontFamily="serif"
                    fontWeight="bold"
                    letterSpacing="2"
                    filter="drop-shadow(0 1px 2px rgba(0,0,0,0.9))"
                  >
                    LAKSHYA 5.0
                  </text>
                  <text
                    x="0"
                    y="11"
                    textAnchor="middle"
                    fill="#9e7e54"
                    fontSize="5.2"
                    fontFamily="sans-serif"
                    fontWeight="700"
                    letterSpacing="1.2"
                  >
                    CHASE WHAT LIES BEYOND
                  </text>
                  <path
                    d="M -22,16 L 22,16 M -8,18 L 8,18"
                    stroke="#57422a"
                    strokeWidth="0.8"
                  />
                </g>

                {/* ==============================================================
                    EXPOSED SKELETON OPEN-HEART MECHANICAL MOVEMENT
                    Working gears & oscillating balance wheel
                ============================================================== */}
                <g transform="translate(0, 32)">
                  <circle
                    cx="0"
                    cy="0"
                    r="26"
                    fill="#100d0a"
                    stroke="#614b32"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="24"
                    fill="none"
                    stroke="#302416"
                    strokeWidth="1"
                  />

                  {/* Brass Bridge Plates */}
                  <path
                    d="M -22,-6 C -12,-16 12,-16 22,-6 L 16,8 C 8,4 -8,4 -16,8 Z"
                    fill="#3d301f"
                    stroke="#57432b"
                    strokeWidth="0.8"
                  />

                  {/* Rotating Drive Gear */}
                  <g className="gear-drive-main" transform="translate(-8, 3)">
                    <circle
                      cx="0"
                      cy="0"
                      r="15"
                      fill="none"
                      stroke="url(#gearBrassGrad)"
                      strokeWidth="2.5"
                      strokeDasharray="2.5 1.5"
                    />
                    {[0, 60, 120].map((ga) => (
                      <line
                        key={ga}
                        x1="-13"
                        y1="0"
                        x2="13"
                        y2="0"
                        stroke="#5c472e"
                        strokeWidth="1"
                        transform={`rotate(${ga})`}
                      />
                    ))}
                  </g>

                  {/* Rotating Escapement Gear */}
                  <g className="gear-escapement" transform="translate(10, -5)">
                    <circle
                      cx="0"
                      cy="0"
                      r="10"
                      fill="none"
                      stroke="url(#gearBrassGrad)"
                      strokeWidth="2"
                      strokeDasharray="2 1.5"
                    />
                  </g>

                  {/* Rapidly Oscillating Balance Wheel & Hairspring */}
                  <g className="balance-wheel" transform="translate(0, 2)">
                    <circle
                      cx="0"
                      cy="0"
                      r="17"
                      fill="none"
                      stroke="#bfa172"
                      strokeWidth="1.5"
                    />
                    {[0, 90, 180, 270].map((sa) => (
                      <circle
                        key={sa}
                        cx={17 * Math.cos((sa * Math.PI) / 180)}
                        cy={17 * Math.sin((sa * Math.PI) / 180)}
                        r="1.2"
                        fill="#ffd899"
                      />
                    ))}
                    <line
                      x1="-16"
                      y1="0"
                      x2="16"
                      y2="0"
                      stroke="#8c6f4a"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="-16"
                      x2="0"
                      y2="16"
                      stroke="#8c6f4a"
                      strokeWidth="1"
                    />
                  </g>

                  {/* Synthetic Ruby Jewel Bearing */}
                  <circle cx="0" cy="2" r="3.2" fill="#523e25" />
                  <circle
                    cx="0"
                    cy="2"
                    r="2.2"
                    fill="url(#rubyJewelGrad)"
                    filter="drop-shadow(0 0 2px rgba(255,50,50,0.6))"
                  />
                </g>

                {/* Bottom Arch Stamp */}
                <text
                  x="0"
                  y="70"
                  textAnchor="middle"
                  fill="#6e573a"
                  fontSize="5.5"
                  fontFamily="serif"
                  fontWeight="bold"
                  letterSpacing="1.5"
                >
                  ★ IIT INDORE · MMXXV ★
                </text>

                {/* Vintage Hands */}
                {/* Hour Hand (5 o'clock) */}
                <g
                  transform="rotate(150)"
                  filter="drop-shadow(2px 3px 3px rgba(0,0,0,0.85))"
                >
                  <path
                    d="M -2,8 L -2,-26 L -5,-32 L 0,-42 L 5,-32 L 2,-26 L 2,8 Z"
                    fill="#dfbe8b"
                    stroke="#574229"
                    strokeWidth="0.8"
                  />
                  <circle cx="0" cy="-32" r="1.8" fill="#14100c" />
                </g>

                {/* Minute Hand */}
                <g
                  transform="rotate(295)"
                  filter="drop-shadow(2px 3px 3px rgba(0,0,0,0.85))"
                >
                  <path
                    d="M -1.4,10 L -1.4,-52 L 0,-62 L 1.4,-52 L 1.4,10 Z"
                    fill="#ecd2a5"
                    stroke="#574229"
                    strokeWidth="0.8"
                  />
                </g>

                {/* Seconds Hand Ticking */}
                <g
                  transform={`rotate(${secondsAngle})`}
                  filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.7))"
                >
                  <line
                    x1="0"
                    y1="14"
                    x2="0"
                    y2="-68"
                    stroke="#c48e48"
                    strokeWidth="1"
                  />
                  <circle cx="0" cy="10" r="2.5" fill="#c48e48" />
                </g>

                {/* Center Cap Arbor */}
                <circle
                  cx="0"
                  cy="0"
                  r="4.5"
                  fill="#695135"
                  stroke="#241a10"
                  strokeWidth="1"
                />
                <circle cx="0" cy="0" r="2" fill="#120c06" />

                {/* Domed Convex Glass Sheen */}
                <circle
                  cx="0"
                  cy="0"
                  r="84"
                  fill="url(#glassCurvedSheen)"
                  pointerEvents="none"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* ==============================================================
            CLEAN "COMING SOON" TEXT REVEAL - WESTERN VINTAGE SERIF & DUST PALETTE
            Glows up gradually as pendulum slows down, 100% lit when it stops!
        ============================================================== */}
        <div className="coming-soon-letters-row absolute bottom-4 md:bottom-6 w-full flex justify-center items-center">
          {letters.map((letter, index) => {
            const isLit = isFullySettled || activeLetters.has(index);
            const dynamicOpacity = isLit ? 1 : 0.45 + settleProgress * 0.55;

            return (
              <div
                key={index}
                className={`coming-soon-char text-3xl sm:text-5xl md:text-7xl ${
                  isLit ? "lit" : "dim"
                }`}
                style={{
                  opacity: dynamicOpacity,
                }}
              >
                {letter === " " ? "\u00A0\u00A0" : letter}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
