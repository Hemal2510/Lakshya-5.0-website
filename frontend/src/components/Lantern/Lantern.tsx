import { useState, useRef, useEffect, useCallback } from "react";
import "./Lantern.css";

interface ChainLink {
  x: number;
  y: number;
  rotation: number;
  isFront: boolean;
}

export default function Lantern() {
  const stageRef = useRef<SVGSVGElement>(null);

  // Text to reveal in the dark
  const fullText = "THE COUNTDOWN TO GLORY";
  const letters = fullText.split("");

  // Physics state refs for 60fps RAF loop
  const angleRef = useRef<number>(-0.42); // initial gentle swing angle (rad)
  const angularVelocityRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const hasDraggedRef = useRef<boolean>(false);
  const lastPointerRef = useRef<{ x: number; time: number }>({ x: 0, time: 0 });

  // React state for rendering
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());
  const [isSettled, setIsSettled] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [chainLinks, setChainLinks] = useState<ChainLink[]>([]);
  const [lanternState, setLanternState] = useState<{
    x: number;
    y: number;
    angleDeg: number;
  }>({ x: 0, y: 180, angleDeg: 0 });

  // Tap / click nudge impulse
  const handleLanternNudge = useCallback(() => {
    setIsSettled(false);
    const impulse = (Math.random() > 0.5 ? 1 : -1) * (0.07 + Math.random() * 0.03);
    angularVelocityRef.current += impulse;
  }, []);

  // Main 60 FPS RAF Physics Loop
  useEffect(() => {
    let animId: number;
    let lastTimestamp: number | null = null;

    const gravity = 0.52;
    const damping = 0.993; // Smooth damping
    const chainLength = 175; // SVG coordinate units
    const numLinks = 10;

    const updatePhysics = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const dt = Math.min((timestamp - lastTimestamp) / 16.67, 2.0);
      lastTimestamp = timestamp;

      if (!isDraggingRef.current) {
        // Simple pendulum equation
        const accel = (-gravity / (chainLength * 0.4)) * Math.sin(angleRef.current);
        angularVelocityRef.current += accel * dt;
        angularVelocityRef.current *= Math.pow(damping, dt);
        angleRef.current += angularVelocityRef.current * dt;

        // Check if settled
        if (
          Math.abs(angleRef.current) < 0.015 &&
          Math.abs(angularVelocityRef.current) < 0.001
        ) {
          angleRef.current = 0;
          angularVelocityRef.current = 0;
          setIsSettled(true);
        } else {
          setIsSettled(false);
        }
      }

      const theta = angleRef.current;
      const omega = angularVelocityRef.current;
      const angleDeg = (theta * 180) / Math.PI;

      // Bottom lantern position strictly centered from anchor (0, 0)
      const lanternX = Math.sin(theta) * chainLength;
      const lanternY = Math.cos(theta) * chainLength;

      setLanternState({
        x: lanternX,
        y: lanternY,
        angleDeg,
      });

      // Flexible chain links along the curve from (0, 0) to (lanternX, lanternY)
      const lagOffset = -omega * 40;
      const links: ChainLink[] = [];

      for (let i = 0; i < numLinks; i++) {
        const t = (i + 1) / (numLinks + 1);
        const curveDisp = 4 * t * (1 - t) * lagOffset;
        const lx = t * lanternX + curveDisp;
        const ly = t * lanternY;

        const prevT = Math.max(0, t - 0.06);
        const prevX = prevT * lanternX + 4 * prevT * (1 - prevT) * lagOffset;
        const prevY = prevT * lanternY;
        const linkAngle = (Math.atan2(ly - prevY, lx - prevX) * 180) / Math.PI - 90;

        links.push({
          x: lx,
          y: ly,
          rotation: linkAngle,
          isFront: i % 2 === 0,
        });
      }
      setChainLinks(links);

      // Lamplight spotlight sweep calculation over letters below
      const normalizedX = (Math.sin(theta) + 0.65) / 1.3;
      const lightLetterPos = normalizedX * letters.length;
      const sweepRadius = 2.8;

      const newActive = new Set<number>();
      for (let idx = 0; idx < letters.length; idx++) {
        if (Math.abs(idx - lightLetterPos) <= sweepRadius) {
          newActive.add(idx);
        }
      }
      setActiveIndices(newActive);

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, [letters.length]);

  // Pointer Drag Handlers (Unified coordinate space)
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    setIsDragging(true);
    setIsSettled(false);

    lastPointerRef.current = {
      x: e.clientX,
      time: performance.now(),
    };

    if (stageRef.current) {
      stageRef.current.setPointerCapture(e.pointerId);
    }
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current || !stageRef.current) return;

    const rect = stageRef.current.getBoundingClientRect();
    const pivotX = rect.left + rect.width / 2;
    const pivotY = rect.top + 15;

    const dx = e.clientX - pivotX;
    const dy = Math.max(e.clientY - pivotY, 35);

    if (Math.abs(dx) > 4 || Math.abs(e.clientY - lastPointerRef.current.x) > 4) {
      hasDraggedRef.current = true;
    }

    let newAngle = Math.atan2(dx, dy);
    const maxAngle = (60 * Math.PI) / 180;
    newAngle = Math.max(-maxAngle, Math.min(maxAngle, newAngle));
    angleRef.current = newAngle;

    const now = performance.now();
    const dt = Math.max((now - lastPointerRef.current.time) / 1000, 0.001);
    const vx = (e.clientX - lastPointerRef.current.x) / dt;
    angularVelocityRef.current = (vx / 420) * 0.15;

    lastPointerRef.current = { x: e.clientX, time: now };
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      if (stageRef.current && stageRef.current.hasPointerCapture(e.pointerId)) {
        stageRef.current.releasePointerCapture(e.pointerId);
      }

      if (!hasDraggedRef.current) {
        handleLanternNudge();
      }
    },
    [handleLanternNudge]
  );

  return (
    <div className="lantern-container">
      {/* Dark moody atmospheric backdrop */}
      <div className="lantern-dark-backdrop">
        {/* Soft, warm lantern glow swinging with lantern position */}
        <div
          className="lantern-ambient-glow"
          style={{
            left: `calc(50% + ${lanternState.x * 1.1}px)`,
            top: `calc(150px + ${lanternState.y * 0.9}px)`,
            width: isSettled ? "580px" : "520px",
            height: isSettled ? "580px" : "520px",
            opacity: isSettled ? 0.9 : 0.75,
          }}
        />
      </div>

      {/* Ceiling Iron Anchor Peg */}
      <div className="lantern-ceiling-mount">
        <div className="lantern-iron-ring" />
      </div>

      {/* Interactive Physics Stage */}
      <div className="lantern-stage">
        <svg
          ref={stageRef}
          viewBox="-400 0 800 520"
          className="w-full h-full select-none overflow-visible"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <defs>
            {/* Dark Forged Iron Gradients (Not overly yellow/bright gold) */}
            <linearGradient id="ironLinkGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#484037" />
              <stop offset="45%" stopColor="#2c2620" />
              <stop offset="100%" stopColor="#14110e" />
            </linearGradient>

            <linearGradient id="ironBodyGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1b1714" />
              <stop offset="25%" stopColor="#362f27" />
              <stop offset="60%" stopColor="#251f1a" />
              <stop offset="100%" stopColor="#120f0c" />
            </linearGradient>

            <linearGradient id="bronzeTrimGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3d3022" />
              <stop offset="35%" stopColor="#6e573c" />
              <stop offset="70%" stopColor="#4a3b2a" />
              <stop offset="100%" stopColor="#2b2116" />
            </linearGradient>

            <linearGradient id="glassSootGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#080706" stopOpacity="0.75" />
              <stop offset="30%" stopColor="#1a140e" stopOpacity="0.25" />
              <stop offset="65%" stopColor="#ffb347" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0a0806" stopOpacity="0.4" />
            </linearGradient>

            {/* Living Warm Flame Gradients */}
            <radialGradient id="flameInnerGrad" cx="50%" cy="85%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#fff3d1" />
              <stop offset="70%" stopColor="#ffb947" />
              <stop offset="100%" stopColor="#e86100" />
            </radialGradient>

            <radialGradient id="flameHaloGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffa726" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#e65100" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#bf360c" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ==============================================================
              1. FORGED IRON CEILING PIVOT BRACKET AT (0, 0)
          ============================================================== */}
          <g transform="translate(0, 10)">
            <ellipse
              cx="0"
              cy="2"
              rx="6"
              ry="4"
              fill="none"
              stroke="#4a3e32"
              strokeWidth="2.5"
            />
          </g>

          {/* ==============================================================
              2. CENTERED SUSPENSION CHAIN LINKS FROM (0, 10) DOWN TO LANTERN
          ============================================================== */}
          <g transform="translate(0, 10)">
            {chainLinks.map((link, idx) => (
              <g
                key={idx}
                transform={`translate(${link.x}, ${link.y}) rotate(${link.rotation})`}
              >
                {link.isFront ? (
                  // Front facing forged iron oval link
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="3.5"
                    ry="6.5"
                    fill="none"
                    stroke="url(#ironLinkGrad)"
                    strokeWidth="2.6"
                    filter="drop-shadow(0 2px 2px rgba(0,0,0,0.8))"
                  />
                ) : (
                  // Interlocking side link
                  <line
                    x1="0"
                    y1="-5.5"
                    x2="0"
                    y2="5.5"
                    stroke="#1c1814"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                  />
                )}
              </g>
            ))}
          </g>

          {/* ==============================================================
              3. THE WESTERN TRAIL LANTERN BODY
              Strictly attached at (lanternState.x, lanternState.y + 10)
          ============================================================== */}
          <g
            transform={`translate(${lanternState.x}, ${lanternState.y + 10}) rotate(${lanternState.angleDeg})`}
            filter="drop-shadow(0 25px 35px rgba(0,0,0,0.9))"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {/* Top Wire Bail Loop (Attaches to bottom chain link) */}
            <circle
              cx="0"
              cy="0"
              r="7"
              fill="none"
              stroke="url(#ironLinkGrad)"
              strokeWidth="3"
            />

            {/* Wire Bail Handle Arched Down to Sides */}
            <path
              d="M -54,95 C -50,15 0,0 0,0 C 0,0 50,15 54,95"
              fill="none"
              stroke="#3a3229"
              strokeWidth="2.8"
              strokeLinecap="round"
            />

            {/* Ventilator Chimney Smoke Hood / Cap */}
            {/* Topmost Cap Finial */}
            <path
              d="M -12,20 L 12,20 L 15,28 L -15,28 Z"
              fill="url(#ironBodyGrad)"
              stroke="#524334"
              strokeWidth="1"
            />
            {/* Tiered Chimney Dome */}
            <path
              d="M -22,28 C -22,28 -32,48 -35,58 L 35,58 C 32,48 22,28 22,28 Z"
              fill="url(#ironBodyGrad)"
              stroke="#45382b"
              strokeWidth="1"
            />
            {/* Chimney Vents (Hot air escape slits) */}
            {[-18, -9, 0, 9, 18].map((vx) => (
              <rect
                key={vx}
                x={vx - 2.5}
                y="46"
                width="5"
                height="6"
                rx="1"
                fill="#0d0a08"
                stroke="#4a3c2c"
                strokeWidth="0.8"
              />
            ))}

            {/* Upper Frame Collar */}
            <path
              d="M -38,58 L 38,58 L 44,68 L -44,68 Z"
              fill="url(#bronzeTrimGrad)"
              stroke="#2e2418"
              strokeWidth="1"
            />

            {/* Twin Side Tubes (Air recirculation struts) */}
            {/* Left Tube */}
            <path
              d="M -40,66 C -68,85 -68,160 -42,185"
              fill="none"
              stroke="url(#ironBodyGrad)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M -40,66 C -68,85 -68,160 -42,185"
              fill="none"
              stroke="#4d3f30"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Right Tube */}
            <path
              d="M 40,66 C 68,85 68,160 42,185"
              fill="none"
              stroke="url(#ironBodyGrad)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 40,66 C 68,85 68,160 42,185"
              fill="none"
              stroke="#4d3f30"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* ==============================================================
                LANTERN GLASS GLOBE & FLAME CHAMBER
            ============================================================== */}
            {/* Warm Lamplight Glow Halo behind glass */}
            <ellipse
              cx="0"
              cy="126"
              rx="48"
              ry="52"
              fill="url(#flameHaloGrad)"
            />

            {/* Glass Globe Silhouette */}
            <path
              d="M -32,68 C -42,88 -45,155 -34,178 L 34,178 C 45,155 42,88 32,68 Z"
              fill="url(#glassSootGrad)"
              stroke="rgba(255, 200, 120, 0.2)"
              strokeWidth="1"
            />

            {/* Wire Cage Guards (Protective wire bars) */}
            <line
              x1="-14"
              y1="68"
              x2="-16"
              y2="178"
              stroke="#2b241e"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="68"
              x2="0"
              y2="178"
              stroke="#2b241e"
              strokeWidth="2.2"
            />
            <line
              x1="14"
              y1="68"
              x2="16"
              y2="178"
              stroke="#2b241e"
              strokeWidth="2"
            />
            {/* Horizontal Guard Rings */}
            <ellipse
              cx="0"
              cy="104"
              rx="37"
              ry="5"
              fill="none"
              stroke="#302821"
              strokeWidth="1.8"
            />
            <ellipse
              cx="0"
              cy="142"
              rx="38"
              ry="5"
              fill="none"
              stroke="#302821"
              strokeWidth="1.8"
            />

            {/* Wick Burner Base Collar */}
            <rect
              x="-18"
              y="160"
              width="36"
              height="14"
              rx="2"
              fill="#523e25"
              stroke="#261b0f"
              strokeWidth="1"
            />
            <ellipse
              cx="0"
              cy="160"
              rx="18"
              ry="3"
              fill="#755a36"
              stroke="#3b2b18"
              strokeWidth="1"
            />

            {/* LIVING FLAME */}
            <g transform="translate(0, 156)">
              {/* Outer Amber Flickering Flame */}
              <path
                d="M 0,-34 C -10,-20 -12,-6 -7,0 C -3,2 3,2 7,0 C 12,-6 10,-20 0,-34 Z"
                fill="url(#flameInnerGrad)"
                className="flame-outer"
                filter="drop-shadow(0 0 8px rgba(255, 150, 40, 0.9))"
              />
              {/* Inner Radiant White-Hot Core */}
              <path
                d="M 0,-24 C -5,-14 -6,-4 -3,0 C -1,1 1,1 3,0 C 6,-4 5,-14 0,-24 Z"
                fill="#ffffff"
                className="flame-inner"
              />
            </g>

            {/* Glass Glare Highlight */}
            <path
              d="M -26,82 C -33,98 -34,142 -27,162"
              fill="none"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* ==============================================================
                LOWER KEROSENE TANK & BASE FOUNT
            ============================================================== */}
            {/* Upper Base Ring */}
            <path
              d="M -42,178 L 42,178 L 48,190 L -48,190 Z"
              fill="url(#bronzeTrimGrad)"
              stroke="#2e2316"
              strokeWidth="1.2"
            />

            {/* Heavy Kerosene Tank Fount */}
            <path
              d="M -48,190 C -56,202 -54,222 -44,232 L 44,232 C 54,222 56,202 48,190 Z"
              fill="url(#ironBodyGrad)"
              stroke="#423528"
              strokeWidth="1.2"
            />

            {/* Weathered Base Rim */}
            <rect
              x="-46"
              y="232"
              width="92"
              height="8"
              rx="2"
              fill="#191512"
              stroke="#473a2c"
              strokeWidth="1"
            />

            {/* Embossed Lakshya Medallion on Base */}
            <circle
              cx="0"
              cy="211"
              r="13"
              fill="#1a1511"
              stroke="#665035"
              strokeWidth="1.2"
            />
            <text
              x="0"
              y="214"
              textAnchor="middle"
              fill="#a8855a"
              fontSize="6"
              fontFamily="serif"
              fontWeight="bold"
              letterSpacing="0.8"
            >
              5.0
            </text>
          </g>
        </svg>
      </div>

      {/* Interactive Prompt Badge (Dark Weathered Style) */}
      <div className="lantern-hint-badge">
        <span>★ DRAG LANTERN TO SWING · TAP TO NUDGE FLAME ★</span>
      </div>

      {/* Typography Emerging from the Dark Shadows */}
      <div className="lantern-letters-row">
        {letters.map((char, index) => {
          if (char === " ") {
            return <span key={index} className="lantern-space" />;
          }

          // Illuminated by lantern light sweep OR fully if lantern has settled
          const isLit = isSettled || activeIndices.has(index);

          return (
            <span
              key={index}
              className={`lantern-char text-3xl sm:text-5xl md:text-6xl ${
                isLit ? "illuminated" : "shadowed"
              }`}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Dark Subtitle Details */}
      <div className="lantern-subtitle-box">
        <div className="lantern-flourish">══════ ❖ ══════</div>
        <span className="lantern-subtitle-tag">
          LAKSHYA 5.0 · IIT INDORE ANNUAL SPORTS EXTRAVAGANZA
        </span>
        <p className="text-xs text-[#8c7459] max-w-md font-sans">
          The trail lantern burns through the night. The proving grounds and athletic dispatches will be unveiled shortly.
        </p>
      </div>
    </div>
  );
}
