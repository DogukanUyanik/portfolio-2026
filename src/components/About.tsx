"use client";

import SectionHeading from "@/src/components/SectionHeading";
import { useLanguage } from "@/src/i18n/LanguageContext";

const t = {
  heading: { nl: "Over mij", en: "About" },
  label: { nl: "Wie ik ben", en: "Who I am" },
  paragraphs: {
    nl: [
      "Ik ben een full-stack software developer gericht op het bouwen van robuuste, schaalbare systemen — van enterprise applicaties en offline-first PWA's tot multi-tenant SaaS platformen en mixed reality proof-of-concepts.",
      "Ik hecht veel waarde aan clean architecture en onderhoudbare code, en raak gemotiveerd door werk waar sterke techniek samenkomt met echte maatschappelijke impact. Ik beweeg me comfortabel door de hele stack, van .NET en Java backends tot moderne React en Blazor frontends.",
    ],
    en: [
      "I'm a full-stack software developer focused on building robust, scalable systems — from enterprise applications and offline-first PWAs to multi-tenant SaaS platforms and mixed reality proof-of-concepts.",
      "I care about clean architecture and maintainable code, and I'm motivated by work that pairs strong engineering with real social impact. I move comfortably across the stack, from .NET and Java backends to modern React and Blazor frontends.",
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 border-t border-border-subtle/50">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <SectionHeading index="01" title={t.heading[lang]} />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <p className="text-sm font-medium uppercase tracking-wider text-muted">
            {t.label[lang]}
          </p>
          <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-muted">
            {t.paragraphs[lang].map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
