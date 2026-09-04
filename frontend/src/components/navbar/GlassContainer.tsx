import type { ReactNode } from "react";

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
                border border-[#8c531b]/60
                bg-gradient-to-b from-[#241309]/85 via-[#160b05]/90 to-[#0c0502]/95
                shadow-[
                    0_24px_60px_rgba(0,0,0,.85),
                    0_0_25px_rgba(184,84,31,.15),
                    inset_0_1px_0_rgba(255,225,160,.2),
                    inset_0_-8px_20px_rgba(0,0,0,.5)
                ]
                backdrop-blur-[24px]
                transition-all
                duration-500
                ${className}
            `}
        >
            {/* Main Western Glass Tint */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    borderRadius: "inherit",
                    background: `
                        linear-gradient(
                            180deg,
                            rgba(42, 22, 12, 0.45) 0%,
                            rgba(22, 11, 6, 0.35) 45%,
                            rgba(10, 5, 2, 0.55) 100%
                        )
                    `,
                }}
            />

            {/* Warm Lantern Specular Reflection */}
            <div
                className="pointer-events-none absolute left-1/2 top-0 h-[70px] w-[92%] -translate-x-1/2 rounded-full z-0"
                style={{
                    background: `
                        radial-gradient(
                            ellipse at top,
                            rgba(255, 220, 140, 0.16) 0%,
                            rgba(220, 120, 40, 0.08) 32%,
                            rgba(180, 80, 20, 0.02) 60%,
                            transparent 80%
                        )
                    `,
                    filter: "blur(8px)",
                }}
            />

            {/* Specular Edge Highlights */}
            <div className="pointer-events-none absolute top-[2px] left-8 right-8 h-px rounded-full bg-amber-200/20 blur-[0.5px] opacity-90 z-0" />
            <div className="pointer-events-none absolute top-[12px] left-10 right-10 h-px rounded-full bg-amber-400/10 blur-[1px] opacity-70 z-0" />

            {/* Bottom Dark Wood Depth */}
            <div
                className="pointer-events-none absolute bottom-0 left-8 right-8 h-[20px] z-0"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,.6), transparent)",
                    filter: "blur(8px)",
                }}
            />

            {/* Brass Inner & Outer Accent Borders */}
            <div className="pointer-events-none absolute inset-[1px] rounded-inherit border border-[#d49b55]/15 z-0" />
            <div className="pointer-events-none absolute inset-0 rounded-inherit border border-[#522a0c]/60 z-0" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassContainer;