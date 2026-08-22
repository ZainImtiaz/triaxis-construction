import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock3, Globe, Camera, Briefcase, MessageCircle, Send, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionTitle } from "../components/SectionTitle";
import { FaqAccordion } from "../components/FaqAccordion";
import { usePageMeta } from "../hooks/usePageMeta";
import { services } from "../data/services";
import { submitQuoteRequest } from "../data/quoteRequest";
import { validateQuoteForm, type QuoteFormValues, type QuoteFormErrors } from "../lib/validateQuoteForm";
import { contactPageHeaderImage } from "../data/media";
import { cx } from "../lib/cx";

const EMPTY_VALUES: QuoteFormValues = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  estimatedBudget: "",
  projectLocation: "",
  message: "",
};

const PROJECT_TYPE_OPTIONS = [...services.map((s) => s.title), "Other"];
const BUDGET_OPTIONS = [
  "Under PKR 5 Million",
  "PKR 5 – 20 Million",
  "PKR 20 – 65 Million",
  "PKR 65 Million+",
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: Globe },
  { label: "Instagram", href: "https://instagram.com", Icon: Camera },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Briefcase },
  { label: "Twitter", href: "https://twitter.com", Icon: Send },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  usePageMeta({
    title: "Contact Us",
    description:
      "Get in touch with TriAxis Construction for a free, no-obligation quote on your next residential, commercial, or industrial project.",
    ogImage: contactPageHeaderImage,
  });

  const [values, setValues] = useState<QuoteFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof QuoteFormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (field: keyof QuoteFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: keyof QuoteFormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validateQuoteForm({ ...values }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateQuoteForm(values);
    setErrors(validationErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      projectType: true,
      estimatedBudget: true,
      projectLocation: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitQuoteRequest(values);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setValues(EMPTY_VALUES);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const fieldError = (field: keyof QuoteFormValues) => (touched[field] ? errors[field] : undefined);

  const inputClasses = (field: keyof QuoteFormValues) =>
    cx(
      "w-full rounded-sm border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-ink-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/50",
      fieldError(field) ? "border-error" : "border-charcoal/15 focus:border-brand",
    );

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Discuss Your Project"
        description="Reach out for a free, no-obligation quote — we typically respond within one business day."
        image={contactPageHeaderImage}
        imageAlt="Excavator preparing a residential plot on a TriAxis Construction job site"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-5 lg:gap-20 lg:px-10">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-charcoal">Contact Information</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-charcoal text-brand">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Phone</p>
                  <a href="tel:+923090310333" className="text-base font-semibold text-charcoal hover:text-brand-dark">
                    0309 0310 333
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-charcoal text-brand">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Email</p>
                  <a href="mailto:triaxisconstruction@gmail.com" className="text-base font-semibold text-charcoal hover:text-brand-dark">
                    triaxisconstruction@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-charcoal text-brand">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Address</p>
                  <p className="text-base font-semibold text-charcoal">123 Badami Bagh, Lahore, Pakistan</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-charcoal text-brand">
                  <Clock3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Business Hours</p>
                  <p className="text-base font-semibold text-charcoal">Monday – Saturday</p>
                  <p className="text-sm text-ink-muted">9:00 AM – 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">WhatsApp</p>
                  <a
                    href="https://wa.me/923090310333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-charcoal hover:text-brand-dark"
                  >
                    Chat with us directly
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-9 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-brand hover:text-brand-dark"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-sm border border-brand/30 bg-offwhite px-8 py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-dark" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-bold text-charcoal">Request Received</h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                  Thank you for reaching out. A member of our team will be in touch within 24 hours to
                  discuss your project.
                </p>
                <Button as="button" variant="ghost" className="mt-8" onClick={resetForm}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-charcoal">Request a Free Quote</h2>

                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-sm border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
                    <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Something went wrong submitting your request. Please try again.
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={values.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      aria-invalid={Boolean(fieldError("fullName"))}
                      aria-describedby={fieldError("fullName") ? "fullName-error" : undefined}
                      className={inputClasses("fullName")}
                    />
                    {fieldError("fullName") && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-error">
                        {fieldError("fullName")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={Boolean(fieldError("email"))}
                      aria-describedby={fieldError("email") ? "email-error" : undefined}
                      className={inputClasses("email")}
                    />
                    {fieldError("email") && (
                      <p id="email-error" className="mt-1.5 text-xs text-error">
                        {fieldError("email")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      aria-invalid={Boolean(fieldError("phone"))}
                      aria-describedby={fieldError("phone") ? "phone-error" : undefined}
                      className={inputClasses("phone")}
                    />
                    {fieldError("phone") && (
                      <p id="phone-error" className="mt-1.5 text-xs text-error">
                        {fieldError("phone")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectLocation" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal">
                      Project Location
                    </label>
                    <input
                      id="projectLocation"
                      name="projectLocation"
                      type="text"
                      value={values.projectLocation}
                      onChange={(e) => handleChange("projectLocation", e.target.value)}
                      onBlur={() => handleBlur("projectLocation")}
                      aria-invalid={Boolean(fieldError("projectLocation"))}
                      aria-describedby={fieldError("projectLocation") ? "projectLocation-error" : undefined}
                      className={inputClasses("projectLocation")}
                    />
                    {fieldError("projectLocation") && (
                      <p id="projectLocation-error" className="mt-1.5 text-xs text-error">
                        {fieldError("projectLocation")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectType" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={values.projectType}
                      onChange={(e) => handleChange("projectType", e.target.value)}
                      onBlur={() => handleBlur("projectType")}
                      aria-invalid={Boolean(fieldError("projectType"))}
                      aria-describedby={fieldError("projectType") ? "projectType-error" : undefined}
                      className={inputClasses("projectType")}
                    >
                      <option value="">Select a project type</option>
                      {PROJECT_TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {fieldError("projectType") && (
                      <p id="projectType-error" className="mt-1.5 text-xs text-error">
                        {fieldError("projectType")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="estimatedBudget" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal">
                      Estimated Budget
                    </label>
                    <select
                      id="estimatedBudget"
                      name="estimatedBudget"
                      value={values.estimatedBudget}
                      onChange={(e) => handleChange("estimatedBudget", e.target.value)}
                      onBlur={() => handleBlur("estimatedBudget")}
                      aria-invalid={Boolean(fieldError("estimatedBudget"))}
                      aria-describedby={fieldError("estimatedBudget") ? "estimatedBudget-error" : undefined}
                      className={inputClasses("estimatedBudget")}
                    >
                      <option value="">Select a budget range</option>
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {fieldError("estimatedBudget") && (
                      <p id="estimatedBudget-error" className="mt-1.5 text-xs text-error">
                        {fieldError("estimatedBudget")}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    aria-invalid={Boolean(fieldError("message"))}
                    aria-describedby={fieldError("message") ? "message-error" : undefined}
                    className={inputClasses("message")}
                    placeholder="Tell us about your project..."
                  />
                  {fieldError("message") && (
                    <p id="message-error" className="mt-1.5 text-xs text-error">
                      {fieldError("message")}
                    </p>
                  )}
                </div>

                <Button as="button" type="submit" variant="primary" disabled={status === "submitting"} className="w-full sm:w-auto">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    "Request a Free Quote"
                  )}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle eyebrow="Common Questions" title="Frequently Asked Questions" align="center" />
          </Reveal>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
