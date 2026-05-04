import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-tight">{site.name}</p>
          <p className="text-sm text-muted">Mobile Innenraum-Aufbereitung</p>
          <p className="text-sm text-muted">{site.serviceArea}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link className="text-muted hover:text-foreground transition" href="/impressum">
            Impressum
          </Link>
          <Link className="text-muted hover:text-foreground transition" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </Container>
    </footer>
  );
}

