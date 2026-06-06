"use client";

import { useState } from "react";

import SectionHeading from "@/src/components/SectionHeading";
import { useLanguage, type Localized } from "@/src/i18n/LanguageContext";

const heading: Localized = { nl: "Projecten", en: "Projects" };
const previewLabel: Localized = { nl: "Voorbeeld", en: "Preview" };
const upcomingLabel: Localized = { nl: "Binnenkort", en: "Upcoming" };
const demoLabel: Localized = { nl: "Volledige Demo ↗", en: "Full Demo ↗" };

const projects: {
  title: string;
  description: Localized;
  tech: string[];
  image?: string;
  video?: string;
  link?: string;
  upcoming?: boolean;
}[] = [
  {
    title: "Vlaams Milieu Maatschappij",
    description: {
      nl: "Full-stack desktop en webapplicatie voor administratie, planning en werkbonnen, gecombineerd met een offline-first mobiele PWA voor technici op het terrein.",
      en: "Full-stack desktop and web application for administration, planning, and work orders, paired with an offline-first mobile PWA for field technicians.",
    },
    tech: ["C#", ".NET 8", "Blazor WASM", "SQLite"],
    image: "/vmm.png",
  },
  {
    title: "Mixed Reality CPR-Training (PoC)",
    description: {
      nl: "Bachelorthesis (Meta Quest 3). Reverse-engineering van BLE-protocollen van reanimatiepoppen voor real-time, ruimtelijke (passthrough) visuele en auditieve feedback. Gebouwd op didactische principes zoals scaffolding.",
      en: "Bachelor's thesis (Meta Quest 3). Reverse-engineered BLE protocols of CPR dummies to provide real-time, spatial (passthrough) visual and auditory feedback based on didactic scaffolding.",
    },
    tech: ["Unity", "C#", "Meta SDK", "BLE"],
    video: "/mr-cpr.mp4",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7450258437176946690/",
  },
  {
    title: "Civitas (SaaS)",
    description: {
      nl: "Multi-tenant SaaS-platform voor multiculturele verenigingen (MVP in productie). Biedt naadloos ledenbeheer en slimme betalingslinks direct via WhatsApp.",
      en: "Multi-tenant SaaS platform for multicultural associations (MVP in production). Features seamless member management and smart payment links sent directly via WhatsApp.",
    },
    tech: ["C#", ".NET Core", "Blazor", "Stripe", "Twilio API", "Clean Architecture"],
    image: "/civitas.png",
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
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

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
              {/* Project visual */}
              {project.upcoming ? (
                <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 sm:h-56">
                  <span className="absolute right-3 top-3 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {upcomingLabel[lang]}
                  </span>
                </div>
              ) : project.video ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-48 w-full overflow-hidden sm:h-56 cursor-pointer"
                >
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-black/70 px-4 py-2 font-mono text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
                      {demoLabel[lang]}
                    </span>
                  </div>
                </a>
              ) : project.image ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage({ src: project.image!, alt: project.title })
                  }
                  className="relative h-48 w-full cursor-zoom-in overflow-hidden sm:h-56"
                  aria-label={`${project.title} — ${previewLabel[lang]}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ) : (
                <div className="relative flex h-48 w-full items-center justify-center bg-[#1c1c21] sm:h-56">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted/60">
                    {previewLabel[lang]}
                  </span>
                </div>
              )}

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

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl leading-none text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            &times;
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </section>
  );
}
