import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/faq";
import { cx } from "../lib/cx";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-charcoal/10 border-y border-charcoal/10">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-bold text-charcoal">{item.question}</span>
                <ChevronDown
                  className={cx(
                    "h-5 w-5 shrink-0 text-brand transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cx(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="min-h-0 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
