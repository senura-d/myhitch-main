"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const KEY = "myhitch_welcome";
const TAGLINE = ["Hitching", "the", "World", "Together"];

/**
 * First-visit welcome / loading animation. Covers the page before the landing
 * content, plays a branded intro (animated backdrop + text reveal + progress),
 * then curtains up. Shows once per browser session (sessionStorage), so it
 * never re-appears on in-session reloads or navigation.
 *
 * An inline script in the layout hides this instantly for returning visitors,
 * so they never see a flash.
 */
export default function WelcomeLoader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}

    if (seen) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const hold = reduce ? 900 : 4200;
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      setShow(false);
    }, hold);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="welcome-loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: reduce ? 0.4 : 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── Backdrop: gentle drifting grayscale blobs (no grid) ── */}
          <div className="pointer-events-none absolute inset-0 bg-white">
            <motion.div
              className="absolute -left-24 top-1/4 h-[42vmax] w-[42vmax] rounded-full blur-[100px]"
              style={{ background: "radial-gradient(circle, rgba(0,0,0,0.03), transparent 70%)" }}
              animate={reduce ? {} : { x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-24 bottom-0 h-[46vmax] w-[46vmax] rounded-full blur-[110px]"
              style={{ background: "radial-gradient(circle, rgba(0,0,0,0.035), transparent 70%)" }}
              animate={reduce ? {} : { x: [0, -80, 0], y: [0, 40, 0], scale: [1.1, 0.95, 1.1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* ── Wordmark: blur-in + scale ── */}
          <motion.h1
            className="font-display relative text-5xl font-bold tracking-tight text-black sm:text-7xl"
            initial={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(14px)", scale: 0.9, y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          >
            MYHitch
          </motion.h1>

          {/* ── Tagline: word-by-word reveal ── */}
          <div className="relative mt-4 flex flex-wrap justify-center gap-x-2 overflow-hidden px-6">
            {TAGLINE.map((w, i) => (
              <span key={w} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block text-sm font-medium uppercase tracking-[0.28em] text-black sm:text-base"
                  initial={reduce ? { opacity: 0 } : { y: "110%" }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.55 + i * 0.08, ease: [0.19, 1, 0.22, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </div>

          {/* ── Progress bar ── */}
          <motion.div
            className="relative mt-10 h-[3px] w-40 overflow-hidden rounded-full bg-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <motion.div
              className="h-full rounded-full bg-black"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: reduce ? 0.4 : 3.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
