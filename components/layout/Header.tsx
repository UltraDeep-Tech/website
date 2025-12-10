'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LanguageToggle } from '@/components/features/LanguageToggle'
import { ThemeToggle } from '@/components/features/ThemeToggle'
import { SearchBar } from '@/components/features/SearchBar'
import { useTranslation } from '@/hooks/useTranslation'

export function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Debounce resize handler for better performance
  const resizeTimeoutRef = useRef<NodeJS.Timeout>()
  
  useEffect(() => {
    const handleResize = () => {
      // Clear previous timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      
      // Debounce resize events
      resizeTimeoutRef.current = setTimeout(() => {
        const mobile = window.innerWidth < 1024 // lg breakpoint
        setIsMobile(mobile)
        // En mobile, siempre mantener isScrolled como false para que no cambie el estilo
        if (mobile) {
          setIsScrolled(false)
        }
      }, 150)
    }
    
    // Initial check
    const mobile = window.innerWidth < 1024
    setIsMobile(mobile)
    if (mobile) {
      setIsScrolled(false)
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isMobile) {
      // En mobile, no escuchar scroll para evitar cambios de color
      setIsScrolled(false)
      return
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  // Bloquear scroll del body cuando el menú móvil está abierto
  const scrollPositionRef = useRef<number>(0)
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Guardar la posición actual del scroll
      scrollPositionRef.current = window.scrollY
      // Bloquear el scroll del body
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      // Prevenir scroll en iOS
      document.body.style.touchAction = 'none'
    } else {
      // Restaurar el scroll del body
      const scrollY = scrollPositionRef.current
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
      if (scrollY !== undefined) {
        window.scrollTo({ top: scrollY, behavior: 'instant' })
      }
    }
    
    return () => {
      // Limpiar estilos al desmontar
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isMobileMenuOpen])

  // Cerrar menú al hacer click fuera
  const menuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // También cerrar con tecla Escape
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsMobileMenuOpen(false)
        }
      }
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isMobileMenuOpen])

  const navItems = [
    {
      label: t('nav_about'),
      href: '/about',
      dropdown: [
        { label: t('nav_company_history'), href: '/about#history' },
        { label: t('nav_leadership_team'), href: '/about#team' },
        { label: t('nav_youtube'), href: 'https://www.youtube.com/@UltraDeepTech' },
        { label: t('nav_blog'), href: '/blog' },
      ],
    },
    {
      label: t('nav_products'),
      href: '/products',
      dropdown: [
        { label: t('product_safety_shield'), href: '/products/safety-shield' },
        { label: t('product_lucid'), href: 'https://site.lucidapp.io/' },
        { label: t('product_model_protection'), href: '/products#model-protection' },
        { label: t('product_enterprise'), href: '/products#enterprise' },
      ],
    },
    {
      label: t('nav_services'),
      href: '/services',
      dropdown: [
        { label: t('nav_case_studies'), href: '/case-studies' },
        { label: t('service_training'), href: '/services/training' },
        { label: t('service_assessment'), href: '/services#assessment' },
        { label: t('service_implementation'), href: '/services#implementation' },
      ],
    },
    { label: t('nav_contact'), href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        // En mobile siempre tiene fondo sólido sin efecto vidrio, en desktop solo cuando scrolleado
        isMobile
          ? 'bg-background/95 [data-theme=\'light\']:bg-white/95 shadow-lg border-b border-border/50'
          : isScrolled
          ? 'glass-strong shadow-lg shadow-primary-500/10 [data-theme=\'light\']:shadow-slate-200/50 transition-all duration-300'
          : 'bg-transparent transition-all duration-300'
      )}
    >
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="Ultra Deep Tech - Home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-xl">UDT</span>
              </div>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-display font-bold text-gradient hidden sm:inline">
              Ultra Deep Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors flex items-center gap-1"
                  aria-label={item.label}
                  aria-expanded={item.dropdown && activeDropdown === item.label}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-xl p-2 shadow-2xl border border-white/10 [data-theme='light']:border-slate-200/50 backdrop-blur-xl bg-black/95 [data-theme='light']:bg-white/95"
                    >
                      {item.dropdown.map((subItem) => {
                        const isExternal = subItem.href.startsWith('http')
                        return isExternal ? (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-foreground hover:bg-white/10 [data-theme='light']:hover:bg-slate-900/10 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-foreground hover:bg-white/10 [data-theme='light']:hover:bg-slate-900/10 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <SearchBar />
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="https://calendly.com/avipil/30-min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('nav_book_call')}
              className="px-6 py-2.5 rounded-lg bg-gradient-primary text-white font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all hover:scale-105"
            >
              {t('nav_book_call')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/10 overflow-y-auto overscroll-contain"
            style={{ 
              maxHeight: 'calc(100dvh - 4rem)', // Dynamic viewport height for mobile browsers
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y'
            }}
          >
            <div className="container mx-auto px-4 py-6 space-y-2 pb-8">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => {
                        const isExternal = subItem.href.startsWith('http')
                        return isExternal ? (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 rounded-lg text-sm text-foreground/60 hover:text-foreground/80 hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 rounded-lg text-sm text-foreground/60 hover:text-foreground/80 hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <SearchBar />
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <Link
                href="https://calendly.com/avipil/30-min"
                target="_blank"
                className="block mt-4 px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav_book_call')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

