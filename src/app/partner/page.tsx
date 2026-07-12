import type { Metadata } from "next";
import { Rocket, Wallet, LineChart, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerHero from "@/components/PartnerHero";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import SectionTransition from "@/components/motion/SectionTransition";

export const metadata: Metadata = {
  title: "Become a Partner — MYHitch",
  description:
    "Sell on MYHitch with zero upfront fees. Access your vendor dashboard, secure AUD payouts, and reach buyers across the ecosystem.",
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
  { n: "03", title: "Set up payouts", body: "Connect your bank details for secure, automated AUD payouts." },
  { n: "04", title: "Start selling", body: "Go live and let the network connect you to buyers." },
];

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <PartnerHero />

        {/* Value props */}
        <SectionTransition variant="slide" parallaxStrength={0.05}>
          <section className="w-full bg-[#f8fafc]">
            <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 sm:px-8">
              <Reveal stagger className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {value.map((v) => (
                  <RevealItem key={v.title} className="h-full">
                    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition hover:shadow-lg">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200/60 bg-slate-50 text-slate-800">
                        <v.icon size={22} />
                      </span>
                      <h3 className="font-display mt-4 text-lg font-semibold text-slate-900">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{v.body}</p>
                    </div>
                  </RevealItem>
                ))}
              </Reveal>
            </div>
          </section>
        </SectionTransition>

        {/* Onboarding steps */}
        <SectionTransition variant="iris">
          <section id="onboarding" className="w-full bg-[#f8fafc] border-t border-slate-200/60">
            <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14 sm:px-8">
              <Reveal className="mb-8 sm:mb-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Onboarding</p>
                <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Live in four steps
                </h2>
              </Reveal>
              <Reveal stagger className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((s) => (
                  <RevealItem key={s.n} className="h-full">
                    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition hover:shadow-lg">
                      <span className="font-display text-3xl font-semibold text-blue-600">
                        {s.n}
                      </span>
                      <h3 className="font-display mt-3 text-lg font-semibold text-slate-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                    </div>
                  </RevealItem>
                ))}
              </Reveal>
              <div className="mt-10 sm:mt-12 text-center">
                <a
                  href={site.storeUrl}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-slate-900 px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Start selling free
                </a>
              </div>
            </div>
          </section>
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
