"use client";

import { useEffect, useState } from "react";

const countries = [
  { code: "AUS", name: "Australia", flag: "🇦🇺", currency: "AUD" },
  { code: "USA", name: "United States", flag: "🇺🇸", currency: "USD" },
  { code: "GBR", name: "United Kingdom", flag: "🇬🇧", currency: "GBP" },
  { code: "NZL", name: "New Zealand", flag: "🇳🇿", currency: "NZD" },
];

export default function CountrySelector() {
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleClose = () => setOpen(false);
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, [open]);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="flex items-center gap-1.5 rounded-lg border border-black/15 bg-white px-3 py-1.5 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-black/5"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-black font-semibold">{selected.code}</span>
        <svg
          className={`h-4 w-4 text-black/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-black/15 bg-white p-1.5 shadow-xl z-50">
          <div className="space-y-0.5">
            {countries.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  setSelected(c);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors hover:bg-black/5 ${
                  selected.code === c.code ? "text-[#001B48] bg-slate-100 font-bold" : "text-slate-800"
                }`}
              >
                <span className="text-base leading-none">{c.flag}</span>
                <span className="flex-1">{c.name}</span>
                <span className={`text-xs font-mono ${selected.code === c.code ? "text-[#018ABE]" : "text-slate-500"}`}>{c.currency}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
