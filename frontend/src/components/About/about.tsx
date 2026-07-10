import "./About.css";
import { motion} from "framer-motion";
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
const [isAnimating, setIsAnimating] = useState(false);

const next = () => {
  if (isAnimating) return;

  setIsAnimating(true);

  setCurrent((prev) => (prev + 1) % images.length);

  setTimeout(() => {
    setIsAnimating(false);
  }, 350);
};

const previous = () => {
  if (isAnimating) return;

  setIsAnimating(true);

  setCurrent((prev) => (prev - 1 + images.length) % images.length);

  setTimeout(() => {
    setIsAnimating(false);
  }, 350);
};

  

  return (
    <section className="about-section relative overflow-hidden">

    <AuroraBackground />
      {/* Dark Overlay */}



      <div className="about-container">

        {/* LEFT - Image Slider */}
        <motion.div
  className="about-slider"
  initial={{ x: -80, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <motion.img
  key={current}
  src={images[current]}
  alt="Lakshaya"
  className="slider-image"
  initial={{ opacity: 0, scale: 1.05 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
/>

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

  <div className="slider-dots">
    {images.map((_, index) => (
      <span
        key={index}
        className={current === index ? "dot active" : "dot"}
        onClick={() => setCurrent(index)}
      />
    ))}
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
    <span className="count-number">
      <CountUp end={2500} suffix="+" />
    </span>
  </span>
  <p>Participants</p>
</div>

<div className="stat">
  <span>
    <span className="count-number">
      <CountUp end={12} suffix="+" />
    </span>
  </span>
  <p>Sports</p>
</div>

<div className="stat">
  <span>
    <span className="count-number">
      <CountUp end={50} suffix="+" />
    </span>
  </span>
  <p>Institutes</p>
</div>
</div>
  

  

</motion.div>

      </div>

    </section>
  );
}