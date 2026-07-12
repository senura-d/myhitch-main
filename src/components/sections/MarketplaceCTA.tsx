"use client";

import { site } from "@/content/site";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function MarketplaceCTA() {
  return (
    <section id="sell" className="cv-auto w-full bg-section-white py-16 sm:py-24 relative overflow-hidden">
      {/* Side background decorative elements to fill empty space */}
      <div className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        {/* Left decoration */}
        <div className="hidden lg:flex absolute left-8 xl:left-24 top-1/2 -translate-y-1/2 flex-col items-center opacity-30 xl:opacity-55 transition-all">
          <div className="h-14 w-14 rounded-full border border-black/10 bg-slate-500/10 flex items-center justify-center text-black/40 shadow-sm backdrop-blur-sm animate-bounce" style={{ animationDuration: '6s' }}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
          </div>
          <span className="mt-3 text-[10px] font-bold tracking-[0.25em] text-black/35 uppercase">Sell</span>
        </div>

        {/* Right decoration */}
        <div className="hidden lg:flex absolute right-8 xl:right-24 top-1/2 -translate-y-1/2 flex-col items-center opacity-30 xl:opacity-55 transition-all">
          <div className="h-14 w-14 rounded-full border border-black/10 bg-slate-500/10 flex items-center justify-center text-black/40 shadow-sm backdrop-blur-sm animate-bounce" style={{ animationDuration: '8s' }}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
          </div>
          <span className="mt-3 text-[10px] font-bold tracking-[0.25em] text-black/35 uppercase">Grow</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center" stagger>
          <RevealItem>
            <p className="eyebrow text-slate-500">Become a Seller</p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-black">
              Start selling with{" "}
              <span className="text-gradient">zero upfront fees</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
              Join free and reach buyers across the ecosystem. Free shipping on
              orders over ${site.freeShippingThreshold}.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-14 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto px-2 sm:px-4">
            <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-semibold text-black">
              Ready to grow with MYHitch?
            </h3>
            <p className="mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-lg">
              Set up your store in minutes, get paid securely in AUD, and let the
              network do the connecting.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <a
                href={site.storeUrl}
                className="btn btn-primary px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-center"
              >
                Start selling free
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
