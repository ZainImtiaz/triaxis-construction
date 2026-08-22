export interface QuoteFormValues {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedBudget: string;
  projectLocation: string;
  message: string;
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-\s()]{7,20}$/;

export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!values.estimatedBudget) {
    errors.estimatedBudget = "Please select an estimated budget.";
  }

  if (!values.projectLocation.trim() || values.projectLocation.trim().length < 2) {
    errors.projectLocation = "Please enter the project location.";
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please tell us a bit more about your project (10+ characters).";
  }

  return errors;
}
