"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { platforms } from "@/content/platforms";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import TiltCard from "@/components/motion/TiltCard";
import { MagicCard } from "@/components/magicui/MagicCard";

export default function PlatformCards() {
  return (
    <section className="cv-auto w-full bg-section-blue py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Centered Header Section */}
        <Reveal className="mx-auto max-w-2xl text-center" stagger>
          <RevealItem>
            <p className="eyebrow">The Ecosystem</p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-frost sm:text-5xl">
              Eight platforms.{" "}
              <span className="text-gradient">One connection.</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-lg text-slate-500">
              Every part of everyday life — shopping, travel, events, services and
              logistics — hitched together in a single, intelligent network.
            </p>
          </RevealItem>
        </Reveal>

        {/* Platform Cards Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <Reveal key={p.slug} y={0} className="h-full">
              <Link
                href={p.href}
                className="bg-white/30 backdrop-blur-md hover:bg-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl group flex h-[290px] flex-col p-6 cursor-pointer border border-white/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white shadow-lg border border-white/20">
                  <p.icon size={22} className="text-white" />
                </span>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {p.name}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  {p.purpose}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70 flex-1">
                  {p.blurb}
                </p>
                {p.live ? (
                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-xs font-semibold text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    Live now
                  </span>
                ) : (
                  // Spacer to keep card heights identical when there is no badge
                  <div className="h-6 mt-3" />
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
