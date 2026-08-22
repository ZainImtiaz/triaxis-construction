export interface CompanyStat {
  label: string;
  value: number;
  suffix: string;
}

// Figures reflect TriAxis Construction's actual project record — kept honest
// rather than inflated, and easy to update as new projects are completed.
export const companyStats: CompanyStat[] = [
  { label: "Projects Undertaken", value: 11, suffix: "" },
  { label: "Projects Completed", value: 9, suffix: "" },
  { label: "Corporate & NGO Clients", value: 5, suffix: "" },
  { label: "Cities Served", value: 3, suffix: "" },
];
