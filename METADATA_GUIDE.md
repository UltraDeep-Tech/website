# 📝 Guía para Agregar Metadata a Páginas Client Components

## ⚠️ Problema

Las páginas con `'use client'` no pueden exportar `metadata` directamente. Next.js requiere que el metadata se exporte desde Server Components.

## ✅ Soluciones

### Opción 1: Crear layout.tsx en cada carpeta (Recomendado)

Para cada página que necesite metadata única, crear un `layout.tsx` en su carpeta:

**Ejemplo: `app/about/layout.tsx`**
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Ultra Deep Tech',
  description: 'Learn about Ultra Deep Tech - Your trusted AI consultancy partner. We help businesses transform with custom apps, process automation, and strategic AI guidance.',
  openGraph: {
    title: 'About Us - Ultra Deep Tech',
    description: 'Learn about Ultra Deep Tech - Your trusted AI consultancy partner.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
```

### Opción 2: Usar generateMetadata (Para metadata dinámica)

Si necesitas metadata que depende de parámetros dinámicos:

```tsx
// app/products/[id]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `Product ${params.id} - Ultra Deep Tech`,
    description: `...`,
  }
}
```

### Opción 3: Usar next/head (No recomendado para App Router)

Solo si es absolutamente necesario mantener como Client Component:

```tsx
'use client'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>About Us - Ultra Deep Tech</title>
        <meta name="description" content="..." />
      </Head>
      {/* contenido */}
    </>
  )
}
```

## 📋 Metadata Recomendada por Página

### About Page
```tsx
{
  title: 'About Us - Ultra Deep Tech',
  description: 'Learn about Ultra Deep Tech - Your trusted AI consultancy partner. We help businesses transform with custom apps, process automation, and strategic AI guidance.',
}
```

### Products Page
```tsx
{
  title: 'Products - Ultra Deep Tech',
  description: 'Discover enterprise-grade AI tools crafted for security, scalability, and performance. Safety Shield Ultra™, Lucid™, and more.',
}
```

### Services Page
```tsx
{
  title: 'Services - Ultra Deep Tech',
  description: 'We help businesses unlock the power of AI. Custom AI development, process automation, AI strategy consulting, security, and training services.',
}
```

### Contact Page
```tsx
{
  title: 'Contact Us - Ultra Deep Tech',
  description: 'Get in touch with Ultra Deep Tech. Have a question? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
}
```

## 🚀 Implementación Rápida

1. Crear `app/about/layout.tsx` con metadata
2. Crear `app/products/layout.tsx` con metadata
3. Crear `app/services/layout.tsx` con metadata
4. Crear `app/contact/layout.tsx` con metadata

Cada layout debe exportar solo el metadata y retornar `{children}`.

