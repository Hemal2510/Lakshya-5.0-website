import React, { useEffect, useRef } from "react";
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    history: { x: number; y: number }[];
    maxHistory: number;
    size: number;
    color: string;
    alpha: number;
    life: number;
    maxLife: number;
    gravity: number;
    curveSpeed: number;
}
export const SparksBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const particles: Particle[] = [];

        // Cache viewport size — updated only on resize, never read live in the loop
        let vw = window.innerWidth;
        let vh = window.innerHeight;

        const resizeCanvas = () => {
            vw = window.innerWidth;
            vh = window.innerHeight;
            canvas.width = vw * window.devicePixelRatio;
            canvas.height = vh * window.devicePixelRatio;
            ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before re-scaling to avoid compounding scale on repeated resizes
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const createParticle = (): Particle => {
            const x = Math.random() * vw;
            const y = Math.random() * vh;
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.5 + Math.random() * 3.2;
            const colors = ["#ffffff", "#ffeaae", "#ffca3a", "#ff9f1c", "#ff5a1f"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return {
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                history: [],
                maxHistory: 5 + Math.floor(Math.random() * 7),
                size: 0.6 + Math.random() * 1.0,
                color,
                alpha: 1,
                life: 0,
                maxLife: 80 + Math.random() * 70,
                gravity: 0.015 + Math.random() * 0.02,
                curveSpeed: (Math.random() - 0.5) * 0.07,
            };
        };

        const updateAndRender = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (particles.length < 25 && Math.random() < 0.06) {
                particles.push(createParticle());
            }

            ctx.globalCompositeOperation = "lighter";
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.life++;
                const lifeRatio = p.life / p.maxLife;

                p.history.push({ x: p.x, y: p.y });
                if (p.history.length > p.maxHistory) p.history.shift();

                p.vy += p.gravity;
                p.vx += Math.sin(p.life * 0.08) * p.curveSpeed;
                p.x += p.vx;
                p.y += p.vy;

                if (p.history.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(p.history[0].x, p.history[0].y);
                    for (let j = 1; j < p.history.length; j++) {
                        ctx.lineTo(p.history[j].x, p.history[j].y);
                    }
                    p.alpha = (1 - lifeRatio) * (0.55 + Math.random() * 0.45);
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = p.size;
                    ctx.globalAlpha = Math.max(0, p.alpha);
                    ctx.shadowColor = p.color;
                    ctx.shadowBlur = 8;
                    ctx.stroke();
                }

                // use cached vw, not window.innerWidth
                if (p.life >= p.maxLife || p.y < -20 || p.x < -20 || p.x > vw + 20) {
                    particles.splice(i, 1);
                }
            }

            ctx.shadowBlur = 0;
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 1.0;
            animationFrameId = requestAnimationFrame(updateAndRender);
        };

        animationFrameId = requestAnimationFrame(updateAndRender);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 w-full h-full"
            style={{ mixBlendMode: "screen" }}
        />
    );
};

export default SparksBackground;