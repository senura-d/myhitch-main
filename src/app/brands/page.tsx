import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Brands — MYHitch",
  description:
    "Meet the brands and partners building on the MYHitch ecosystem.",
};

// Placeholder wordmarks — swap for real partner logos when available.
const brands = [
  "Lumen", "Northstar", "Vaults", "Metric", "Harbor", "Aster",
  "Cobalt", "Meridian", "Halcyon", "Vertex", "Orbit", "Solace",
];

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <PageHeader
          eyebrow="Brands & Partners"
          title="Built by brands who"
          highlight="connect."
          subtitle="From independent sellers to established names, thousands of brands grow on the MYHitch ecosystem."
        />

        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <Reveal
            stagger
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {brands.map((b) => (
              <RevealItem key={b}>
                <div className="glass glass-sheen grid h-28 place-items-center p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="font-display text-xl font-semibold tracking-tight text-frost-soft/70">
                    {b}
                  </span>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-10 sm:py-12 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-frost">
              Put your brand on the network
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-slate-500">
              Join the ecosystem and reach buyers across commerce, travel, events
              and more.
            </p>
            <a
              href={site.storeUrl}
              className="btn btn-primary mt-6 sm:mt-8 inline-flex rounded-full px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base"
            >
              Become a Partner
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
