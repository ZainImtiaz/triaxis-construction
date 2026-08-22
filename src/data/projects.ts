export type ProjectCategory = "Residential" | "Commercial" | "Renovation" | "Infrastructure";

export interface ProjectStats {
  projectSize: string;
  duration: string;
  status: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  client?: string;
  completionDate: string;
  thumbnail: string;
  gallery: string[];
  summary: string;
  description: string[];
  stats: ProjectStats;
  servicesProvided: string[];
}

export const projects: Project[] = [
  {
    slug: "medical-dispensary-talwara",
    title: "Construction of Medical Dispensary",
    category: "Commercial",
    location: "Talwara, Lahore",
    client: "Data Ali Hajvery Medical Camps",
    completionDate: "Ongoing — started January 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "A 1 kanal medical dispensary under construction for Hajvery Medical Camps in Talwara, Lahore.",
    description: [
      "TriAxis Construction is currently delivering a purpose-built medical dispensary on a 1 kanal plot in Talwara, Lahore, for Data Ali Hajvery Medical Camps. The facility is being built to support outpatient medical services for the surrounding community.",
      "Earthwork and site preparation are underway, with the project team coordinating closely with the client on layout requirements suited to a functioning medical facility.",
    ],
    stats: { projectSize: "1 Kanal", duration: "In Progress", status: "Ongoing" },
    servicesProvided: ["Residential & Commercial Construction", "Structural Design"],
  },
  {
    slug: "ablution-water-reuse-nhmp-sheikhupura",
    title: "Ablution Water Reuse System",
    category: "Infrastructure",
    location: "NHMP Training College, Sheikhupura",
    client: "WWF Pakistan",
    completionDate: "January 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "A water reuse system for ablution facilities at the NHMP Training College, delivered for WWF Pakistan.",
    description: [
      "TriAxis Construction installed an ablution water reuse system at the National Highways & Motorway Police (NHMP) Training College in Sheikhupura, commissioned by WWF Pakistan as part of a water conservation initiative.",
      "The scope included excavation, pipework, and system installation to allow ablution water to be captured and reused, reducing water wastage at the facility.",
    ],
    stats: { projectSize: "Water Reuse System", duration: "3 Weeks", status: "Completed" },
    servicesProvided: ["Custom Developments"],
  },
  {
    slug: "ablution-water-reuse-fazaia-gujranwala",
    title: "Ablution Water Reuse System",
    category: "Infrastructure",
    location: "Fazaia Housing, Gujranwala",
    client: "WWF Pakistan",
    completionDate: "November 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "A second WWF Pakistan-commissioned water reuse system, installed at Fazaia Housing in Gujranwala.",
    description: [
      "Following the Sheikhupura installation, TriAxis Construction delivered a matching ablution water reuse system at Fazaia Housing in Gujranwala, again for WWF Pakistan, extending the water conservation program to a second site.",
      "The team completed excavation and system installation on a tight three-week schedule to align with the client's rollout plan.",
    ],
    stats: { projectSize: "Water Reuse System", duration: "3 Weeks", status: "Completed" },
    servicesProvided: ["Custom Developments"],
  },
  {
    slug: "residential-renovation-johar-town",
    title: "Residential Renovation & Remodeling",
    category: "Renovation",
    location: "Johar Town, Lahore",
    completionDate: "August 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "Renovation and remodeling of an 8 marla residential property in Johar Town, Lahore.",
    description: [
      "TriAxis Construction carried out a full renovation and remodeling of an 8 marla residential property in Johar Town, updating structural and finishing elements for the homeowner.",
      "The six-week program was scheduled to keep disruption to the occupied household to a minimum while modernizing the property.",
    ],
    stats: { projectSize: "8 Marla", duration: "6 Weeks", status: "Completed" },
    servicesProvided: ["Renovation & Remodeling"],
  },
  {
    slug: "residential-renovation-dha-phase-v",
    title: "Residential Renovation & Remodeling",
    category: "Renovation",
    location: "DHA, Phase-V, Lahore",
    client: "Maz Technologies",
    completionDate: "November 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "A comprehensive renovation and remodel of a 1 kanal residence in DHA Phase-V, Lahore.",
    description: [
      "For this 1 kanal property in DHA Phase-V, TriAxis Construction carried out a comprehensive renovation and remodel for Maz Technologies, covering structural updates and finishing work across the residence.",
      "The five-month program balanced structural changes with finishing work to deliver a substantially upgraded home.",
    ],
    stats: { projectSize: "1 Kanal", duration: "5 Months", status: "Completed" },
    servicesProvided: ["Renovation & Remodeling"],
  },
  {
    slug: "commercial-building-saqib-town",
    title: "Construction of Commercial Building",
    category: "Commercial",
    location: "Saqib Town, Lahore",
    completionDate: "Ongoing — started June 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "A 12 marla commercial building currently under construction in Saqib Town, Lahore.",
    description: [
      "TriAxis Construction is building a 12 marla commercial property in Saqib Town, Lahore, from the ground up, managing structural work through to finishing.",
      "The project is progressing under regular site supervision, with structural framing and brickwork underway.",
    ],
    stats: { projectSize: "12 Marla", duration: "In Progress", status: "Ongoing" },
    servicesProvided: ["Residential & Commercial Construction", "Structural Design"],
  },
  {
    slug: "indigo-boutique-apartments-finishing",
    title: "Finishing Works — Indigo Boutique Apartments",
    category: "Residential",
    location: "Block L, Gulberg-3, Lahore",
    client: "Indigo Developers",
    completionDate: "June 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "Tile and marble fixing works at the Indigo Boutique Apartments for Indigo Developers.",
    description: [
      "TriAxis Construction carried out tile and marble fixing works at Indigo Boutique Apartments in Block L, Gulberg-3, for developer client Indigo Developers — one of several engagements the firm has completed for this client.",
      "The finishing work was delivered over roughly seven months, coordinated around the wider development's construction schedule.",
    ],
    stats: { projectSize: "Tile & Marble Finishing", duration: "7 Months", status: "Completed" },
    servicesProvided: ["Renovation & Remodeling"],
  },
  {
    slug: "residential-project-upper-mall-scheme",
    title: "Construction of Residential Project",
    category: "Residential",
    location: "Upper Mall Scheme, Lahore",
    client: "Technical Solutions",
    completionDate: "November 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "Ground-up construction of a 2 kanal residential property in the Upper Mall Scheme, Lahore.",
    description: [
      "TriAxis Construction delivered a 2 kanal residential property in the Upper Mall Scheme for client Technical Solutions, managing the build from foundation through to completion.",
      "The project ran for roughly 21 months, reflecting the scale of a full ground-up residence on a 2 kanal plot.",
    ],
    stats: { projectSize: "2 Kanal", duration: "21 Months", status: "Completed" },
    servicesProvided: ["Residential & Commercial Construction", "Architectural Design"],
  },
  {
    slug: "water-supply-drainage-gulberg",
    title: "Water Supply & Drainage Pipe Line Installation",
    category: "Infrastructure",
    location: "Block L, Gulberg-3, Lahore",
    client: "Indigo Developers",
    completionDate: "November 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "Installation of water supply and drainage pipe lines for Indigo Developers in Gulberg-3.",
    description: [
      "TriAxis Construction installed water supply and drainage pipe lines in Block L, Gulberg-3, for Indigo Developers, supporting the site's core utility infrastructure.",
      "The eight-month installation involved trenching, pipe laying, and connection work carried out to the client's specifications.",
    ],
    stats: { projectSize: "Water Supply & Drainage Network", duration: "8 Months", status: "Completed" },
    servicesProvided: ["Custom Developments"],
  },
  {
    slug: "residential-renovation-dilkusha-garden",
    title: "Residential Renovation & Remodeling",
    category: "Renovation",
    location: "Dilkusha Garden, Model Town, Lahore",
    completionDate: "May 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "Renovation and remodeling of a 10 marla residential property in Model Town, Lahore.",
    description: [
      "TriAxis Construction renovated a 10 marla residential property in Dilkusha Garden, Model Town, updating the home's structure and finishes for the owner.",
      "The three-month project refreshed the property while preserving its original layout and character.",
    ],
    stats: { projectSize: "10 Marla", duration: "3 Months", status: "Completed" },
    servicesProvided: ["Renovation & Remodeling"],
  },
  {
    slug: "ro-plant-installation-gulberg",
    title: "Supply & Installation of RO Plant",
    category: "Infrastructure",
    location: "Block C, Gulberg-3, Lahore",
    client: "Indigo Developers",
    completionDate: "January 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    ],
    summary: "Supply and installation of a reverse osmosis (RO) water treatment plant for Indigo Developers.",
    description: [
      "TriAxis Construction supplied and installed a reverse osmosis (RO) water treatment plant in Block C, Gulberg-3, for Indigo Developers, providing the site with a dedicated clean water treatment system.",
      "The one-month installation covered equipment supply, connection, and commissioning of the RO system.",
    ],
    stats: { projectSize: "RO Plant Installation", duration: "1 Month", status: "Completed" },
    servicesProvided: ["Custom Developments"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Residential",
  "Commercial",
  "Renovation",
  "Infrastructure",
];
