import "./About.css";
import { motion} from "framer-motion";
import AuroraBackground from "../AuroraBackground";
import { useState,useEffect,useRef } from "react";
import CountUp from "../CountUp";

const images = [
  "/images/sports1.JPG",
  "/images/sports2.JPG",
  "/images/sports3.JPG",
];
const aboutStories = [
  {
    title: "Beyond Competition",
    text: "Lakshya is more than a sports festival—it's where passion meets perseverance. Every match, every cheer, and every victory celebrates the relentless spirit of champions."
  },
  {
    title: "A Legacy of Excellence",
    text: "Hosted at IIT Indore, Lakshya has become one of Central India's premier inter-collegiate sporting events, bringing together thousands of athletes every year."
  },
  {
    title: "Where Champions Rise",
    text: "From intense rivalries to unforgettable victories, Lakshya inspires athletes to challenge their limits and create lifelong memories."
  },
  {
    title: "United Through Sport",
    text: "Lakshya celebrates teamwork, leadership, resilience, and friendships that continue long after the final whistle."
  }
];


export default function About() {
  const [current, setCurrent] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
const [isAnimating, setIsAnimating] = useState(false);
const autoSlide = useRef<number | null>(null);
const startAutoSlide = () => {
  if (autoSlide.current) clearInterval(autoSlide.current);

  autoSlide.current = window.setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000); // Change every 3 seconds
};

const resetAutoSlide = () => {
  startAutoSlide();
};
const next = () => {
  if (isAnimating) return;

  setIsAnimating(true);

  setCurrent((prev) => (prev + 1) % images.length);

  resetAutoSlide();

  setTimeout(() => {
    setIsAnimating(false);
  }, 350);
};

const previous = () => {
  if (isAnimating) return;

  setIsAnimating(true);

  setCurrent((prev) => (prev - 1 + images.length) % images.length);

  resetAutoSlide();

  setTimeout(() => {
    setIsAnimating(false);
  }, 350);
};
useEffect(() => {

  const interval = setInterval(() => {

    setCurrentStory((prev) => (prev + 1) % aboutStories.length);

  }, 3000);

  return () => clearInterval(interval);

}, []);

  useEffect(() => {
  startAutoSlide();

  return () => {
    if (autoSlide.current) {
      clearInterval(autoSlide.current);
    }
  };
}, []);

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
        onClick={() => {
  setCurrent(index);
  resetAutoSlide();
}}
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

  <motion.div
  key={currentStory}
  className="about-story"
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

  <h3>{aboutStories[currentStory].title}</h3>

  <p>{aboutStories[currentStory].text}</p>

</motion.div>
{/* 
<div className="story-nav">
  {aboutStories.map((_, index) => (
    <button
      key={index}
      className={currentStory === index ? "active" : ""}
      onClick={() => setCurrentStory(index)}
    />
  ))}
</div>
*/}
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