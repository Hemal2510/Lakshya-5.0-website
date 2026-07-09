import Countdown from "@/components/Countdown";

export default function HeroTransition() {
    return (
        // Replaced rigid height with padding so it breathes naturally
        <section className="relative flex flex-col items-center justify-center pt-32 pb-16">

            {/* Fade Mask (The Glue) */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(
                            to bottom,
                            transparent 0%,
                            rgba(9,5,3,0.8) 45%,
                            #090503 100%
                        )
                    `,
                }}
            />

            {/* Forge Glow */}
            <div
                className="
                    absolute
                    left-1/2
                    top-1/4
                    h-72
                    w-[850px]
                    -translate-x-1/2
                    rounded-full
                    blur-[110px]
                    opacity-30
                    pointer-events-none
                "
                style={{
                    background:
                        "radial-gradient(circle, rgba(240,181,43,.22), transparent 72%)",
                }}
            />

            {/* Countdown Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <Countdown />

                <div
                    className="
                        mt-10
                        text-xs
                        uppercase
                        tracking-[0.45em]
                        text-[#C98C2B]/60
                        animate-pulse
                    "
                >
                    Scroll
                </div>
            </div>

        </section>
    );
}