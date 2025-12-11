'use client'

import { useState, useEffect } from 'react'
import { type Language, setLanguage as setLang, useLanguage as getLang } from '@/lib/i18n'

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Get initial language
    const initialLang = getLang()
    setLanguageState(initialLang)

    // Listen for language changes
    const handleLanguageChange = () => {
      const currentLang = getLang()
      setLanguageState(currentLang)
    }

    window.addEventListener('languagechange', handleLanguageChange)
    return () => window.removeEventListener('languagechange', handleLanguageChange)
  }, [])

  const changeLanguage = (lang: Language) => {
    setLang(lang)
    setLanguageState(lang)
  }

  return { language, changeLanguage }
}










