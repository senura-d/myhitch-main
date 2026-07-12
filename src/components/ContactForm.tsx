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
      <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-10 text-center shadow-md">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-slate-200/60 bg-slate-50 text-slate-800">
          <Check size={26} strokeWidth={3} />
        </span>
        <h2 className="font-display mt-4 text-2xl font-semibold text-slate-900">
          Message sent
        </h2>
        <p className="mt-2 text-slate-600">
          Thanks for reaching out — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-md sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" type="text" autoComplete="name" />
        <Field id="email" label="Email" type="email" autoComplete="email" />
      </div>
      <Field id="subject" label="Subject" type="text" />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
          placeholder="How can we help?"
        />
      </div>
      <button type="submit" className="w-full rounded-full border-2 border-slate-900 bg-slate-900 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800">
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-800">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
      />
    </div>
  );
}
