import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Sparkles,
  Boxes,
  Rss,
  Zap,
  Wallet,
  Fingerprint,
  Languages,
} from "lucide-react";

export type Feature = {
  title: string;
  blurb: string;
  icon: LucideIcon;
  /** bento span hint */
  span?: "sm" | "md" | "lg";
};

export const features: Feature[] = [
  {
    title: "Unified Digital Access",
    blurb: "One account, one identity across all eight platforms — sign in once, connect to everything.",
    icon: LayoutGrid,
    span: "lg",
  },
  {
    title: "AI Intelligence",
    blurb: "Recommendations, insights and automation powered by machine learning at the core.",
    icon: Sparkles,
    span: "md",
  },
  {
    title: "Real-Time Supply Chain",
    blurb: "Live visibility from manufacturer to doorstep, end to end.",
    icon: Boxes,
    span: "md",
  },
  {
    title: "Activity Feed",
    blurb: "A living stream of orders, updates and moments across your ecosystem.",
    icon: Rss,
    span: "sm",
  },
  {
    title: "Smart Commerce Engine",
    blurb: "Listings, pricing and fulfilment that adapt automatically to demand.",
    icon: Zap,
    span: "md",
  },
  {
    title: "Secure Payments & Wallet",
    blurb: "Protected AUD payments, instant payouts and a wallet built for trust.",
    icon: Wallet,
    span: "md",
  },
  {
    title: "Digital Identity",
    blurb: "Verified, portable identity that keeps every interaction secure.",
    icon: Fingerprint,
    span: "sm",
  },
  {
    title: "Multi-Language & Multi-Currency",
    blurb: "Sell and shop globally — localised language and currency, built in.",
    icon: Languages,
    span: "lg",
  },
];
