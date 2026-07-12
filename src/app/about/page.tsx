import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import WhoWeServe from "@/components/sections/WhoWeServe";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import SectionTransition from "@/components/motion/SectionTransition";

export const metadata: Metadata = {
  title: "About — MYHitch",
  description:
    "MYHitch is Australia's digital commerce and supply-chain ecosystem, built in Adelaide to hitch the world together, digitally.",
};

const stats = [
  ["8", "connected platforms"],
  ["1", "unified account"],
  ["AUD", "secure payments"],
  ["∞", "possibilities"],
];

const timeline = [
  { year: "The idea", body: "One question: what if commerce, travel, events and logistics spoke the same language?" },
  { year: "The build", body: "We built an ecosystem in Adelaide — eight platforms on one connected core." },
  { year: "The launch", body: "MYHitch Pass goes live, connecting people to events with secure digital tickets." },
  { year: "The future", body: "A global network where every business and community is hitched together, digitally." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <AboutHero />

        {/* Mission */}
        <SectionTransition variant="slide" parallaxStrength={0.06}>
          <section className="w-full bg-[#f8fafc]">
            <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
              <Reveal className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-md sm:p-12">
                <p className="font-display text-2xl font-medium leading-relaxed text-slate-900 sm:text-3xl">
                  We&apos;re building the connective tissue of the digital economy — an
                  ecosystem that links products, people, businesses and
                  communities into one seamless experience.
                </p>
                <p className="mt-6 text-slate-600">
                  From shopping and travel to events, services and logistics, MYHitch
                  brings everything into a single, trusted platform — powered by AI, a
                  real-time supply chain and secure AUD payments. One account. Endless
                  connections.
                </p>
              </Reveal>
            </div>
          </section>
        </SectionTransition>

        {/* Stats */}
        <SectionTransition variant="lift" parallaxStrength={0.08}>
          <section className="w-full bg-white">
            <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
              <Reveal stagger className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                {stats.map(([v, k]) => (
                  <RevealItem key={k}>
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-md">
                      <p className="font-display text-4xl font-semibold text-slate-900">
                        {v}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{k}</p>
                    </div>
                  </RevealItem>
                ))}
              </Reveal>
            </div>
          </section>
        </SectionTransition>

        {/* Timeline */}
        <SectionTransition variant="iris">
          <section className="w-full bg-[#f8fafc]">
            <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
              <Reveal className="mb-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Our Story</p>
                <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  From one idea to an ecosystem
                </h2>
              </Reveal>
              <Reveal stagger className="space-y-4">
                {timeline.map((t) => (
                  <RevealItem key={t.year}>
                    <div className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md sm:flex-row sm:gap-8">
                      <span className="font-display w-40 shrink-0 text-lg font-semibold text-blue-600">
                        {t.year}
                      </span>
                      <p className="text-slate-600">{t.body}</p>
                    </div>
                  </RevealItem>
                ))}
              </Reveal>
            </div>
          </section>
        </SectionTransition>

        <SectionTransition variant="slide" parallaxStrength={0.07}>
          <WhoWeServe />
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
