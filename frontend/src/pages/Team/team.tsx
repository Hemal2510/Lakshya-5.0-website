import FireSealBadge from "../../components/teams/FireSealBadge.tsx";
import TeamInfiniteScroll from "../../components/teams/TeamInfiniteScroll";
import TeamWheel from "../../components/teams/TeamWheel";
import { motion } from "framer-motion";
import frontierBg from "@/assets/night-cowboy-hero-uhd.webp";
import "./team.css";

import {
  leadership,
  heads,
  coreMembers,
} from "@/data/teamsData.ts";

export default function Team() {
  return (
    <div className="lk-team-page relative pointer-events-auto min-h-screen pb-24 overflow-x-hidden">
      {/* =========================================================================
          WESTERN FRONTIER ATMOSPHERIC BACKGROUND
          Frontier panorama, light sweeps, grain texture, and drifting dust embers
      ========================================================================= */}
      <div className="lk-team-scene">
        <img
          src={frontierBg}
          alt="Frontier Landscape"
          className="lk-team-scene-image"
        />
      </div>

      <div className="lk-team-atmosphere">
        <div className="lk-team-light-sweep" />
        {/* Floating Golden Dust Particles / Warm Embers */}
        <div className="lk-team-dust" style={{ top: "18%", left: "14%", animationDelay: "0s" }} />
        <div className="lk-team-dust" style={{ top: "32%", left: "82%", animationDelay: "3s" }} />
        <div className="lk-team-dust" style={{ top: "55%", left: "22%", animationDelay: "6s" }} />
        <div className="lk-team-dust" style={{ top: "72%", left: "75%", animationDelay: "1.5s" }} />
        <div className="lk-team-dust" style={{ top: "86%", left: "38%", animationDelay: "4.5s" }} />
      </div>

      <div className="lk-team-grain" />

      {/* =========================================================================
          PAGE CONTENT CONTAINER
      ========================================================================= */}
      <main className="relative z-10 pt-[130px] sm:pt-[150px] max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* -----------------------------------------------------------------------
            PAGE HEADER: WESTERN WOODCUT TYPOGRAPHY & RIBBON
        ----------------------------------------------------------------------- */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center max-w-4xl mb-12 sm:mb-16"
        >
          {/* Western Dispatch Ribbon */}
          <div className="lk-western-ribbon mb-4">
            <span className="text-[10.5px] sm:text-xs font-serif font-black tracking-[0.32em] text-[#e0b070] uppercase">
              ★ ❖ THE FRONTIER LEADERSHIP OF LAKSHYA 5.0 ❖ ★
            </span>
          </div>

          {/* Grand Woodcut Title */}
          <h1
            className="lk-western-title text-[clamp(44px,7.5vw,84px)] leading-none"
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
            }}
          >
            MEET THE TEAM
          </h1>

          {/* Western Star Divider */}
          <div className="lk-western-divider">
            <span className="lk-western-divider-line" />
            <span className="lk-western-divider-star">✦</span>
            <span className="text-xs font-serif tracking-[0.3em] text-[#e3b86d]/90 uppercase">
              IIT INDORE
            </span>
            <span className="lk-western-divider-star">✦</span>
            <span className="lk-western-divider-line right" />
          </div>

          <p className="text-xs sm:text-sm font-serif italic tracking-[0.24em] text-[#d49b55]/90 max-w-xl text-center">
            — DRIVEN BY RELENTLESS PASSION, HONOR & UNRIVALED EXCELLENCE —
          </p>
        </motion.header>

        {/* -----------------------------------------------------------------------
            EXECUTIVE DIRECTORS / LEADERSHIP SECTION
        ----------------------------------------------------------------------- */}
        <section className="w-full flex flex-col items-center mb-20 sm:mb-24">
          <div className="text-center mb-10">
            <div className="lk-western-divider my-2">
              <span className="lk-western-divider-line" />
              <span className="lk-western-divider-star">★</span>
              <span className="lk-western-divider-line right" />
            </div>
            <p className="text-[11px] sm:text-xs font-serif italic tracking-[0.2em] text-[#d49b55]/80 uppercase">
              — COMMANDING CENTRAL INDIA'S LARGEST SPORTS FESTIVAL —
            </p>
          </div>

          {/* Overall Coordinator & Co-Overall Coordinator */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 items-start justify-items-center max-w-4xl mb-12 sm:mb-14">
            {/* Overall Coordinator */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#e3b86d]" />
                <span className="text-xs sm:text-sm font-serif font-black tracking-[0.24em] text-[#ffe4aa] uppercase">
                  OVERALL COORDINATOR
                </span>
                <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#e3b86d]" />
              </div>
              <FireSealBadge
                {...leadership.overallCoordinator}
                scale={1}
                eyebrow="OVERALL COORDINATOR"
              />
            </div>

            {/* Co-Overall Coordinator */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#e3b86d]" />
                <span className="text-xs sm:text-sm font-serif font-black tracking-[0.24em] text-[#ffe4aa] uppercase">
                  CO-OVERALL COORDINATOR
                </span>
                <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#e3b86d]" />
              </div>
              <FireSealBadge
                {...leadership.coOverallCoordinator}
                scale={1}
                eyebrow="CO-OVERALL COORDINATOR"
              />
            </div>
          </div>

          {/* General Secretary of Sports */}
          <div className="w-full flex flex-col items-center justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#e3b86d]" />
              <span className="text-xs sm:text-sm font-serif font-black tracking-[0.24em] text-[#ffe4aa] uppercase">
                GENERAL SECRETARY OF SPORTS
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#e3b86d]" />
            </div>
            <FireSealBadge
              {...leadership.generalSecretary}
              scale={1}
              eyebrow="GENERAL SECRETARY"
            />
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            EXECUTIVE DIRECTORS & LEADS (TeamWheel - No Center Logo, Zero Overlap, Burnt Edges)
        ----------------------------------------------------------------------- */}
        <section className="w-full flex flex-col items-center justify-center mb-20 sm:mb-28">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="lk-section-heading text-xl sm:text-3xl">
              EXECUTIVE DIRECTORS & LEADS
            </h2>
            <div className="lk-western-divider my-2">
              <span className="lk-western-divider-line" />
              <span className="lk-western-divider-star">✥</span>
              <span className="lk-western-divider-line right" />
            </div>
            <p className="text-[11px] sm:text-xs font-serif italic tracking-[0.22em] text-[#d49b55]/85 uppercase">
              — ORCHESTRATING EXPEDITIONS & FRONTIER OPERATIONS —
            </p>
          </div>

          {/* The Spaced Wheel (Desktop Circular Wheel / Mobile Staggered Grid) */}
          <div className="w-full overflow-x-auto overflow-y-visible flex justify-center py-4">
            <TeamWheel
              members={heads}
              radius={500}
              badgeScale={1.05}
              size={1350}
            />
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            CORE COMMITTEE SECTION (Infinite Marquee)
        ----------------------------------------------------------------------- */}
        {coreMembers && coreMembers.length > 0 && (
          <section className="w-full flex flex-col items-center justify-center mb-12">
            <div className="text-center mb-8">
              <h2 className="lk-section-heading text-xl sm:text-3xl">
                CORE TEAM MEMBERS
              </h2>
              <div className="lk-western-divider my-2">
                <span className="lk-western-divider-line" />
                <span className="lk-western-divider-star">✥</span>
                <span className="lk-western-divider-line right" />
              </div>
              <p className="text-[11px] sm:text-xs font-serif italic tracking-[0.22em] text-[#d49b55]/85 uppercase">
                — THE PILLARS OF EXCELLENCE & DEDICATION —
              </p>
            </div>

            <TeamInfiniteScroll
              members={coreMembers}
              speed={45}
              cardScale={0.92}
            />
          </section>
        )}

      </main>
    </div>
  );
}
