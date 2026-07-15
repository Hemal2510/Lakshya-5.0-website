import "./Legacy.css";
import TimelineSection from "../../components/TimelineSection";
import { Trophy, Calendar, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";

const stats = [
  {
    icon: <Calendar size={36} />,
    value: "4",
    title: "YEARS OF EXCELLENCE",
    desc: "Four successful editions of Lakshaya.",
  },
  {
    icon: <Users size={36} />,
    value: "2500+",
    title: "PARTICIPANTS",
    desc: "Students competing across all editions.",
  },
  {
    icon: <Zap size={36} />,
    value: "12+",
    title: "SPORTS",
    desc: "Sports and cultural competitions.",
  },
  {
    icon: <Trophy size={36} />,
    value: "50+",
    title: "INSTITUTES",
    desc: "Colleges from across the country.",
  },
];

export default function Legacy() {
  return (
    <section className="legacy-section">

      <div className="legacy-hero">

        <div className="legacy-badge">
          🏆 Our Journey
        </div>

        <h1>
          Legacy of <span>Excellence</span>
        </h1>

        <p>
          Four years of passion, determination, and unforgettable sporting
          moments that continue to inspire every athlete stepping onto the
          field.
        </p>

      </div>

      <div className="stats-grid">

        {stats.map((card, index) => (
          <div className="stat-card" key={index}>

            <div className="icon-box">
              {card.icon}
            </div>

            <h2>{card.value}</h2>

            <h4>{card.title}</h4>

            <p>{card.desc}</p>

          </div>
        ))}

      </div>

      <TimelineSection />


    </section>
  );
}