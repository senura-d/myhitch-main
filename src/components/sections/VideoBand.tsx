"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function VideoBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [40, 24]);

  return (
    <section ref={ref} className="cv-auto w-full bg-section-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          style={reduce ? undefined : { scale, borderRadius: radius }}
          className="relative overflow-hidden shadow-[0_40px_120px_-40px_rgba(0,0,0,0.5)]"
        >
          {/* Poster surface */}
          <div className="relative aspect-[16/8] w-full bg-[#001B48]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(60rem 40rem at 20% 20%, rgba(1,138,190,0.45), transparent 60%), radial-gradient(50rem 40rem at 85% 80%, rgba(214,232,238,0.15), transparent 55%), linear-gradient(135deg, #001B48, #02457A)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage: "radial-gradient(70% 70% at 50% 50%, #000, transparent)",
              }}
            />

            {/* Soft-blur caption */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <span className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-transform hover:scale-105">
                <PlayCircle size={34} />
              </span>
              <div className="glass-soft max-w-xl px-6 py-5">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  One platform. Endless connections.
                </p>
                <p className="mt-2 text-sm text-white/70">
                  See how MYHitch hitches commerce, travel and logistics into a
                  single intelligent network.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
