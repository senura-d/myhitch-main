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

        {/* Categories Section (White Backdrop) */}
        <section className="w-full bg-[#f8fafc] border-y border-slate-200/50 py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            
            {/* Trust row (Light version) */}
            <div className="mb-8 sm:mb-12 flex justify-center">
              <Reveal className="bg-white border border-slate-200/80 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 px-4 sm:px-6 py-3 sm:py-4 rounded-3xl shadow-sm">
                {trust.map((t) => (
                  <span
                    key={t.label}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-800"
                  >
                    <t.icon size={16} className="text-blue-600" />
                    {t.label}
                  </span>
                ))}
              </Reveal>
            </div>

            {/* Category Cards (White Cards, Black Text) */}
            <SectionTransition variant="slide" parallaxStrength={0.06}>
              <Reveal stagger className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((c) => (
                  <RevealItem key={c.name} id={c.href.split("#")[1]}>
                    <a
                      href={site.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block h-48 sm:h-60 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300"
                    >
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100/50">
                          <c.icon size={22} />
                        </span>
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/30">
                          <h3 className="font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {c.name}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1 font-medium">{c.blurb}</p>
                        </div>
                      </div>
                    </a>
                  </RevealItem>
                ))}
              </Reveal>
            </SectionTransition>

          </div>
        </section>

        {/* CTA */}
        <SectionTransition variant="lift" parallaxStrength={0.08}>
          <section className="mx-auto max-w-3xl px-5 py-10 sm:py-12 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-frost">
                Ready to shop the ecosystem?
              </h2>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <a
                  href={site.storeUrl}
                  className="btn btn-primary rounded-full px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base text-center"
                >
                  Visit the store
                </a>
                <a
                  href="/partner"
                  className="btn btn-ghost rounded-full px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base text-center"
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
