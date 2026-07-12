"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ShieldCheck, Wallet, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import ScrollImageSequence from "@/components/motion/ScrollImageSequence";

// Scroll-scrubbed backdrop: the MYHITCH build-up animation as an image
// sequence. Part 1 = frames 1→65 (chip rotates to centre), part 2 = 66→218
// (settles into the final hub). Scroll down plays forward, up reverses.
const SEQ_COUNT = 218;
const seqSrc = (i: number) =>
  `/hero-seq/frame-${String(i).padStart(3, "0")}.jpg`;

const trust = [
  { icon: Wallet, label: "AUD payments" },
  { icon: ShieldCheck, label: "Secure wallet" },
  { icon: Sparkles, label: "AI-powered" },
];

const line1 = ["Hitching", "the", "World"];
const line2 = ["Together"];

/** A word that rises out of its own clipped slot — the cinematic mask reveal. */
function MaskWord({
  children,
  delay,
  className = "",
}: {
  children: string;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-block overflow-hidden pb-1 align-bottom">
      <motion.span
        className={`inline-block ${className}`}
        initial={reduce ? { opacity: 0 } : { y: "112%", rotate: 5, opacity: 0.001 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{
          duration: reduce ? 0.2 : 0.85,
          delay,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Scroll progress across the tall wrapper (0 at top → 1 when scrolled through).
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Spring-smoothed progress = buttery, lag-eased motion (no scroll jitter).
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Part boundary (frame 65 of 218) sits at ~0.30 of scroll progress — the
  // text phases switch there, in step with the backdrop's two parts.

  // ── Part 1 text exits by sliding out of frame (motion, not fade) ──
  const taglineY = useTransform(p, [0, 0.24], [0, -320]);
  const heroTextY = useTransform(p, [0, 0.3], [0, 500]);
  const taglineOpacity = useTransform(p, [0, 0.22], [1, 0]);
  const heroTextOpacity = useTransform(p, [0, 0.28], [1, 0]);

  // ── Part 2 text slides in as the hub lands, then holds ──
  const f2HeadY = useTransform(p, [0.36, 0.52], [-220, 0]);
  const f2SubY = useTransform(p, [0.38, 0.48], [150, 0]);
  const f2Opacity = useTransform(p, [0.34, 0.44], [0, 1]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.2 : 0.7,
      delay,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  });

  return (
    <div ref={wrapperRef} style={{ height: "400vh" }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Scroll-scrubbed image-sequence backdrop (218 frames, 2 parts) */}
        <ScrollImageSequence
          progress={p}
          frameCount={SEQ_COUNT}
          srcFor={seqSrc}
          className="absolute inset-0 z-0 h-full w-full"
        />

        {/* Soft left wash for text legibility over the bright frames */}
        <div
          className="absolute inset-0 z-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 68%)",
          }}
        />

        {/* Frame 1 tagline — upper-left, slides up out of frame on scroll */}
        <motion.div
          className="pointer-events-none absolute left-0 top-[18%] sm:top-[22%] z-10 w-full px-5 sm:px-10 lg:px-16"
          style={reduce ? { opacity: 0 } : { y: taglineY, opacity: taglineOpacity }}
        >
          <motion.p
            className="font-display max-w-md text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-black"
            {...fadeUp(0.3)}
          >
            One ecosystem.
            <br />
            <span className="font-semibold text-black">Every connection.</span>
          </motion.p>
        </motion.div>

        {/* Frame 1 hero copy — bottom-left, slides down out of frame on scroll */}
        <motion.div
          className="absolute bottom-16 sm:bottom-28 left-0 z-10 w-full px-5 sm:px-10 lg:px-16"
          style={reduce ? { opacity: 0 } : { y: heroTextY, opacity: heroTextOpacity }}
        >
          <div className="mr-auto max-w-2xl">
            <motion.p
              className="eyebrow inline-flex items-center gap-2 text-black"
              {...fadeUp(0.15)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Australia&apos;s Intelligent Commerce &amp; Supply-Chain Ecosystem
            </motion.p>

            <h1 className="font-display mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-black">
              <span className="sr-only">
                Hitching the World Together — Digitally
              </span>
              <span aria-hidden className="flex flex-wrap gap-x-2.5 sm:gap-x-3.5">
                {line1.map((w, i) => (
                  <MaskWord key={w} delay={0.25 + i * 0.09}>
                    {w}
                  </MaskWord>
                ))}
              </span>
              <span aria-hidden className="flex flex-wrap gap-x-2.5 sm:gap-x-3.5">
                {line2.map((w, i) => (
                  <MaskWord key={w} delay={0.52 + i * 0.09}>
                    {w}
                  </MaskWord>
                ))}
                <MaskWord delay={0.66} className="text-black">
                  — Digitally.
                </MaskWord>
              </span>
            </h1>

            <motion.p
              className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-black/80"
              {...fadeUp(0.7)}
            >
              One platform for commerce, travel, events, services and logistics —
              connecting people, businesses and communities across Australia and
              beyond.
            </motion.p>

            <motion.div
              className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3"
              {...fadeUp(0.85)}
            >
              <a
                href="#platforms"
                className="shiny-btn btn rounded-full bg-[#001B48] px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-[#001B48]/30 transition hover:-translate-y-0.5 hover:bg-[#02457A] cursor-pointer text-center"
              >
                Explore the Ecosystem
              </a>
              <a
                href="/partner"
                className="btn rounded-full border-2 border-[#001B48] bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-[#001B48] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#001B48] hover:text-white text-center"
              >
                Become a Partner
              </a>
            </motion.div>

            <motion.ul
              className="mt-4 sm:mt-6 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 border-t border-[#001B48]/10 pt-3 sm:pt-4"
              {...fadeUp(1)}
            >
              {trust.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-black"
                >
                  <t.icon size={14} className="text-black" />
                  {t.label}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* Frame 2 copy — left-aligned, vertically centered; slides up into view */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center"
          style={reduce ? undefined : { y: f2SubY, opacity: f2Opacity }}
        >
          <div className="w-full px-5 sm:px-10 lg:px-16">
            <div className="max-w-xl text-left">
              <p className="eyebrow mb-1 text-black">The connected core</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-black">
                This is
                <br />
                <span className="aurora-text font-semibold">MYHitch.</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed text-black/80 font-medium">
                Every platform, payment and partner — connected through one intelligent core.
              </p>
            </div>
          </div>
        </motion.div>

        <span className="sr-only">{site.positioning}</span>
      </div>
    </div>
  );
}
