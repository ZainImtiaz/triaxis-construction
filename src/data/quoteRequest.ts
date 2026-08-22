import type { QuoteFormValues } from "../lib/validateQuoteForm";

export interface QuoteRequestResult {
  ok: true;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitQuoteRequest(values: QuoteFormValues): Promise<QuoteRequestResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error(
      "Missing VITE_WEB3FORMS_ACCESS_KEY. Add it to a .env file (see .env.example) to enable quote request delivery.",
    );
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New quote request from ${values.fullName}`,
      from_name: "TriAxis Construction — Website",
      name: values.fullName,
      email: values.email,
      phone: values.phone,
      project_type: values.projectType,
      estimated_budget: values.estimatedBudget,
      project_location: values.projectLocation,
      message: values.message,
    }),
  });

  const data: unknown = await res.json();
  const success = typeof data === "object" && data !== null && "success" in data && (data as { success: unknown }).success === true;

  if (!res.ok || !success) {
    throw new Error("Failed to submit quote request");
  }

  return { ok: true };
}
