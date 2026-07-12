import type { LucideIcon } from "lucide-react";
import {
  ShoppingBag,
  Plane,
  Ticket,
  Wrench,
  Truck,
  Newspaper,
  Network,
  HeartHandshake,
} from "lucide-react";

export type Platform = {
  name: string; // e.g. "Mart"
  full: string; // "MYHitch Mart"
  purpose: string; // short label
  blurb: string; // one-line benefit copy
  slug: string;
  href: string;
  icon: LucideIcon;
  live?: string; // live URL if the platform is already shipping
};

export const platforms: Platform[] = [
  {
    name: "Mart",
    full: "MYHitch Mart",
    purpose: "Shop Everything",
    blurb: "A borderless marketplace where thousands of sellers meet millions of buyers.",
    slug: "mart",
    href: "/platforms#mart",
    icon: ShoppingBag,
  },
  {
    name: "JetNRest",
    full: "MYHitch JetNRest",
    purpose: "Travel & Stay",
    blurb: "Flights, stays and experiences booked and paid in one connected wallet.",
    slug: "jetnrest",
    href: "/platforms#jetnrest",
    icon: Plane,
  },
  {
    name: "Pass",
    full: "MYHitch Pass",
    purpose: "Events & Tickets",
    blurb: "Discover, book and check in to live events with secure digital tickets.",
    slug: "pass",
    href: "/platforms#pass",
    icon: Ticket,
    live: "https://myhitchpass.com.au",
  },
  {
    name: "Connect",
    full: "MYHitch Connect",
    purpose: "Services & More",
    blurb: "Find trusted local services and book verified providers on demand.",
    slug: "connect",
    href: "/platforms#connect",
    icon: Wrench,
  },
  {
    name: "Transit",
    full: "MYHitch Transit",
    purpose: "Transport & Logistics",
    blurb: "Move goods and people with real-time tracking across the network.",
    slug: "transit",
    href: "/platforms#transit",
    icon: Truck,
  },
  {
    name: "Lens",
    full: "MYHitch Lens",
    purpose: "News & Media",
    blurb: "Stay informed with curated news and stories from across the ecosystem.",
    slug: "lens",
    href: "/platforms#lens",
    icon: Newspaper,
  },
  {
    name: "Nexus",
    full: "MYHitch Nexus",
    purpose: "Business Network",
    blurb: "Where businesses connect, trade and grow through one trusted network.",
    slug: "nexus",
    href: "/platforms#nexus",
    icon: Network,
  },
  {
    name: "Impact",
    full: "MYHitch Impact",
    purpose: "Impact & Community",
    blurb: "Give back and fund community causes that move Australia forward.",
    slug: "impact",
    href: "/platforms#impact",
    icon: HeartHandshake,
  },
];
