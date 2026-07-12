"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface SectionTransitionProps {
  children: ReactNode;
  /** Controls the exit-above parallax depth. (Unused now to prevent gaps) */
  parallaxStrength?: number;
  /** Entry animation: 'slide' (default fade) | 'iris' (clip-path wipe) | 'lift' (fade) */
  variant?: "slide" | "iris" | "lift";
  className?: string;
}

/**
 * SectionTransition — wraps a section with a scroll-linked entry + exit animation.
 * Optimized to have ZERO gaps between sections by removing Y-axis translations and scale transforms.
 */
export default function SectionTransition({
  children,
  variant = "slide",
  className = "",
}: SectionTransitionProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate opacity smoothly to fade sections in/out
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0]
  );

  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 24, mass: 0.5 });

  // Iris wipe — clip-path opens from bottom up, keeping section alignment intact
  const rawClip = useTransform(
    scrollYProgress,
    [0, 0.28],
    ["inset(100% 0% 0% 0% round 0px)", "inset(0% 0% 0% 0% round 0px)"]
  );

  if (reduce) {
    return (
      <motion.div ref={ref} style={{ opacity }} className={className}>
        {children}
      </motion.div>
    );
  }

  if (variant === "iris") {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <motion.div style={{ clipPath: rawClip, opacity }}>{children}</motion.div>
      </div>
    );
  }

  // Default and "lift" both use clean opacity transitions now to guarantee no gaps
  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}
