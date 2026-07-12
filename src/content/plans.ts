export type Plan = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  perks: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Commission Plan",
    price: "15%",
    cadence: "per sale",
    summary: "Start selling with zero upfront fees — pay only when you sell.",
    perks: [
      "No monthly or annual cost",
      "Unlimited product listings",
      "Vendor dashboard & analytics",
      "Secure AUD payouts",
      "15% commission per completed sale",
    ],
    cta: "Start free",
  },
  {
    name: "Shop Access Plan",
    price: "$36",
    cadence: "AUD / year",
    summary: "Keep more of every sale with a flat annual membership.",
    perks: [
      "Unlimited product listings",
      "Full vendor dashboard",
      "Secure AUD payouts",
      "Lower per-sale costs",
      "Priority marketplace visibility",
    ],
    featured: true,
    cta: "Get Shop Access",
  },
];

export const commercialIntelligence: string[] = [
  "Sales Analytics",
  "Customer Insights",
  "Revenue Tracking",
  "Order Management",
  "Product Performance",
  "Marketing Performance",
  "Forecast Reports",
];
