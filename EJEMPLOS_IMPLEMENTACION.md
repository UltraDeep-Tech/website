# 💻 Ejemplos de Implementación - Mejoras Críticas

## 1. 🖼️ Optimización de Imágenes en Clients.tsx

### ❌ Código Actual (Problema):
```tsx
<Image
  src={client.logo}
  alt={client.name}
  width={120}
  height={60}
  className="object-contain max-w-full max-h-full filter grayscale group-hover:grayscale-0 transition-all [data-theme='light']:grayscale-0"
  unoptimized  // ❌ PROBLEMA: Desactiva optimización
/>
```

### ✅ Código Mejorado:
```tsx
<Image
  src={client.logo}
  alt={`${client.name} - Cliente de Ultra Deep Tech`}  // ✅ Alt text descriptivo
  width={120}
  height={60}
  loading="lazy"  // ✅ Lazy loading para imágenes below-fold
  quality={85}  // ✅ Calidad optimizada
  className="object-contain max-w-full max-h-full filter grayscale group-hover:grayscale-0 transition-all [data-theme='light']:grayscale-0"
  // ✅ Removido unoptimized - Next.js optimizará automáticamente
/>
```

---

## 2. 📊 Schema Markup para Productos

### ✅ Agregar al StructuredData.tsx:

```tsx
'use client'

import { useLanguage } from '@/hooks/useLanguage'

export function StructuredData() {
  const { language } = useLanguage()
  const isSpanish = language === 'es'

  // ... código existente ...

  // ✅ NUEVO: Schema para Productos
  const productsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Safety Shield Ultra™",
      "description": isSpanish
        ? "Defensa en tiempo real contra inyección de prompts, fuga de datos y secuestro de modelos."
        : "Real-time defense against prompt injection, leakage & model hijacking.",
      "brand": {
        "@type": "Brand",
        "name": "Ultra Deep Tech"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "url": "https://ultradeeptech.com/products/safety-shield"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Lucid™",
      "description": isSpanish
        ? "Elimina sesgos cognitivos automáticamente y mejora las decisiones empresariales."
        : "Eliminate cognitive biases automatically and improve business decisions.",
      "brand": {
        "@type": "Brand",
        "name": "Ultra Deep Tech"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "url": "https://ultradeeptech.com/products/lucid"
      }
    }
  ]

  // ✅ NUEVO: Schema para Servicios
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consultancy",
    "provider": {
      "@type": "Organization",
      "name": "Ultra Deep Tech"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://ultradeeptech.com/contact"
    }
  }

  // ✅ NUEVO: BreadcrumbList Schema (para SEO)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ultradeeptech.com"
      }
      // Se puede extender dinámicamente según la página
    ]
  }

  return (
    <>
      {/* Scripts existentes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* ✅ NUEVOS: Schemas adicionales */}
      {productsSchema.map((product, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  )
}
```

---

## 3. 🔍 Componente de Búsqueda

### ✅ Crear: `components/features/SearchBar.tsx`

```tsx
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
    {
      title: 'Safety Shield Ultra™',
      description: 'Real-time defense against prompt injection',
      href: '/products/safety-shield',
      type: 'product'
    },
    {
      title: 'Lucid™',
      description: 'Eliminate cognitive biases automatically',
      href: '/products/lucid',
      type: 'product'
    },
    {
      title: 'AI Development',
      description: 'Custom AI application development',
      href: '/services#development',
      type: 'service'
    },
    // ... más resultados
  ]

  useEffect(() => {
    if (query.length > 2) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 5))
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
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
        className="p-2 rounded-lg hover:bg-white/5 transition-colors"
        aria-label="Buscar"
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
            className="absolute top-full right-0 mt-2 w-96 glass-strong rounded-xl p-4 shadow-xl z-50"
          >
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-foreground/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('search_placeholder') || 'Buscar productos, servicios...'}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-foreground/40"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-white/5"
                aria-label="Cerrar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {results.length > 0 && (
              <div className="space-y-1">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    onClick={() => setIsOpen(false)}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs px-2 py-1 rounded bg-primary-500/20 text-primary-400">
                        {result.type}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{result.title}</p>
                        <p className="text-sm text-foreground/60">{result.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {query.length > 2 && results.length === 0 && (
              <p className="text-sm text-foreground/60 text-center py-4">
                No se encontraron resultados
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

### ✅ Agregar al Header.tsx:

```tsx
import { SearchBar } from '@/components/features/SearchBar'

// En el componente Header, agregar:
<div className="hidden lg:flex items-center space-x-1">
  {/* ... navItems existentes ... */}
</div>

{/* ✅ AGREGAR: SearchBar antes de CTA Buttons */}
<div className="hidden lg:flex items-center space-x-4">
  <SearchBar />  {/* ✅ NUEVO */}
  <LanguageToggle />
  <ThemeToggle />
  {/* ... resto del código ... */}
</div>
```

---

## 4. 🍞 Componente Breadcrumbs

### ✅ Crear: `components/ui/Breadcrumbs.tsx`

```tsx
'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useTranslation()

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-foreground/60 hover:text-foreground transition-colors flex items-center"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-foreground/40 mx-2" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

### ✅ Uso en páginas de productos:

```tsx
// app/products/safety-shield/page.tsx
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export default function SafetyShieldPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Safety Shield Ultra™' }
        ]}
      />
      {/* ... resto del contenido ... */}
    </>
  )
}
```

---

## 5. 📧 Formulario de Newsletter

### ✅ Crear: `components/features/NewsletterForm.tsx`

```tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Loader2 } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export function NewsletterForm() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Aquí integrarías con tu servicio de email marketing
      // Ejemplo: Mailchimp, SendGrid, etc.
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="flex-1 relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter_placeholder') || 'tu@email.com'}
          required
          className="w-full pl-10 pr-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:outline-none text-foreground placeholder:text-foreground/40"
          disabled={status === 'loading'}
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        whileHover={{ scale: status === 'idle' ? 1.05 : 1 }}
        whileTap={{ scale: status === 'idle' ? 0.95 : 1 }}
        className="px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
        {status === 'success' && <Check className="w-5 h-5" />}
        {status !== 'loading' && status !== 'success' && (t('newsletter_subscribe') || 'Suscribirse')}
      </motion.button>
    </form>
  )
}
```

### ✅ Agregar al Footer.tsx:

```tsx
import { NewsletterForm } from '@/components/features/NewsletterForm'

// En el Footer, agregar en la sección de Brand:
<div className="lg:col-span-2">
  {/* ... código existente ... */}
  
  {/* ✅ NUEVO: Newsletter */}
  <div className="mt-6">
    <h3 className="font-semibold text-foreground mb-3 text-sm">
      {t('newsletter_title') || 'Newsletter'}
    </h3>
    <p className="text-sm text-foreground/60 mb-3">
      {t('newsletter_description') || 'Recibe las últimas noticias sobre IA'}
    </p>
    <NewsletterForm />
  </div>
</div>
```

---

## 6. 🔄 Lazy Loading de Componentes

### ✅ Mejorar: `app/page.tsx`

```tsx
'use client'

import { Hero } from '@/components/sections/Hero'
import { Clients } from '@/components/sections/Clients'
import { Automation } from '@/components/sections/Automation'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Courses } from '@/components/sections/Courses'
import { SectionDivider } from '@/components/ui/SectionDivider'
import dynamic from 'next/dynamic'

// ✅ Lazy load de componentes pesados
const Testimonials = dynamic(
  () => import('@/components/sections/Testimonials'),
  { 
    ssr: true,
    loading: () => <div className="py-20 text-center">Cargando testimonios...</div>
  }
)

const CTA = dynamic(
  () => import('@/components/sections/CTA'),
  { 
    ssr: true,
    loading: () => <div className="py-20 text-center">Cargando...</div>
  }
)

const Awards = dynamic(
  () => import('@/components/sections/Awards'),
  { 
    ssr: true,
    loading: () => <div className="py-20 text-center">Cargando premios...</div>
  }
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Products />
      <SectionDivider />
      <Awards />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Courses />
      <SectionDivider />
      <Clients />
      <SectionDivider />
      <Automation />
      <SectionDivider />
      <Testimonials />  {/* ✅ Ahora con lazy loading */}
      <SectionDivider />
      <CTA />  {/* ✅ Ahora con lazy loading */}
    </>
  )
}
```

---

## 7. ⚡ Mejoras en next.config.js

### ✅ Configuración Optimizada:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  // ✅ Optimización de imágenes mejorada
  images: {
    domains: ['localhost', 'ultradeeptech.com'],  // ✅ Agregar dominio de producción
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,  // ✅ Si usas SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // ✅ Optimización de paquetes
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // ✅ Compilador optimizado
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],  // ✅ Mantener errores y warnings
    } : false,
  },
  
  // ✅ Headers de seguridad mejorados
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // ✅ NUEVOS headers de seguridad
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      // ✅ Headers de cache para assets estáticos
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

---

## 8. 📊 Google Analytics 4

### ✅ Crear: `lib/analytics.ts`

```tsx
// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// ✅ Inicializar GA4
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// ✅ Track eventos personalizados
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// ✅ Declarar tipos para TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}
```

### ✅ Crear: `components/features/GoogleAnalytics.tsx`

```tsx
'use client'

import Script from 'next/script'
import { GA_TRACKING_ID } from '@/lib/analytics'

export function GoogleAnalytics() {
  if (!GA_TRACKING_ID) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
```

### ✅ Agregar al layout.tsx:

```tsx
import { GoogleAnalytics } from '@/components/features/GoogleAnalytics'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />  {/* ✅ NUEVO */}
      </head>
      <body>
        {/* ... resto del código ... */}
      </body>
    </html>
  )
}
```

### ✅ Uso en componentes:

```tsx
// Ejemplo: Trackear clicks en CTAs
import { event } from '@/lib/analytics'

<Link
  href="/contact"
  onClick={() => event({
    action: 'click',
    category: 'CTA',
    label: 'Hero Get Started'
  })}
>
  Get Started
</Link>
```

---

## 9. 🎯 Error Boundary

### ✅ Crear: `components/ErrorBoundary.tsx`

```tsx
'use client'

import React, { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // ✅ Aquí puedes enviar el error a un servicio de logging
    console.error('Error capturado:', error, errorInfo)
    
    // Ejemplo: Enviar a Sentry
    // Sentry.captureException(error, { contexts: { react: errorInfo } })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full glass-strong rounded-2xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Algo salió mal</h2>
            <p className="text-foreground/60 mb-6">
              Lo sentimos, ocurrió un error inesperado.
            </p>
            <Button
              onClick={() => {
                this.setState({ hasError: false, error: undefined })
                window.location.reload()
              }}
              className="w-full"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Recargar página
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
```

### ✅ Usar en layout.tsx:

```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <ErrorBoundary>
            {/* ... resto del código ... */}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

## 📝 Notas de Implementación

1. **Priorizar**: Implementa primero las mejoras de imágenes y lazy loading (mayor impacto en performance)

2. **Testing**: Prueba cada cambio en desarrollo antes de producción

3. **Monitoreo**: Usa Lighthouse para medir mejoras después de cada cambio

4. **Iteración**: Implementa mejoras de forma incremental, no todo de una vez

---

*Ejemplos listos para implementar - Ajusta según tus necesidades específicas*

