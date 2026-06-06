"use client";

import { useLanguage } from "@/src/i18n/LanguageContext";

const t = {
  badge: {
    nl: "Beschikbaar voor freelance opdrachten",
    en: "Available for freelance work",
  },
  subtitle: {
    nl: "Gedreven door technologie en maatschappelijke impact. Ik bouw schaalbare enterprise oplossingen en innovatieve platformen.",
    en: "Driven by technology and social impact. I build scalable enterprise solutions and innovative platforms.",
  },
  viewProjects: { nl: "Bekijk Projecten", en: "View Projects" },
  contact: { nl: "Neem Contact Op", en: "Get in Touch" },
  downloadCv: { nl: "Download CV", en: "Download CV" },
};

export default function Hero() {
  const { lang } = useLanguage();
  const cvHref = lang === "en" ? "/cv-en.pdf" : "/cv.pdf";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-20"
    >
      {/* Ambient background glow — top center/right, very low opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 opacity-[0.12] blur-[120px] sm:right-10"
      />

      <div className="mx-auto w-full max-w-5xl px-6 py-32">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {t.badge[lang]}
        </p>

        <h1 className="max-w-3xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
          Dogukan Uyanik
        </h1>

        <h2 className="mt-3 text-xl font-medium text-accent sm:text-2xl">
          Full-stack Software Developer
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {t.subtitle[lang]}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            {t.viewProjects[lang]}
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border-subtle px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-surface"
          >
            {t.contact[lang]}
          </a>
          <a
            href={cvHref}
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border-subtle px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-surface"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            {t.downloadCv[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
