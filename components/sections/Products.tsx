'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Eye, Cpu, Lock, TrendingUp } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'


import { BackgroundEffects } from '@/components/ui/BackgroundEffects'

export function Products() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'
  
  const products = [
    {
      icon: Shield,
      title: t('product_safety_shield'),
      description: t('product_safety_shield_desc'),
      href: '/products/safety-shield',
      gradient: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Eye,
      title: t('product_lucid'),
      description: t('product_lucid_desc'),
      href: 'https://site.lucidapp.io/',
      gradient: 'from-pink-500 to-fuchsia-500',
    },
    {
      icon: Cpu,
      title: t('product_model_protection'),
      description: t('product_model_protection_desc'),
      href: '/products#model-protection',
      gradient: 'from-sky-500 to-cyan-500',
    },
    {
      icon: Lock,
      title: t('product_enterprise'),
      description: t('product_enterprise_desc'),
      href: '/products#enterprise',
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: TrendingUp,
      title: t('product_optimization'),
      description: t('product_optimization_desc'),
      href: '/products#optimization',
      gradient: 'from-warm-500 to-orange-500',
    },
  ]
  
  return (
    <section id="products" className="py-4 sm:py-6 md:py-8 relative overflow-hidden">
      <BackgroundEffects variant="section" intensity="medium" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2 sm:mb-3 px-4">
            {t('products_title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 [data-theme='light']:text-slate-700 max-w-2xl mx-auto px-4">
            {t('products_subtitle')}
          </p>
        </motion.div>

        {/* Featured Products - First Row */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6"
        >
          {products.slice(0, 2).map((product, i) => {
            const Icon = product.icon
            const isExternal = product.href.startsWith('http')
            const Component = isExternal ? 'a' : Link
            const linkProps = isExternal 
              ? { href: product.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: product.href }
            
            return (
              <motion.div
                key={product.title}
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
                  y: -8,
                  scale: 1.01,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  },
                }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Component
                  {...linkProps}
                  className="block h-full glass rounded-2xl p-6 sm:p-8 hover:glass-strong transition-all relative overflow-hidden"
                  aria-label={`Learn more about ${product.title}`}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  {/* Icon with Enhanced Animation */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ 
                      scale: { type: 'spring', stiffness: 400 },
                      rotate: { duration: 0.5 },
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground [data-theme='light']:text-slate-900 mb-2 sm:mb-3 relative z-10">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/60 [data-theme='light']:text-slate-700 mb-4 sm:mb-6 relative z-10">
                    {product.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center text-primary-400 [data-theme='light']:text-primary-500 font-medium relative z-10 text-xs sm:text-sm"
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
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5" />
                    </motion.div>
                  </motion.div>
                </Component>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Other Products - Second Row */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {products.slice(2).map((product, i) => {
            const Icon = product.icon
            const isExternal = product.href.startsWith('http')
            const Component = isExternal ? 'a' : Link
            const linkProps = isExternal 
              ? { href: product.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: product.href }
            
            return (
              <motion.div
                key={product.title}
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
                  y: -8,
                  scale: 1.01,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  },
                }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Component
                  {...linkProps}
                  className="block h-full glass rounded-xl p-4 sm:p-5 hover:glass-strong transition-all relative overflow-hidden"
                  aria-label={`Learn more about ${product.title}`}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  {/* Icon with Enhanced Animation */}
                  <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-3 sm:mb-4 relative z-10`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ 
                      scale: { type: 'spring', stiffness: 400 },
                      rotate: { duration: 0.5 },
                    }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <h3 className="text-base sm:text-lg font-semibold text-foreground [data-theme='light']:text-slate-900 mb-1.5 sm:mb-2 relative z-10">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/60 [data-theme='light']:text-slate-700 mb-3 sm:mb-4 relative z-10 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center text-primary-400 [data-theme='light']:text-primary-500 font-medium relative z-10 text-xs sm:text-sm"
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
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5" />
                    </motion.div>
                  </motion.div>
                </Component>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
