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
          <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
            <Reveal className="glass glass-sheen p-8 sm:p-12">
              <p className="font-display text-2xl font-medium leading-relaxed text-frost sm:text-3xl">
                We&apos;re building the connective tissue of the digital economy — an
                ecosystem that links products, people, businesses and
                communities into one seamless experience.
              </p>
              <p className="mt-6 text-slate-500">
                From shopping and travel to events, services and logistics, MYHitch
                brings everything into a single, trusted platform — powered by AI, a
                real-time supply chain and secure AUD payments. One account. Endless
                connections.
              </p>
            </Reveal>
          </section>
        </SectionTransition>

        {/* Stats */}
        <SectionTransition variant="lift" parallaxStrength={0.08}>
          <section className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
            <Reveal stagger className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map(([v, k]) => (
                <RevealItem key={k}>
                  <div className="glass-soft p-6 text-center">
                    <p className="font-display text-4xl font-semibold text-frost">
                      {v}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{k}</p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </section>
        </SectionTransition>

        {/* Timeline */}
        <SectionTransition variant="iris">
          <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
            <Reveal className="mb-10 text-center">
              <p className="eyebrow">Our Story</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-frost sm:text-4xl">
                From one idea to an ecosystem
              </h2>
            </Reveal>
            <Reveal stagger className="space-y-4">
              {timeline.map((t) => (
                <RevealItem key={t.year}>
                  <div className="glass flex flex-col gap-2 p-6 sm:flex-row sm:gap-8">
                    <span className="font-display w-40 shrink-0 text-lg font-semibold text-blue-400">
                      {t.year}
                    </span>
                    <p className="text-slate-500">{t.body}</p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
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
