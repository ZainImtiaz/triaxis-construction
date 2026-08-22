import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { Button } from "./Button";
import { cx } from "../lib/cx";
import { logoIcon } from "../data/media";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const scrolled = useScrollPosition(24);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "bg-charcoal/95 py-3 shadow-lg backdrop-blur-sm"
            : "bg-gradient-to-b from-charcoal/70 to-transparent py-5",
        )}
      >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-white"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logoIcon} alt="" className="h-8 w-auto" aria-hidden="true" />
          <span>
            TriAxis <span className="font-normal text-white/80">Construction</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cx(
                    "text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-brand",
                    isActive && "text-brand",
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button as="link" to="/contact" variant="primary" className="px-5 py-2.5 text-xs">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>
      </header>

      <div
        className={cx(
          "fixed inset-0 top-0 z-40 bg-charcoal/60 transition-opacity duration-300 lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav-panel"
        className={cx(
          "fixed inset-y-0 right-0 z-50 w-72 max-w-[80vw] transform bg-charcoal p-8 pt-24 shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cx(
                    "block text-base font-semibold uppercase tracking-wide text-white/85 transition-colors hover:text-brand",
                    isActive && "text-brand",
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button
          as="link"
          to="/contact"
          variant="primary"
          className="mt-10 w-full"
          onClick={() => setMenuOpen(false)}
        >
          Get a Free Quote
        </Button>
      </div>
    </>
  );
}
