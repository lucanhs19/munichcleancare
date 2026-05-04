"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useEffect, useState } from "react";

const nav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#preise", label: "Preise" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-border bg-transparent">
              <Image
                src="/logo-cutout.png"
                alt={`${site.name} Logo`}
                fill
                sizes="36px"
                className="object-contain p-1"
                priority
              />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {site.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <button
                type="button"
                aria-label={open ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-full h-11 w-11 ring-1 ring-border bg-panel-2 hover:bg-panel-2/80 transition"
              >
                <span className="sr-only">Menü</span>
                <span className="flex flex-col gap-1.5">
                  <span className="h-0.5 w-5 bg-foreground/80" />
                  <span className="h-0.5 w-5 bg-foreground/80" />
                  <span className="h-0.5 w-5 bg-foreground/80" />
                </span>
              </button>
            </div>
            <Button href="#kontakt" className="hidden sm:inline-flex">
              Kostenlos anfragen
            </Button>
          </div>
        </Container>
      </header>

      {open ? (
        <div className="md:hidden fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Menü schließen"
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          <div
            className="absolute inset-0 pt-16 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
            onClick={() => setOpen(false)}
          >
            <div
              className="mx-auto w-full max-w-md rounded-2xl bg-background ring-1 ring-border shadow-lg overflow-hidden max-h-[calc(100dvh-4rem-1.25rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 overflow-y-auto">
                <div className="flex items-center justify-between gap-3 pb-2">
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
                    Menü
                  </p>
                  <button
                    type="button"
                    aria-label="Menü schließen"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-border bg-panel-2 hover:bg-panel-2/80 transition"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg leading-none">×</span>
                  </button>
                </div>
                <div className="pb-3">
                  <Button
                    href="#kontakt"
                    className="w-full"
                    variant="primary"
                    onClick={() => setOpen(false)}
                  >
                    Kostenlos anfragen
                  </Button>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div className="pt-2">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm text-muted hover:text-foreground hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

