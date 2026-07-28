import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface TimelineCardProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  videoId: string;
  reverse?: boolean;
  isUpcoming?: boolean;
}

export default function TimelineCard({
  year,
  title,
  subtitle,
  description,
  highlights,
  videoId,
  reverse = false,
  isUpcoming = false,
}: TimelineCardProps) {
  return (
    <motion.div
      className={`timeline-row ${reverse ? "reverse" : ""} ${isUpcoming ? "upcoming-row" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* ================= VIDEO ================= */}

      <div className="timeline-video">

        <div className="video-frame">

          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allowFullScreen
          />

          <div className="video-overlay">
            <Play size={52} />
          </div>

        </div>

      </div>

      {/* ================= CENTER ================= */}

      <div className="timeline-center">

        <div className="fire-line"></div>

        <div className={`fire-node ${isUpcoming ? "upcoming-node" : ""}`}>
          {isUpcoming ? "⚡" : "🔥"}
        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="timeline-content">

        <div className={`year-pill ${reverse ? "year-right" : "year-left"} ${isUpcoming ? "upcoming-pill" : ""}`}>
            {year}
        </div>

        <div className={`content-card ${isUpcoming ? "upcoming-card" : ""}`}>

            {isUpcoming && (
              <div className="upcoming-badge">
                <span>🔥 THE NEXT ERA IS HERE</span>
              </div>
            )}

            <h2 className={isUpcoming ? "upcoming-title" : ""}>{title}</h2>

            <h4 className={isUpcoming ? "upcoming-subtitle" : ""}>{subtitle}</h4>

            <p>{description}</p>

            <h5>{isUpcoming ? "WHAT TO EXPECT" : "HIGHLIGHTS"}</h5>

            <ul>
                {highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

        </div>

      </div>

    </motion.div>
  );
}