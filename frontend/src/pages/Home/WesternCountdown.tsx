import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const DEFAULT_TARGET_DATE = new Date("2027-01-28T09:00:00+05:30");

export default function WesternCountdown({ targetDate = DEFAULT_TARGET_DATE }: { targetDate?: Date }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    const timeBlocks = [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
    ];

    return (
        <div className="western-countdown-container select-none">
            {/* Countdown Header Banner */}
            <div className="countdown-header-badge">
                <span className="text-[#ffd580]">★</span>
                <span>TOURNAMENT COMMENCES IN</span>
                <span className="text-[#ffd580]">★</span>
            </div>

            {/* Dials & Split Cards Grid */}
            <div className="countdown-cards-grid">
                {timeBlocks.map((block, index) => (
                    <div key={block.label} className="flex items-center">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="western-timer-card group"
                        >
                            {/* 4 Corner Brass Rivets */}
                            <div className="card-corner-rivet top-left" />
                            <div className="card-corner-rivet top-right" />
                            <div className="card-corner-rivet bottom-left" />
                            <div className="card-corner-rivet bottom-right" />

                            {/* Center Split Flap Seam Line */}
                            <div className="split-flap-seam" />

                            {/* Top Card Half (Slightly lighter reflection) */}
                            <div className="card-half top" />

                            {/* Number Display */}
                            <div className="timer-number-wrapper">
                                <span className="timer-number">
                                    {String(block.value).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Bottom Label Badge */}
                            <div className="timer-label-plate">
                                <span>★ {block.label} ★</span>
                            </div>
                        </motion.div>

                        {/* Separator Colons (except after last card) */}
                        {index < timeBlocks.length - 1 && (
                            <div className="countdown-colon-separator">
                                <span className="colon-dot top" />
                                <span className="colon-dot bottom" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
