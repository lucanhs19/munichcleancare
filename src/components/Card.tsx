import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-panel ring-1 ring-border shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
}

