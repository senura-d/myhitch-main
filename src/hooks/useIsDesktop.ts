"use client";

import { useEffect, useState } from "react";

// The heroes can either scrub the full image sequence on every device, or fall
// back to a lightweight static poster on phones. Per request, mobile now plays
// the full scroll animation too — flip this to `true` to re-enable the mobile
// poster optimization (saves ~20-30MB per page on phones).
const ENABLE_MOBILE_POSTER = false;

/**
 * Returns whether the full scroll-scrub should run. When the mobile poster
 * optimization is off, this is always `true` (scrub on every viewport).
 * Otherwise it's an SSR-safe desktop media-query check.
 */
export function useIsDesktop(query = "(min-width: 1024px)"): boolean {
  const [isDesktop, setIsDesktop] = useState(!ENABLE_MOBILE_POSTER);

  useEffect(() => {
    if (!ENABLE_MOBILE_POSTER) return;
    const mql = window.matchMedia(query);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return isDesktop;
}
