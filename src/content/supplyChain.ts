import type { LucideIcon } from "lucide-react";
import {
  Factory,
  PackageOpen,
  Warehouse,
  Truck,
  Store,
  Users,
  TrendingUp,
  Eye,
  Route,
  Handshake,
  ShieldAlert,
  BarChart3,
} from "lucide-react";

export type ChainNode = { label: string; icon: LucideIcon };
export type Capability = { title: string; blurb: string; icon: LucideIcon };

export const chainNodes: ChainNode[] = [
  { label: "Manufacturers", icon: Factory },
  { label: "Suppliers", icon: PackageOpen },
  { label: "Warehouses", icon: Warehouse },
  { label: "Logistics", icon: Truck },
  { label: "Retailers", icon: Store },
  { label: "Customers", icon: Users },
];

export const capabilities: Capability[] = [
  { title: "Demand Forecasting", blurb: "Predict what sells, before it sells.", icon: TrendingUp },
  { title: "Inventory Visibility", blurb: "See every unit, everywhere, in real time.", icon: Eye },
  { title: "Logistics Optimization", blurb: "Smarter routes, faster delivery, lower cost.", icon: Route },
  { title: "Supplier Collaboration", blurb: "Work as one across the whole network.", icon: Handshake },
  { title: "Risk Management", blurb: "Spot and mitigate disruption early.", icon: ShieldAlert },
  { title: "Performance Analytics", blurb: "Measure, learn and improve continuously.", icon: BarChart3 },
];
