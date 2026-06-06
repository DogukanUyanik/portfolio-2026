"use client";

import SectionHeading from "@/src/components/SectionHeading";
import { useLanguage, type Localized } from "@/src/i18n/LanguageContext";

const heading: Localized = { nl: "Tech Stack", en: "Tech Stack" };

const groups: { title: Localized; skills: string[] }[] = [
  {
    title: { nl: "Backend", en: "Backend" },
    skills: ["Java", "Spring Boot", "C#", ".NET", "Node.js"],
  },
  {
    title: { nl: "Frontend", en: "Frontend" },
    skills: ["Blazor WebAssembly", "React.js", "Next.js", "HTML5 / CSS3"],
  },
  {
    title: { nl: "Tools & Architectuur", en: "Tools & Architecture" },
    skills: ["Clean Architecture", "Git", "Azure DevOps", "SQL"],
  },
];

export default function TechStack() {
  const { lang } = useLanguage();

  return (
    <section
      id="tech-stack"
      className="scroll-mt-20 border-t border-border-subtle/50"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <SectionHeading index="02" title={heading[lang]} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title.en}
              className="rounded-xl border border-border-subtle bg-surface p-6 transition-colors hover:border-foreground/20"
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                {group.title[lang]}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border-subtle bg-background px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
