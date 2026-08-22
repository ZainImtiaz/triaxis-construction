import { ShieldCheck, Gem, Handshake, Users, Sparkles, Banknote, type LucideIcon } from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  {
    icon: ShieldCheck,
    title: "PEC-Registered Firm",
    description:
      "TriAxis Construction is registered with the Pakistan Engineering Council under License No. C5/30788, upholding professional and technical standards on every project.",
  },
  {
    icon: Gem,
    title: "Quality Without Compromise",
    description:
      "Every element, from materials to labor, is held to a consistent standard — we don't cut corners to hit a deadline.",
  },
  {
    icon: Sparkles,
    title: "Drive for Innovation",
    description:
      "We apply modern tools, practices, and design thinking to stay ahead, rather than defaulting to the way things have always been done.",
  },
  {
    icon: Handshake,
    title: "Personalized Service",
    description:
      "We treat every project as a collaboration, adapting our approach to the specific goals of each client rather than a one-size-fits-all process.",
  },
  {
    icon: Users,
    title: "Direct Client Collaboration",
    description:
      "From homeowners to organizations like WWF Pakistan, we work closely with clients throughout planning and execution — not just at handover.",
  },
  {
    icon: Banknote,
    title: "Transparent Communication",
    description:
      "Robust planning and honest, ongoing communication ensure expectations are set clearly and met at every stage of the project.",
  },
];
