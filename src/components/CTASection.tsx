import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}

export function CTASection({ eyebrow, title, description, image, imageAlt, children }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-28">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-charcoal/75" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        {eyebrow && (
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
        <div className="mt-9 flex justify-center">{children}</div>
      </Reveal>
    </section>
  );
}
