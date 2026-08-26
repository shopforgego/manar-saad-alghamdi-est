"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "ar" | "en"

type LanguageContextType = {
  lang: Language
  toggleLang: () => void
  t: (text: { ar: string; en: string }) => string
  dir: "rtl" | "ltr"
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"))
  }, [])

  const t = useCallback(
    (text: { ar: string; en: string }) => text[lang],
    [lang]
  )

  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      <div dir={dir} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
