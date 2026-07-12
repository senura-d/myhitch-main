import type { Metadata } from "next";
import { Rocket, Wallet, LineChart, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { PricingCards } from "@/components/sections/MarketplaceCTA";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import SectionTransition from "@/components/motion/SectionTransition";

export const metadata: Metadata = {
  title: "Become a Partner — MYHitch",
  description:
    "Sell on MYHitch with zero upfront fees. Choose a 15% commission plan or a $36/year Shop Access plan. Vendor dashboard, secure AUD payouts and more.",
};

const value = [
  { icon: Rocket, title: "Launch in minutes", body: "Create your store, add products and go live the same day." },
  { icon: Wallet, title: "Secure AUD payouts", body: "Get paid safely with protected payments and a trusted wallet." },
  { icon: LineChart, title: "Grow with insight", body: "A vendor dashboard with sales, customer and forecast analytics." },
  { icon: Globe, title: "Reach further", body: "Sell across the ecosystem with multi-language, multi-currency support." },
];

const steps = [
  { n: "01", title: "Create your account", body: "Sign up free and verify your seller identity." },
  { n: "02", title: "List your products", body: "Add unlimited listings with rich media and variants." },
  { n: "03", title: "Choose your plan", body: "Pay 15% per sale, or $36/year to keep more of every sale." },
  { n: "04", title: "Start selling", body: "Go live and let the network connect you to buyers." },
];

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <PageHeader
          eyebrow="Become a Partner"
          title="Sell with"
          highlight="zero upfront fees."
          subtitle={`Join free, list unlimited products and reach buyers across Australia and beyond. Free shipping on orders over $${site.freeShippingThreshold}.`}
        />

        {/* Value props */}
        <SectionTransition variant="slide" parallaxStrength={0.05}>
          <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
            <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {value.map((v) => (
                <RevealItem key={v.title} className="h-full">
                  <div className="glass glass-sheen h-full p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-navy-800 text-white shadow-lg">
                      <v.icon size={22} />
                    </span>
                    <h3 className="font-display mt-4 text-lg font-semibold text-frost">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">{v.body}</p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </section>
        </SectionTransition>

        {/* Pricing */}
        <SectionTransition variant="lift" parallaxStrength={0.08}>
          <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
            <Reveal className="mb-10 text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl">
                Simple, fair pricing
              </h2>
              <p className="mt-3 text-slate-500">
                Two ways to sell. No hidden fees, ever.
              </p>
            </Reveal>
            <PricingCards />
          </section>
        </SectionTransition>

        {/* Onboarding steps */}
        <SectionTransition variant="iris">
          <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
            <Reveal className="mb-10 text-center">
              <p className="eyebrow">Onboarding</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-frost sm:text-4xl">
                Live in four steps
              </h2>
            </Reveal>
            <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <RevealItem key={s.n} className="h-full">
                  <div className="glass h-full p-6">
                    <span className="font-display text-3xl font-semibold text-blue-400">
                      {s.n}
                    </span>
                    <h3 className="font-display mt-3 text-lg font-semibold text-frost">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">{s.body}</p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
            <div className="mt-12 text-center">
              <a
                href={site.storeUrl}
                className="btn btn-primary rounded-full px-7 py-4 text-base"
              >
                Start selling free
              </a>
            </div>
          </section>
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
