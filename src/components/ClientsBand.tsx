import { Building } from "lucide-react";
import { clients } from "../data/clients";
import { Reveal } from "./Reveal";

export function ClientsBand() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {clients.map((client, index) => (
        <Reveal
          key={client.name}
          delay={index * 80}
          className="flex flex-col items-center rounded-sm border border-charcoal/10 bg-white px-5 py-7 text-center"
        >
          <Building className="h-6 w-6 text-brand" aria-hidden="true" />
          <p className="mt-3 font-display text-sm font-bold text-charcoal">{client.name}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{client.note}</p>
        </Reveal>
      ))}
    </div>
  );
}
