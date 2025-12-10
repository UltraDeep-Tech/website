'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', 'denied')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="glass-strong rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Cookie Policy
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    This website uses cookies to enhance your user experience. By continuing to browse, you agree to our{' '}
                    <Link href="/politics#cookie" className="text-primary-400 hover:underline">
                      Cookie Policy
                    </Link>
                    . You can adjust your browser settings to manage or disable cookies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={handleAccept} size="sm">
                      Accept
                    </Button>
                    <Button onClick={handleDeny} variant="secondary" size="sm">
                      Deny
                    </Button>
                  </div>
                </div>
                <button
                  onClick={handleDeny}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 text-foreground/60" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}





