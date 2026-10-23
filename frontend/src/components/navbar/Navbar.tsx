import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";

/* ============================================================
   WESTERN AUTHENTIC SALOON SIGN NAVBAR
   ────────────────────────────────────────────────────────────
   • Pure floating torn aged parchment banner (no wooden board behind)
   • Aged tea-stained warm parchment gradient with charred edges
   • SVG feTurbulence organic torn & burnt edges
   • Active Page: Real stitched leather pentagon badge
     - Extends down below with chevron point
     - Real saddle thread dashed stitching detail (#d1be9d)
     - Rich dark saddle leather (#512c19 -> #220e06) with cream text
   • No badges on hover (clean, only active page has the leather patch)
   • Generous western spacing matching reference
   ============================================================ */

const NAV_H = 70;       // Height of the torn parchment strip
const VB_W = 1200;      // SVG viewBox width
const VB_H = 96;        // SVG viewBox height with bleed
const BLEED_Y = 13;

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Google Fonts: Rye (Western display) + Cinzel (Serif) */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Rye&family=Cinzel:wght@700;800;900&display=swap"
                rel="stylesheet"
            />

            {/* ============================================================
                DESKTOP (md+) — Floating Torn Parchment Banner
            ============================================================ */}
            <header
                className="fixed top-2.5 left-1/2 z-[1000] hidden md:block"
                style={{
                    width: "min(94%, 1240px)",
                    transform: "translateX(-50%)",
                    height: NAV_H,
                    pointerEvents: "auto",
                }}
            >
                {/* ── Torn Aged Parchment SVG Background ────────────────── */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        filter: "drop-shadow(0 10px 24px rgba(0,0,0,0.85)) drop-shadow(0 2px 6px rgba(45,18,6,0.6))",
                        pointerEvents: "none",
                    }}
                >
                    <svg
                        aria-hidden="true"
                        viewBox={`0 0 ${VB_W} ${VB_H}`}
                        preserveAspectRatio="none"
                        style={{
                            position: "absolute",
                            top: -BLEED_Y,
                            left: 0,
                            width: "100%",
                            height: VB_H,
                            overflow: "visible",
                        }}
                    >
                        <defs>
                            {/* SVG feTurbulence for jagged/charred torn edges */}
                            <filter id="nav-parch-torn" x="-4%" y="-30%" width="108%" height="160%" colorInterpolationFilters="sRGB">
                                <feTurbulence type="turbulence" baseFrequency="0.024 0.048" numOctaves="4" seed="14" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
                            </filter>

                            {/* Aged Tea-Stained Parchment Gradient */}
                            <linearGradient id="nav-parch-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ede1c9" />
                                <stop offset="30%" stopColor="#e3d4b6" />
                                <stop offset="70%" stopColor="#d5c39e" />
                                <stop offset="100%" stopColor="#c5ae82" />
                            </linearGradient>

                            {/* Burnt toasted edges vignette */}
                            <radialGradient id="nav-parch-burn" cx="50%" cy="50%" r="76%" gradientUnits="objectBoundingBox">
                                <stop offset="0%" stopColor="#8a531e" stopOpacity="0" />
                                <stop offset="65%" stopColor="#633913" stopOpacity="0.08" />
                                <stop offset="86%" stopColor="#3d1f08" stopOpacity="0.32" />
                                <stop offset="100%" stopColor="#1a0902" stopOpacity="0.65" />
                            </radialGradient>
                        </defs>

                        {/* Base parchment with torn edge filter */}
                        <rect
                            x={8}
                            y={BLEED_Y}
                            width={VB_W - 16}
                            height={NAV_H}
                            fill="url(#nav-parch-grad)"
                            filter="url(#nav-parch-torn)"
                            rx="2"
                        />

                        {/* Burnt edge overlay following the same torn filter */}
                        <rect
                            x={8}
                            y={BLEED_Y}
                            width={VB_W - 16}
                            height={NAV_H}
                            fill="url(#nav-parch-burn)"
                            filter="url(#nav-parch-torn)"
                            rx="2"
                            opacity="0.85"
                        />
                    </svg>

                    {/* Thin printed horizontal saloon ruler lines on parchment */}
                    <div
                        aria-hidden
                        style={{
                            position: "absolute",
                            inset: "6px 14px",
                            borderTop: "1px solid rgba(64,32,10,0.32)",
                            borderBottom: "1px solid rgba(64,32,10,0.32)",
                            pointerEvents: "none",
                        }}
                    />
                </div>

                {/* ── Navbar Items & Content ──────────────────────────── */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 28px 0 24px",
                    }}
                >
                    {/* Brand: ★ LAKSHYA 5.0 */}
                    <NavLink
                        to="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 9,
                            textDecoration: "none",
                            flexShrink: 0,
                            paddingRight: 26,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Rye', Georgia, serif",
                                fontSize: 14,
                                color: "#2b1406",
                                userSelect: "none",
                                textShadow: "0 1px 0 rgba(255,245,225,0.7)",
                            }}
                        >
                            ★
                        </span>
                        <span
                            style={{
                                fontFamily: "'Rye', 'Cinzel', Georgia, serif",
                                fontWeight: 700,
                                fontSize: "clamp(13px, 1.35vw, 17px)",
                                letterSpacing: "0.08em",
                                color: "#241005",
                                textShadow: "0 1px 0 rgba(255,245,225,0.7), 0 2px 4px rgba(0,0,0,0.25)",
                            }}
                        >
                            LAKSHYA 5.0
                        </span>
                    </NavLink>

                    {/* Subtle divider */}
                    <div
                        aria-hidden
                        style={{
                            width: 1.5,
                            height: 32,
                            background: "linear-gradient(180deg, transparent, rgba(50,22,8,0.38), transparent)",
                            flexShrink: 0,
                            marginRight: 12,
                        }}
                    />

                    {/* Navigation Links — Generously spaced */}
                    <nav
                        style={{
                            display: "flex",
                            alignItems: "stretch",
                            height: "100%",
                            flex: 1,
                            justifyContent: "flex-end",
                            gap: "clamp(12px, 2.2vw, 36px)",
                        }}
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className="relative flex items-center justify-center"
                                style={{
                                    textDecoration: "none",
                                    padding: "0 8px",
                                }}
                            >
                                {({ isActive }) => (
                                    <>
                                        {/* ── Active Leather Pentagon Patch with Saddle Stitching ── */}
                                        {isActive && (
                                            <div
                                                aria-hidden
                                                style={{
                                                    position: "absolute",
                                                    top: -2,
                                                    bottom: -15, // Extends below the paper with chevron point
                                                    width: "calc(100% + 22px)",
                                                    minWidth: 74,
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    pointerEvents: "none",
                                                    zIndex: 1,
                                                    filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.85)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 100 120"
                                                    preserveAspectRatio="none"
                                                    style={{ width: "100%", height: "100%" }}
                                                >
                                                    <defs>
                                                        {/* Saddle Leather Texture Gradient */}
                                                        <linearGradient id={`leather-bg-${item.name}`} x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#512c19" />
                                                            <stop offset="25%" stopColor="#432212" />
                                                            <stop offset="70%" stopColor="#34180b" />
                                                            <stop offset="100%" stopColor="#220e06" />
                                                        </linearGradient>

                                                        {/* Leather Specular Highlight / Crease */}
                                                        <radialGradient id={`leather-crease-${item.name}`} cx="50%" cy="30%" r="65%">
                                                            <stop offset="0%" stopColor="#874e2a" stopOpacity="0.25" />
                                                            <stop offset="70%" stopColor="#1e0c04" stopOpacity="0.4" />
                                                            <stop offset="100%" stopColor="#0d0401" stopOpacity="0.75" />
                                                        </radialGradient>
                                                    </defs>

                                                    {/* Outer Pentagon Leather Patch */}
                                                    <polygon
                                                        points="0,0 100,0 100,90 50,120 0,90"
                                                        fill={`url(#leather-bg-${item.name})`}
                                                        stroke="#1b0a03"
                                                        strokeWidth="1.5"
                                                    />
                                                    <polygon
                                                        points="0,0 100,0 100,90 50,120 0,90"
                                                        fill={`url(#leather-crease-${item.name})`}
                                                    />

                                                    {/* Inner Real Saddle Thread Stitching (White/Cream Dashed Line) */}
                                                    <polygon
                                                        points="6,6 94,6 94,86 50,113 6,86"
                                                        fill="none"
                                                        stroke="#d1be9d"
                                                        strokeWidth="1.8"
                                                        strokeDasharray="4 3"
                                                        strokeLinecap="round"
                                                        opacity="0.9"
                                                    />

                                                    {/* Subtle stitched groove shadow */}
                                                    <polygon
                                                        points="6.8,6.8 93.2,6.8 93.2,85.2 50,111.8 6.8,85.2"
                                                        fill="none"
                                                        stroke="#110502"
                                                        strokeWidth="1"
                                                        strokeDasharray="4 3"
                                                        strokeLinecap="round"
                                                        opacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        )}

                                        {/* Link Text */}
                                        <span
                                            style={{
                                                position: "relative",
                                                zIndex: 10,
                                                fontFamily: "'Rye', 'Cinzel', Georgia, serif",
                                                fontWeight: 700,
                                                fontSize: "clamp(11px, 1.05vw, 13.5px)",
                                                letterSpacing: "0.14em",
                                                textTransform: "uppercase",
                                                whiteSpace: "nowrap",
                                                color: isActive ? "#eedfc2" : "#2b1406",
                                                textShadow: isActive
                                                    ? "0 1px 3px rgba(0,0,0,0.95), 0 -1px 0 rgba(0,0,0,0.7)"
                                                    : "0 1px 0 rgba(255,248,225,0.75)",
                                                transition: "color 0.15s ease",
                                                padding: isActive ? "0 4px" : "0",
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            {/* ============================================================
                MOBILE (< md) — Saloon Bar with Drawer
            ============================================================ */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-[1000]">
                {/* Mobile top bar */}
                <div
                    style={{
                        height: 54,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 16px",
                        background: "linear-gradient(180deg, #ede1c9 0%, #d5c39e 100%)",
                        borderBottom: "3px solid #29150b",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.75)",
                        position: "relative",
                    }}
                >
                    <NavLink
                        to="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            textDecoration: "none",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <span style={{ fontFamily: "'Rye', serif", fontSize: 11, color: "#2b1406" }}>★</span>
                        <span
                            style={{
                                fontFamily: "'Rye', 'Cinzel', Georgia, serif",
                                fontWeight: 700,
                                fontSize: 14,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "#241005",
                                textShadow: "0 1px 0 rgba(255,245,225,0.7)",
                            }}
                        >
                            LAKSHYA 5.0
                        </span>
                    </NavLink>

                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                        style={{
                            position: "relative",
                            zIndex: 1,
                            background: "rgba(43,20,6,0.14)",
                            border: "1.5px solid rgba(43,20,6,0.5)",
                            color: "#2b1406",
                            width: 32,
                            height: 32,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 16,
                            cursor: "pointer",
                            borderRadius: 3,
                        }}
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Drawer */}
                <div
                    style={{
                        overflow: "hidden",
                        maxHeight: mobileOpen ? 460 : 0,
                        opacity: mobileOpen ? 1 : 0,
                        transition: "max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
                        background: "linear-gradient(180deg, #3d2314 0%, #220e06 100%)",
                        borderBottom: "3px solid #140803",
                        boxShadow: "0 10px 24px rgba(0,0,0,0.85)",
                    }}
                >
                    <div
                        style={{
                            padding: "12px 16px 16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                        }}
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                style={({ isActive }) => ({
                                    display: "block",
                                    width: "100%",
                                    textAlign: "center",
                                    padding: "11px 0",
                                    fontFamily: "'Rye', 'Cinzel', Georgia, serif",
                                    fontWeight: 700,
                                    fontSize: 12,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    textDecoration: "none",
                                    borderRadius: 4,
                                    ...(isActive
                                        ? {
                                              color: "#eedfc2",
                                              background: "linear-gradient(180deg, #512c19 0%, #34180b 100%)",
                                              border: "1px dashed #d1be9d",
                                              textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                                          }
                                        : {
                                              color: "#cbb493",
                                              textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                                          }),
                                })}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
