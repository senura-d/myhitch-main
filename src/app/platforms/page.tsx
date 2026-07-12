import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformsHero from "@/components/platforms/PlatformsHero";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { platforms } from "@/content/platforms";
import { site } from "@/content/site";
import { Check } from "lucide-react";
import { 
  MartVisual, JetNRestVisual, PassVisual, ConnectVisual, 
  TransitVisual, LensVisual, NexusVisual, ImpactVisual 
} from "@/components/platforms/PlatformVisuals";

export const metadata: Metadata = {
  title: "Platforms — MYHitch",
  description:
    "Explore the eight platforms of the MYHitch ecosystem: Mart, JetNRest, Pass, Connect, Transit, Lens, Nexus and Impact.",
};

const visualMap: Record<string, (props: { isLight?: boolean }) => React.JSX.Element> = {
  mart: MartVisual,
  jetnrest: JetNRestVisual,
  pass: PassVisual,
  connect: ConnectVisual,
  transit: TransitVisual,
  lens: LensVisual,
  nexus: NexusVisual,
  impact: ImpactVisual,
};

const platformFeatures: Record<string, string[]> = {
  mart: [
    "Direct-to-consumer store setups",
    "Integrated digital payments (AUD)",
    "AI recommendation engine"
  ],
  jetnrest: [
    "Unified booking for flights & hotels",
    "No-fee itinerary modifications",
    "Integrated travel wallet checkouts"
  ],
  pass: [
    "Holographic, tamper-proof tickets",
    "Instant peer-to-peer secure resale",
    "Gate check-in QR code generator"
  ],
  connect: [
    "Verified local provider profiles",
    "Smart escrow transaction security",
    "On-demand emergency booking"
  ],
  transit: [
    "End-to-end supply-chain tracing",
    "Live GPS dispatching map feeds",
    "Cold-chain temperature logging"
  ],
  lens: [
    "Curated industry insights & news",
    "Community creator blogging tools",
    "Daily business market digests"
  ],
  nexus: [
    "Smart automated invoice factoring",
    "Direct wholesale supplier trade",
    "Multi-party contract signing"
  ],
  impact: [
    "Zero-fee donation routing",
    "Verified local community causes",
    "Real-time project funding trackers"
  ],
};

export default function PlatformsPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        {/* Section 1: Blue Hero Section */}
        <PlatformsHero />

        {/* Section Loop: 2 (Mart: White), 3 (JetNRest: Blue), 4 (Pass: White), ... */}
        {platforms.map((p, i) => {
          const VisualComponent = visualMap[p.slug];
          const features = platformFeatures[p.slug] || [];
          
          // Alternating section colors: Even indices (Mart, Pass, Transit, Nexus) are white, Odd (JetNRest, Connect, Lens, Impact) are blue
          const isEven = i % 2 === 0;
          const sectionTheme = isEven ? "bg-section-white" : "bg-section-blue";

          return (
            <section
              key={p.slug}
              id={p.slug}
              className={`w-full py-12 sm:py-16 md:py-24 transition-colors duration-300 ${sectionTheme}`}
            >
              <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-8 sm:gap-12 md:grid-cols-12 items-center">
                {/* Visual Panel */}
                <div className={`col-span-12 md:col-span-6 flex justify-center ${!isEven ? "md:order-1" : "md:order-2"}`}>
                  <Reveal y={50} className="w-full flex justify-center">
                    {VisualComponent ? <VisualComponent isLight={isEven} /> : <div className="h-[340px] w-full bg-slate-800 rounded-2xl" />}
                  </Reveal>
                </div>

                {/* Text Content */}
                <div className={`col-span-12 md:col-span-6 space-y-6 ${!isEven ? "md:order-2" : "md:order-1"}`}>
                  <Reveal stagger className="space-y-4">
                    <RevealItem>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border shadow-md ${
                          isEven ? "bg-white/40 border-black/15 text-black" : "bg-[#02457A] border-slate-500/10 text-white"
                        }`}>
                          <p.icon size={22} className={isEven ? "text-black" : "text-[#D6E8EE]"} />
                        </span>
                        <div>
                          <p className={`text-xs font-semibold uppercase tracking-wider ${isEven ? "text-slate-500" : "text-slate-400"}`}>
                            {p.purpose}
                          </p>
                          <h2 className={`font-display text-2xl font-semibold mt-0.5 ${isEven ? "text-black" : "text-frost"}`}>
                            {p.full}
                          </h2>
                        </div>
                        {p.live && (
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                            isEven ? "bg-emerald-50 border border-emerald-200 text-emerald-700" : "bg-[#02457A]/10 border border-[#02457A]/20 text-[#02457A]"
                          }`}>
                            <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${isEven ? "bg-emerald-600" : "bg-[#02457A]"}`} />
                            Live now
                          </span>
                        )}
                      </div>
                    </RevealItem>

                    <RevealItem>
                      <p className={`text-base leading-relaxed ${isEven ? "text-slate-700" : "text-slate-400"}`}>
                        {p.blurb}
                      </p>
                    </RevealItem>

                    {/* Bullet Features list */}
                    <RevealItem>
                      <ul className="space-y-2.5 pt-2">
                        {features.map((f, idx) => (
                          <li key={idx} className={`flex items-start gap-2.5 text-sm ${isEven ? "text-slate-800" : "text-slate-400"}`}>
                            <span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                              isEven ? "bg-black/10 border-black/15 text-black" : "bg-[#02457A]/10 border border-[#02457A]/20 text-[#02457A]"
                            }`}>
                              <Check size={10} strokeWidth={3} />
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </RevealItem>

                    {/* CTA Action */}
                    <RevealItem className="pt-4">
                      <div className="flex items-center gap-3">
                        {p.live ? (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary rounded-full px-5 py-3 text-sm cursor-pointer"
                          >
                            Visit {p.name}
                          </a>
                        ) : (
                          <span className={`btn cursor-default rounded-full px-5 py-3 text-sm ${
                            isEven ? "bg-black/5 text-black/60 border border-black/10" : "btn-ghost opacity-60"
                          }`}>
                            Coming soon
                          </span>
                        )}
                      </div>
                    </RevealItem>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}

        {/* Section 10: White Background Footer CTA Section */}
        <section className="w-full py-14 sm:py-20 text-center bg-section-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="bg-slate-500/10 border border-black/10 shadow-md p-6 sm:p-8 md:p-12 max-w-3xl mx-auto space-y-5 sm:space-y-6 rounded-3xl backdrop-blur-md">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-black">
                Ready to explore Australia&apos;s intelligent marketplace?
              </h2>
              <p className="text-slate-800 max-w-xl mx-auto text-sm sm:text-base">
                Take part in a unified network. Buy, sell, trade and build community on one secure framework.
              </p>
              <div className="pt-2">
                <a
                  href={site.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                >
                  Explore the Marketplace
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
