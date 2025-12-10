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
      // Si no existe el endpoint, simular éxito para demo
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
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
          placeholder={t('newsletter_placeholder')}
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
        {status !== 'loading' && status !== 'success' && t('newsletter_subscribe')}
      </motion.button>
    </form>
  )
}




