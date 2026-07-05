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
        // Helper to generate a random number with a Gaussian (bell curve) distribution
        // This concentrates sparks towards the center rather than spreading them flatly like a box
        const randomGaussian = () => {
            let u = 0, v = 0;
            while (u === 0) u = Math.random();
            while (v === 0) v = Math.random();
            return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        };
        const createSpark = (x: number, y: number, velocityBiasX: number = 0): Spark => {
            const maxLife = 35 + Math.random() * 50;

            // Floating/buoyant vertical rise
            const vy = -(0.6 + Math.random() * 0.9);

            // Horizontal drift + inertia
            const vx = (Math.random() - 0.5) * 0.6 + velocityBiasX * 0.18;

            // Delicate spark size
            const size = 0.7 + Math.random() * 1.1;
            const colors = ["#fff7e6", "#ffca3a", "#ff9f1c", "#ff5a1f", "#e63946"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return {
                x,
                y,
                vx,
                vy,
                size,
                alpha: 0.75 + Math.random() * 0.25,
                life: 0,
                maxLife,
                color,
                wobbleSpeed: 0.03 + Math.random() * 0.07,
                wobbleRange: 0.2 + Math.random() * 0.4,
                wobbleAngle: Math.random() * Math.PI * 2,
            };
        };
        const updateAndRender = () => {
            const dl = left - currentLeftRef.current;
            const dw = width - currentWidthRef.current;
            const movementSpeed = Math.abs(dl);
            // Slower easing (0.055 instead of 0.13) gives a heavier, fluid, organic hover travel
            currentLeftRef.current += dl * 0.055;
            currentWidthRef.current += dw * 0.055;
            const curLeft = currentLeftRef.current;
            const curWidth = currentWidthRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 1. DYNAMIC ROAMING OFFSET (Ember bed naturally drifts around under the tab)
            const time = Date.now() * 0.0015;
            const centerOffsetX = Math.sin(time * 1.2) * (curWidth * 0.12);
            const centerOffsetY = Math.cos(time * 1.6) * 3;
            // Emitter Center (roaming)
            const emitterCenterX = curLeft + curWidth / 2 + centerOffsetX;
            const emitterCenterY = height - 12 + centerOffsetY;
            // 2. SPAWN SPARKS WITH AN IRREGULAR GEOMETRY
            const baseSpawnChance = 0.15;
            const motionSpawnChance = Math.min(0.65, movementSpeed * 0.03);
            if (Math.random() < baseSpawnChance + motionSpawnChance) {
                // Gaussian distribution concentrates sparks around the roaming center
                const stdDeviation = curWidth * 0.25;
                const px = emitterCenterX + randomGaussian() * stdDeviation;
                // Campfire-like irregular height profile (bell-curve height, making center taller)
                const distFromCenter = Math.abs(px - emitterCenterX);
                const curveFactor = Math.max(0, 1 - distFromCenter / (curWidth * 0.6));

                // Spawn height curves upward in the center (organic flame shape)
                const py = emitterCenterY - (curveFactor * 6) + (Math.random() - 0.5) * 3;
                const biasX = -dl * 0.25;

                // Constrain spawning boundary to link range
                if (px >= curLeft - 10 && px <= curLeft + curWidth + 10) {
                    sparks.push(createSpark(px, py, biasX));
                }
            }
            // 3. PULSING BASE GLOW (Also shifts with the roaming center)
            const pulse = Math.sin(Date.now() * 0.0025) * 0.07 + 0.93;
            const glowHeight = 13 * pulse;
            const baseGlow = ctx.createRadialGradient(
                emitterCenterX,
                emitterCenterY + 4,
                0,
                emitterCenterX,
                emitterCenterY + 4,
                curWidth * 0.6
            );
            baseGlow.addColorStop(0, `rgba(255, 75, 0, ${0.25 * pulse})`);
            baseGlow.addColorStop(0.4, `rgba(255, 55, 0, ${0.1 * pulse})`);
            baseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = baseGlow;
            ctx.fillRect(curLeft - 20, height - glowHeight, curWidth + 40, glowHeight);
            // 4. DRAW ELEMENTAL ADDITIVE SPARKS
            ctx.globalCompositeOperation = "lighter";
            for (let i = sparks.length - 1; i >= 0; i--) {
                const s = sparks[i];
                s.life++;
                const lifeRatio = s.life / s.maxLife;
                // Movement Physics
                s.y += s.vy;
                s.x += s.vx;
                // Gentle heat drift wobble
                s.wobbleAngle += s.wobbleSpeed;
                s.x += Math.sin(s.wobbleAngle) * s.wobbleRange;
                s.vx *= 0.98;
                s.vy *= 0.98;
                // Flicker opacity
                s.alpha = (1 - lifeRatio) * (0.5 + Math.random() * 0.5);
                ctx.beginPath();
                ctx.strokeStyle = s.color;
                ctx.lineWidth = s.size;
                ctx.globalAlpha = Math.max(0, s.alpha);
                // Motion vector stretching
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.vx * 1.3, s.y - s.vy * 1.3);
                ctx.stroke();
                // Expired particle cleanup
                if (s.life >= s.maxLife || s.y < 4) {
                    sparks.splice(i, 1);
                }
            }
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 1.0;
            // 5. ORGANIC COAL BED LINE (Slightly curved and roaming)
            ctx.beginPath();
            const coalGrad = ctx.createLinearGradient(curLeft, 0, curLeft + curWidth, 0);
            coalGrad.addColorStop(0, "rgba(255, 30, 0, 0)");
            coalGrad.addColorStop(0.3, "rgba(255, 55, 0, 0.4)");
            coalGrad.addColorStop(0.5, `rgba(255, 195, 75, ${0.75 * pulse})`);
            coalGrad.addColorStop(0.7, "rgba(255, 55, 0, 0.4)");
            coalGrad.addColorStop(1, "rgba(255, 30, 0, 0)");
            ctx.strokeStyle = coalGrad;
            ctx.lineWidth = 1.1;
            ctx.shadowColor = "rgba(255, 70, 0, 0.65)";
            ctx.shadowBlur = 5;
            // Draw a subtle curved coal line
            ctx.moveTo(curLeft + 6, height - 2.5);
            ctx.quadraticCurveTo(
                emitterCenterX,
                height - 4.5 + centerOffsetY * 0.3,
                curLeft + curWidth - 6,
                height - 2.5
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
