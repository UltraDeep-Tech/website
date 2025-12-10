'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { YouTubeCarousel } from '@/components/features/YouTubeCarousel'

export function CTA() {
  const { t } = useTranslation()
  
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 relative overflow-hidden">
      {/* Animated Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Enhanced Background Effects */}
      <BackgroundEffects variant="accent" intensity="high" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
          className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t('cta_title')}
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-foreground/70 [data-theme='light']:text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t('cta_subtitle')}
            </motion.p>

            {/* YouTube Videos Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-8 sm:mb-10 px-4"
            >
              <YouTubeCarousel />
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-cta text-white text-sm sm:text-base font-semibold overflow-hidden flex items-center justify-center gap-2"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {t('cta_button')}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 shadow-lg shadow-primary-500/50"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://calendly.com/avipil/30-min"
                  target="_blank"
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg glass text-foreground [data-theme='light']:text-slate-900 text-sm sm:text-base font-semibold overflow-hidden flex items-center justify-center gap-2 backdrop-blur-xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 [data-theme='light']:bg-slate-900/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Sparkles className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">{t('cta_book_call')}</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

