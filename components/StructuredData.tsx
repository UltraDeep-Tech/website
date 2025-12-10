'use client'

import { useLanguage } from '@/hooks/useLanguage'

export function StructuredData() {
  const { language } = useLanguage()
  const isSpanish = language === 'es'

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ultra Deep Tech",
    "alternateName": "UDT",
    "url": "https://ultradeeptech.com",
    "logo": "https://ultradeeptech.com/logo.png",
    "description": isSpanish
      ? "Transformamos empresas con inteligencia artificial. Desarrollamos aplicaciones personalizadas, automatizamos procesos y proporcionamos orientación estratégica en IA."
      : "Transform your business with AI. We build custom apps, automate processes, and provide strategic AI guidance.",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-9-11-7645-5965",
      "contactType": "customer service",
      "email": "contact@ultradeeptech.com",
      "areaServed": "AR",
      "availableLanguage": ["en", "es"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Corrientes 800",
      "addressLocality": "Ciudad Autónoma de Buenos Aires",
      "postalCode": "C1008",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.instagram.com/ultradeeptech/",
      "https://www.linkedin.com/company/ultra-deep-tech/",
      "https://www.youtube.com/channel/UCivpA1Q4U8Y09Kvp1_j5QRg",
      "https://www.tiktok.com/@ultradeeptech"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ultra Deep Tech",
    "url": "https://ultradeeptech.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ultradeeptech.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Schema para Productos
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

  // Schema para Servicios
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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


