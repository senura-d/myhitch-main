"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode, ElementType } from "react";

/** Shared motion feel: long expo-out ease — sections glide up, never snap. */
const EASE = [0.19, 1, 0.22, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** stagger children that use <RevealItem> */
  stagger?: boolean;
  delay?: number;
  y?: number;
};

/**
 * Scroll-into-view reveal — each section rises up smoothly as it enters.
 * Use `stagger` with <RevealItem> children for choreographed groups.
 * Reduced-motion safe (fades only).
 */
export function Reveal({
  children,
  className,
  as = "div",
  stagger = false,
  delay = 0,
  y = 56,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion.create(as as ElementType);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: delay },
    },
  };

  const single: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0.2 : 0.9, ease: EASE, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12%" }}
      variants={stagger ? container : single}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  id,
  y = 44,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  y?: number;
  as?: ElementType;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion.create(as as ElementType);
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0.2 : 0.85, ease: EASE },
    },
  };
  return (
    <MotionTag id={id} className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
