import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

  const styles: Record<Variant, string> = {
    primary:
      "bg-brand text-black hover:bg-brand-2 shadow-sm shadow-black/30 ring-1 ring-brand/30",
    secondary:
      "bg-panel-2 text-foreground hover:bg-panel-2/80 ring-1 ring-border",
    ghost:
      "text-foreground hover:bg-white/5 ring-1 ring-transparent hover:ring-border",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

