"use client";

import SectionHeading from "@/src/components/SectionHeading";
import { useLanguage, type Localized } from "@/src/i18n/LanguageContext";

const heading: Localized = { nl: "Ervaring", en: "Experience" };

const roles: {
  role: Localized;
  company: string;
  period: string;
  description: Localized;
  tech: string[];
}[] = [
  {
    role: { nl: "Software Developer Stagiair", en: "Software Developer Intern" },
    company: "Jan De Nul",
    period: "02/2026 – 05/2026",
    description: {
      nl: "Full-stack ontwikkeling van interne bedrijfsapplicaties en innovatieve Proof of Concepts binnen het in-house team.",
      en: "Full-stack development of internal enterprise applications and innovative Proof of Concepts within the in-house team.",
    },
    tech: ["C#", ".NET", "Blazor WebAssembly", "Clean Architecture"],
  },
];

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border-subtle/50"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <SectionHeading index="03" title={heading[lang]} />

        <ol className="mt-10 border-l border-border-subtle">
          {roles.map((item) => (
            <li key={item.company} className="relative pl-8">
              <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div className="rounded-xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-8px_rgba(124,156,255,0.35)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.role[lang]}{" "}
                    <span className="text-accent">— {item.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description[lang]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border-subtle bg-background px-2.5 py-1 font-mono text-xs text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
