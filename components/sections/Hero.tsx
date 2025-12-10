'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { useRef, useMemo } from 'react'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { Typewriter } from '@/components/ui/Typewriter'

export function Hero() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 0])

  // Get typewriter phrases from translations - memoized for performance
  const titlePhrases = useMemo(() => [
    t('hero_title_phrases_0' as any),
    t('hero_title_phrases_1' as any),
    t('hero_title_phrases_2' as any),
    t('hero_title_phrases_3' as any),
  ], [t])
  
  const subtitlePhrases = useMemo(() => [
    t('hero_subtitle_phrases_0' as any),
    t('hero_subtitle_phrases_1' as any),
    t('hero_subtitle_phrases_2' as any),
    t('hero_subtitle_phrases_3' as any),
  ], [t])

  return (
    <section 
      ref={ref} 
      className="relative h-screen min-h-[90vh] flex items-center justify-center overflow-hidden pt-0 sm:pt-12 md:pt-16 pb-4 sm:pb-8 md:pb-12"
      style={{ 
        minHeight: '100dvh', // Dynamic viewport height for mobile browsers
        paddingTop: 'env(safe-area-inset-top, 0)',
        paddingBottom: 'env(safe-area-inset-bottom, 0)'
      }}
    >
      {/* Enhanced Background Effects - Solo efectos adicionales del Hero */}
      <BackgroundEffects variant="hero" intensity="high" />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center"
      >
        <div className="max-w-3xl mx-auto text-center w-full flex flex-col justify-center items-center space-y-4 sm:space-y-6">
          {/* Enhanced Badge with Animation */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { 
              duration: 0.6,
              type: 'spring',
              stiffness: 100,
            }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full glass backdrop-blur-xl text-xs mb-1 sm:mb-2 md:mb-3"
          >
            <motion.span 
              className="w-2 h-2 bg-primary-500 [data-theme='light']:bg-primary-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 [data-theme='light']:text-primary-600 animate-pulse" />
            <span className="text-xs sm:text-sm text-foreground/90 [data-theme='light']:text-slate-900 font-medium">
              <span className="hidden sm:inline">{t('hero_badge')}</span>
              <span className="sm:hidden">
                {isSpanish ? 'Consultoría IA | Desarrollo | Automatización' : 'AI Consultancy | Development | Automation'}
              </span>
            </span>
          </motion.div>

          {/* Enhanced Main Heading with Stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 12,
                  },
                },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-2 sm:mb-3 md:mb-4 leading-[1.1] px-2 w-full"
            >
            <motion.span 
              className="text-gradient inline-block"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={prefersReducedMotion ? {} : { type: 'spring', stiffness: 400 }}
            >
                <Typewriter 
                  phrases={titlePhrases} 
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={2000}
                />
              </motion.span>
              <br />
              <motion.span 
                className="text-foreground [data-theme='light']:!text-slate-900 [data-theme='light']:!font-bold inline-block"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      delay: 0.2,
                      type: 'spring',
                      stiffness: 100,
                    },
                  },
                }}
              >
                <Typewriter 
                  phrases={subtitlePhrases} 
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={2000}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Subheading */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 [data-theme='light']:text-slate-800 mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed px-4 sm:px-5 font-medium w-full"
          >
            {t('hero_description')}
          </motion.p>

          {/* Quick Benefits */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5 px-4 w-full"
          >
            {[
              isSpanish ? '✓ Protección en Tiempo Real' : '✓ Real-Time Protection',
              isSpanish ? '✓ 99.9% Uptime' : '✓ 99.9% Uptime',
              isSpanish ? '✓ Certificaciones ISO' : '✓ ISO Certified',
            ].map((benefit, index) => (
              <motion.span
                key={index}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={prefersReducedMotion ? {} : { delay: 0.6 + index * 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full glass text-sm sm:text-base font-semibold text-foreground/95 [data-theme='light']:text-slate-900 backdrop-blur-sm shadow-lg"
              >
                {benefit}
              </motion.span>
            ))}
          </motion.div>

          {/* Enhanced CTAs with Better Interactions */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center px-4 w-full mt-2 sm:mt-3"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Link
                href="#products"
                className="group relative w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg bg-gradient-cta text-white text-sm sm:text-base md:text-lg font-semibold overflow-hidden flex items-center justify-center gap-2"
                aria-label={t('hero_get_started')}
                scroll={true}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero_get_started')}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 shadow-lg shadow-primary-500/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden sm:block absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.2 }}
          className="w-6 h-10 border-2 border-foreground/30 [data-theme='light']:border-slate-400/40 rounded-full flex items-start justify-center p-2 glass backdrop-blur-sm cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-foreground/50 [data-theme='light']:bg-slate-600/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

