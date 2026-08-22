export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand the client's requirements and project goals.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Develop project plans, budgets, timelines, and specifications.",
  },
  {
    number: "03",
    title: "Construction",
    description: "Execute the project using professional construction practices.",
  },
  {
    number: "04",
    title: "Final Inspection",
    description: "Complete quality checks and deliver the finished project.",
  },
];
