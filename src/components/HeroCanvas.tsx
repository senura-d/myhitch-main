"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-40 w-40 rounded-full bg-blue-500/25 blur-3xl animate-pulse" />
    </div>
  ),
});

export default function HeroCanvas() {
  return <HeroScene />;
}
