"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { audiences } from "@/content/audiences";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

interface TimelineItemProps {
  audience: typeof audiences[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function TimelineItem({ audience, index, total, scrollYProgress }: TimelineItemProps) {
  let triggerPoint = index / (total - 1);
  let startPoint = Math.max(0, (index - 0.75) / (total - 1));
  if (startPoint === triggerPoint) {
    startPoint = 0;
    triggerPoint = 0.05;
  }

  // Animative states linked to scroll progress
  const dotBg = useTransform(scrollYProgress, [startPoint, triggerPoint], ["#f1f5f9", "#0f172a"]);
  const dotScale = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.85, 1.15]);
  const iconColor = useTransform(scrollYProgress, [startPoint, triggerPoint], ["rgba(15, 23, 42, 0.35)", "#ffffff"]);
  const opacity = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.25, 1]);
  const y = useTransform(scrollYProgress, [startPoint, triggerPoint], [8, 0]);

  return (
    <div className="flex-1 min-w-[200px] md:min-w-0 snap-center flex flex-col items-center text-center">
      {/* Icon Milestone on the Line */}
      <motion.div
        style={{ backgroundColor: dotBg, scale: dotScale, color: iconColor }}
        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 shadow-sm"
      >
        <audience.icon size={16} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity, y }} className="mt-4 flex flex-col items-center">
        <h3 className="font-display text-sm font-semibold text-slate-900 leading-tight px-1">
          {audience.name}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-500 px-2">
          {audience.blurb}
        </p>
      </motion.div>
    </div>
  );
}

export default function WhoWeServe() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress specifically over the timeline grid container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const activeLineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="cv-auto w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center" stagger>
          <RevealItem>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Who We Serve</p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              One ecosystem, <span className="text-blue-600">everyone connected</span>
            </h2>
          </RevealItem>
        </Reveal>

        {/* Timeline Row Container */}
        <div ref={containerRef} className="relative mt-16 max-w-5xl mx-auto">
          {/* Scrollable grid row */}
          <div className="relative flex md:grid md:grid-cols-5 gap-6 md:gap-4 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-none snap-x snap-mandatory scroll-smooth">
            
            {/* Connecting Horizontal Line (desktop only, links dots) */}
            <div className="absolute hidden md:block left-[10%] right-[10%] top-[17px] h-[2px] bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-slate-900 origin-left"
                style={{ width: reduce ? "100%" : activeLineWidth }}
              />
            </div>

            {audiences.map((a, i) => (
              <TimelineItem
                key={a.name}
                audience={a}
                index={i}
                total={audiences.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
