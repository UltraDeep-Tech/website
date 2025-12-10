'use client'

import { motion } from 'framer-motion'
import { Users, Shield, Award, TrendingUp } from 'lucide-react'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { useTranslation } from '@/hooks/useTranslation'

export function Stats() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'
  
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: isSpanish ? 'Empresas Protegidas' : 'Companies Protected',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Shield,
      value: '1M+',
      label: isSpanish ? 'Interacciones IA Protegidas' : 'AI Interactions Secured',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Award,
      value: '99.9%',
      label: isSpanish ? 'Tiempo de Actividad' : 'Uptime',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      value: '24/7',
      label: isSpanish ? 'Monitoreo Continuo' : 'Continuous Monitoring',
      color: 'from-emerald-500 to-green-500',
    },
  ]

  return (
    <section className="py-4 sm:py-6 md:py-8 relative overflow-hidden bg-section-alt">
      <BackgroundEffects variant="minimal" intensity="low" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 50 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="glass rounded-xl p-3 sm:p-4 md:p-5 text-center hover:glass-strong transition-all relative overflow-hidden group cursor-pointer">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 relative z-10`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 360,
                    }}
                    transition={{ 
                      scale: { type: 'spring', stiffness: 400 },
                      rotate: { duration: 0.6 },
                    }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-foreground/60 [data-theme='light']:text-slate-700 relative z-10 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
