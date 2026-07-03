import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "./navItems";
import EmberIndicator from "./EmberIndicator";
const Navbar = () => {
    const location = useLocation();

    // Target position coordinates for EmberIndicator
    const [coords, setCoords] = useState({ left: 0, width: 0 });

    // Hover track index state
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    // Coordinate references
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);
    // Active route lookup
    const activeIndex = navItems.findIndex((item) => item.path === location.pathname);
    // The ember source targets hovered item first, then falls back to active route
    const targetIndex = hoveredIndex !== null ? hoveredIndex : (activeIndex !== -1 ? activeIndex : 0);
    useEffect(() => {
        const updateCoords = () => {
            const container = containerRef.current;
            const targetElement = linkRefs.current[targetIndex];
            if (container && targetElement) {
                const containerRect = container.getBoundingClientRect();
                const targetRect = targetElement.getBoundingClientRect();
                setCoords({
                    left: targetRect.left - containerRect.left,
                    width: targetRect.width,
                });
            }
        };
        updateCoords();
        const timer = setTimeout(updateCoords, 50);
        window.addEventListener("resize", updateCoords);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateCoords);
        };
    }, [targetIndex, location.pathname]);
    return (
        <nav className="fixed left-1/2 top-7 z-50 w-[min(90%,1250px)] -translate-x-1/2">

            {/* ========================================================
                BULLETPROOF CSS OVERRIDES FOR EXTERNAL `.active` STYLES
            ======================================================== */}
            <style dangerouslySetInnerHTML={{ __html: `
                /* Base state override - neutral gray text and transparent bg */
                .ember-nav-link {
                    display: inline-block !important;
                    background-color: transparent !important;
                    background-image: none !important;
                    background: transparent !important;
                    color: #B5B7BD !important;
                    -webkit-text-fill-color: initial !important;
                    text-shadow: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    transition: all 0.3s ease-out !important;
                }
                /* Hover state - gold gradient text */
                .ember-nav-link:hover {
                    filter: url(#subtle-heat-shimmer) !important;
                    background: linear-gradient(to bottom, #ffffff 50%, #ffd066 82%, #ff8c1a 100%) !important;
                    -webkit-background-clip: text !important;
                    background-clip: text !important;
                    -webkit-text-fill-color: transparent !important;
                    color: transparent !important;
                    text-shadow: 0px 1px 3px rgba(0,0,0,0.5), 0px 0px 6px rgba(255, 175, 0, 0.45) !important;
                }
                /* Active state (highly specific override) - burnt campfire gradient */
                .ember-nav-link.active,
                a.ember-nav-link.active {
                    filter: url(#premium-heat-shimmer) !important;
                    background: linear-gradient(to bottom, #ffffff 40%, #ff953e 78%, #ff3b00 100%) !important;
                    -webkit-background-clip: text !important;
                    background-clip: text !important;
                    -webkit-text-fill-color: transparent !important;
                    color: transparent !important;
                    text-shadow: 0px 1px 3px rgba(0,0,0,0.6), 0px 0px 8px rgba(255, 75, 0, 0.5), 0px 0px 14px rgba(255, 120, 0, 0.2) !important;
                    
                    /* Double guard against standard template pill backgrounds */
                    background-color: transparent !important;
                    box-shadow: none !important;
                }
            `}} />
            {/* ========================================================
                SVG FILTERS FOR HEAT SHIMMER DISTORTION
            ======================================================== */}
            <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Active route premium shimmer (stronger waving) */}
                    <filter id="premium-heat-shimmer">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.03 0.08"
                            numOctaves="2"
                            result="noise"
                        >
                            <animate
                                attributeName="baseFrequency"
                                values="0.03 0.08; 0.03 0.12; 0.03 0.08"
                                dur="2.4s"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="3.5"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                    {/* Hover-only partial shimmer (very subtle waving) */}
                    <filter id="subtle-heat-shimmer">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.04 0.1"
                            numOctaves="1"
                            result="noise"
                        >
                            <animate
                                attributeName="baseFrequency"
                                values="0.04 0.1; 0.04 0.14; 0.04 0.1"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.5"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
            {/* Main Glass Container */}
            <div
                ref={containerRef}
                className="
                    relative
                    flex flex-row
                    h-[78px]
                    w-full
                    items-center
                    justify-center gap-14
                    overflow-hidden
                    rounded-[999px]
                    border border-white/[0.09]
                    px-8
                    shadow-[
                            0_28px_70px_rgba(0,0,0,.45),
                            0_2px_8px_rgba(255,255,255,.03),
                            inset_0_1px_0_rgba(255,255,255,.08),
                            inset_0_-10px_24px_rgba(0,0,0,.18)
                            ]
                    backdrop-blur-[28px]
                    transition-colors
                    duration-500
                "
            >
                {/* ================================
                    GLASS VISUAL LAYERS
                ================================ */}
                {/* Main Glass Background */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-[999px] z-0"
                    style={{
                        background: `
                            linear-gradient(
                                180deg,
                                rgba(32,32,32,0.22) 0%,
                                rgba(18,18,18,0.16) 45%,
                                rgba(8,8,8,0.24) 100%
                            )
                        `,
                    }}
                />
                {/* Large Curved Reflection */}
                <div
                    className="pointer-events-none absolute left-1/2 top-0 h-[80px] w-[92%] -translate-x-1/2 rounded-full z-0"
                    style={{
                        background: `
                            radial-gradient(
                                ellipse at top,
                                rgba(255,255,255,.16) 0%,
                                rgba(255,255,255,.07) 28%,
                                rgba(255,255,255,.025) 55%,
                                transparent 82%
                            )
                        `,
                        filter: "blur(10px)",
                    }}
                />
                {/* Thin Specular Highlights */}
                <div className="pointer-events-none absolute top-[2px] left-8 right-8 h-px rounded-full bg-white/15 blur-[0.5px] opacity-80 z-0" />
                <div className="pointer-events-none absolute top-[14px] left-10 right-10 h-px rounded-full bg-white/10 blur-[1px] opacity-70 z-0" />
                {/* Bottom Glass Depth */}
                <div
                    className="pointer-events-none absolute bottom-0 left-8 right-8 h-[22px] rounded-b-full z-0"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,.32), transparent)",
                        filter: "blur(10px)",
                    }}
                />
                {/* Glass Borders */}
                <div className="pointer-events-none absolute inset-[1px] rounded-[999px] border border-white/[0.04] z-0" />
                <div className="pointer-events-none absolute inset-0 rounded-[999px] border border-white/[0.08] z-0" />
                {/* ================================
                    DYNAMIC EMBER CANVAS EFFECT
                ================================ */}
                <EmberIndicator
                    left={coords.left}
                    width={coords.width}
                />
                {/* ================================
                    NAVIGATION LINKS
                ================================ */}
                {navItems.map((item, index) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        ref={(el) => { linkRefs.current[index] = el; }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="
                            ember-nav-link
                            relative
                            z-10
                            rounded-full
                            px-3
                            py-2
                            font-manrope
                            text-[14px]
                            font-[600]
                            uppercase
                            tracking-[0.16em]
                        "
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};
export default Navbar;
