"use client";

import { ArrowUpRight } from "lucide-react";
import { categories } from "@/content/categories";
import { site } from "@/content/site";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

const arts = [
  "linear-gradient(135deg,#02457A,#001B48)",
  "linear-gradient(135deg,#018ABE,#02457A)",
  "linear-gradient(135deg,#97CADB,#018ABE)",
  "linear-gradient(135deg,#D6E8EE,#02457A)",
  "linear-gradient(135deg,#001B48,#018ABE)",
  "linear-gradient(135deg,#02457A,#97CADB)",
];

export default function ShopCategories() {
  return (
    <section className="cv-auto w-full bg-section-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4" stagger>
          <div>
            <RevealItem>
              <p className="eyebrow text-slate-500">MYHitch Mart</p>
            </RevealItem>
            <RevealItem>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                Shop by <span className="text-gradient">category</span>
              </h2>
            </RevealItem>
          </div>
          <RevealItem>
            <a
              href={site.storeUrl}
              className="btn btn-ghost rounded-full px-5 py-3 text-sm border border-slate-200 hover:bg-slate-50"
            >
              Visit the marketplace
            </a>
          </RevealItem>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <RevealItem key={c.name}>
              <a
                href={c.href}
                className="group relative block h-56 overflow-hidden rounded-3xl border border-black/15 bg-white/40 backdrop-blur-md hover:bg-white/50 transition-all duration-300 shadow-md shadow-slate-200/80 hover:shadow-lg hover:shadow-slate-300/80 cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-black/10 border border-black/10 text-black">
                    <c.icon size={22} className="text-black" />
                  </span>
                  <div className="bg-black/5 rounded-2xl border border-black/5 flex items-center justify-between gap-3 px-4 py-3">
                    <div>
                      <h3 className="font-display font-semibold text-black">
                        {c.name}
                      </h3>
                      <p className="text-xs text-slate-800">{c.blurb}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </a>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
