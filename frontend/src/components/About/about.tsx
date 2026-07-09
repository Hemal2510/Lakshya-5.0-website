import "./About.css";
import { motion } from "framer-motion";
import Background from "../background/Background";
import { useEffect, useState } from "react";

const images = [
  "/images/sports1.JPG",
  "/images/sports2.JPG",
  "/images/sports3.JPG",
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section relative overflow-hidden">

      {/* Hexagon Background */}
      <div className="about-bg">
    <Background fixed={false} />
</div>

      {/* Dark Overlay */}
      <div className="about-overlay" />

<div className="about-top-glow" />

<div className="about-side-glow" />
      <div className="about-container">

        {/* LEFT - Image Slider */}
        <motion.div
          className="about-slider"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <img src={images[current]} alt="Lakshaya" />
        </motion.div>

        {/* RIGHT - Content */}
        <motion.div
  className="about-content"
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
>

  <span className="about-tag">
    IIT INDORE'S FLAGSHIP SPORTS FEST
  </span>

  <h1>
    About <span>Lakshya</span>
  </h1>

  <div className="heading-line"></div>

  <p>
    Lakshya is more than just a sports festival—
    it's a celebration of passion, perseverance,
    and the relentless pursuit of excellence.

    <br /><br />

    Every year, thousands of athletes from premier
    institutes across India gather at IIT Indore
    to compete, inspire, and create unforgettable
    moments that define the spirit of champions.
  </p>

  

  <div className="stats">

      <div className="stat">
          <span>2500+</span>
          <p>Participants</p>
      </div>

      <div className="stat">
          <span>12+</span>
          <p>Sports</p>
      </div>

      <div className="stat">
          <span>50+</span>
          <p>Institutes</p>
      </div>

  </div>

</motion.div>

      </div>

    </section>
  );
}