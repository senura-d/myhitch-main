"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { commercialIntelligence } from "@/content/plans";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

const bars = [42, 58, 47, 70, 63, 84, 96];
const line = [30, 42, 38, 55, 60, 72, 88];

function Dashboard() {
  const reduce = useReducedMotion();
  const W = 320;
  const H = 120;
  const max = 100;
  const step = W / (line.length - 1);
  const points = line
    .map((v, i) => `${i * step},${H - (v / max) * H}`)
    .join(" ");

  return (
    <div className="bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600">Revenue (30 days)</p>
          <p className="font-display text-2xl font-semibold text-black">
            $184,920
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-sm font-semibold text-emerald-700">
          <TrendingUp size={14} /> +18.4%
        </span>
      </div>

      {/* Bar chart */}
      <div className="mt-6 flex h-28 items-end gap-2.5">
        {bars.map((b, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-black to-slate-700"
            style={{ transformOrigin: "bottom", height: `${b}%` }}
            initial={{ scaleY: reduce ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.06, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Sparkline */}
      <div className="mt-6 border-t border-slate-200/60 pt-4">
        <p className="mb-2 text-sm text-slate-600">Forecast trend</p>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-20 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ciFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.polyline
            fill="none"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <polygon points={`${points} ${W},${H} 0,${H}`} fill="url(#ciFill)" />
        </svg>
      </div>
    </div>
  );
}

export default function CommercialIntelligence() {
  return (
    <section className="cv-auto w-full bg-section-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal stagger>
            <RevealItem>
              <p className="eyebrow text-slate-500">Commercial Intelligence</p>
            </RevealItem>
            <RevealItem>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
                Make smarter decisions.
                <br />
                <span className="text-gradient">Grow faster. Scale globally.</span>
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 max-w-lg text-lg text-slate-600">
                Give your business a live command centre — every sale, customer and
                forecast in one intelligent dashboard.
              </p>
            </RevealItem>
            <RevealItem>
              <ul className="mt-6 grid max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2">
                {commercialIntelligence.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 text-sm font-medium text-slate-800"
                  >
                    <ArrowUpRight size={16} className="text-black" />
                    {c}
                  </li>
                ))}
              </ul>
            </RevealItem>
            <RevealItem>
              <a
                href="/partner"
                className="btn btn-primary mt-8 inline-flex rounded-full px-6 py-3.5 text-base cursor-pointer"
              >
                Grow with MYHitch
              </a>
            </RevealItem>
          </Reveal>

          <Reveal>
            <Parallax speed={0.16}>
              <Dashboard />
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
