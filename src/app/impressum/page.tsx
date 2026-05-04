import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export default function ImpressumPage() {
  return (
    <main className="flex-1">
      <Container className="py-14">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Impressum</h1>
        <div className="mt-6 rounded-2xl bg-panel ring-1 ring-border p-6 text-sm text-muted leading-relaxed">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Angaben gemäß § 5 DDG
            </p>
            <p>
              <strong className="text-foreground">{site.name}</strong>
              <br />
              Mobile Innenraum-Aufbereitung
              <br />
              Wastl-witt-str 25
              <br />
              80689 München
              <br />
              Deutschland
            </p>

            <p>
              <span className="text-foreground font-medium">
                Vertretungsberechtigt / Geschäftsführer:
              </span>{" "}
              Mikail Ayan
            </p>

            <p>
              <span className="text-foreground font-medium">Kontakt:</span>
              <br />
              Telefon: {site.phoneDisplay}
              <br />
              E-Mail:{" "}
              <span className="text-foreground">
                [folgt]
              </span>
            </p>

            <p>
              <span className="text-foreground font-medium">
                Umsatzsteuer-ID:
              </span>{" "}
              <span className="text-foreground">
                [folgt]
              </span>
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
            </p>
            <p>
              Mikail Ayan
              <br />
              Wastl-witt-str 25, 80689 München
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Haftung für Inhalte
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für
              eigene Inhalte auf diesen Seiten verantwortlich. Wir übernehmen
              jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und
              Aktualität der bereitgestellten Inhalte.
            </p>
            <p className="text-xs text-muted">
              Hinweis: Diese Webseite enthält keine Rechtsberatung. Rechtstexte
              sollten vor Veröffentlichung geprüft werden.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Haftung für Links
            </p>
            <p>
              Unsere Webseite enthält Links zu externen Webseiten Dritter. Auf
              deren Inhalte haben wir keinen Einfluss. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Urheberrecht
            </p>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads
              und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Streitbeilegung
            </p>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
            <p className="text-xs text-muted">
              Optional: EU-Plattform zur Online-Streitbeilegung (OS):{" "}
              <span className="text-foreground">
                https://ec.europa.eu/consumers/odr/
              </span>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

