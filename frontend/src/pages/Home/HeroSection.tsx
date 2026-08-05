import Lightfall from "@/components/ui/Lightfall";
import TextType from "@/components/ui/TextType.tsx";
import { Button } from "@/components/ui/moving-border";
import Countdown from "@/components/Countdown.tsx";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Lightfall
                className="absolute inset-0"
                colors={['#F0B52B', '#C97518', '#742F09']}
                backgroundColor="#221005"
                backgroundGlow={1}
                streakCount={3}
                streakWidth={1}
                streakLength={1}
                glow={1.5}
                density={0.3}
                twinkle={1}
                zoom={3}
                opacity={1}
                speed={0.4}
                mouseInteraction={true}
                mouseStrength={0.5}
                mouseRadius={1}
                mouseDampening={0.15}
            />

            {/* Hero Content */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center translate-y-2">

                {/* Logo */}
                <img
                    src="/lakshya-logo.png"
                    alt="Lakshya Logo"
                    className="w-60 md:w-50 lg:w-70 object-contain"
                />

                <h1 className="metallic-text">
                    LAKSHYA 5.0
                </h1>

                {/* Typewriter */}
                <div
                    className="

        text-lg
        sm:text-xl
        md:text-2xl
        font-semibold
        tracking-wide
        text-center
        bg-clip-text
        text-transparent
    "
                    style={{
                        backgroundImage: `
            linear-gradient(
                90deg,
                #C9831E 0%,
                #F4C85E 35%,
                #FFF7D8 50%,
                #F4C85E 65%,
                #C9831E 100%
            )
        `,
                        backgroundSize: "220% auto",
                        animation: "goldSoftFlow 8s ease-in-out infinite",
                        textShadow: `
            0 0 8px rgba(244,200,94,.18),
            0 0 20px rgba(201,131,30,.10)
        `,
                    }}
                >
                    <TextType
                        text={[
                            "Central India's Largest Sports Fest",
                            "Defy The ODDS ",
                        ]}
                        typingSpeed={45}
                        deletingSpeed={28}
                        pauseDuration={2200}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </div>

                {/* Register Button */}
                <div className="mt-6 pointer-events-auto">
                    <button className="register-btn group">
        <span className="relative z-10 flex items-center gap-3">
            REGISTER NOW
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
            </span>
        </span>
                    </button>
                </div>



            </div>


            <div
  className="absolute bottom-0 left-0 w-full h-48 md:h-64 pointer-events-none z-20"
  style={{
    background: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0) 0%,
        rgba(25,10,8,.35) 30%,
        rgba(10,8,8,.75) 70%,
        #090909 100%
      )
    `,
  }}
/>

        </section>
    );
}