export interface Client {
  name: string;
  note: string;
}

// Organizations TriAxis Construction has delivered projects for, drawn directly
// from the company's project record. No attributed quotes — only factual credits.
export const clients: Client[] = [
  { name: "WWF Pakistan", note: "Ablution water reuse systems — Sheikhupura & Gujranwala" },
  { name: "Indigo Developers", note: "Finishing works, RO plant & water infrastructure — Gulberg-3" },
  { name: "Maz Technologies", note: "Residential renovation — DHA Phase-V, Lahore" },
  { name: "Technical Solutions", note: "Residential construction — Upper Mall Scheme, Lahore" },
  { name: "Hajvery Medical Camps", note: "Medical dispensary construction — Talwara, Lahore" },
];
