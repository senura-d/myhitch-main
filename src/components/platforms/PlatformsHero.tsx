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

// Scroll-scrubbed backdrop: the platforms build-up animation (192 frames).
// Scroll down plays forward, scroll up reverses.
const SEQ_COUNT = 192;
const seqSrc = (i: number) =>
  `/platforms-seq/frame-${String(i).padStart(3, "0")}.jpg`;

export default function PlatformsHero() {
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

  // Intro copy slides out as you scroll into the animation (centered block,
  // so it needs a big offset to fully clear the viewport).
  const copyY = useTransform(p, [0, 0.3], [0, 900]);
  // Closing line slides in as the scene settles, then holds.
  const closeHeadY = useTransform(p, [0.4, 0.58], [-200, 0]);
  const closeSubY = useTransform(p, [0.44, 0.62], [300, 0]);

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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Scroll-scrubbed image-sequence backdrop */}
        <ScrollImageSequence
          progress={p}
          frameCount={SEQ_COUNT}
          srcFor={seqSrc}
          className="absolute inset-0 z-0 h-full w-full"
        />

        {/* Soft left wash so the copy stays legible over the scene */}
        <div
          className="absolute inset-0 z-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.3) 42%, rgba(255,255,255,0) 70%)",
          }}
        />

        {/* Intro copy — left, vertically centered; slides out on scroll */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center"
          style={reduce ? { opacity: 0 } : { y: copyY }}
        >
          <div className="w-full px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl text-left">
              <motion.div
                className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3.5 py-1.5 text-xs font-semibold text-black"
                {...fadeUp(0.1)}
              >
                <Sparkles size={13} className="animate-pulse text-[#018ABE]" />
                <span>The Unified Ecosystem</span>
              </motion.div>

              <motion.h1
                className="font-display mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl"
                {...fadeUp(0.25)}
              >
                Eight platforms.
                <br />
                <span className="aurora-text font-semibold">One connection.</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-xl text-base leading-relaxed text-black/70 sm:text-lg"
                {...fadeUp(0.4)}
              >
                Everything you need — shopping, travel, events, services,
                logistics, media, business and community — hitched together in one
                intelligent network. Powered by a single secure account.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-3"
                {...fadeUp(0.55)}
              >
                <a
                  href="#mart"
                  className="shiny-btn btn rounded-full bg-[#001B48] px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-[#001B48]/30 transition hover:-translate-y-0.5 hover:bg-[#02457A] cursor-pointer"
                >
                  Explore Platforms
                  <ArrowRight size={16} />
                </a>
                <a
                  href={site.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-full border-2 border-[#001B48] bg-white px-6 py-3.5 text-base font-bold text-[#001B48] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#001B48] hover:text-white"
                >
                  Visit Marketplace
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Closing heading — top-center, slides in as the scene settles */}


        <span className="sr-only">{site.positioning}</span>
      </div>
    </div>
  );
}
