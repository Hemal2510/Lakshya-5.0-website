import React, { useEffect, useRef } from "react";

interface EmberIndicatorProps {
    left: number;  // Left position of active/hovered element in pixels
    width: number; // Width of active/hovered element in pixels
    height?: number; // Optional canvas height, defaults to 78px matching navbar
}

interface Spark {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    life: number;
    maxLife: number;
    color: string;
    wobbleSpeed: number;
    wobbleRange: number;
    wobbleAngle: number;
}

export const EmberIndicator: React.FC<EmberIndicatorProps> = ({
                                                                  left,
                                                                  width,
                                                                  height = 78,
                                                              }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    // Emitter simulated state coordinates (interpolated spring-like motion)
    const currentLeftRef = useRef(left);
    const currentWidthRef = useRef(width);

    // Sync positions on initial load
    useEffect(() => {
        currentLeftRef.current = left;
        currentWidthRef.current = width;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId: number;
        const sparks: Spark[] = [];

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Helper to generate Gaussian distribution
        const randomGaussian = () => {
            let u = 0, v = 0;
            while (u === 0) u = Math.random();
            while (v === 0) v = Math.random();
            return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        };

        const createSpark = (x: number, y: number, velocityBiasX: number = 0): Spark => {
            const maxLife = 38 + Math.random() * 55;

            // Gentle buoyant rise
            const vy = -(0.55 + Math.random() * 0.95);

            // Horizontal drift + inertia
            const vx = (Math.random() - 0.5) * 0.5 + velocityBiasX * 0.2;

            // Delicate gold fleck size
            const size = 0.8 + Math.random() * 1.3;
            // Western frontier gold & ember palette
            const colors = [
                "#fff9e6", // pure gold highlight
                "#ffe082", // warm gold
                "#ffca28", // amber gold
                "#ff9800", // kerosene orange
                "#e65100", // deep campfire ember
                "#bf360c"  // dark mahogany ember
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];

            return {
                x,
                y,
                vx,
                vy,
                size,
                alpha: 0.8 + Math.random() * 0.2,
                life: 0,
                maxLife,
                color,
                wobbleSpeed: 0.04 + Math.random() * 0.08,
                wobbleRange: 0.25 + Math.random() * 0.45,
                wobbleAngle: Math.random() * Math.PI * 2,
            };
        };

        const updateAndRender = () => {
            const dl = left - currentLeftRef.current;
            const dw = width - currentWidthRef.current;
            const movementSpeed = Math.abs(dl);

            // Smooth spring travel
            currentLeftRef.current += dl * 0.07;
            currentWidthRef.current += dw * 0.07;

            const curLeft = currentLeftRef.current;
            const curWidth = currentWidthRef.current;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. DYNAMIC ROAMING OFFSET (Frontier lantern ambient drift)
            const time = Date.now() * 0.0018;
            const centerOffsetX = Math.sin(time * 1.3) * (curWidth * 0.1);
            const centerOffsetY = Math.cos(time * 1.7) * 2.5;

            const emitterCenterX = curLeft + curWidth / 2 + centerOffsetX;
            const emitterCenterY = height - 12 + centerOffsetY;

            // 2. SPAWN SPARKS WITH IRREGULAR GEOMETRY
            const baseSpawnChance = 0.22;
            const motionSpawnChance = Math.min(0.65, movementSpeed * 0.04);

            if (Math.random() < baseSpawnChance + motionSpawnChance) {
                const stdDeviation = curWidth * 0.28;
                const px = emitterCenterX + randomGaussian() * stdDeviation;
                const distFromCenter = Math.abs(px - emitterCenterX);
                const curveFactor = Math.max(0, 1 - distFromCenter / (curWidth * 0.6));

                const py = emitterCenterY - (curveFactor * 7) + (Math.random() - 0.5) * 3;
                const biasX = -dl * 0.22;

                if (px >= curLeft - 8 && px <= curLeft + curWidth + 8) {
                    sparks.push(createSpark(px, py, biasX));
                }
            }

            // 3. WARM BRASS & AMBER BASE GLOW UNDER ACTIVE TAB
            const pulse = Math.sin(Date.now() * 0.0028) * 0.08 + 0.92;
            const glowHeight = 16 * pulse;

            const baseGlow = ctx.createRadialGradient(
                emitterCenterX,
                emitterCenterY + 4,
                0,
                emitterCenterX,
                emitterCenterY + 4,
                curWidth * 0.65
            );
            baseGlow.addColorStop(0, `rgba(245, 175, 45, ${0.3 * pulse})`);
            baseGlow.addColorStop(0.4, `rgba(215, 105, 25, ${0.12 * pulse})`);
            baseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = baseGlow;
            ctx.fillRect(curLeft - 24, height - glowHeight, curWidth + 48, glowHeight);

            // 4. DRAW ELEMENTAL ADDITIVE SPARKS
            ctx.globalCompositeOperation = "lighter";

            for (let i = sparks.length - 1; i >= 0; i--) {
                const s = sparks[i];
                s.life++;
                const lifeRatio = s.life / s.maxLife;

                s.y += s.vy;
                s.x += s.vx;

                s.wobbleAngle += s.wobbleSpeed;
                s.x += Math.sin(s.wobbleAngle) * s.wobbleRange;

                s.vx *= 0.985;
                s.vy *= 0.985;

                s.alpha = (1 - lifeRatio) * (0.6 + Math.random() * 0.4);

                ctx.beginPath();
                ctx.strokeStyle = s.color;
                ctx.lineWidth = s.size;
                ctx.globalAlpha = Math.max(0, s.alpha);

                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.vx * 1.4, s.y - s.vy * 1.4);
                ctx.stroke();

                if (s.life >= s.maxLife || s.y < 4) {
                    sparks.splice(i, 1);
                }
            }

            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 1.0;

            // 5. FRONTIER GOLDEN CRESCENT LINE (Aged brass & gold underlay)
            ctx.beginPath();
            const goldGrad = ctx.createLinearGradient(curLeft, 0, curLeft + curWidth, 0);
            goldGrad.addColorStop(0, "rgba(180, 80, 20, 0)");
            goldGrad.addColorStop(0.25, "rgba(212, 155, 85, 0.4)");
            goldGrad.addColorStop(0.5, `rgba(255, 225, 140, ${0.9 * pulse})`);
            goldGrad.addColorStop(0.75, "rgba(212, 155, 85, 0.4)");
            goldGrad.addColorStop(1, "rgba(180, 80, 20, 0)");

            ctx.strokeStyle = goldGrad;
            ctx.lineWidth = 1.6;
            ctx.shadowColor = "rgba(255, 190, 70, 0.7)";
            ctx.shadowBlur = 7;

            // Subtle curved frontier golden track
            ctx.moveTo(curLeft + 4, height - 3);
            ctx.quadraticCurveTo(
                emitterCenterX,
                height - 5.5 + centerOffsetY * 0.25,
                curLeft + curWidth - 4,
                height - 3
            );
            ctx.stroke();
            ctx.shadowBlur = 0;

            animationFrameId = requestAnimationFrame(updateAndRender);
        };

        animationFrameId = requestAnimationFrame(updateAndRender);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [left, width, height]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-10 w-full h-full"
            style={{ mixBlendMode: "screen" }}
        />
    );
};

export default EmberIndicator;

