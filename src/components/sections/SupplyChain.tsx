"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { chainNodes, capabilities } from "@/content/supplyChain";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

interface NodeProps {
  node: typeof chainNodes[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function ChainNode({ node, index, total, scrollYProgress }: NodeProps) {
  let triggerPoint = index / (total - 1);
  let startPoint = Math.max(0, (index - 0.7) / (total - 1));
  if (startPoint === triggerPoint) {
    startPoint = 0;
    triggerPoint = 0.05;
  }

  const opacity = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.85, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="relative z-10 flex flex-col items-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl border border-slate-200 bg-slate-100 text-black shadow-md backdrop-blur">
        <node.icon size={26} className="text-black" />
      </span>
      <span className="mt-3 text-sm font-semibold text-black">
        {node.label}
      </span>
      {index < total - 1 && (
        <ChevronRight
          size={18}
          className="absolute -right-3 top-5 text-slate-400"
          aria-hidden
        />
      )}
    </motion.div>
  );
}

function MobileChainNode({ node, index, total, scrollYProgress }: NodeProps) {
  let triggerPoint = index / (total - 1);
  let startPoint = Math.max(0, (index - 0.7) / (total - 1));
  if (startPoint === triggerPoint) {
    startPoint = 0;
    triggerPoint = 0.05;
  }

  const opacity = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.25, 1]);
  const scale = useTransform(scrollYProgress, [startPoint, triggerPoint], [0.88, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="relative z-10 flex items-center gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-black shadow">
        <node.icon size={20} className="text-black" />
      </span>
      <span className="text-base font-semibold text-black">
        {node.label}
      </span>
    </motion.div>
  );
}

export default function SupplyChain() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress specifically over the top section entering viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "start 35%"],
  });

  const activeLineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="cv-auto w-full bg-section-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center" stagger>
          <RevealItem>
            <p className="eyebrow">Intelligent Supply Chain</p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-frost sm:text-5xl">
              A network that <span className="text-gradient">moves as one</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-lg text-slate-500">
              Real-time visibility from the factory floor to the front door.
            </p>
          </RevealItem>
        </Reveal>

        {/* Flow */}
        <Reveal className="glass mt-14 p-6 sm:p-10">
          {/* Desktop: horizontal */}
          <div className="relative hidden items-center justify-between md:flex">
            {/* Background Line Track */}
            <div className="absolute left-8 right-8 top-8 h-[3px] bg-slate-200/40 rounded-full overflow-hidden">
              {/* Active Overlay Line */}
              <motion.div
                className="h-full bg-black origin-left"
                style={{ width: reduce ? "100%" : activeLineWidth }}
              />
            </div>

            {chainNodes.map((n, i) => (
              <ChainNode
                key={n.label}
                node={n}
                index={i}
                total={chainNodes.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="relative flex flex-col gap-6 md:hidden pl-2">
            {/* Vertical timeline track line */}
            <div className="absolute left-[1.75rem] top-6 bottom-6 w-[3px] bg-slate-200/40 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-black origin-top"
                style={{ height: reduce ? "100%" : activeLineWidth }}
              />
            </div>
            {chainNodes.map((n, i) => (
              <MobileChainNode
                key={n.label}
                node={n}
                index={i}
                total={chainNodes.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </Reveal>

        {/* Capability chips */}
        <Reveal
          stagger
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((c) => (
            <RevealItem key={c.title}>
              <div className="glass-soft flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 border border-slate-200 text-black">
                  <c.icon size={20} className="text-black" />
                </span>
                <div>
                  <h3 className="font-semibold text-black">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{c.blurb}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
