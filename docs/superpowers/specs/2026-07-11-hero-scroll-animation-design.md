# Hero scroll animation — design

**Date:** 2026-07-11
**Component:** `src/components/sections/Hero.tsx`

## Goal

Replace the laggy video-scrubbing hero with a smooth, GSAP-driven scroll
animation built from **two still frames**. Scroll drives a pinned timeline that
zooms/moves frame 1 out and settles frame 2 at the bottom, then reveals the text.

## Why not scrub the video

Frame-by-frame scrubbing seeks `video.currentTime` on every scroll frame.
Seeking is expensive (especially on a 15 MB file) and caused the reported lag.
GSAP does not make seeking cheaper. Still images + CSS transforms composite on
the GPU and stay smooth, so we drop the `<video>` entirely.

## Assets (provided by user)

- `/public/hero-frame-1.jpg` — starting frame
- `/public/hero-frame-2.jpg` — "zoomed-in + moved to bottom" end frame

(Extension may be jpg/png/webp; wire to whatever the user drops in.)

## Behavior

Uses `gsap` + `ScrollTrigger` (already installed, `gsap ^3.15.0`).

- Section is **pinned** for **~150% of viewport height** of scroll.
- Timeline is **scrubbed** (`scrub: true`) so it's tied 1:1 to scroll and reversible.

Timeline (0 → 1 of scroll progress):

1. **Frame 1:** `scale 1 → 1.15`, drift down slightly, `opacity 1 → 0`.
2. **Frame 2:** crossfades in `opacity 0 → 1`, `scale 1.1 → 1`, settling at bottom.
3. **Text block** (eyebrow, heading, subhead, buttons, trust badges): stays
   hidden until ~70% progress, then fades/slides in over the settled frame 2.
   Position stays **bottom-left** as it currently is.

## Reduced motion

If `prefers-reduced-motion`, skip pin/scrub entirely: render frame 2 + text
statically, no scaling or crossfade.

## Integration / cleanup

- App uses Lenis smooth scroll; ScrollTrigger works with it (Lenis drives the
  scroll, ScrollTrigger reads window scroll). Refresh ScrollTrigger after mount.
- Register `ScrollTrigger` plugin once, client-side.
- Kill all ScrollTrigger instances created by this component on unmount.
- Use `gsap.context()` scoped to the component root for safe cleanup.

## Out of scope

- 30 fps re-encode of the video (no ffmpeg available in this env; and video is
  removed anyway).
- Any change to navbar or downstream sections.
