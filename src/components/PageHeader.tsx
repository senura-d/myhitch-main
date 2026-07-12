import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-6 pt-28 sm:pt-36 text-center sm:px-8 lg:pt-44">
      <Reveal stagger>
        <RevealItem>
          <p className="eyebrow">{eyebrow}</p>
        </RevealItem>
        <RevealItem>
          <h1 className="font-display mt-3 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-frost">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
        </RevealItem>
        {subtitle && (
          <RevealItem>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-slate-500">
              {subtitle}
            </p>
          </RevealItem>
        )}
      </Reveal>
    </section>
  );
}
