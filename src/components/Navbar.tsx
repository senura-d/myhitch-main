"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/nav";
import { site } from "@/content/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="MYHitch home">
      <img
        src="/MYHitch-Logo-transparent-scaled-e1777265547150.png"
        alt="MYHitch Logo"
        className="h-8 w-auto object-contain"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-black">
        {site.name}
      </span>
    </Link>
  );
}

function CurrencyToggle() {
  const [cur, setCur] = useState<"AUD" | "USD">("AUD");
  return (
    <button
      type="button"
      onClick={() => setCur((c) => (c === "AUD" ? "USD" : "AUD"))}
      className="rounded-lg px-2.5 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-black/5"
      aria-label={`Currency: ${cur}. Toggle currency`}
    >
      {cur}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center gap-4 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div
          className={`flex w-full items-center gap-4 rounded-2xl border border-white/40 bg-white/70 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "bg-white/80" : ""
          }`}
        >
          <Logo />

          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-black/80 transition-colors hover:text-navy-800"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <CurrencyToggle />
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2 text-sm font-medium text-black transition-colors hover:text-navy-800"
            >
              Sign in
            </Link>
            <a
              href={site.storeUrl}
              className="shiny-btn btn btn-primary rounded-full px-4 py-2 text-sm"
            >
              Start Selling
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ml-auto grid h-10 w-10 place-items-center rounded-xl text-black hover:bg-black/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile slide-over */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-900/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`glass absolute right-0 top-0 h-full w-[82%] max-w-sm rounded-l-3xl p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile"
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-xl text-frost-soft hover:bg-white/8"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-lg font-medium text-frost-soft hover:bg-white/8"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={site.storeUrl}
              className="btn btn-primary rounded-full px-5 py-3.5 text-base"
            >
              Start Selling
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-ghost rounded-full px-5 py-3.5 text-base"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
