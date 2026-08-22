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

  // FormData (not JSON) so the browser sends a CORS-safelisted content type
  // and skips the preflight request — Web3Forms' AJAX endpoint doesn't
  // respond to preflight OPTIONS requests.
  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", `New quote request from ${values.fullName}`);
  formData.append("from_name", "TriAxis Construction — Website");
  formData.append("name", values.fullName);
  formData.append("email", values.email);
  formData.append("phone", values.phone);
  formData.append("project_type", values.projectType);
  formData.append("estimated_budget", values.estimatedBudget);
  formData.append("project_location", values.projectLocation);
  formData.append("message", values.message);

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  const data: unknown = await res.json();
  const success = typeof data === "object" && data !== null && "success" in data && (data as { success: unknown }).success === true;

  if (!res.ok || !success) {
    throw new Error("Failed to submit quote request");
  }

  return { ok: true };
}
