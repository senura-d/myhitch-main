export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Platforms", href: "/platforms" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Become a Partner", href: "/partner" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Ecosystem",
    links: [
      { label: "MYHitch Mart", href: "/platforms#mart" },
      { label: "MYHitch JetNRest", href: "/platforms#jetnrest" },
      { label: "MYHitch Pass", href: "/platforms#pass" },
      { label: "MYHitch Connect", href: "/platforms#connect" },
      { label: "MYHitch Transit", href: "/platforms#transit" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Brands", href: "/brands" },
      { label: "Become a Partner", href: "/partner" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "MYHitch Lens", href: "/platforms#lens" },
      { label: "MYHitch Nexus", href: "/platforms#nexus" },
      { label: "MYHitch Impact", href: "/platforms#impact" },
    ],
  },
];
