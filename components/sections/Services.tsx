'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Zap, TrendingUp, Shield, GraduationCap } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'

export function Services() {
  const { t } = useTranslation()
  
  const services = [
    {
      icon: Code,
      title: t('service_development'),
      description: t('service_development_desc'),
      href: '/services#development',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Zap,
      title: t('service_automation'),
      description: t('service_automation_desc'),
      href: '/services#automation',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: TrendingUp,
      title: t('service_strategy'),
      description: t('service_strategy_desc'),
      href: '/services#strategy',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: t('service_security'),
      description: t('service_security_desc'),
      href: '/services#security',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: GraduationCap,
      title: t('service_training'),
      description: t('service_training_desc'),
      href: '/services/training',
      color: 'from-warm-500 to-orange-500',
    },
  ]
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 relative overflow-hidden">
      <BackgroundEffects variant="section" intensity="low" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
            {t('services_title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 [data-theme='light']:text-slate-700 max-w-2xl mx-auto px-4">
            {t('services_subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={service.href}
                  className="block h-full glass rounded-2xl p-6 sm:p-8 hover:glass-strong transition-all group relative overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  {/* Icon with Enhanced Animation */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ 
                      scale: { type: 'spring', stiffness: 400 },
                      rotate: { duration: 0.5 },
                    }}
                  >
                    <Icon className="w-7 h-7 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground [data-theme='light']:text-slate-900 mb-2 sm:mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/60 [data-theme='light']:text-slate-700 mb-4 sm:mb-6 relative z-10">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center text-primary-400 [data-theme='light']:text-primary-600 font-medium relative z-10"
                    whileHover={{ x: 5 }}
                  >
                    <span>{t('learn_more')}</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

