'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Lock, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'


export function Awards() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'

  const benefits = [
    {
      icon: Shield,
      text: t('awards_benefit_realtime'),
    },
    {
      icon: Lock,
      text: t('awards_benefit_data'),
    },
    {
      icon: TrendingUp,
      text: t('awards_benefit_compliance'),
    },
  ]

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 relative overflow-hidden bg-section-alt">
      <BackgroundEffects variant="accent" intensity="medium" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Award Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="text-center mb-4 sm:mb-6"
          >
            <motion.div
              className="inline-block mb-6 sm:mb-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 flex items-center justify-center mx-auto shadow-2xl shadow-primary-500/50">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" />
                </div>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 opacity-50 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-4">
                {isSpanish ? (
                  <>
                    Premio por <span className="text-gradient">Safety Shield Ultra™</span>
                  </>
                ) : (
                  <>
                    Award-Winning <span className="text-gradient">Safety Shield Ultra™</span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 [data-theme='light']:text-slate-700 max-w-3xl mx-auto px-4 mb-6 sm:mb-8">
                {t('awards_description')}
              </p>
            </motion.div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                      },
                    },
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 17,
                    },
                  }}
                  className="glass-strong rounded-xl p-4 sm:p-6 text-center group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground/80 [data-theme='light']:text-slate-800 font-medium">
                    {benefit.text}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-strong rounded-2xl p-6 sm:p-8 md:p-10 mb-4 sm:mb-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4 text-foreground [data-theme='light']:text-slate-900">
                  {t('awards_protection_title')}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/70 [data-theme='light']:text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {t('awards_protection_desc')}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    t('awards_feature_1'),
                    t('awards_feature_2'),
                    t('awards_feature_3'),
                    t('awards_feature_4'),
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/80 [data-theme='light']:text-slate-800">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link href="/products/safety-shield">
              <Button variant="default" size="lg" className="group">
                {t('awards_cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



