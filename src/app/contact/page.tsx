import type { Metadata } from "next";
import { MapPin, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { site, socials } from "@/content/site";
import SectionTransition from "@/components/motion/SectionTransition";

export const metadata: Metadata = {
  title: "Contact — MYHitch",
  description:
    "Get in touch with the MYHitch team in Adelaide, South Australia. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <ContactHero />

        <SectionTransition variant="slide" parallaxStrength={0.05}>
          <section
            id="contact-form"
            className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-5"
          >
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>

            <Reveal className="space-y-5 lg:col-span-2">
              <div className="glass p-7">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-blue-600">
                      <MapPin size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-frost">Head office</p>
                      <p className="text-sm text-slate-500">{site.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-blue-600">
                      <Mail size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-frost">Email</p>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-blue-600">
                      <Clock size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-frost">Hours</p>
                      <p className="text-sm text-slate-500">Mon–Fri, 9am–5pm ACST</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass p-7">
                <p className="font-semibold text-frost">Follow along</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-blue-600/20 bg-white/60 px-4 py-2 text-sm font-medium text-frost-soft transition-colors hover:text-blue-600"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
