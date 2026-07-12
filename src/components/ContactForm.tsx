"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to your backend / form service (e.g. /api/contact).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass flex flex-col items-center p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-blue-600/10 text-blue-600">
          <Check size={26} strokeWidth={3} />
        </span>
        <h2 className="font-display mt-4 text-2xl font-semibold text-frost">
          Message sent
        </h2>
        <p className="mt-2 text-slate-500">
          Thanks for reaching out — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass glass-sheen space-y-5 p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" type="text" autoComplete="name" />
        <Field id="email" label="Email" type="email" autoComplete="email" />
      </div>
      <Field id="subject" label="Subject" type="text" />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-frost-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-frost placeholder:text-slate-500/60 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
          placeholder="How can we help?"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full rounded-full px-6 py-3.5 text-base">
        Send message
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-frost-soft">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-frost placeholder:text-slate-500/60 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
      />
    </div>
  );
}
