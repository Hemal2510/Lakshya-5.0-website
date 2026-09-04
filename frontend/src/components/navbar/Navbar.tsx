import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "./navItems";
import GlassContainer from "./GlassContainer";
import EmberIndicator from "./EmberIndicator";

const Navbar = () => {
    const location = useLocation();

    // Target position coordinates for EmberIndicator
    const [coords, setCoords] = useState({ left: 0, width: 0 });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <nav className="fixed left-1/2 top-4 z-50 w-[min(92%,1250px)] -translate-x-1/2 select-none">
            {/* ========================================================
                WESTERN TYPOGRAPHY & LINK STYLING OVERRIDES
            ======================================================== */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .western-nav-link {
                    display: inline-block !important;
                    background-color: transparent !important;
                    background-image: none !important;
                    background: transparent !important;
                    color: #c7b299 !important;
                    font-family: 'Cinzel', serif !important;
                    font-weight: 700 !important;
                    -webkit-text-fill-color: initial !important;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;
                    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
                }
                /* Hover state - warm golden parchment glow */
                .western-nav-link:hover {
                    color: #fff4db !important;
                    text-shadow: 0 0 10px rgba(255, 213, 128, 0.6), 0 2px 4px rgba(0,0,0,0.9) !important;
                    transform: translateY(-1px) scale(1.04) !important;
                }
                /* Active route state - authentic Western gold leaf gradient */
                .western-nav-link.active,
                a.western-nav-link.active {
                    background: linear-gradient(180deg, #ffffff 15%, #ffd580 60%, #d4882c 100%) !important;
                    -webkit-background-clip: text !important;
                    background-clip: text !important;
                    -webkit-text-fill-color: transparent !important;
                    color: transparent !important;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.8), 0 0 14px rgba(255, 185, 60, 0.55) !important;
                    background-color: transparent !important;
                    box-shadow: none !important;
                }
            `}} />

            {/* ========================================================
                DESKTOP SALOON CAPSULE NAVBAR
            ======================================================== */}
            <div className="hidden md:flex">
                <div
                    ref={containerRef}
                    className="
                        relative
                        flex flex-row
                        h-[76px]
                        w-full
                        items-center
                        justify-between
                        gap-2
                        lg:gap-5
                        xl:gap-12
                        overflow-hidden
                        rounded-[999px]
                        border border-[#8c531b]/70
                        bg-gradient-to-b from-[#241309]/90 via-[#150a04]/92 to-[#0a0402]/96
                        px-5
                        lg:px-7
                        xl:px-9
                        shadow-[
                            0_24px_60px_rgba(0,0,0,.9),
                            0_0_25px_rgba(184,84,31,.18),
                            inset_0_1px_0_rgba(255,225,160,.22),
                            inset_0_-8px_18px_rgba(0,0,0,.6)
                        ]
                        backdrop-blur-[24px]
                        transition-all
                        duration-500
                    "
                >
                    {/* Brass Corner Rivet Left */}
                    <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-[#ffd580] to-[#522b0c] border border-[#2e1505] shadow-[0_1px_2px_rgba(0,0,0,0.9)] opacity-75" />

                    {/* Smoked Amber Glass Layer */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-[999px] z-0"
                        style={{
                            background: `
                                linear-gradient(
                                    180deg,
                                    rgba(42, 22, 12, 0.35) 0%,
                                    rgba(20, 10, 5, 0.25) 45%,
                                    rgba(8, 4, 2, 0.5) 100%
                                )
                            `,
                        }}
                    />

                    {/* Warm Gas-Lamp Ambient Top Reflection */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-0 h-[70px] w-[90%] -translate-x-1/2 rounded-full z-0"
                        style={{
                            background: `
                                radial-gradient(
                                    ellipse at top,
                                    rgba(255, 220, 140, 0.16) 0%,
                                    rgba(212, 155, 85, 0.06) 35%,
                                    transparent 75%
                                )
                            `,
                            filter: "blur(8px)",
                        }}
                    />

                    {/* Double Thin Brass Specular Highlights */}
                    <div className="pointer-events-none absolute top-[2px] left-8 right-8 h-px rounded-full bg-amber-200/25 blur-[0.5px] opacity-85 z-0" />
                    <div className="pointer-events-none absolute top-[12px] left-12 right-12 h-px rounded-full bg-amber-400/10 blur-[1px] opacity-65 z-0" />

                    {/* Bottom Dark Lacquered Depth */}
                    <div
                        className="pointer-events-none absolute bottom-0 left-8 right-8 h-[20px] rounded-b-full z-0"
                        style={{
                            background: "linear-gradient(to top, rgba(0,0,0,.65), transparent)",
                            filter: "blur(8px)",
                        }}
                    />

                    {/* Inner Brass Rim Inset */}
                    <div className="pointer-events-none absolute inset-[1px] rounded-[999px] border border-[#d49b55]/15 z-0" />

                    {/* Dynamic Frontier Campfire Ember Indicator */}
                    <EmberIndicator
                        left={coords.left}
                        width={coords.width}
                    />

                    {/* Left Brand Title */}
                    <div className="relative z-10 flex items-center gap-2">
                        <NavLink to="/" className="flex items-center gap-2 group">
                            <span className="text-[#ffd580] text-xs opacity-80 group-hover:scale-125 transition-transform">★</span>
                            <span
                                className="
                                    font-['Cinzel_Decorative',Georgia,serif]
                                    text-[17px]
                                    xl:text-[19px]
                                    font-[900]
                                    tracking-[0.14em]
                                    uppercase
                                    bg-gradient-to-b from-[#ffffff] via-[#ffd580] to-[#c87528]
                                    bg-clip-text
                                    text-transparent
                                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]
                                "
                            >
                                Lakshya 5.0
                            </span>
                        </NavLink>
                    </div>

                    {/* Right Nav Links */}
                    <div className="relative z-10 flex items-center gap-1.5 lg:gap-4 xl:gap-10">
                        {navItems.map((item, index) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                ref={(el) => {
                                    linkRefs.current[index] = el;
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="
                                    western-nav-link
                                    rounded-full
                                    px-2.5
                                    lg:px-3.5
                                    py-2
                                    text-[11px]
                                    lg:text-[12.5px]
                                    xl:text-[13.5px]
                                    uppercase
                                    tracking-[0.12em]
                                    lg:tracking-[0.16em]
                                "
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Brass Corner Rivet Right */}
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-[#ffd580] to-[#522b0c] border border-[#2e1505] shadow-[0_1px_2px_rgba(0,0,0,0.9)] opacity-75" />
                </div>
            </div>

            {/* ========================================================
                MOBILE WESTERN SALOON NAVBAR
            ======================================================== */}
            <div className="md:hidden">
                <GlassContainer
                    className={`
                        overflow-hidden
                        px-6
                        transition-all
                        duration-500
                        ${
                            isMobileMenuOpen
                                ? "h-[440px] rounded-[28px]"
                                : "h-[70px] rounded-[999px]"
                        }
                    `}
                >
                    <div className="flex h-[70px] items-center justify-between">
                        <NavLink to="/" className="flex items-center gap-1.5" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-[#ffd580] text-xs">★</span>
                            <span
                                className="
                                    font-['Cinzel_Decorative',Georgia,serif]
                                    text-[16px]
                                    font-[900]
                                    uppercase
                                    tracking-[0.14em]
                                    bg-gradient-to-b from-[#ffffff] via-[#ffd580] to-[#c87528]
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Lakshya 5.0
                            </span>
                        </NavLink>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="
                                text-[#ffd580]
                                text-2xl
                                leading-none
                                p-1.5
                                rounded-full
                                border border-[#8c531b]/50
                                bg-[#241309]/60
                                hover:border-[#ffd580]
                                transition-colors
                            "
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>

                    <div
                        className={`
                            overflow-hidden
                            transition-all
                            duration-500
                            ${
                                isMobileMenuOpen
                                    ? "max-h-[350px] opacity-100 pt-4"
                                    : "max-h-0 opacity-0"
                            }
                        `}
                    >
                        <div className="flex items-center justify-center gap-2 mb-3 text-[#8c531b] text-xs font-serif">
                            <span>════════</span>
                            <span className="text-[#ffd580]">❖</span>
                            <span>════════</span>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="western-nav-link text-base py-1 uppercase tracking-widest"
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </GlassContainer>
            </div>
        </nav>
    );
};

export default Navbar;

