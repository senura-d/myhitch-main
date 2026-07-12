"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import ScrollImageSequence from "@/components/motion/ScrollImageSequence";

const SEQ_COUNT = 149;
const seqSrc = (i: number) =>
  `/card-seq/frame-${String(i - 1).padStart(3, "0")}.jpg`;

export default function PlatformBoxes() {
  const reduce = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // ── Scrub progress while the section is pinned ──
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  // Spring-smoothed → the perceived scrub glides instead of snapping.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    mass: 0.4,
  });

  // ── Entry transition: a full-bleed zoom ──
  const { scrollYProgress: entryProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "start start"],
  });
  const entry = useSpring(entryProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.5,
  });
  const zoomScale = useTransform(entry, [0, 1], [1.25, 1]);

  return (
    /*
     * 300vh wrapper gives scroll distance to scrub; the inner
     * sticky div stays pinned while the image sequence plays.
     */
    <div
      ref={wrapperRef}
      style={{ height: "300vh" }}
      className="relative bg-[#001B48]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Sequence zooms in as the section rises into view */}
        <motion.div
          className="absolute inset-0"
          style={
            reduce
              ? undefined
              : { scale: zoomScale, transformOrigin: "50% 50%", willChange: "transform" }
          }
        >
          <ScrollImageSequence
            progress={smoothProgress}
            frameCount={SEQ_COUNT}
            srcFor={seqSrc}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        {/* Bottom-right CTA button */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-end p-5 sm:p-10 lg:p-16">
          <a
            href="/platforms"
            className="shiny-btn pointer-events-auto rounded-full bg-white/70 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-[#001B48] shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
          >
            Explore the Platforms →
          </a>
        </div>
      </div>
    </div>
  );
}
