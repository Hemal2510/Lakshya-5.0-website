import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import AuroraBackground from "../AuroraBackground";
import { useState } from "react";
import CountUp from "../CountUp";

const images = [
  "/images/sports1.JPG",
  "/images/sports2.JPG",
  "/images/sports3.JPG",
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

const next = () => {
  setDirection(1);
  setCurrent((prev) => (prev + 1) % images.length);
};

const previous = () => {
  setDirection(-1);
  setCurrent((prev) => (prev - 1 + images.length) % images.length);
};

  

  return (
    <section className="about-section relative overflow-hidden">

    <AuroraBackground />
      {/* Dark Overlay */}



      <div className="about-container">

        {/* LEFT - Image Slider */}
        <motion.div
  className="about-slider"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  {/* Back Card */}
  <div className="card-back" />

  <AnimatePresence mode="wait">

    <motion.img
      key={current}
      src={images[current]}
      alt="Lakshaya"

      initial={{
        opacity: 0,
        y: direction === 1 ? 120 : -120,
        rotate: direction === 1 ? -6 : 6,
        scale: .9
      }}

      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1
      }}

      exit={{
        opacity: 0,
        y: direction === 1 ? -220 : 220,
        rotate: direction === 1 ? 10 : -10,
        scale: .85
      }}

      transition={{
        duration: .6,
        ease: "easeInOut"
      }}

      className="slider-image"
    />

  </AnimatePresence>

  <button
    className="nav-btn left"
    onClick={previous}
  >
    ❮
  </button>

  <button
    className="nav-btn right"
    onClick={next}
  >
    ❯
  </button>
  <div className="image-counter">
  {current + 1} / {images.length}
</div>

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
          <span>
    <CountUp end={2500} suffix="+" />
</span>
          <p>Participants</p>
      </div>

      <div className="stat">
          <span>
    <CountUp end={12} suffix="+" />
</span>
          <p>Sports</p>
      </div>

      <div className="stat">
          <span>
    <CountUp end={50} suffix="+" />
</span>
          <p>Institutes</p>
      </div>

  </div>

</motion.div>

      </div>

    </section>
  );
}