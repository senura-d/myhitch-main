"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";

/**
 * Scroll-scrubbed image sequence rendered to a <canvas>.
 *
 * All frames are preloaded, so drawing a frame is essentially free — there is
 * no video seeking, which makes the scrub perfectly smooth in both directions
 * (scroll down = play forward, scroll up = play in reverse).
 *
 * `progress` is a 0→1 MotionValue (ideally spring-smoothed) that maps to the
 * frame range. `srcFor(i)` returns the URL for the 1-based frame `i`.
 */
export default function ScrollImageSequence({
  progress,
  frameCount,
  srcFor,
  className = "",
  poster = false,
  posterFrame,
}: {
  progress: MotionValue<number>;
  frameCount: number;
  srcFor: (i: number) => string;
  className?: string;
  /** Mobile/low-power: show a single static frame, skip all preloading. */
  poster?: boolean;
  /** 1-based frame to use as the static poster (defaults to the last frame). */
  posterFrame?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetRef = useRef(0);
  const drawnRef = useRef(-1);

  useMotionValueEvent(progress, "change", (v) => {
    targetRef.current = v;
  });

  useEffect(() => {
    if (poster) return; // no canvas / no preload in poster mode
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Preload every frame up front.
    const imgs: HTMLImageElement[] = new Array(frameCount);
    for (let i = 0; i < frameCount; i++) {
      const img = new window.Image();
      img.decoding = "async";
      img.src = srcFor(i + 1);
      imgs[i] = img;
    }
    imagesRef.current = imgs;

    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);

    const cover = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 16;
      const ih = img.naturalHeight || 9;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    // Draw the frame nearest to `index` that is actually loaded, so the
    // canvas never flashes blank while later frames are still downloading.
    const drawNearest = (index: number) => {
      for (let d = 0; d < frameCount; d++) {
        const lo = imgs[index - d];
        if (lo && lo.complete && lo.naturalWidth) return cover(lo);
        const hi = imgs[index + d];
        if (hi && hi.complete && hi.naturalWidth) return cover(hi);
      }
    };

    const resize = () => {
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      drawnRef.current = -1; // force redraw at new size
      drawNearest(
        Math.round(targetRef.current * (frameCount - 1))
      );
    };

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const index = Math.max(
        0,
        Math.min(frameCount - 1, Math.round(targetRef.current * (frameCount - 1)))
      );
      if (index === drawnRef.current) return;
      const img = imgs[index];
      if (img && img.complete && img.naturalWidth) {
        cover(img);
        drawnRef.current = index;
      } else {
        drawNearest(index);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    // Kick a draw once the first frame decodes (in case it wasn't cached yet).
    imgs[0].decode?.().then(() => drawNearest(0)).catch(() => {});
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [frameCount, srcFor, poster]);

  // Poster mode: a single lightweight image, no sequence download.
  if (poster) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={srcFor(posterFrame ?? frameCount)}
        alt=""
        aria-hidden
        className={`${className} object-cover`}
      />
    );
  }

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
