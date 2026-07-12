import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Shirt,
  Sparkle,
  Sofa,
  Gift,
  Mountain,
} from "lucide-react";

export type Category = {
  name: string;
  blurb: string;
  icon: LucideIcon;
  href: string;
};

export const categories: Category[] = [
  { name: "Electronics & Gadgets", blurb: "Latest tech, verified sellers.", icon: Smartphone, href: "/marketplace#electronics" },
  { name: "Fashion & Accessories", blurb: "Style for every occasion.", icon: Shirt, href: "/marketplace#fashion" },
  { name: "Health & Beauty", blurb: "Look good, feel better.", icon: Sparkle, href: "/marketplace#health-beauty" },
  { name: "Home & Living", blurb: "Everything that makes a home.", icon: Sofa, href: "/marketplace#home-living" },
  { name: "Lifestyle & Gifts", blurb: "Thoughtful finds for anyone.", icon: Gift, href: "/marketplace#lifestyle-gifts" },
  { name: "Travel & Outdoor", blurb: "Gear up for the great outdoors.", icon: Mountain, href: "/marketplace#travel-outdoor" },
];
