import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { CompanyChatbot } from '@/components/features/CompanyChatbot'
import { ScrollToTop } from '@/components/features/ScrollToTop'
import { CookieBanner } from '@/components/features/CookieBanner'
import { StructuredData } from '@/components/StructuredData'
import { GlobalBackground } from '@/components/ui/GlobalBackground'
import { defaultMetadata } from './metadata'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { GoogleAnalytics } from '@/components/features/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <StructuredData />
        <ThemeProvider>
          <ErrorBoundary>
            <GlobalBackground />
            <div className="flex min-h-screen flex-col relative z-0">
              <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium"
              >
                Skip to main content
              </a>
              <Header />
              <main id="main-content" className="flex-1 relative z-10">
                {children}
              </main>
              <Footer />
            </div>
            <CompanyChatbot />
            <ScrollToTop />
            <CookieBanner />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}

