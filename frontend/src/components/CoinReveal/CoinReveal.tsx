import { useState, useRef, useEffect, useCallback } from "react";
import "./CoinReveal.css";

interface Spark {
  id: number;
  tx: string;
  ty: string;
}

export default function CoinReveal() {
  const stageRef = useRef<HTMLDivElement>(null);

  // 3D rotation & position refs for 60fps RAF loop
  const rotYRef = useRef<number>(25);
  const rotXRef = useRef<number>(12);
  const posYRef = useRef<number>(0);

  // Interaction tracking refs
  const isDraggingRef = useRef<boolean>(false);
  const isFlippingRef = useRef<boolean>(false);
  const flipProgressRef = useRef<number>(0);
  const lastPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasDraggedRef = useRef<boolean>(false);

  // React state for rendering
  const [coinTransform, setCoinTransform] = useState<{
    rotY: number;
    rotX: number;
    posY: number;
  }>({ rotY: 25, rotX: 12, posY: 0 });
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Trigger spark particle explosion
  const spawnSparks = useCallback(() => {
    const newSparks: Spark[] = [];
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI;
      const distance = 80 + Math.random() * 80;
      const tx = `${Math.cos(angle) * distance}px`;
      const ty = `${Math.sin(angle) * distance}px`;
      newSparks.push({ id: Date.now() + i, tx, ty });
    }
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 850);
  }, []);

  // Flip the coin
  const handleCoinFlip = useCallback(() => {
    if (isFlippingRef.current) return;
    isFlippingRef.current = true;
    setIsFlipping(true);
    flipProgressRef.current = 0;
    spawnSparks();
  }, [spawnSparks]);

  // Main 60 FPS Animation & Physics Loop
  useEffect(() => {
    let animId: number;
    let lastTime: number | null = null;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (isFlippingRef.current) {
        // High parabolic flip toss
        flipProgressRef.current += dt * 1.1; // ~0.9s duration
        const p = flipProgressRef.current;

        if (p >= 1) {
          isFlippingRef.current = false;
          setIsFlipping(false);
          posYRef.current = 0;
          rotXRef.current = 10;
        } else {
          // Parabolic height: 4 * p * (1 - p) -> peaks at -130px
          posYRef.current = -140 * Math.sin(p * Math.PI);
          // Rapid spinning flips (4 full rotations = 1440 deg)
          rotYRef.current += 1600 * dt;
          rotXRef.current = Math.sin(p * Math.PI * 2) * 25 + 10;
        }
      } else if (isDraggingRef.current) {
        // User is manually inspecting the coin
      } else {
        // Gentle ambient hypnotic tumble
        rotYRef.current = (rotYRef.current + 32 * dt) % 360;
        rotXRef.current = 10 + Math.sin(time * 0.0018) * 8;
        posYRef.current = Math.sin(time * 0.0025) * 8;
      }

      setCoinTransform({
        rotY: rotYRef.current,
        rotX: rotXRef.current,
        posY: posYRef.current,
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer Handlers for drag & inspect
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;

    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    if (stageRef.current) {
      stageRef.current.setPointerCapture(e.pointerId);
    }
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasDraggedRef.current = true;
    }

    rotYRef.current += dx * 0.8;
    rotXRef.current = Math.max(-55, Math.min(55, rotXRef.current - dy * 0.6));

    lastPointerRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      if (stageRef.current && stageRef.current.hasPointerCapture(e.pointerId)) {
        stageRef.current.releasePointerCapture(e.pointerId);
      }

      // If user clicked without dragging, perform coin flip toss
      if (!hasDraggedRef.current) {
        handleCoinFlip();
      }
    },
    [handleCoinFlip]
  );

  // Generate 3D milled rim edge layers
  const rimLayers = [-8, -6, -4, -2, 0, 2, 4, 6, 8];

  return (
    <div className="coin-reveal-container">
      {/* Saloon Atmospheric Backdrop Glow */}
      <div className="coin-backdrop">
        <div className={`coin-ambient-glow ${isFlipping ? "flipping" : ""}`} />
      </div>

      {/* 3D Coin Stage */}
      <div
        ref={stageRef}
        className={`coin-stage ${isDragging ? "dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Dynamic Ground Shadow */}
        <div
          className="coin-ground-shadow"
          style={{
            transform: `scale(${Math.max(0.4, 1 - Math.abs(coinTransform.posY) / 200)})`,
            opacity: Math.max(0.2, 0.8 - Math.abs(coinTransform.posY) / 220),
          }}
        />

        {/* 3D Coin Object */}
        <div
          className="coin-3d"
          style={{
            transform: `translateY(${coinTransform.posY}px)
                        rotateX(${coinTransform.rotX}deg)
                        rotateY(${coinTransform.rotY}deg)`,
          }}
        >
          {/* Reeded / Milled 3D Rim Layers */}
          <div className="coin-edge-cylinder">
            {rimLayers.map((zOffset) => (
              <div
                key={zOffset}
                className="coin-edge-layer"
                style={{
                  transform: `translateZ(${zOffset}px)`,
                }}
              />
            ))}
          </div>

          {/* ==============================================================
              OBVERSE (FRONT FACE): Lakshya 5.0 Torch & Star Crest
          ============================================================== */}
          <div className="coin-face coin-face-front">
            {/* Dynamic Metallic Gleam Sheen */}
            <div
              className="coin-sheen-sweep"
              style={{
                transform: `translateX(${(Math.sin((coinTransform.rotY * Math.PI) / 180) * 80)}px)`,
              }}
            />

            <svg viewBox="0 0 240 240" className="w-full h-full select-none">
              {/* Outer Beaded Coin Border */}
              <circle
                cx="120"
                cy="120"
                r="108"
                fill="none"
                stroke="#fff1b8"
                strokeWidth="2.5"
              />
              <circle
                cx="120"
                cy="120"
                r="102"
                fill="none"
                stroke="#7a4a15"
                strokeWidth="3.5"
                strokeDasharray="4 5"
              />
              <circle
                cx="120"
                cy="120"
                r="94"
                fill="none"
                stroke="#ffd269"
                strokeWidth="1.5"
              />

              {/* Top Curved Inscription: LAKSHYA 5.0 */}
              <path
                id="frontTopCurve"
                d="M 40,120 A 80,80 0 0,1 200,120"
                fill="none"
              />
              <text
                fill="#fff6d1"
                fontSize="12.5"
                fontFamily="serif"
                fontWeight="900"
                letterSpacing="3"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))"
              >
                <textPath href="#frontTopCurve" startOffset="50%" textAnchor="middle">
                  ★ LAKSHYA 5.0 ★
                </textPath>
              </text>

              {/* Bottom Curved Inscription: IIT INDORE · MMXXV */}
              <path
                id="frontBottomCurve"
                d="M 200,120 A 80,80 0 0,1 40,120"
                fill="none"
              />
              <text
                fill="#ffd269"
                fontSize="10"
                fontFamily="serif"
                fontWeight="bold"
                letterSpacing="2.5"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))"
              >
                <textPath
                  href="#frontBottomCurve"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  IIT INDORE · MMXXV
                </textPath>
              </text>

              {/* Center Medal: Ornate Torch & Western Star */}
              <g transform="translate(120, 120)">
                <circle
                  cx="0"
                  cy="0"
                  r="52"
                  fill="#54300a"
                  stroke="#ffd580"
                  strokeWidth="2"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="48"
                  fill="none"
                  stroke="#99601c"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />

                {/* 8-Pointed Starburst */}
                {[0, 45, 90, 135].map((angle) => (
                  <line
                    key={angle}
                    x1="-38"
                    y1="0"
                    x2="38"
                    y2="0"
                    stroke="#ffda85"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                    transform={`rotate(${angle})`}
                  />
                ))}

                {/* Golden Flame Torch Emboss */}
                {/* Torch Handle */}
                <path
                  d="M -5,12 L 5,12 L 7,26 L -7,26 Z"
                  fill="#ffdb8b"
                  stroke="#6d3d0c"
                  strokeWidth="1"
                />
                <path
                  d="M -7,26 L 7,26 L 4,32 L -4,32 Z"
                  fill="#cca043"
                  stroke="#573009"
                  strokeWidth="1"
                />
                {/* Torch Bowl */}
                <path
                  d="M -11,12 C -11,8 -7,4 0,4 C 7,4 11,8 11,12 Z"
                  fill="#ffeaab"
                  stroke="#7c4611"
                  strokeWidth="1"
                />
                {/* Leaping Flame Crest */}
                <path
                  d="M 0,-24 C -8,-14 -12,-4 -7,4 C -2,6 2,6 7,4 C 12,-4 8,-14 0,-24 Z"
                  fill="#fff4d0"
                  stroke="#a8691a"
                  strokeWidth="1.2"
                  filter="drop-shadow(0 0 6px rgba(255, 200, 60, 0.8))"
                />
                <path
                  d="M 0,-18 C -4,-11 -7,-4 -4,2 C -1,3 1,3 4,2 C 7,-4 4,-11 0,-18 Z"
                  fill="#ffd466"
                />
              </g>
            </svg>
          </div>

          {/* ==============================================================
              REVERSE (BACK FACE): Coming Soon Heraldry & Laurel
          ============================================================== */}
          <div className="coin-face coin-face-back">
            {/* Dynamic Metallic Gleam Sheen */}
            <div
              className="coin-sheen-sweep"
              style={{
                transform: `translateX(${(Math.sin((coinTransform.rotY * Math.PI) / 180) * -80)}px)`,
              }}
            />

            <svg viewBox="0 0 240 240" className="w-full h-full select-none">
              {/* Outer Beaded Coin Border */}
              <circle
                cx="120"
                cy="120"
                r="108"
                fill="none"
                stroke="#fff1b8"
                strokeWidth="2.5"
              />
              <circle
                cx="120"
                cy="120"
                r="102"
                fill="none"
                stroke="#7a4a15"
                strokeWidth="3.5"
                strokeDasharray="4 5"
              />
              <circle
                cx="120"
                cy="120"
                r="94"
                fill="none"
                stroke="#ffd269"
                strokeWidth="1.5"
              />

              {/* Top Curved Inscription: COMING SOON */}
              <path
                id="backTopCurve"
                d="M 40,120 A 80,80 0 0,1 200,120"
                fill="none"
              />
              <text
                fill="#fff6d1"
                fontSize="12.5"
                fontFamily="serif"
                fontWeight="900"
                letterSpacing="3"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))"
              >
                <textPath href="#backTopCurve" startOffset="50%" textAnchor="middle">
                  ★ COMING SOON ★
                </textPath>
              </text>

              {/* Bottom Curved Inscription: HONOR · GRIT · GLORY */}
              <path
                id="backBottomCurve"
                d="M 200,120 A 80,80 0 0,1 40,120"
                fill="none"
              />
              <text
                fill="#ffd269"
                fontSize="10"
                fontFamily="serif"
                fontWeight="bold"
                letterSpacing="2.5"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))"
              >
                <textPath
                  href="#backBottomCurve"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  HONOR · GRIT · GLORY
                </textPath>
              </text>

              {/* Center Medallion: Frontier Laurel & Roman Proof */}
              <g transform="translate(120, 120)">
                <circle
                  cx="0"
                  cy="0"
                  r="52"
                  fill="#54300a"
                  stroke="#ffd580"
                  strokeWidth="2"
                />

                {/* Laurel Leaves (Left) */}
                <path
                  d="M -30,10 C -34,0 -28,-18 -12,-30 C -16,-20 -20,-6 -14,10 Z"
                  fill="#ffd982"
                  stroke="#6d3d0c"
                  strokeWidth="0.8"
                />
                {/* Laurel Leaves (Right) */}
                <path
                  d="M 30,10 C 34,0 28,-18 12,-30 C 16,-20 20,-6 14,10 Z"
                  fill="#ffd982"
                  stroke="#6d3d0c"
                  strokeWidth="0.8"
                />

                {/* Center Star & Denomination */}
                <polygon
                  points="0,-18 5,-5 18,-5 8,4 12,17 0,9 -12,17 -8,4 -18,-5 -5,-5"
                  fill="#fff4d0"
                  stroke="#874f14"
                  strokeWidth="1.2"
                  filter="drop-shadow(0 0 5px rgba(255, 215, 80, 0.8))"
                />

                <text
                  x="0"
                  y="28"
                  textAnchor="middle"
                  fill="#ffdb8b"
                  fontSize="7.5"
                  fontFamily="serif"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  GOLD PROOF
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Spark Emitters during flip */}
        {sparks.map((s) => (
          <div
            key={s.id}
            className="coin-spark"
            style={
              {
                left: "50%",
                top: "50%",
                "--tx": s.tx,
                "--ty": s.ty,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Interactive Prompt Badge */}
      <div className="coin-hint-badge">
        <span>★ CLICK TO FLIP · DRAG TO INSPECT 3D COIN ★</span>
      </div>

      {/* Typography Reveal */}
      <div className="coin-text-block">
        <h1 className="coin-coming-soon-title">COMING SOON</h1>
        <div className="coin-flourish">══════ ❖ ══════</div>
        <span className="coin-subtitle">
          OFFICIAL PARTNERSHIPS & PROUD PATRONS
        </span>
        <p className="text-xs text-[#a88258] max-w-md font-sans">
          The frontier ledger is being inscribed. Esteemed sponsors and partners of Lakshya 5.0 will be unveiled shortly.
        </p>
      </div>
    </div>
  );
}
