import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";

const Navbar = () => {
    return (
        <nav className="fixed left-1/2 top-7 z-50 w-[min(90%,1250px)] -translate-x-1/2">
            {/* Main Glass Container */}
            <div
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
                    className="
        pointer-events-none
        absolute
        inset-0
        rounded-[999px]
        z-0
    "
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
                    className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        h-[80px]
        w-[92%]
        -translate-x-1/2
        rounded-full
        z-0
    "
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

                {/* Thin Specular Highlight */}
                <div
                    className="
        pointer-events-none
        absolute
        top-[2px]
        left-8
        right-8
        h-px
        rounded-full
        bg-white/15
        blur-[0.5px]
        opacity-80
        z-0
    "
                />

                {/* Inner Highlight */}
                <div
                    className="
        pointer-events-none
        absolute
        top-[14px]
        left-10
        right-10
        h-px
        rounded-full
        bg-white/10
        blur-[1px]
        opacity-70
        z-0
    "
                />

                {/* Bottom Glass Depth */}
                <div
                    className="
        pointer-events-none
        absolute
        bottom-0
        left-8
        right-8
        h-[22px]
        rounded-b-full
        z-0
    "
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,.32), transparent)",
                        filter: "blur(10px)",
                    }}
                />

                {/* Inner Glass Border */}
                <div
                    className="
        pointer-events-none
        absolute
        inset-[1px]
        rounded-[999px]
        border
        border-white/[0.04]
        z-0
    "
                />

                {/* Outer Glass Border */}
                <div
                    className="
        pointer-events-none
        absolute
        inset-0
        rounded-[999px]
        border
        border-white/[0.08]
        z-0
    "
                />


                {/* Navigation Links */}
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `
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
                                transition-all
                                duration-300
                                ease out
                                ${
                                isActive
                                    ? "text-white"
                                    : "text-[#B5B7BD] hover:text-[#F2F2F2]"
                            }
                            `
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;