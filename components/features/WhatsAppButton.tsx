'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    >
      <Link
        href="https://wa.link/2ebre2"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/50 flex items-center justify-center cursor-pointer"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 glass rounded-lg px-3 py-2 text-sm text-foreground whitespace-nowrap pointer-events-none"
        >
          Chat with us!
        </motion.div>
      </Link>
    </motion.div>
  )
}

