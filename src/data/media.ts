const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Stock construction/architecture photography — placeholder imagery, easy to
// swap for the client's own photos later. Every ID below has been visually
// verified to show relevant, on-topic content. No images are sourced from
// the company's internal documents.
export const heroImage = unsplash("1541888946425-d81bb19240f5", 1920); // aerial construction site, crew in hard hats
export const aboutPreviewImage = unsplash("1487958449943-2429e8be8625"); // angular modern building facade
export const whyChooseUsImage = unsplash("1503387762-592deb58ef4e"); // worker reviewing blueprints on site
export const ctaBackgroundImage = unsplash("1449824913935-59a10b8d2000", 1920); // downtown city street
export const aboutStoryImage = unsplash("1517245386807-bb43f82c33c4"); // two workers reviewing a high-rise site
export const aboutPageHeaderImage = unsplash("1626885930974-4b69aa21bbf9"); // workers in hard hats on site
export const servicesPageHeaderImage = unsplash("1587582423116-ec07293f0395"); // worker on structural framing
export const projectsPageHeaderImage = heroImage;
export const whyChooseUsPageHeaderImage = heroImage;
export const contactPageHeaderImage = ctaBackgroundImage;

export interface Certification {
  title: string;
  subtitle: string;
}

// Real credential facts from the company's registration documents — shown as
// text badges rather than scanned certificate images.
export const certifications: Certification[] = [
  { title: "PEC Constructor License", subtitle: "Pakistan Engineering Council — Category C5/E, License No. 30788" },
  { title: "FBR Taxpayer Registration", subtitle: "Federal Board of Revenue — Registration No. F243319" },
];

export interface LeadershipMember {
  name: string;
  role: string;
}

// Only the leaders named in TriAxis Construction's own company profile are
// listed here — no fabricated additional leadership, no stock headshots.
export const leadershipTeam: LeadershipMember[] = [
  { name: "Muhammad Husnain Imran", role: "Chief Executive Officer (CEO)" },
  { name: "Uphaz Fazal", role: "Managing Director (MD)" },
];
