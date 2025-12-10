'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { NewsletterForm } from '@/components/features/NewsletterForm'

export function Footer() {
  const { t, language } = useTranslation()
  const currentYear = new Date().getFullYear()
  const isSpanish = language === 'es'

  const footerLinks = {
    company: [
      { label: t('nav_about'), href: '/about' },
      { label: t('nav_blog'), href: '/blog' },
      { label: t('nav_contact'), href: '/contact' },
    ],
    products: [
      { label: t('product_safety_shield'), href: '/products/safety-shield' },
      { label: t('product_lucid'), href: 'https://site.lucidapp.io/' },
      { label: t('product_model_protection'), href: '/products#model-protection' },
      { label: t('product_enterprise'), href: '/products#enterprise' },
    ],
    services: [
      { label: t('service_training'), href: '/services/training' },
      { label: t('service_assessment'), href: '/services#assessment' },
      { label: t('service_implementation'), href: '/services#implementation' },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ultradeeptech/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ultra-deep-tech/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCivpA1Q4U8Y09Kvp1_j5QRg', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://www.tiktok.com/@ultradeeptech', label: 'TikTok' },
  ]

  return (
    <footer className="border-t border-white/10 [data-theme='light']:border-slate-200 bg-section-alt backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center space-x-3 mb-4"
              aria-label="Ultra Deep Tech - Home"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">UDT</span>
              </div>
              <span className="text-xl font-display font-bold text-gradient">
                Ultra Deep Tech
              </span>
            </Link>
            <p className="text-foreground/60 text-sm mb-6 max-w-md">
              {t('footer_about')}
            </p>
            <Link
              href="https://calendly.com/avipil/30-min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('nav_book_call')}
              className="inline-block px-6 py-2.5 rounded-lg bg-gradient-primary text-white font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all mb-6"
            >
              {t('nav_book_call')}
            </Link>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="font-semibold text-foreground mb-3 text-sm">
                {t('newsletter_title')}
              </h3>
              <p className="text-sm text-foreground/60 mb-3">
                {t('newsletter_description')}
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer_useful_links')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer_products')}</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer_services')}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 [data-theme='light']:border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Ultra Deep Tech. {t('all_rights_reserved')}.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-foreground/60" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

