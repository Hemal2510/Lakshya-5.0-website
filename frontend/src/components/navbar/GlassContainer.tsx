import { ReactNode } from "react";

interface GlassContainerProps {
    children: ReactNode;
    className?: string;
}

const GlassContainer = ({
                            children,
                            className = "",
                        }: GlassContainerProps) => {
    return (
        <div
            className={`
                relative
                overflow-hidden
                border border-white/[0.09]
                shadow-[
                    0_28px_70px_rgba(0,0,0,.45),
                    0_2px_8px_rgba(255,255,255,.03),
                    inset_0_1px_0_rgba(255,255,255,.08),
                    inset_0_-10px_24px_rgba(0,0,0,.18)
                ]
                backdrop-blur-[28px]
                transition-colors
                duration-500
                ${className}
            `}
        >
            {/* Main Glass Background */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    borderRadius: "inherit",
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

            {/* Large Reflection */}
            <div
                className="pointer-events-none absolute left-1/2 top-0 h-[80px] w-[92%] -translate-x-1/2 rounded-full z-0"
                style={{
                    background: `
                    borderRadius: "inherit",
                        radial-gradient(
                            ellipse at top,
                            rgba(255,255,255,.16) 0%,
                            rgba(255,255,255,.07) 28%,
                            rgba(255,255,255,.025) 55%,
                            transparent 82%\
                           
                        )
                        
                    `,
                    filter: "blur(10px)",
                }}
            />

            {/* Highlights */}
            <div className="pointer-events-none absolute top-[2px] left-8 right-8 h-px rounded-full bg-white/15 blur-[0.5px] opacity-80 z-0" />

            <div className="pointer-events-none absolute top-[14px] left-10 right-10 h-px rounded-full bg-white/10 blur-[1px] opacity-70 z-0" />

            {/* Bottom Depth */}
            <div
                className="pointer-events-none absolute bottom-0 left-8 right-8 h-[22px] z-0"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,.32), transparent)",
                    filter: "blur(10px)",
                }}
            />

            {/* Borders */}
            <div className="pointer-events-none absolute inset-[1px] rounded-inherit border border-white/[0.04] z-0" />

            <div className="pointer-events-none absolute inset-0 rounded-inherit border border-white/[0.08] z-0" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassContainer;