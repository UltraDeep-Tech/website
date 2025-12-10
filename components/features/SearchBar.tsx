'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface SearchResult {
  title: string
  description: string
  href: string
  type: 'product' | 'service' | 'page' | 'blog'
}

export function SearchBar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Datos de búsqueda (en producción, esto vendría de una API o índice)
  const searchData: SearchResult[] = [
    // Products
    {
      title: 'Safety Shield Ultra™',
      description: 'Real-time defense against prompt injection, leakage & model hijacking',
      href: '/products/safety-shield',
      type: 'product'
    },
    {
      title: 'Lucid™',
      description: 'Eliminate cognitive biases automatically and improve business decisions',
      href: 'https://site.lucidapp.io/',
      type: 'product'
    },
    {
      title: 'AI Model Protection Suite',
      description: 'Prevent reverse engineering and misuse of your proprietary AI models',
      href: '/products#model-protection',
      type: 'product'
    },
    {
      title: 'Enterprise AI Security',
      description: 'Comprehensive protection with encryption, access control, and audits',
      href: '/products#enterprise',
      type: 'product'
    },
    {
      title: 'AI Performance Optimization',
      description: 'Boost latency, accuracy & cost-efficiency with model optimization tools',
      href: '/products#optimization',
      type: 'product'
    },
    // Services
    {
      title: 'Custom AI Development',
      description: 'We build custom AI-powered applications tailored to your business',
      href: '/services#development',
      type: 'service'
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to save time and reduce errors',
      href: '/services#automation',
      type: 'service'
    },
    {
      title: 'AI Strategy & Consulting',
      description: 'Strategic guidance to identify AI opportunities and build your roadmap',
      href: '/services#strategy',
      type: 'service'
    },
    {
      title: 'AI Security & Compliance',
      description: 'Secure your AI systems and ensure compliance with security audits',
      href: '/services#security',
      type: 'service'
    },
    {
      title: 'Training & Education',
      description: 'Build your team\'s AI expertise with comprehensive training programs and certifications',
      href: '/services/training',
      type: 'service'
    },
    {
      title: 'AI Security Assessment',
      description: 'Comprehensive security assessment for your AI systems',
      href: '/services#assessment',
      type: 'service'
    },
    // Courses
    {
      title: 'AISP - AI Security Professional',
      description: 'Comprehensive certification in AI security fundamentals and best practices',
      href: '/services/training#aisp',
      type: 'service'
    },
    {
      title: 'AIGP - AI Governance Professional',
      description: 'Learn governance frameworks and compliance for AI systems',
      href: '/services/training#aigp',
      type: 'service'
    },
    {
      title: 'Enterprise AI Security Course',
      description: 'Advanced training for securing AI at enterprise scale',
      href: '/services/training#enterprise',
      type: 'service'
    },
    // Pages
    {
      title: 'About Us',
      description: 'Learn more about Ultra Deep Tech and our mission',
      href: '/about',
      type: 'page'
    },
    {
      title: 'Products',
      description: 'Explore our AI security and automation products',
      href: '/products',
      type: 'page'
    },
    {
      title: 'Services',
      description: 'Discover our AI consulting and development services',
      href: '/services',
      type: 'page'
    },
    {
      title: 'Contact',
      description: 'Get in touch with us for a consultation',
      href: '/contact',
      type: 'page'
    },
    {
      title: 'Case Studies',
      description: 'View our successful AI implementation case studies',
      href: '/case-studies',
      type: 'page'
    },
  ]

  useEffect(() => {
    if (query.length > 0) {
      const lowerQuery = query.toLowerCase().trim()
      const filtered = searchData.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery)
        const descMatch = item.description.toLowerCase().includes(lowerQuery)
        const typeMatch = item.type.toLowerCase().includes(lowerQuery)
        
        // Búsqueda más inteligente: buscar palabras individuales
        const queryWords = lowerQuery.split(/\s+/)
        const wordsMatch = queryWords.length > 1 ? queryWords.every(word => 
          item.title.toLowerCase().includes(word) ||
          item.description.toLowerCase().includes(word)
        ) : false
        
        return titleMatch || descMatch || typeMatch || wordsMatch
      })
      
      // Ordenar por relevancia: título primero, luego descripción
      const sorted = filtered.sort((a, b) => {
        const aTitleMatch = a.title.toLowerCase().startsWith(lowerQuery) ? 2 : 
                           a.title.toLowerCase().includes(lowerQuery) ? 1 : 0
        const bTitleMatch = b.title.toLowerCase().startsWith(lowerQuery) ? 2 : 
                           b.title.toLowerCase().includes(lowerQuery) ? 1 : 0
        
        if (aTitleMatch !== bTitleMatch) return bTitleMatch - aTitleMatch
        
        const aDescMatch = a.description.toLowerCase().includes(lowerQuery) ? 1 : 0
        const bDescMatch = b.description.toLowerCase().includes(lowerQuery) ? 1 : 0
        
        return bDescMatch - aDescMatch
      })
      
      setResults(sorted.slice(0, 8))
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setQuery('')
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
        aria-label={t('search_placeholder')}
        aria-expanded={isOpen}
      >
        <Search className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-80 sm:w-96 glass-strong rounded-xl p-4 shadow-xl z-50 border border-white/10 [data-theme='light']:border-slate-200/50"
          >
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-foreground/60 [data-theme='light']:text-slate-600" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('search_placeholder')}
                className="flex-1 bg-transparent border-none outline-none text-foreground [data-theme='light']:text-slate-900 placeholder:text-foreground/40 [data-theme='light']:placeholder:text-slate-500"
                autoFocus
              />
              <button
                onClick={() => {
                  setIsOpen(false)
                  setQuery('')
                }}
                className="p-1 rounded hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5"
                aria-label="Cerrar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {results.length > 0 && (
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {results.map((result, index) => {
                  const isExternal = result.href.startsWith('http')
                  return isExternal ? (
                    <a
                      key={index}
                      href={result.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setIsOpen(false)
                        setQuery('')
                      }}
                      className="block p-3 rounded-lg hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xs px-2 py-1 rounded bg-primary-500/20 text-primary-400 font-medium capitalize flex-shrink-0">
                          {result.type}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground [data-theme='light']:text-slate-900 truncate">{result.title}</p>
                          <p className="text-sm text-foreground/60 [data-theme='light']:text-slate-700 line-clamp-2">{result.description}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link
                      key={index}
                      href={result.href}
                      onClick={() => {
                        setIsOpen(false)
                        setQuery('')
                      }}
                      className="block p-3 rounded-lg hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xs px-2 py-1 rounded bg-primary-500/20 text-primary-400 font-medium capitalize flex-shrink-0">
                          {result.type}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground [data-theme='light']:text-slate-900 truncate">{result.title}</p>
                          <p className="text-sm text-foreground/60 [data-theme='light']:text-slate-700 line-clamp-2">{result.description}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}

            {query.length > 0 && results.length === 0 && (
              <p className="text-sm text-foreground/60 [data-theme='light']:text-slate-700 text-center py-4">
                {t('search_no_results')}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
