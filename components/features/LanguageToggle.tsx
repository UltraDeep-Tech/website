'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { type Language } from '@/lib/i18n'
import { motion } from 'framer-motion'

export function LanguageToggle() {
  const { language, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'es' : 'en'
    changeLanguage(newLang)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="p-2 rounded-lg glass text-foreground/80 hover:text-foreground hover:glass-strong transition-all flex items-center justify-center"
      aria-label={`Toggle language (current: ${language})`}
      title={language === 'en' ? 'Español' : 'English'}
    >
      <Globe className="w-4 h-4" />
    </motion.button>
  )
}





