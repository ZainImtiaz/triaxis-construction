import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Camera, Briefcase, Send, Landmark } from "lucide-react";
import { services } from "../data/services";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Contact", to: "/contact" },
];

const FOOTER_SERVICES = services.slice(0, 4);

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: Globe },
  { label: "Instagram", href: "https://instagram.com", Icon: Camera },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Briefcase },
  { label: "Twitter", href: "https://twitter.com", Icon: Send },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-white">
            <Landmark className="h-7 w-7 text-brand-light" aria-hidden="true" />
            <span>
              TriAxis <span className="font-normal text-white/80">Construction</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A PEC C5-registered construction firm delivering residential, commercial, and
            industrial projects — and specialized water infrastructure — across Punjab, Pakistan.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-light hover:text-brand-light"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-brand-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {FOOTER_SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to="/services" className="transition-colors hover:text-brand-light">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
              <a href="tel:+923090310333" className="transition-colors hover:text-brand-light">
                0309 0310 333
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
              <a href="mailto:triaxisconstruction@gmail.com" className="transition-colors hover:text-brand-light">
                triaxisconstruction@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
              <span>123 Badami Bagh, Lahore, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-7xl px-6 text-center text-xs text-white/50 lg:px-10">
          © 2026 TriAxis Construction. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
