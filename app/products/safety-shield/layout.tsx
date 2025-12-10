import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safety Shield Ultra™',
  description: 'Real-time defense against prompt injection, leakage & model hijacking. Enterprise-grade protection for your conversational AI.',
  icons: {
    icon: '/icon-udt.svg',
    apple: '/icon-udt.svg',
  },
}

export default function SafetyShieldLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

