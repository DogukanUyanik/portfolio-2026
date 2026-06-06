"use client";

import { useLanguage, type Localized } from "@/src/i18n/LanguageContext";

const t = {
  heading: {
    nl: "Laten we samen iets bouwen.",
    en: "Let's build something together.",
  },
  subtitle: {
    nl: "Heb je een project in gedachten of wil je gewoon connecteren? Neem contact op via onderstaande kanalen.",
    en: "Have a project in mind or just want to connect? Reach out through any of the channels below.",
  },
  rights: {
    nl: "Alle rechten voorbehouden.",
    en: "All rights reserved.",
  },
  builtWith: {
    nl: "Gebouwd met Next.js & Tailwind CSS",
    en: "Built with Next.js & Tailwind CSS",
  },
};

const contacts: { label: Localized; href: string; display: string }[] = [
  {
    label: { nl: "GitHub", en: "GitHub" },
    href: "https://github.com/DogukanUyanik04",
    display: "github.com/DogukanUyanik04",
  },
  {
    label: { nl: "LinkedIn", en: "LinkedIn" },
    href: "https://www.linkedin.com/in/dogukan-uyanik/",
    display: "linkedin.com/in/dogukan-uyanik",
  },
  {
    label: { nl: "Email", en: "Email" },
    href: "mailto:dogukanuyanik9140@gmail.com",
    display: "dogukanuyanik9140@gmail.com",
  },
  {
    label: { nl: "Telefoon", en: "Phone" },
    href: "tel:+32486290585",
    display: "+32 486 29 05 85",
  },
];

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-border-subtle/50"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.heading[lang]}
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {t.subtitle[lang]}
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-1 rounded-xl border border-border-subtle bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-8px_rgba(124,156,255,0.35)]"
              >
                <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  {c.label[lang]}
                </span>
                <span className="truncate font-mono text-xs text-muted">
                  {c.display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-border-subtle/50 pt-8 text-xs text-muted sm:flex-row sm:items-center">
          <span>© {2026} Dogukan Uyanik. {t.rights[lang]}</span>
          <span className="font-mono">{t.builtWith[lang]}</span>
        </div>
      </div>
    </footer>
  );
}
