import { PenTool, Layers, Home, Factory, Hammer, Blocks, type LucideIcon } from "lucide-react";

export interface ServiceProcessStep {
  step: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  process: ServiceProcessStep[];
}

export const services: Service[] = [
  {
    slug: "architectural-design",
    icon: PenTool,
    title: "Architectural Design",
    shortDescription:
      "Thoughtful, efficient, and aesthetically compelling designs shaped around how you'll actually use the space.",
    description:
      "We collaborate closely with clients and architects to create designs that reflect both lifestyle needs and long-term functionality — balancing visual character with practical, buildable layouts from the earliest sketches through to final drawings.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    benefits: [
      "Close collaboration with clients and architects at every stage",
      "Designs balanced for lifestyle, function, and buildability",
      "Clear drawings that carry through cleanly into construction",
      "Attention to long-term usability, not just first impressions",
    ],
    process: [
      { step: "Brief & Site Study", description: "We understand the client's needs and assess the site conditions." },
      { step: "Concept Design", description: "Initial layouts and design directions are developed and reviewed." },
      { step: "Detailed Drawings", description: "Designs are refined into construction-ready documentation." },
      { step: "Handover to Site", description: "Drawings are coordinated with the construction team for execution." },
    ],
  },
  {
    slug: "structural-design",
    icon: Layers,
    title: "Structural Design",
    shortDescription:
      "Technically sound, code-compliant structural engineering optimized for safety and durability.",
    description:
      "Our engineering approach ensures every structure is technically sound, safe, and built to last. We apply rigorous analysis, modern tools, and code-compliant practices to deliver resilient designs suited to each project's loads and conditions.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    benefits: [
      "Code-compliant structural analysis and detailing",
      "Designs optimized for durability and long-term safety",
      "Coordination with architectural and MEP requirements",
      "Practices aligned with Pakistan Engineering Council standards",
    ],
    process: [
      { step: "Load Assessment", description: "Structural requirements are calculated for the site and design." },
      { step: "Structural Detailing", description: "Framing, reinforcement, and foundation details are finalized." },
      { step: "Review & Approval", description: "Designs are checked against code and regulatory requirements." },
      { step: "Site Supervision", description: "Structural work is supervised through to completion." },
    ],
  },
  {
    slug: "residential-commercial-construction",
    icon: Home,
    title: "Residential & Commercial Construction",
    shortDescription:
      "Turnkey construction for private residences, housing schemes, retail outlets, and office spaces.",
    description:
      "From private residences and housing schemes to retail outlets and office spaces, we deliver turnkey construction solutions tailored to diverse project scales and budgets — with an unwavering focus on quality at every stage.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    benefits: [
      "Turnkey delivery from foundation to finishing",
      "Solutions scaled to fit diverse project budgets",
      "Consistent quality control across every trade on site",
      "Direct coordination with owners throughout the build",
    ],
    process: [
      { step: "Planning", description: "Scope, budget, and timeline are agreed with the client." },
      { step: "Permitting", description: "Necessary approvals are secured before work begins." },
      { step: "Construction", description: "Skilled crews execute the build with regular quality checks." },
      { step: "Handover", description: "A final walkthrough confirms the finished work meets expectations." },
    ],
  },
  {
    slug: "industrial-construction",
    icon: Factory,
    title: "Industrial Construction",
    shortDescription:
      "Industrial and warehousing projects built around functional layouts and heavy-duty structural requirements.",
    description:
      "We undertake industrial and warehousing projects with a deep understanding of functional layouts, safety standards, and heavy-duty structural requirements — ensuring operational efficiency and longevity for facilities that need to perform under demanding use.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    benefits: [
      "Layouts planned around real operational workflows",
      "Structural work rated for heavy-duty industrial use",
      "Strict adherence to on-site safety standards",
      "Built for long-term operational efficiency",
    ],
    process: [
      { step: "Site & Layout Study", description: "Operational requirements shape the functional layout." },
      { step: "Structural Planning", description: "Heavy-duty structural and safety requirements are detailed." },
      { step: "Construction", description: "Work proceeds under close safety and quality supervision." },
      { step: "Handover", description: "The facility is inspected and prepared for operational use." },
    ],
  },
  {
    slug: "renovation-remodeling",
    icon: Hammer,
    title: "Renovation & Remodeling",
    shortDescription:
      "Structural and cosmetic renovation work that transforms existing residential properties.",
    description:
      "We regularly renovate and remodel residential properties — from full structural remodels to finishing work such as tile and marble fixing — managing demolition, structural changes, and finishing with minimal disruption to occupied homes.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    benefits: [
      "Experience across full remodels and finishing-only work",
      "Careful site management on occupied residential properties",
      "Flexible scheduling around the household's routine",
      "Attention to matching new work with existing structure",
    ],
    process: [
      { step: "Site Assessment", description: "We evaluate the existing structure and identify constraints." },
      { step: "Scope & Planning", description: "A renovation plan is agreed to match goals and budget." },
      { step: "Demolition & Rebuild", description: "Old finishes are removed and new construction begins." },
      { step: "Final Finishing", description: "Detailed finishing work completes the transformation." },
    ],
  },
  {
    slug: "custom-developments",
    icon: Blocks,
    title: "Custom Developments",
    shortDescription:
      "Flexible, bespoke solutions for projects that don't fit a standard mold — including utility and water systems.",
    description:
      "Every client is unique — and so are their spaces. We provide flexible construction solutions for bespoke projects, from ablution and water reuse systems to drainage networks and RO plant installations, combining creative input, technical expertise, and adaptive planning.",
    image:
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1400&q=80",
    benefits: [
      "Adaptive planning for non-standard project types",
      "Experience with water reuse, drainage, and RO plant work",
      "Technical expertise applied to bespoke requirements",
      "Delivered for both corporate and institutional clients",
    ],
    process: [
      { step: "Requirements Study", description: "We assess the specific technical and operational needs." },
      { step: "Custom Planning", description: "A tailored approach is developed for the project type." },
      { step: "Execution", description: "The work is carried out to the required technical standard." },
      { step: "Testing & Handover", description: "Systems are tested before handover to the client." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
