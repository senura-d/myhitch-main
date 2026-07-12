"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import ScrollImageSequence from "@/components/motion/ScrollImageSequence";

// Scroll-scrubbed backdrop: the new ABOUT US letters shimmer animation (192 frames).
const SEQ_COUNT = 192;
const seqSrc = (i: number) =>
  `/about-seq/frame-${String(i).padStart(3, "0")}.jpg`;

export default function AboutHero() {
  const reduce = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Intro copy slides out as you scroll into the animation.
  const copyY = useTransform(p, [0, 0.3], [0, 900]);
  // Closing line slides in as the scene settles, then holds.
  const closeHeadY = useTransform(p, [0.4, 0.58], [-200, 0]);
  const closeSubY = useTransform(p, [0.38, 0.48], [150, 0]);
  const copyOpacity = useTransform(p, [0, 0.28], [1, 0]);
  const closeOpacity = useTransform(p, [0.34, 0.44], [0, 1]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.2 : 0.8,
      delay,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  });

  return (
    <div ref={wrapperRef} style={{ height: "320vh" }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Scroll-scrubbed image-sequence backdrop — crisp, no blur */}
        <ScrollImageSequence
          progress={p}
          frameCount={SEQ_COUNT}
          srcFor={seqSrc}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Dark left wash so the white copy stays legible over the blue scene */}
        <div
          className="absolute inset-0 z-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,20,50,0.62) 0%, rgba(2,20,50,0.25) 45%, rgba(2,20,50,0) 72%)",
          }}
        />

        {/* Intro copy — left, vertically centered; slides out on scroll */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center"
          style={reduce ? { opacity: 0 } : { y: copyY, opacity: copyOpacity }}
        >
          <div className="w-full px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl text-left">
              <motion.div
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                {...fadeUp(0.1)}
              >
                <Sparkles size={13} className="animate-pulse text-[#9BE0FF]" />
                <span>About MYHitch</span>
              </motion.div>

              <motion.h1
                className="font-display mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                {...fadeUp(0.25)}
              >
                Hitching the world together,
                <br />
                <span className="text-[#9BE0FF]">digitally.</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
                {...fadeUp(0.4)}
              >
                {site.positioning} Proudly built in {site.address}.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-3"
                {...fadeUp(0.55)}
              >
                <a
                  href="/platforms"
                  className="shiny-btn btn rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#001B48] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#e8f4fb] cursor-pointer"
                >
                  Explore the Ecosystem
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/contact"
                  className="btn rounded-full border-2 border-white bg-transparent px-6 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#001B48]"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Frame 2 copy — left-aligned, vertically centered; slides up into view */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center"
          style={reduce ? undefined : { y: closeSubY, opacity: closeOpacity }}
        >
          <div className="w-full px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl text-left text-white">
              <p className="eyebrow mb-1 text-sky-200">Our Mission & Vision</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Connecting
                <br />
                <span className="text-sky-200 font-bold">Australia.</span>
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-sky-100 font-medium">
                Building a fairer, faster, and more connected digital economy for communities and businesses.
              </p>
            </div>
          </div>
        </motion.div>

        <span className="sr-only">{site.positioning}</span>
      </div>
    </div>
  );
}
