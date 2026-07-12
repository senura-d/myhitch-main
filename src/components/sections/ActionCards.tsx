"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Handshake,
  Plane,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";

const cards = [
  {
    icon: ShoppingBag,
    eyebrow: "MYHitch Mart",
    title: "Start Selling Today",
    description:
      "List your products, reach buyers across Australia, and get paid securely — zero upfront fees, ever.",
    badge: "Free to join",
    badgeColor: "text-white bg-white/10 border-white/20",
    accent: "from-white/40 to-white/10",
    href: site.storeUrl,
    cta: "Open your store",
    ctaStyle: "primary",
    stats: [
      { icon: TrendingUp, label: "Avg. seller growth", value: "+34%" },
      { icon: Globe, label: "Buyers reached", value: "500K+" },
    ],
    featured: true,
  },
  {
    icon: Handshake,
    eyebrow: "Partnership",
    title: "Become a Partner",
    description:
      "Integrate your brand into the MYHitch ecosystem and unlock a network of loyal, connected customers.",
    badge: "Apply now",
    badgeColor: "text-white bg-white/10 border-white/20",
    accent: "from-white/40 to-white/10",
    href: "/partner",
    cta: "Partner with us",
    ctaStyle: "ghost",
    stats: [],
    featured: false,
  },
  {
    icon: Plane,
    eyebrow: "JetNRest",
    title: "Book Travel & Stays",
    description:
      "Flights, hotels, and experiences — all hitched together with your shopping and rewards in one place.",
    badge: "Coming soon",
    badgeColor: "text-white bg-white/10 border-white/20",
    accent: "from-white/40 to-white/10",
    href: "/platforms#jetnrest",
    cta: "Explore JetNRest",
    ctaStyle: "ghost",
    stats: [],
    featured: false,
  },
];

export default function ActionCards() {
  return (
    <section className="cv-auto w-full bg-section-blue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center" stagger>
          <RevealItem>
            <p className="eyebrow text-white/80">Get Started</p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Your next move,{" "}
              <span className="text-gradient">made simple.</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70">
              Whether you&apos;re selling, partnering, or exploring — MYHitch
              has a place for you.
            </p>
          </RevealItem>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
          {cards.map((card) => (
            <Reveal key={card.title} y={0} className="h-full">
              <Card
                className={`
                  relative h-full overflow-hidden border border-white/15 rounded-[1.25rem] bg-white/30 backdrop-blur-md hover:bg-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col pt-7
                  ${card.featured ? "ring-2 ring-white/35" : ""}
                `}
              >
                {/* Gradient accent bar at top */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`}
                />

                <CardHeader className="pt-0">
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 border border-white/20 shadow-md text-white"
                    >
                      <card.icon size={22} className="text-white" />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${card.badgeColor}`}
                    >
                      <Sparkles size={10} />
                      {card.badge}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="eyebrow text-white/80">{card.eyebrow}</p>
                    <CardTitle className="mt-1.5 font-display text-xl font-semibold text-white">
                      {card.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="text-sm leading-relaxed text-white/80">
                    {card.description}
                  </CardDescription>

                  {/* Stats (featured only) */}
                  {card.stats.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {card.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                        >
                          <stat.icon
                            size={14}
                            className="mx-auto mb-1 text-white/80"
                          />
                          <p className="font-display text-lg font-semibold text-white">
                            {stat.value}
                          </p>
                          <p className="mt-0.5 text-xs text-white/60">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="border-t border-white/10 bg-transparent pt-4 mt-4">
                  {card.ctaStyle === "primary" ? (
                    <Link href={card.href} className="w-full">
                      <Button
                        className="w-full cursor-pointer rounded-full bg-white hover:bg-slate-100 py-5 text-sm font-semibold text-[#001B48] shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                      >
                        {card.cta}
                        <ArrowRight size={15} />
                      </Button>
                    </Link>
                  ) : (
                    <Link href={card.href} className="w-full">
                      <Button
                        variant="ghost"
                        className="w-full cursor-pointer rounded-full border border-white/15 bg-white/5 py-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                      >
                        {card.cta}
                        <ArrowRight size={15} />
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur sm:flex-row sm:text-left">
            <p className="text-sm text-white/70">
              Not sure where to start?{" "}
              <span className="font-medium text-white">
                Our team is here to help.
              </span>
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="shrink-0 cursor-pointer rounded-full border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:border-white/40 hover:bg-white/8"
              >
                Talk to us
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
