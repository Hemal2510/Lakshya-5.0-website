import Countdown from "@/components/Countdown";
import { ChevronDown } from "lucide-react";

export default function HeroTransition() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-24">

      {/* Fire → Night Fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0) 0%,
              rgba(24,8,2,.35) 18%,
              rgba(18,10,5,.75) 45%,
              rgba(7,17,41,.92) 82%,
              #071229 100%
            )
          `,
        }}
      />

      {/* Orange Forge Glow */}
      <div
        className="
          absolute
          left-1/2
          top-8
          h-72
          w-[900px]
          -translate-x-1/2
          rounded-full
          blur-[120px]
          opacity-40
          pointer-events-none
          animate-pulse
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,170,40,.28), transparent 72%)",
        }}
      />

      {/* Blue Ambient Glow */}
      <div
        className="
          absolute
          left-1/2
          bottom-0
          h-96
          w-[1100px]
          -translate-x-1/2
          rounded-full
          blur-[160px]
          opacity-30
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,.18), transparent 70%)",
        }}
      />

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        <Countdown />

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center">

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-[#D9A441]/70
            "
          >
            Scroll Down
          </p>

          <ChevronDown
            size={34}
            className="mt-3 text-[#D9A441] animate-bounce"
          />

        </div>

      </div>

    </section>
  );
}