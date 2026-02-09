"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Locale } from "@/lib/i18n"
import { defaultLocale } from "@/lib/i18n"

interface LocaleContextType {
  locale: Locale
  switchLocale: (newLocale: Locale) => void
  isLoaded: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

interface LocaleProviderProps {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set initial dir and lang attributes to default (RTL for Arabic)
    document.documentElement.setAttribute("dir", defaultLocale === "ar" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", defaultLocale)

    // Check for saved locale in localStorage
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
      setLocale(savedLocale)
      document.documentElement.setAttribute("dir", savedLocale === "ar" ? "rtl" : "ltr")
      document.documentElement.setAttribute("lang", savedLocale)
    }
    
    setIsLoaded(true)
  }, [])

  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.setAttribute("dir", newLocale === "ar" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, switchLocale, isLoaded }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
