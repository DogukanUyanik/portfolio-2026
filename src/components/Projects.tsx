"use client";

import SectionHeading from "@/src/components/SectionHeading";
import { useLanguage, type Localized } from "@/src/i18n/LanguageContext";

const heading: Localized = { nl: "Projecten", en: "Projects" };
const previewLabel: Localized = { nl: "Voorbeeld", en: "Preview" };
const upcomingLabel: Localized = { nl: "Binnenkort", en: "Upcoming" };

const projects: {
  title: string;
  description: Localized;
  tech: string[];
  upcoming?: boolean;
}[] = [
  {
    title: "Vlaams Milieu Maatschappij",
    description: {
      nl: "Full-stack desktop en webapplicatie voor administratie, planning en werkbonnen, gecombineerd met een offline-first mobiele PWA voor technici op het terrein.",
      en: "Full-stack desktop and web application for administration, planning, and work orders, paired with an offline-first mobile PWA for field technicians.",
    },
    tech: ["C#", ".NET 8", "Blazor WASM", "SQLite"],
  },
  {
    title: "Mixed Reality CPR-Training (PoC)",
    description: {
      nl: "Bachelorthesis (Meta Quest 3). Reverse-engineering van BLE-protocollen van reanimatiepoppen voor real-time, ruimtelijke (passthrough) visuele en auditieve feedback. Gebouwd op didactische principes zoals scaffolding.",
      en: "Bachelor's thesis (Meta Quest 3). Reverse-engineered BLE protocols of CPR dummies to provide real-time, spatial (passthrough) visual and auditory feedback based on didactic scaffolding.",
    },
    tech: ["Unity", "C#", "Meta SDK", "BLE"],
  },
  {
    title: "Civitas (SaaS)",
    description: {
      nl: "Multi-tenant SaaS-platform voor multiculturele verenigingen (MVP in productie). Biedt naadloos ledenbeheer en slimme betalingslinks direct via WhatsApp.",
      en: "Multi-tenant SaaS platform for multicultural associations (MVP in production). Features seamless member management and smart payment links sent directly via WhatsApp.",
    },
    tech: ["C#", ".NET Core", "Blazor", "Stripe", "Twilio API", "Clean Architecture"],
  },
  {
    title: "Nextline Digital",
    description: {
      nl: "Automatisering van bedrijfsprocessen en ontwikkeling van landingspagina's.",
      en: "Business process automation and landing page development.",
    },
    tech: ["n8n", "Next.js"],
    upcoming: true,
  },
];

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border-subtle/50"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <SectionHeading index="04" title={heading[lang]} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-8px_rgba(124,156,255,0.35)]"
            >
              {/* Image placeholder */}
              <div className="relative flex aspect-video items-center justify-center bg-[#1c1c21]">
                <span className="font-mono text-xs uppercase tracking-wider text-muted/60">
                  {previewLabel[lang]}
                </span>
                {project.upcoming && (
                  <span className="absolute right-3 top-3 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {upcomingLabel[lang]}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description[lang]}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border-subtle bg-background px-2.5 py-1 font-mono text-xs text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
