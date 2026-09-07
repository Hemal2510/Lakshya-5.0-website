import { motion } from "framer-motion";
import { Compass, MapPin, ExternalLink } from "lucide-react";
import "./venue.css";

export default function Venue() {
  return (
    <section className="western-venue-poster-section relative">
      {/* Sunkissed Canyon Glow */}
      <div className="venue-desert-glow" />

      <div className="western-venue-container">
        <motion.a
          href="https://maps.google.com/?q=22.5255,75.9200"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="western-trailhead-card group"
        >
          {/* Top Corner Rivets */}
          <span className="trailhead-rivet tl" />
          <span className="trailhead-rivet tr" />
          <span className="trailhead-rivet bl" />
          <span className="trailhead-rivet br" />

          {/* Left: Venue Information */}
          <div className="trailhead-left">
            <div className="trailhead-tag">
              <MapPin className="w-3.5 h-3.5 text-[#f5b041]" />
              <span>OFFICIAL PROVING GROUNDS · IIT INDORE</span>
            </div>

            <h2 className="trailhead-title">
              THE ARENA AT <span>IIT INDORE</span>
            </h2>

            <p className="trailhead-address">
              Simrol, Khandwa Road · Indore, Madhya Pradesh 453552
            </p>

            <p className="trailhead-desc">
              Where collegiate champions from premier institutions across the nation converge on the frontier grounds.
            </p>
          </div>

          {/* Right: Coordinates & Launch Action */}
          <div className="trailhead-right">
            <div className="trailhead-coords-strip">
              {/* Latitude */}
              <div className="trailhead-coord-box">
                <span className="t-coord-label">LATITUDE</span>
                <strong className="t-coord-val">22.5255° N</strong>
              </div>

              {/* Longitude */}
              <div className="trailhead-coord-box">
                <span className="t-coord-label">LONGITUDE</span>
                <strong className="t-coord-val">75.9200° E</strong>
              </div>

              {/* Elevation */}
              <div className="trailhead-coord-box">
                <span className="t-coord-label">ELEVATION</span>
                <strong className="t-coord-val">560 M</strong>
              </div>
            </div>

            {/* Launch Map Button */}
            <div className="trailhead-map-btn">
              <Compass className="w-4 h-4 text-[#f5b041] group-hover:rotate-45 transition-transform duration-300" />
              <span>LAUNCH EXPEDITION MAP</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#f5b041] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

