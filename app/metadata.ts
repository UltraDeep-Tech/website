import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Ultra Deep Tech - AI Consultancy | Custom Development | Process Automation',
    template: '%s | Ultra Deep Tech',
  },
  description: 'Transform your business with AI. We build custom apps, automate processes, and provide strategic AI guidance. Your trusted AI consultancy partner.',
  keywords: [
    'AI consultancy',
    'custom AI development',
    'AI app development',
    'process automation',
    'AI strategy',
    'AI consulting',
    'business automation',
    'AI solutions',
    'enterprise AI',
    'AI security',
  ],
  authors: [{ name: 'Ultra Deep Tech' }],
  creator: 'Ultra Deep Tech',
  publisher: 'Ultra Deep Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ultradeeptech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://ultradeeptech.com',
    title: 'Ultra Deep Tech - AI Consultancy | Custom Development | Process Automation',
    description: 'Transform your business with AI. We build custom apps, automate processes, and provide strategic AI guidance.',
    siteName: 'Ultra Deep Tech',
    images: [
      {
        url: 'https://ultradeeptech.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ultra Deep Tech - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultra Deep Tech - AI Consultancy | Custom Development | Process Automation',
    description: 'Transform your business with AI. We build custom apps, automate processes, and provide strategic AI guidance.',
    creator: '@ultradeeptech',
    images: ['https://ultradeeptech.com/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/?lang=es',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon-udt.svg',
    apple: '/icon-udt.svg',
  },
}

