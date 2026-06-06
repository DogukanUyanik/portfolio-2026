"use client";

import { useState } from "react";
import { useLanguage, type Localized } from "@/src/i18n/LanguageContext";

const links: { label: Localized; href: string }[] = [
  { label: { nl: "Home", en: "Home" }, href: "#home" },
  { label: { nl: "Over mij", en: "About" }, href: "#about" },
  { label: { nl: "Tech Stack", en: "Tech Stack" }, href: "#tech-stack" },
  { label: { nl: "Ervaring", en: "Experience" }, href: "#experience" },
  { label: { nl: "Projecten", en: "Projects" }, href: "#projects" },
];

function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "nl" ? "Switch to English" : "Schakel naar Nederlands"}
      className={`flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3 py-1.5 font-mono text-xs transition-colors hover:border-foreground/30 ${className}`}
    >
      <span className={lang === "nl" ? "text-foreground" : "text-muted"}>NL</span>
      <span className="text-border-subtle">/</span>
      <span className={lang === "en" ? "text-foreground" : "text-muted"}>EN</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          DU<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label[lang]}
                </a>
              </li>
            ))}
          </ul>

          <LanguageToggle />

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border-subtle text-muted transition-colors hover:border-foreground/30 hover:text-foreground md:hidden"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border-subtle/60 bg-background/95 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label[lang]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
