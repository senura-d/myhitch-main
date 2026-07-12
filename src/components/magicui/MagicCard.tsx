"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const OFF = -400; // park the spotlight off-card when not hovering

/**
 * MagicUI-style Magic Card — a mouse-following radial spotlight that glows
 * over the card on hover. Renders as a next/link so the whole card is a button.
 */
export function MagicCard({
  href,
  className = "",
  children,
  spotlight = "rgba(214,232,238,0.22)",
  size = 260,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  spotlight?: string;
  size?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(OFF);
  const my = useMotionValue(OFF);

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mx}px ${my}px, ${spotlight}, transparent 72%)`;

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(OFF);
        my.set(OFF);
      }}
      className={`glass glass-sheen group relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Spotlight layer — sits over the glass, under the content */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </Link>
  );
}
