import type { LucideIcon } from "lucide-react";
import { User, Building2, Briefcase, Landmark, HeartHandshake } from "lucide-react";

export type Audience = { name: string; blurb: string; icon: LucideIcon };

export const audiences: Audience[] = [
  { name: "Consumers", blurb: "Shop, travel, pay and connect — all in one place.", icon: User },
  { name: "Businesses", blurb: "Reach new markets with intelligent commerce tools.", icon: Building2 },
  { name: "Service Providers", blurb: "Get discovered and booked by ready customers.", icon: Briefcase },
  { name: "Governments", blurb: "Digital infrastructure for services at scale.", icon: Landmark },
  { name: "NGOs & Communities", blurb: "Mobilise support and drive real-world impact.", icon: HeartHandshake },
];
