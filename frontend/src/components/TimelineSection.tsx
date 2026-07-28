import TimelineCard from "./TimelineCard";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    title: "Lakshaya 1.0 – Breaking Barriers",
    subtitle: '"Breaking Barriers"',
    description:
      "The inaugural edition of Lakshaya brought together athletes from various institutes, laying the foundation for an annual celebration of sportsmanship.",
    highlights: [
      "500+ Participants",
      "10 Sports Categories",
      "Regional Recognition",
      "Successful Opening Edition",
    ],
    videoId: "Adc-OIDQPWo",
  },

  {
    year: "2024",
    title: "Lakshaya 2.0 – Rise Together",
    subtitle: '"Rise Together"',
    description:
      "Lakshaya expanded with more competitions, larger participation, and unforgettable moments on and off the field.",
    highlights: [
      "900+ Participants",
      "15 Sports",
      "National Participation",
      "Bigger Prize Pool",
    ],
    videoId: "iz3SeNEjVr0",
  },

  {
    year: "2025",
    title: "Lakshaya 3.0 – Beyond Limits",
    subtitle: '"Beyond Limits"',
    description:
      "The festival reached new heights with record registrations and enhanced competitive spirit across every sporting event.",
    highlights: [
      "1600+ Participants",
      "18 Sports",
      "Record Registrations",
      "Expanded Cultural Events",
    ],
    videoId: "Jr9P5HL_3aw",
  },

  {
    year: "2026",
    title: "Lakshaya 4.0 – Ignite the Legacy",
    subtitle: '"Ignite the Legacy"',
    description:
      "Lakshaya evolved into one of the most anticipated collegiate sports festivals, inspiring athletes from across the country.",
    highlights: [
      "2500+ Participants",
      "20+ Sports",
      "National Reach",
      "Largest Edition Yet",
    ],
    videoId: "rSAFSGDltkU",
  },

  {
    year: "LAKSHYA 5.0",
    title: "Lakshaya 5.0 – The Ultimate Showdown",
    subtitle: '"Ignite The Future"',
    description:
      "Prepare for the grandest, most high-octane edition of IIT Indore's premier sports festival! Lakshya 5.0 returns to redefine athletic excellence with state-of-the-art arenas, unprecedented rivalries, and unforgettable celebrations.",
    highlights: [
      "🔥 3500+ Athletes Expected",
      "⚡ 22+ Championship Sports Disciplines",
      "🏆 Record Grand Prize Pool & Trophies",
      "🚀 High-Octane Arena Battles & Pro Nights",
    ],
    videoId: "Adc-OIDQPWo",
    isUpcoming: true,
  },
];

export default function TimelineSection() {
  return (
    <section className="timeline-section">

      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="timeline-badge">
          🔥 Through the Years
        </div>

        <h2>
          Lakshaya <span>Through the Years</span>
        </h2>

        <p>
          Every edition has added another chapter to the legacy of Lakshaya.
          Relive the milestones, memories, and moments that shaped our journey.
        </p>
      </motion.div>

      <div className="timeline-wrapper">

  {timelineData.map((item, index) => (
    <TimelineCard
      key={item.year}
      year={item.year}
      title={item.title}
      subtitle={item.subtitle}
      description={item.description}
      highlights={item.highlights}
      videoId={item.videoId}
      reverse={index % 2 !== 0}
      isUpcoming={item.isUpcoming}
    />
  ))}

  {/* Timeline End Grand Finale Emblem */}
  <motion.div
    className="timeline-finale"
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="finale-pulse-ring"></div>
    <div className="finale-pulse-ring delay-ring"></div>
    <div className="finale-badge">
      <div className="finale-icon">🔥</div>
      <span className="finale-text">THE LEGACY CONTINUES • LAKSHYA 5.0</span>
      <div className="finale-spark">⚡</div>
    </div>
  </motion.div>

</div>

    </section>
  );
}