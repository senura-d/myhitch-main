export const site = {
  name: "MYHitch",
  tagline: "Hitching the World Together — Digitally.",
  positioning: "One Platform. Unlimited Possibilities. Endless Connections.",
  region: "Australia",
  currencyDefault: "AUD",
  address: "Adelaide, South Australia",
  email: "hello@myhitch.com.au",
  year: 2026,
  // External commerce backend (WooCommerce). CTAs deep-link here until the
  // storefront is made headless via the Store API (see lib/commerce.ts).
  storeUrl: "https://myhitch.com.au/shop",
  passUrl: "https://myhitchpass.com.au",
  freeShippingThreshold: 49,
} as const;

export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
] as const;
