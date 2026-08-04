import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";

export default function HeroScrollSection() {
  return (
    <div className="flex flex-col overflow-hidden bg-transparent">
      <ContainerScroll
        titleComponent={
          <div className="relative flex flex-col items-center">

            {/* Stadium Glow */}
            <div
              className="absolute -top-24 w-[520px] h-[520px] rounded-full blur-[120px] -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(240,181,43,0.22) 0%, rgba(240,181,43,0.08) 45%, transparent 75%)",
              }}
            />

            {/* Premium Badge */}
            <span
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs md:text-sm font-semibold uppercase"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,248,220,0.08), rgba(240,181,43,0.18))",
                border: "1px solid rgba(240,181,43,0.45)",
                color: "#FFD76A",
                letterSpacing: "0.18em",
                boxShadow: "0 0 25px rgba(240,181,43,0.18)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse" />
              IIT Indore's Premier Sports Festival
            </span>

            {/* Premium Heading */}
            <h2
              className="mt-8 text-center font-black leading-none tracking-tight"
              style={{
                fontSize: "clamp(4rem, 9vw, 7rem)",
                background:
                  "linear-gradient(180deg,#FFFDF8 0%,#FFF4C8 10%,#FFE082 28%,#F0B52B 48%,#D88B15 70%,#8C5808 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter:
                  "drop-shadow(0 0 10px rgba(255,230,140,.95)) drop-shadow(0 0 30px rgba(240,181,43,.75)) drop-shadow(0 0 65px rgba(240,181,43,.40))",
              }}
            >
              Lakshya 5.0

              <br />

              <span
                style={{
                  display: "block",
                  marginTop: "18px",
                  fontSize: "0.55em",
                  fontWeight: 300,
                  letterSpacing: "0.12em",
                  background:
                    "linear-gradient(90deg,#ffffff,#FFE082,#ffffff,#FFD54F,#ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Defy The Odds
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-5 max-w-3xl text-center text-lg md:text-xl leading-8"
              style={{
                color: "rgba(255,246,196,0.82)",
              }}
            >
              Central India's largest inter-collegiate sports festival where
              champions are forged, records are shattered, and legends are
              born.
            </p>
          </div>
        }
      >
        {/* Premium Scroll Card */}
        <div
          className="relative w-full h-full overflow-hidden rounded-[34px]"
          style={{
            border: "1px solid rgba(240,181,43,.22)",
            boxShadow:
              "0 30px 90px rgba(0,0,0,.55), 0 0 45px rgba(240,181,43,.14)",
          }}
        >
                  {/* Background image */}
          <img
            src="/images/sports1.JPG"
            alt="Lakshya Sports Festival"
            className="w-full h-full object-cover transition-all duration-700"
            style={{
              filter: "brightness(.88) contrast(1.08) saturate(1.18)",
              objectPosition: "center 70%",
            }}
          />

          {/* Premium Golden Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to top,
                  rgba(5,5,5,.88) 0%,
                  rgba(15,10,5,.45) 40%,
                  rgba(0,0,0,.15) 70%,
                  transparent 100%
                )
              `,
            }}
          />

          {/* Golden vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, transparent 35%, rgba(240,181,43,.08) 100%)",
            }}
          />

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 md:px-12 py-5 md:py-8">

            {/* Left Side */}
            <div className="flex-shrink-0 max-w-[55%]">
              <p
                className="uppercase tracking-[0.25em] text-[10px] md:text-xs mb-1 md:mb-2"
                style={{
                  color: "#FFD76A",
                }}
              >
                SPORTS • PASSION • GLORY
              </p>

              <h3
                className="text-white font-black leading-tight"
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 2.8rem)",
                  textShadow: "0 0 25px rgba(0,0,0,.45)",
                }}
              >
                Where Champions
                <br />
                Rise
              </h3>
            </div>

            {/* Right Stats */}
            <div className="flex gap-4 md:gap-8 flex-shrink-0">

              {[
                {
                  value: "2500+",
                  label: "Athletes",
                },
                {
                  value: "50+",
                  label: "Institutes",
                },
                {
                  value: "12+",
                  label: "Sports",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <h4
                    className="text-xl sm:text-2xl md:text-4xl font-black"
                    style={{
                      background:
                        "linear-gradient(180deg,#FFF8D6,#FFD76A,#F0B52B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </h4>

                  <p
                    className="uppercase tracking-[0.12em] md:tracking-[0.18em] text-[9px] md:text-xs mt-1"
                    style={{
                      color: "rgba(255,246,196,.72)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Premium Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div
              className="absolute w-56 h-56 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(240,181,43,.28), transparent 70%)",
              }}
            />

            <img
              src="/lakshya-logo.png"
              alt="Lakshya Logo"
              className="relative w-24 md:w-32"
              style={{
                filter:
                  "drop-shadow(0 0 12px rgba(255,220,120,.95)) drop-shadow(0 0 35px rgba(240,181,43,.95)) drop-shadow(0 0 80px rgba(240,181,43,.55))",
              }}
            />

          </div>

        </div>

      </ContainerScroll>
    </div>
  );
}