"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const targetDate = new Date("2027-01-28T09:00:00+05:30");

export default function Countdown() {
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
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) /
                    (1000 * 60)
                ),
                seconds: Math.floor(
                    (distance % (1000 * 60)) /
                    1000
                ),
            });
        };

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col items-center mt-8">

            <p className="mb-4 text-xs md:text-sm tracking-[0.4em] uppercase text-[#E8C36A]/80">
                Event Begins In
            </p>

            <div className="flex items-center gap-5">

                <TimeBlock value={timeLeft.days} label="Days" />

                <Separator />

                <TimeBlock value={timeLeft.hours} label="Hours" />

                <Separator />

                <TimeBlock value={timeLeft.minutes} label="Minutes" />

                <Separator />

                <TimeBlock value={timeLeft.seconds} label="Seconds" />

            </div>

        </div>
    );
}

function TimeBlock({
                       value,
                       label,
                   }: {
    value: number;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center">

            <span className="text-4xl md:text-5xl font-bold text-[#F6D06D] tabular-nums">
                {String(value).padStart(2, "0")}
            </span>

            <span className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D89D34]">
                {label}
            </span>

        </div>
    );
}

function Separator() {
    return (
        <span className="text-3xl md:text-4xl font-light text-[#D89D34]/70 pb-5">
            •
        </span>
    );
}