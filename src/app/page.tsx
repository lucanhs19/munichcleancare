import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function Home() {
  const services = [
    "Innenraum saugen",
    "Staub & Schmutz entfernen",
    "Oberflächen reinigen",
    "Sitze aufbereiten",
    "Leder reinigen & pflegen",
    "Gerüche behandeln",
    "Tierhaare entfernen",
    "Desinfektion",
    "Schimmelbehandlung ohne Ursachenbeseitigung",
  ];

  const addons = [
    { name: "Desinfektion mit Dampfreiniger", price: "ab 20 €" },
    { name: "Sitze aufbereiten inkl. Nasssaugen", price: "ab 50 €" },
    { name: "Teilleder-Pflege", price: "ab 20 €" },
    { name: "Leder reinigen & pflegen", price: "ab 50 €" },
    { name: "Teppich-Tiefenreinigung", price: "ab 15 €" },
    { name: "Ozonbehandlung ca. 20 Minuten", price: "ab 30 €" },
    { name: "Tierhaarentfernung", price: "ab 30 €" },
    { name: "Urin/Erbrochenes entfernen inkl. Desinfektion", price: "ab 80 €" },
    { name: "Schimmel entfernen ohne Ursachenbeseitigung", price: "ab 50 €" },
  ];

  const faqs = [
    {
      q: "Muss ich zu euch fahren?",
      a: "Nein, die Aufbereitung erfolgt mobil bei dir vor Ort in München und Umgebung.",
    },
    {
      q: "Wie lange dauert eine Innenraum-Aufbereitung?",
      a: "Je nach Zustand und gebuchten Zusatzleistungen unterschiedlich. Die Dauer wird vorab abgestimmt.",
    },
    {
      q: "Für welche Fahrzeuge ist der Service geeignet?",
      a: "Für alle gängigen Autos, vom Kleinwagen bis zum SUV.",
    },
    {
      q: "Wie kann ich buchen?",
      a: "Am einfachsten per WhatsApp oder telefonisch.",
    },
    {
      q: "Sind die Preise Festpreise?",
      a: "Die Preise dienen als transparente Orientierung. Der finale Preis hängt vom Zustand des Fahrzeugs und dem Aufwand ab.",
    },
  ];

  return (
    <div id="top" className="flex min-h-full flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          </div>
          <Container className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-3 lg:pb-20">
            <div className="grid items-center gap-10 lg:items-start lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Mobil vor Ort", site.serviceArea, "Faire transparente Preise"].map(
                    (b) => (
                      <span
                        key={b}
                        className="rounded-full bg-panel-2 px-3 py-1 ring-1 ring-border text-muted"
                      >
                        {b}
                      </span>
                    ),
                  )}
                </div>

                <h1 className="mt-5 sm:mt-6 lg:mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  Mobile Innenraum-Aufbereitung in München & Umgebung
                </h1>
                <p className="mt-4 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
                  Wir bringen den Innenraum deines Autos wieder auf Hochglanz –
                  bequem bei dir vor Ort.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="#kontakt">Kostenlos anfragen</Button>
                  <Button href="#preise" variant="secondary">
                    Preise ansehen
                  </Button>
                </div>

                <p className="mt-6 text-sm text-muted">
                  Professionell, klar und hochwertig – ohne unnötige
                  Versprechen.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:gap-3 lg:-mt-14">
                <div className="relative w-full flex items-center justify-center lg:items-start lg:justify-start aspect-[16/10] lg:aspect-auto">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-brand/10 via-transparent to-transparent blur-2xl" />
                  <Image
                    src="/logo-cutout.png"
                    alt="MunichCleanCare Logo"
                    width={560}
                    height={220}
                    priority
                    sizes="(max-width: 1024px) min(92vw, 560px), 560px"
                    className="h-auto w-auto max-w-[min(560px,92%)] lg:max-w-[560px] lg:-translate-y-1 drop-shadow-[0_18px_30px_rgba(0,0,0,0.65)]"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Leistungen"
              title="Innenraum sauber. Wertgefühl zurück."
              description="MunichCleanCare ist spezialisiert auf mobile Innenraum-Aufbereitung für alle Fahrzeugtypen – vom Alltagsauto bis zum Premiumfahrzeug."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((name) => (
                <Card key={name} className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-border">
                      <span className="h-2 w-2 rounded-full bg-brand" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{name}</p>
                      <p className="mt-1 text-sm text-muted">
                        Sorgfältig, materialschonend und auf den Zustand
                        abgestimmt.
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Preise */}
        <section id="preise" className="py-16 sm:py-20 border-y border-white/10">
          <Container>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <SectionHeading
                eyebrow="Preise"
                title="Preise & Zusatzleistungen"
                description="Transparente Orientierung – der Endpreis hängt von Fahrzeugzustand, Größe und gewünschtem Leistungsumfang ab."
              />

              <div className="w-full max-w-xl">
                <Card className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-base font-semibold tracking-tight">
                      Standard Innenraum-Aufbereitung
                    </p>
                    <p className="text-xl font-semibold text-brand">
                      ab 40 €
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Gründliches Saugen, Entstauben und Abwischen sichtbarer
                    Innenraumflächen.
                  </p>
                  <div className="mt-5 h-px w-full bg-white/10" />
                  <p className="mt-5 text-sm font-medium">
                    Zusatzleistungen
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {addons.map((a) => (
                      <li
                        key={a.name}
                        className="flex items-start justify-between gap-4"
                      >
                        <span className="leading-relaxed">{a.name}</span>
                        <span className="text-foreground whitespace-nowrap">
                          {a.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-muted">
                    Hinweis: Endpreis abhängig von Fahrzeugzustand, Größe und
                    gewünschtem Leistungsumfang.
                  </p>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Ablauf"
              title="In 3 Schritten zum sauberen Innenraum"
              description="Unkompliziert, persönlich abgestimmt und mobil bei dir vor Ort."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Anfrage senden",
                  text: "Schreib uns kurz per WhatsApp oder ruf an.",
                },
                {
                  step: "2",
                  title: "Fahrzeug & Zustand klären",
                  text: "Wir besprechen Fahrzeugtyp, Verschmutzung und gewünschte Leistungen.",
                },
                {
                  step: "3",
                  title: "Reinigung vor Ort",
                  text: `Wir kommen mobil zu dir nach ${site.serviceArea}.`,
                },
              ].map((s) => (
                <Card key={s.step} className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-black font-semibold">
                      {s.step}
                    </span>
                    <p className="text-base font-semibold tracking-tight">
                      {s.title}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {s.text}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Vorher/Nachher */}
        <section className="py-16 sm:py-20 border-y border-white/10">
          <Container>
            <SectionHeading
              eyebrow="Ergebnisse"
              title="Vorher / Nachher"
              description="Echte Ergebnisse folgen fortlaufend – hier die ersten Vorher/Nachher-Aufnahmen."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { src: "/images/vorher-1.png", label: "Vorher" },
                { src: "/images/nachher-1.png", label: "Nachher" },
                { src: "/images/vorher-2.png", label: "Vorher" },
                { src: "/images/nachher-2.png", label: "Nachher" },
              ].map((img) => (
                <Card key={img.src} className="overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={`Bild: ${img.label}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <p className="text-sm font-medium">{img.label}</p>
                    <span className="text-xs text-muted">
                      Original
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Warum */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <SectionHeading
                eyebrow="Warum wir"
                title="Warum MunichCleanCare?"
                description="Premium-Anspruch mit persönlichem Kontakt – klar, transparent und mobil."
              />

              <Card className="p-6">
                <ul className="space-y-3 text-sm text-muted">
                  {[
                    "Mobile Reinigung direkt vor Ort",
                    "Transparente Preise",
                    "Flexible Termine",
                    "Für alle Fahrzeugtypen geeignet",
                    "Sorgfältige Innenraumaufbereitung",
                    "Persönlicher Kontakt statt anonymer Massenservice",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-20 border-y border-white/10">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Häufige Fragen"
              description="Kurz und transparent – damit du schnell entscheiden kannst."
            />

            <div className="mt-10 grid gap-3">
              {faqs.map((f) => (
                <Card key={f.q} className="p-0">
                  <details className="group p-5">
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                      <span className="text-sm font-medium">{f.q}</span>
                      <span className="mt-0.5 text-brand transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {f.a}
                    </p>
                  </details>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Kontakt"
                  title="Kostenlos anfragen"
                  description="Schick uns einfach Bilder vom Innenraum und deine gewünschten Leistungen per WhatsApp."
                />

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href={site.whatsappUrl} target="_blank" rel="noreferrer">
                    Per WhatsApp anfragen
                  </Button>
                  <Button href={`tel:${site.phoneTel}`} variant="secondary">
                    Jetzt anrufen
                  </Button>
                  <Button
                    href={site.instagramUrl}
                    variant="ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram ansehen
                  </Button>
                  <Button
                    href={site.tiktokUrl}
                    variant="ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TikTok ansehen
                  </Button>
                </div>
              </div>

              <Card className="p-6">
                <p className="text-sm font-medium">Kurze Checkliste</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Damit wir dir schnell ein passendes Angebot machen können:
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {[
                    "2–4 Fotos vom Innenraum (vorn/hinten/Kofferraum)",
                    "Fahrzeugtyp (z. B. Kleinwagen, Kombi, SUV)",
                    "Kurzbeschreibung der Verschmutzung (z. B. Tierhaare, Geruch)",
                    "Gewünschte Zusatzleistungen (optional)",
                    "Dein Standort in München/Umgebung",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                      <span className="leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
