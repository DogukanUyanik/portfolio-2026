"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "nl" | "en";

/** A string available in both supported languages. */
export type Localized = Record<Lang, string>;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");
  const toggle = () => setLang((current) => (current === "nl" ? "en" : "nl"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
