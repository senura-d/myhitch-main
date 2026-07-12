import type { Metadata } from "next";
import { ShieldCheck, Truck, Wallet, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketplaceHero from "@/components/MarketplaceHero";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { categories } from "@/content/categories";
import { site } from "@/content/site";
import SectionTransition from "@/components/motion/SectionTransition";

export const metadata: Metadata = {
  title: "Marketplace — MYHitch Mart",
  description:
    "Shop everything on MYHitch Mart — electronics, fashion, health & beauty, home & living, lifestyle and travel. Verified sellers, secure AUD payments.",
};

const trust = [
  { icon: ShieldCheck, label: "Verified sellers" },
  { icon: Wallet, label: "Secure AUD payments" },
  { icon: Truck, label: `Free shipping over $${site.freeShippingThreshold}` },
  { icon: Star, label: "Transparent reviews" },
];

const arts = [
  "linear-gradient(135deg,#1e5bff,#15346e)",
  "linear-gradient(135deg,#3b82f6,#0f2a5c)",
  "linear-gradient(135deg,#60a5fa,#1e5bff)",
  "linear-gradient(135deg,#22d3ee,#1e5bff)",
  "linear-gradient(135deg,#1e5bff,#0a1b3d)",
  "linear-gradient(135deg,#3b82f6,#15346e)",
];

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <MarketplaceHero />

        {/* Trust row */}
        <section className="mx-auto max-w-5xl px-5 pb-6 sm:px-8">
          <Reveal className="glass-soft flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4">
            {trust.map((t) => (
              <span
                key={t.label}
                className="flex items-center gap-2 text-sm font-medium text-frost-soft"
              >
                <t.icon size={16} className="text-blue-600" />
                {t.label}
              </span>
            ))}
          </Reveal>
        </section>

        {/* Categories */}
        <SectionTransition variant="slide" parallaxStrength={0.06}>
          <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
            <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c, i) => (
                <RevealItem key={c.name} id={c.href.split("#")[1]}>
                  <a
                    href={site.storeUrl}
                    className="group relative block h-60 overflow-hidden rounded-3xl shadow-lg"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      style={{ background: arts[i % arts.length] }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
                        <c.icon size={22} />
                      </span>
                      <div className="glass-soft px-4 py-3">
                        <h3 className="font-display font-semibold text-frost">
                          {c.name}
                        </h3>
                        <p className="text-xs text-slate-500">{c.blurb}</p>
                      </div>
                    </div>
                  </a>
                </RevealItem>
              ))}
            </Reveal>
          </section>
        </SectionTransition>

        {/* CTA */}
        <SectionTransition variant="lift" parallaxStrength={0.08}>
          <section className="mx-auto max-w-3xl px-5 py-12 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl">
                Ready to shop the ecosystem?
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={site.storeUrl}
                  className="btn btn-primary rounded-full px-7 py-4 text-base"
                >
                  Visit the store
                </a>
                <a
                  href="/partner"
                  className="btn btn-ghost rounded-full px-7 py-4 text-base"
                >
                  Sell on MYHitch
                </a>
              </div>
            </Reveal>
          </section>
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
