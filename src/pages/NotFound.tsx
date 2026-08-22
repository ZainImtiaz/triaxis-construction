import { Compass } from "lucide-react";
import { Button } from "../components/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
  });

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <Compass className="h-12 w-12 text-brand-dark" aria-hidden="true" />
      <h1 className="mt-6 font-display text-4xl font-bold text-charcoal">404</h1>
      <p className="mt-3 text-lg font-semibold text-charcoal">Page Not Found</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button as="link" to="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </section>
  );
}
