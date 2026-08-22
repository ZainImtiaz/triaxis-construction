import { processSteps } from "../data/process";
import { Reveal } from "./Reveal";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 120} className="relative px-0 lg:px-6">
            {index < processSteps.length - 1 && (
              <div
                className="absolute right-0 top-8 hidden h-px w-full -translate-y-1/2 translate-x-1/2 bg-charcoal/15 lg:block"
                aria-hidden="true"
              />
            )}
            <div className="relative flex items-start gap-4 lg:flex-col lg:items-start lg:gap-0">
              <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-charcoal font-display text-lg font-bold text-brand">
                {step.number}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-display text-lg font-bold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
