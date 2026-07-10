import { motion } from "framer-motion";
import "./AuroraBackground.css";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 2 + Math.random() * 5,
  duration: 6 + Math.random() * 6,
  delay: Math.random() * 8,
}));

const embers = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  duration: 12 + Math.random() * 8,
  delay: Math.random() * 8,
}));

const streaks = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  duration: 3 + Math.random() * 3,
  delay: Math.random() * 6,
}));

export default function AuroraBackground() {
  return (
    <div className="aurora-bg">

      {/* Smoke */}
      <div className="smoke"></div>

      {/* Aurora Waves */}
      <motion.div
        className="aurora aurora1"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, 60, -40, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="aurora aurora2"
        animate={{
          x: [0, -120, 90, 0],
          y: [0, -60, 80, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving Beam */}
      <motion.div
        className="light-beam"
        animate={{
          x: ["-40%", "140%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid */}
      <div className="grid" />

      {/* Noise */}
      <div className="noise" />

      {/* Floating Sparks */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="particle"
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: -1200,
            x: [0, -15, 20, -10, 0],
            scale: [0.5, 1.3, 0.8],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* Big Embers */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="big-ember"
          initial={{
            y: 150,
            opacity: 0,
          }}
          animate={{
            y: -1200,
            x: [0, 25, -30, 15, 0],
            scale: [0.8, 1.3, 1],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: ember.duration,
            repeat: Infinity,
            delay: ember.delay,
            ease: "linear",
          }}
          style={{
            left: `${ember.left}%`,
          }}
        />
      ))}

      {/* Diagonal Fire Streaks */}
      {streaks.map((streak) => (
        <motion.div
          key={streak.id}
          className="spark-streak"
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: -250,
            y: -1000,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: streak.duration,
            repeat: Infinity,
            delay: streak.delay,
            ease: "linear",
          }}
          style={{
            left: `${streak.left}%`,
            bottom: "-100px",
          }}
        />
      ))}

    </div>
  );
}