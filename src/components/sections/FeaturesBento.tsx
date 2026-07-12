"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { features } from "@/content/features";
import { Reveal } from "@/components/motion/Reveal";

interface TimelineItemProps {
  feature: typeof features[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function TimelineItem({ feature, index, total, scrollYProgress }: TimelineItemProps) {
  let triggerPoint = index / (total - 1);
  let startPoint = Math.max(0, (index - 0.75) / (total - 1));
  if (startPoint === triggerPoint) {
    startPoint = 0;
    triggerPoint = 0.05;
  }

  // Animative states linked to scroll progress
  const dotBg = useTransform(scrollYProgress, [startPoint, triggerPoint], ["#001B48", "#ffffff"]);
  const dotScale = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.85, 1.15]);
  const iconColor = useTransform(scrollYProgress, [startPoint, triggerPoint], ["rgba(255, 255, 255, 0.45)", "#001B48"]);
  const opacity = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.25, 1]);
  const y = useTransform(scrollYProgress, [startPoint, triggerPoint], [8, 0]);

  return (
    <div className="flex-1 min-w-[220px] md:min-w-0 snap-center flex flex-col items-center text-center">
      {/* Icon Milestone on the Line */}
      <motion.div
        style={{ backgroundColor: dotBg, scale: dotScale, color: iconColor }}
        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#001B48] shadow-sm"
      >
        <feature.icon size={16} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity, y }} className="mt-4 flex flex-col items-center">
        <h3 className="font-display text-sm font-semibold text-white leading-tight px-1">
          {feature.title}
        </h3>
        <p className="mt-2 text-[11px] leading-relaxed text-white/60 px-2">
          {feature.blurb}
        </p>
      </motion.div>
    </div>
  );
}

export default function FeaturesBento() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress specifically over the timeline grid container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const activeLineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="cv-auto w-full bg-section-blue py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center" stagger>
          <p className="eyebrow text-white/80">Platform Core</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built on <span className="text-gradient">intelligent</span> foundations
          </h2>
          <p className="mt-3 text-base text-white/70">
            Eight capabilities working together beneath every MYHitch experience.
          </p>
        </Reveal>

        {/* Timeline Row Container */}
        <div ref={containerRef} className="relative mt-16 max-w-6xl mx-auto">
          {/* Scrollable grid row */}
          <div className="relative flex md:grid md:grid-cols-8 gap-6 md:gap-4 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-none snap-x snap-mandatory scroll-smooth">
            
            {/* Connecting Horizontal Line (desktop only, links dots) */}
            <div className="absolute hidden md:block left-[6.25%] right-[6.25%] top-[17px] h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white origin-left"
                style={{ width: reduce ? "100%" : activeLineWidth }}
              />
            </div>

            {features.map((f, i) => (
              <TimelineItem
                key={f.title}
                feature={f}
                index={i}
                total={features.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
