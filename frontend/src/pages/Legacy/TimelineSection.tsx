import TimelineCard from "./TimelineCard.tsx";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    season: 1,
    title: "Lakshya 1.0 – Breaking Barriers",
    subtitle: '"The Pioneer Frontier"',
    description:
      "The inaugural edition of Lakshya brought together athletes from across the territory, staking the initial claim and laying the bedrock for an annual celebration of frontier sportsmanship.",
    highlights: [
      "500+ Frontier Athletes",
      "10 Competitive Arenas",
      "Regional Acclaim & Honor",
      "Historic Maiden Edition",
    ],
    videoId: "Adc-OIDQPWo",
  },
  {
    year: "2024",
    season: 2,
    title: "Lakshya 2.0 – Rise Together",
    subtitle: '"United on the Frontier"',
    description:
      "Lakshya expanded across the state line with fierce rivalries, larger delegations, and legendary sporting battles etched into memory on and off the arena grounds.",
    highlights: [
      "900+ Enlisted Contenders",
      "15 Sporting Disciplines",
      "Nationwide Delegation Reach",
      "Expanded Bounty & Prize Pool",
    ],
    videoId: "iz3SeNEjVr0",
  },
  {
    year: "2025",
    season: 3,
    title: "Lakshya 3.0 – Beyond Limits",
    subtitle: '"Forging New Horizons"',
    description:
      "The festival scaled unmatched peaks with record-shattering registrations, ironclad grit, and relentless competitive fire across every duel and championship bout.",
    highlights: [
      "1600+ Frontier Competitors",
      "18 Sporting Categories",
      "Historic High Turnout",
      "Expanded Cultural Gatherings",
    ],
    videoId: "Jr9P5HL_3aw",
  },
  {
    year: "2026",
    season: 4,
    title: "Lakshya 4.0 – Ignite the Legacy",
    subtitle: '"The Grand Showdown"',
    description:
      "Lakshya cemented its status as one of the premier collegiate sporting festivals in the nation, drawing champion contingents from every corner of the country.",
    highlights: [
      "2500+ Competing Athletes",
      "20+ High-Stakes Arenas",
      "National Prominence & Prestige",
      "Largest Frontier Edition Yet",
    ],
    videoId: "rSAFSGDltkU",
  },
];

export default function TimelineSection() {
  return (
    <section className="timeline-section relative z-10">
      {/* Western Section Header */}
      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Brass Header Badge */}
        <div className="lk-edition-badge mb-4">
          <span aria-hidden="true">★</span>
          <span>THE HISTORIC TRAIL · FOUR CHAPTERS</span>
          <span aria-hidden="true">★</span>
        </div>

        {/* Title */}
        <h2 className="timeline-main-title">
          <span className="timeline-title-light">LAKSHYA</span>{" "}
          <span className="timeline-title-gold">THROUGH THE AGES.</span>
        </h2>

        {/* Ornamental Western Divider */}
        <div className="lk-brand-divider mx-auto my-4" aria-hidden="true">
          <span />
          <b>✥</b>
          <span />
        </div>

        <p className="timeline-header-copy">
          Every edition inscribed into the archives tells a tale of courage, grit, and triumph.
          Follow the trail through the milestones that forged the legend of Lakshya.
        </p>
      </motion.div>

      {/* Timeline Rows Container with Central Continuous Spine Line */}
      <div className="timeline-wrapper">
        {/* Continuous Unbroken Central Timeline Gold Spine */}
        <div className="central-unbroken-spine" aria-hidden="true">
          <div className="spine-glow-line" />
        </div>

        {timelineData.map((item, index) => (
          <TimelineCard
            key={item.year}
            year={item.year}
            season={item.season}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            highlights={item.highlights}
            videoId={item.videoId}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}