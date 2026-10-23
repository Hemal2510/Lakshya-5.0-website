import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import "./Gallery.css";

import photo1 from "../../data/TeamsPhoto/photo1.jpeg";
import photo2 from "../../data/TeamsPhoto/photo2.jpeg";
import photo3 from "../../data/TeamsPhoto/photo3.jpeg";
import photo4 from "../../data/TeamsPhoto/photo4.jpeg";
import photo5 from "../../data/TeamsPhoto/photo5.jpeg";
import photo6 from "../../data/TeamsPhoto/photo6.jpeg";
import photo7 from "../../data/TeamsPhoto/photo7.jpeg";
import photo8 from "../../data/TeamsPhoto/photo8.jpeg";
import photo9 from "../../data/TeamsPhoto/photo9.jpeg";
import photo10 from "../../data/TeamsPhoto/photo10.jpeg";
import photo11 from "../../data/TeamsPhoto/photo11.jpeg";
import photo12 from "../../data/TeamsPhoto/photo12.jpeg";
import photo13 from "../../data/TeamsPhoto/photo13.jpeg";
import photo14 from "../../data/TeamsPhoto/photo14.jpeg";
import photo15 from "../../data/TeamsPhoto/photo15.jpeg";
import photo16 from "../../data/TeamsPhoto/photo16.jpeg";
import photo17 from "../../data/TeamsPhoto/photo17.jpeg";
import photo18 from "../../data/TeamsPhoto/photo18.jpeg";
import photo19 from "../../data/TeamsPhoto/photo19.jpeg";
import photo20 from "../../data/TeamsPhoto/photo20.jpeg";
import photo21 from "../../data/TeamsPhoto/photo21.jpeg";
import photo22 from "../../data/TeamsPhoto/photo22.jpeg";
import photo23 from "../../data/TeamsPhoto/photo23.jpeg";
import photo24 from "../../data/TeamsPhoto/photo24.jpeg";
import photo25 from "../../data/TeamsPhoto/photo25.jpeg";
import photo26 from "../../data/TeamsPhoto/photo26.jpeg";
import photo27 from "../../data/TeamsPhoto/photo27.jpeg";
import herobg from "../../data/TeamsPhoto/collage.png";

const photos = [
  photo1, photo2, photo3, photo4, photo5,
  photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15,
  photo16, photo17, photo18, photo19, photo20,
  photo21, photo22, photo23, photo24, photo25,
  photo26, photo27,
];

// Natural wall-hanging tilt angles for realistic pinned-to-wood look
const CARD_TILTS = [-2.8, 2.4, -1.6, 3.1, -2.2, 1.8, -3.2, 2.6, -1.9, 2.9, -2.5, 1.5];

const galleryItems = photos.map((photo, index) => ({
  id: index + 1,
  image: photo,
  numStr: String(index + 1).padStart(2, "0"),
  tilt: CARD_TILTS[index % CARD_TILTS.length],
}));

export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1));
  }, [selectedPhotoIndex]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0));
  }, [selectedPhotoIndex]);

  // Lock body scroll when Lightbox is open so page behind doesn't scroll
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedPhotoIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handlePrev, handleNext]);

  return (
    <div className="gallery-page relative select-none">
      {/* =========================================================================
          ATMOSPHERIC DARK WESTERN BACKGROUND (Matches Legacy & Footer)
      ========================================================================= */}
      <div className="gallery-bg-backdrop">
        <div className="gallery-bg-glow" />
        <div className="gallery-bg-stripes" />
      </div>

      {/* =========================================================================
          HERO SECTION (DAGUERREOTYPE ARCHIVES HEADER)
      ========================================================================= */}
      <div className="gallery-hero relative z-10 px-4">
        {/* Top Western Badge */}
        <div className="gallery-badge">
          <Camera className="w-4 h-4 text-[#ffd580]" />
          <span>DAGUERREOTYPE ARCHIVES · IIT INDORE</span>
        </div>

        {/* Title */}
        <h1 className="gallery-title">
          FRONTIER <span className="gold-text">GALLERY</span>
        </h1>

        {/* Woodcut Decorative Divider */}
        <div className="flex justify-center items-center gap-3 my-4 text-[#8c4e20] text-sm font-serif select-none">
          <span>════════════</span>
          <span className="text-[#ffd580] text-lg">❖</span>
          <span>════════════</span>
        </div>

        <p className="gallery-desc">
          A visual chronicle of grit, glory, and unforgettable moments pinned to the frontier wall.
          Relive the historic memories captured across the proving grounds of Lakshya.
        </p>
      </div>

      {/* =========================================================================
          MASTER GILDED SALOON COLLAGE FRAME
      ========================================================================= */}
      <div className="master-collage-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="master-gilded-frame"
        >
          <div className="master-inner-matting">
            <img
              src={herobg}
              alt="Lakshya Master Collage Showcase"
              className="master-collage-img"
              loading="eager"
            />
            {/* Commemorative Plaque Banner */}
            <div className="master-plaque-banner">
              <span>★ LAKSHYA COMMEMORATIVE EXHIBIT · MASTER COLLAGE ★</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          RUSTIC SALOON WOODEN PINBOARD & PUNCHED TINTYPE PHOTOS
      ========================================================================= */}
      <div className="saloon-pinboard-outer">
        {/* Wooden Board Header Bar */}
        <div className="pinboard-header-plaque">
          <div className="pinboard-bracket left" />
          <span className="pinboard-title">
            ★ THE FRONTIER PIN-BOARD · ARCHIVED EXPEDITIONS ★
          </span>
          <div className="pinboard-bracket right" />
        </div>

        {/* Pinned Photos Masonry Grid */}
        <div className="gallery-grid-wrapper">
          <div className="gallery-masonry">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
                style={{ "--card-tilt": `${item.tilt}deg` } as React.CSSProperties}
                onClick={() => setSelectedPhotoIndex(index)}
                className="punched-photo-card group"
              >
                {/* Real 3D Iron Railroad Spike / Brass Tack driven into the wall */}
                <div className="wall-tack-assembly">
                  {/* Puncture hole in paper and wall */}
                  <div className="tack-puncture-hole" />
                  {/* Metal Nail Head */}
                  <div className="tack-head">
                    <div className="tack-slot" />
                  </div>
                  {/* Drop Shadow cast on photo */}
                  <div className="tack-cast-shadow" />
                </div>

                {/* Photo Inset Frame */}
                <div className="tintype-img-box">
                  <img
                    src={item.image}
                    alt={`Lakshya moment № ${item.numStr}`}
                    loading="lazy"
                    className="tintype-img"
                  />

                  {/* Darkroom Inspect Overlay */}
                  <div className="tintype-hover-overlay">
                    <span className="tintype-inspect-badge">
                      <ZoomIn className="w-3.5 h-3.5 text-[#ffd580]" />
                      <span>INSPECT PRINT</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Aged Cardstock Caption Plate */}
                <div className="tintype-caption-plate">
                  <div className="flex items-center gap-1.5">
                    <span className="tintype-num font-mono">№ {item.numStr}</span>
                    <span className="text-[#804a1f] text-xs">·</span>
                    <span className="text-[10px] text-[#b8956e] font-serif uppercase tracking-wider">
                      DISPATCH
                    </span>
                  </div>
                  <span className="tintype-seal font-serif">★ LAKSHYA ★</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SALOON LIGHTBOX MODAL (RENDERED VIA PORTAL TO PREVENT FOOTER/NAV OVERLAP)
      ========================================================================= */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedPhotoIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPhotoIndex(null)}
                className="saloon-lightbox-backdrop"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="saloon-lightbox-card"
                >
                  {/* Lightbox Header Bar */}
                  <div className="lightbox-header">
                    <div className="flex items-center gap-2">
                      <span className="text-[#ffd580]">★</span>
                      <span className="lightbox-title">
                        DISPATCH № {galleryItems[selectedPhotoIndex].numStr} · ARCHIVE INSPECTION
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedPhotoIndex(null)}
                      className="lightbox-close-btn"
                      title="Close (Esc)"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Image Viewport with Previous & Next Arrows */}
                  <div className="lightbox-img-area">
                    {/* Previous Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="lightbox-nav-btn prev"
                      title="Previous Photo (Left Arrow)"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    {/* Main Full-Size Photo */}
                    <motion.img
                      key={selectedPhotoIndex}
                      src={galleryItems[selectedPhotoIndex].image}
                      alt={`Lakshya moment ${galleryItems[selectedPhotoIndex].id}`}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="lightbox-full-img"
                    />

                    {/* Next Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="lightbox-nav-btn next"
                      title="Next Photo (Right Arrow)"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Lightbox Footer Bar */}
                  <div className="lightbox-footer">
                    <span>LAKSHYA 5.0 · IIT INDORE DAGUERREOTYPE ARCHIVE</span>
                    <span className="font-mono text-xs text-[#ffd580] bg-[#3a1d0b] px-2.5 py-0.5 rounded-full border border-[#80451a]">
                      PRINT {selectedPhotoIndex + 1} OF {galleryItems.length}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}