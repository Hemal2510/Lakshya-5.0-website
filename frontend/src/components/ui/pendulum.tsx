import React, { useEffect, useRef, useState } from "react";

const PendulumTextReveal: React.FC = () => {
    const pendulumRef = useRef<HTMLDivElement>(null);
    const stringRef = useRef<HTMLDivElement>(null);
    const [activeLetters, setActiveLetters] = useState<Set<number>>(new Set());

    const text = "REVEALING SOON";
    const letters = text.split("");

    useEffect(() => {
        const pendulum = pendulumRef.current;
        const string = stringRef.current;
        const container = string?.parentElement;
        if (!pendulum || !string || !container) return;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const containerHeight = container.clientHeight;

        const config = {
            length: isMobile ? 120 : 150,
            stringHeight: isMobile ? containerHeight * 0.6 : (window.innerWidth > 740 ? 290 : 370),
            ballSize: isMobile ? 80 : 140,
            ballTop: isMobile ? containerHeight * 0.6: 300,
            gravity: 0.5,
            damping: 0.998,
        };

        string.style.height = `${config.stringHeight}px`;
        pendulum.style.width = `${config.ballSize}px`;
        pendulum.style.height = `${config.ballSize}px`;
        pendulum.style.top = `${config.ballTop}px`;

        let animationId: number;
        let angle = -Math.PI / 3;
        let angularVelocity = 0;
        let lastTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!lastTime) lastTime = timestamp;
            const deltaTime = Math.min((timestamp - lastTime) / 16, 2);
            lastTime = timestamp;

            const angularAcceleration =
                (-config.gravity / config.length) * Math.sin(angle);

            angularVelocity += angularAcceleration * deltaTime;
            angularVelocity *= config.damping;
            angle += angularVelocity * deltaTime;

            string.style.transform = `rotate(${(angle * 180) / -Math.PI}deg)`;

            const normalizedX = (Math.sin(angle) + 1) / 2;
            const ballCenter = normalizedX * letters.length;
            const ballRadius = 1.45;

            const newActiveLetters = new Set<number>();
            for (let i = 0; i < letters.length; i++) {
                if (Math.abs(i - ballCenter) <= ballRadius) {
                    newActiveLetters.add(i);
                }
            }

            setActiveLetters(newActiveLetters);
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [letters.length]);

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center pt-[70px] p-4 overflow-hidden">
            <div className="relative w-full max-w-2xl h-[22rem] md:h-[28rem] flex items-start justify-center">
                {/* STRING */}
                <div
                    ref={stringRef}
                    className="absolute"
                    style={{
                        top: "0px",
                        width: "2px",
                        transformOrigin: "top center",
                        background: "linear-gradient(to bottom, rgba(255,178,94,0.5), rgba(255,77,77,0.35))",
                        boxShadow: "0 0 6px rgba(255,120,60,0.4)",
                    }}
                >
                    {/* BALL */}
                    <div
                        ref={pendulumRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none",
                            background: `
                radial-gradient(circle at 30% 25%, rgba(255,220,180,0.4), rgba(255,150,80,0.08) 35%, transparent 70%),
                radial-gradient(circle at 75% 80%, rgba(255,60,40,0.28), transparent 60%)
              `,
                            backdropFilter: "blur(22px) saturate(190%) contrast(1.2)",
                            border: "2px solid rgba(255,160,100,0.3)",
                            boxShadow: `
                inset 0 0 22px rgba(255,180,120,0.22),
                inset 0 -18px 25px rgba(255,60,40,0.2),
                0 0 45px rgba(255,100,50,0.18)
              `,
                        }}
                    />
                </div>

                {/* TEXT */}
                <div className="absolute bottom-8 md:bottom-10 w-full flex justify-center items-center space-x-1.5 md:space-x-3.5 px-2 md:px-4">
                    {letters.map((letter, index) => {
                        const active = activeLetters.has(index);
                        return (
                            <div
                                key={index}
                                className={`relative transition-all duration-75 ease-out font-black ${
                                    active
                                        ? "text-4xl md:text-8xl scale-[1]"
                                        : "text-2xl md:text-6xl text-white/50"
                                }`}
                                style={
                                    active
                                        ? {
                                            backgroundImage:
                                                "linear-gradient(90deg, #ffb15e, #ff4d4d)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            textShadow:
                                                "0 0 22px rgba(255,140,60,0.9), 0 0 45px rgba(255,60,40,0.7)",
                                        }
                                        : {
                                            textShadow: "0 0 5px rgba(255,255,255,0.05)",
                                        }
                                }
                            >
                                {letter}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PendulumTextReveal;