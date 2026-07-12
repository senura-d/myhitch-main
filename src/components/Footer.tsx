import Link from "next/link";
import { footerColumns } from "@/content/nav";
import { site, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative bg-section-white border-t border-slate-500/10">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <img
                src="/MYHitch-Logo-transparent-scaled-e1777265547150.png"
                alt="MYHitch Logo"
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span className="font-display text-base sm:text-lg font-semibold text-frost">{site.name}</span>
            </div>
            <p className="mt-3 sm:mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              {site.tagline} {site.positioning}
            </p>

            <form
              className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-slate-500/20 bg-slate-500/5 p-1.5"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-1.5 text-sm text-frost placeholder:text-slate-500/40 focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn-primary rounded-full px-4 py-2 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-frost">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-500 transition-colors hover:text-frost"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-frost">Connect</h3>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 transition-colors hover:text-frost"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-500/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {site.year} {site.name} {site.region}. All rights reserved.
          </p>
          <p>
            {site.address} · Prices in {site.currencyDefault} · Multi-language &amp;
            multi-currency
          </p>
        </div>
      </div>
    </footer>
  );
}
