'use client'

import { useLanguage } from './useLanguage'
import { getTranslation } from '@/lib/i18n'
import type { Language } from '@/lib/i18n'

export type TranslationKey = keyof typeof import('@/lib/i18n').translations.en

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: TranslationKey): string => {
    return getTranslation(language, key)
  }

  return { t, language }
}

