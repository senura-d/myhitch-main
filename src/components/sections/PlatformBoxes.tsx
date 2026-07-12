"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

const VIDEO_SRC = "/card%20animation%20.mp4";

export default function PlatformBoxes() {
  const reduce = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const durationRef = useRef(0);
  const targetProgressRef = useRef(0);

  // ── Scrub progress while the section is pinned ──
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  // Spring-smoothed → the perceived scrub glides instead of snapping.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    mass: 0.4,
  });

  // ── Entry transition: a full-bleed zoom — the video starts zoomed-in
  //    (always covering the viewport, so no background/border shows) and
  //    settles to 1 as the section rises into view. No gaps between sections. ──
  const { scrollYProgress: entryProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "start start"],
  });
  const entry = useSpring(entryProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.5,
  });
  const zoomScale = useTransform(entry, [0, 1], [1.25, 1]);

  // Feed the smoothed progress into the seek loop.
  useMotionValueEvent(smoothProgress, "change", (v) => {
    targetProgressRef.current = v;
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let blobUrl = "";
    let rafId = 0;
    let lastSeek = -1;
    let lastTick = 0;
    const FRAME_MS = 1000 / 30; // seek at most 30×/sec — lets the decoder breathe

    const onMeta = () => {
      durationRef.current = video.duration || 0;
    };
    video.addEventListener("loadedmetadata", onMeta);

    // Smoothly seek toward the spring-smoothed scroll target.
    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      if (now - lastTick < FRAME_MS) return;
      lastTick = now;

      const dur = durationRef.current;
      if (!dur || video.readyState < 2) return;

      const time = Math.max(0, Math.min(dur - 0.05, targetProgressRef.current * dur));
      // Skip micro-seeks (< ~1 frame) so we don't thrash the decoder.
      if (Math.abs(time - lastSeek) < 1 / 60) return;
      lastSeek = time;

      const v = video as HTMLVideoElement & { fastSeek?: (t: number) => void };
      if (typeof v.fastSeek === "function") v.fastSeek(time);
      else video.currentTime = time;
    };

    const start = () => {
      video.pause();
      rafId = requestAnimationFrame(tick);
    };

    // Prefetch the whole file as a Blob so seeks are instant.
    fetch(VIDEO_SRC)
      .then((r) => r.blob())
      .then((blob) => {
        blobUrl = URL.createObjectURL(blob);
        video.src = blobUrl;
        video.load();
        video.addEventListener("canplay", start, { once: true });
        video.play().catch(() => {});
      })
      .catch(() => {
        video.src = VIDEO_SRC;
        video.load();
        video.addEventListener("canplay", start, { once: true });
        video.play().catch(() => {});
      });

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", onMeta);
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, []);

  return (
    /*
     * 300vh wrapper gives scroll distance to scrub the video; the inner
     * sticky div stays pinned while the video plays through with scroll.
     */
    <div
      ref={wrapperRef}
      style={{ height: "300vh" }}
      className="relative bg-[#001B48]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video zooms in (grows to fill) as the section rises into view */}
        <motion.div
          className="absolute inset-0"
          style={
            reduce
              ? undefined
              : { scale: zoomScale, transformOrigin: "50% 50%", willChange: "transform" }
          }
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            aria-hidden
            onPlay={(e) => {
              const v = e.currentTarget;
              if (v.currentTime > 0.15) v.pause();
            }}
          />
        </motion.div>

        {/* Bottom-right CTA — frosted white/70 button; also masks the video's
            (moving) blur mark with an intentional, on-brand focal point. */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-end p-6 sm:p-10 lg:p-16">
          <a
            href="/platforms"
            className="shiny-btn pointer-events-auto rounded-full bg-white/70 px-8 py-4 text-base font-bold text-[#001B48] shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white sm:text-lg"
          >
            Explore the Platforms →
          </a>
        </div>
      </div>
    </div>
  );
}
