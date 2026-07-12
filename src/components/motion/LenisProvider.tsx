"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Smooth-scroll provider (Lenis). Framer Motion's `useScroll` reads native
 * scroll, which Lenis drives, so scroll-linked transforms stay in sync.
 * Honors prefers-reduced-motion by disabling smoothing.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: !reduce,
        duration: 1.3,
      }}
    >
      {children}
    </ReactLenis>
  );
}
