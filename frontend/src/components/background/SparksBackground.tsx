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
        // Fit canvas to full screen viewport
        const resizeCanvas = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        const createParticle = (): Particle => {
            // Spawn anywhere randomly across the width of the screen, starting near the bottom half
            const x = Math.random() * window.innerWidth;
            // Start slightly below the fold or randomly in the lower 30% of the screen
            const y = Math.random() * window.innerHeight;
            // Random shooting angles (ranging from -45 to -135 degrees to shoot upwards/outwards)
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.5 + Math.random() * 3.2;
            // Golden sparks (#ffca3a, #ff9f1c) and hot white/orange sparks
            const colors = ["#ffffff", "#ffeaae", "#ffca3a", "#ff9f1c", "#ff5a1f"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return {
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                history: [],
                maxHistory: 5 + Math.floor(Math.random() * 7), // length of the whipping spark trail
                size: 0.6 + Math.random() * 1.0, // delicate modern sizing
                color,
                alpha: 1,
                life: 0,
                maxLife: 80 + Math.random() * 70, // sparks live long enough to arc beautifully
                gravity: 0.015 + Math.random() * 0.02, // pulls them downwards slowly to form arcs
                curveSpeed: (Math.random() - 0.5) * 0.07, // horizontal curve velocity factor
            };
        };
        const updateAndRender = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Keep spark count sparse (rare, premium appearance)
            // Controls the spawn frequency: roughly 6% chance per frame
            if (particles.length < 25 && Math.random() < 0.06) {
                particles.push(createParticle());
            }
            // Draw particles in additive blend mode (lighter) to create bright glowing overlaps
            ctx.globalCompositeOperation = "lighter";
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.life++;
                const lifeRatio = p.life / p.maxLife;
                // Record history for the path trail
                p.history.push({ x: p.x, y: p.y });
                if (p.history.length > p.maxHistory) {
                    p.history.shift();
                }
                // Apply physical forces: slow gravity pull and micro magnetic curve
                p.vy += p.gravity;
                p.vx += Math.sin(p.life * 0.08) * p.curveSpeed;
                p.x += p.vx;
                p.y += p.vy;
                // Draw spark tail arc path
                if (p.history.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(p.history[0].x, p.history[0].y);
                    for (let j = 1; j < p.history.length; j++) {
                        ctx.lineTo(p.history[j].x, p.history[j].y);
                    }
                    // Compute trailing alpha decay
                    p.alpha = (1 - lifeRatio) * (0.55 + Math.random() * 0.45);
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = p.size;
                    ctx.globalAlpha = Math.max(0, p.alpha);
                    // Subtle local glowing aura around the spark trail
                    ctx.shadowColor = p.color;
                    ctx.shadowBlur = 8;
                    ctx.stroke();
                }
                // Remove expired sparks
                if (p.life >= p.maxLife || p.y < -20 || p.x < -20 || p.x > window.innerWidth + 20) {
                    particles.splice(i, 1);
                }
            }
            // Reset shadows and composite operations
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
