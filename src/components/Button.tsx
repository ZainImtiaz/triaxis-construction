import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cx } from "../lib/cx";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-charcoal hover:bg-brand-dark focus-visible:outline-white",
  secondary:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-charcoal",
  ghost:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-brand hover:text-brand-dark",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  as?: "button";
}

interface ButtonAsLink extends CommonProps, Omit<LinkProps, "children" | "className"> {
  as: "link";
}

interface ButtonAsAnchor
  extends CommonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> {
  as: "a";
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className } = props;
  const classes = cx(baseClasses, variantClasses[variant], className);

  if (props.as === "link") {
    const { as: _as, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as: _as, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
