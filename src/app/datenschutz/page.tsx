import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export default function DatenschutzPage() {
  return (
    <main className="flex-1">
      <Container className="py-14">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          Datenschutz
        </h1>
        <div className="mt-6 rounded-2xl bg-panel ring-1 ring-border p-6 text-sm text-muted leading-relaxed">
          <div className="space-y-4">
            <p>
              Mit dieser Datenschutzerklärung informieren wir dich über die Art,
              den Umfang und den Zweck der Verarbeitung personenbezogener Daten
              auf unserer Webseite.
            </p>

            <p className="text-xs text-muted">
              Stand: 01.05.2026
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Verantwortlicher
            </p>
            <p>
              <strong className="text-foreground">{site.name}</strong>
              <br />
              Wastl-witt-str 25, 80689 München, Deutschland
              <br />
              Telefon: {site.phoneDisplay}
              <br />
              E-Mail:{" "}
              <span className="text-foreground">
                [bitte ergänzen, z. B. info@munichcleancare.de]
              </span>
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Allgemeine Hinweise
            </p>
            <p>
              Personenbezogene Daten sind alle Daten, mit denen du persönlich
              identifiziert werden kannst. Wir verarbeiten personenbezogene
              Daten nur, soweit dies erforderlich ist, eine Einwilligung vorliegt
              oder eine gesetzliche Grundlage dies erlaubt.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Hosting & Server-Logfiles
            </p>
            <p>
              Beim Aufruf unserer Webseite werden durch den Hostinganbieter
              automatisch Informationen in sogenannten Server-Logfiles erfasst.
              Das können insbesondere sein: IP-Adresse (ggf. gekürzt), Datum und
              Uhrzeit der Anfrage, aufgerufene Seite/Datei, Referrer-URL,
              Browsertyp/-version, Betriebssystem und ggf. weitere technische
              Informationen.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse) an einem sicheren und störungsfreien Betrieb der
              Webseite.
            </p>
            <p className="text-xs text-muted">
              Hinweis: Wenn du deinen Hostinganbieter kennst (z. B. Vercel),
              kannst du ihn hier ergänzen.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Kontaktaufnahme (Telefon / WhatsApp)
            </p>
            <p>
              Wenn du uns telefonisch kontaktierst, verarbeiten wir die von dir
              mitgeteilten Daten (z. B. Telefonnummer, Gesprächsinhalte), um dein
              Anliegen zu bearbeiten.
            </p>
            <p>
              Wenn du uns über WhatsApp kontaktierst, erfolgt die Kommunikation
              über einen Dienst der WhatsApp Ireland Limited bzw. Meta Platforms
              (je nach Region). Dabei können Metadaten (z. B. Telefonnummer,
              Kommunikationszeitpunkt) verarbeitet werden. Wir erhalten deine
              Nachricht und die von dir übermittelten Inhalte (z. B. Fotos vom
              Fahrzeuginnenraum), um deine Anfrage zu bearbeiten.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen/Vertrag) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an effizienter Kommunikation). Sofern du uns besonders
              sensible Informationen sendest, tue dies bitte nur, wenn es
              erforderlich ist.
            </p>
            <p className="text-xs text-muted">
              WhatsApp-Link:{" "}
              <span className="text-foreground">{site.whatsappUrl}</span>
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Externe Links (Instagram / TikTok)
            </p>
            <p>
              Auf unserer Webseite sind Links zu externen Plattformen (z. B.
              Instagram, TikTok) eingebunden. Beim Anklicken verlässt du unsere
              Webseite. Für die Datenverarbeitung auf den Plattformen sind die
              jeweiligen Anbieter verantwortlich.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Cookies & Tracking
            </p>
            <p>
              Wir setzen nach aktuellem Stand keine Analyse- oder Marketing-Cookies
              ein. Technisch notwendige Funktionen (z. B. zur Darstellung der
              Webseite) können jedoch Cookies/ähnliche Technologien erfordern.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Speicherdauer
            </p>
            <p>
              Wir verarbeiten und speichern personenbezogene Daten nur so lange,
              wie dies zur Erfüllung der Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungsfristen bestehen.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              Deine Rechte
            </p>
            <p>
              Du hast im Rahmen der DSGVO u. a. folgende Rechte: Auskunft (Art. 15),
              Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
              Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch
              gegen die Verarbeitung (Art. 21). Zudem hast du das Recht, dich bei
              einer Aufsichtsbehörde zu beschweren (Art. 77).
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
              SSL-/TLS-Verschlüsselung
            </p>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
            </p>
          </div>

          <div className="my-6 h-px w-full bg-white/10" />

          <p className="text-xs text-muted">
            Hinweis: Diese Datenschutzerklärung ist ein Muster und ersetzt keine
            rechtliche Beratung. Bitte vor Veröffentlichung prüfen.
          </p>
        </div>
      </Container>
    </main>
  );
}

