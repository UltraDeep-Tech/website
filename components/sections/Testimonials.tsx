'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { useTranslation, type TranslationKey } from '@/hooks/useTranslation'

export function Testimonials() {
  const { t } = useTranslation()
  
  const testimonials: Array<{
    name: string
    role: string
    company: string
    contentKey: TranslationKey
    rating: number
  }> = [
    {
      name: 'Piere Representative',
      role: 'Piere',
      company: 'Piere',
      contentKey: 'testimonial_piere',
      rating: 5,
    },
    {
      name: 'Motorola Solutions Team',
      role: 'Motorola Solutions',
      company: 'Motorola Solutions',
      contentKey: 'testimonial_motorola',
      rating: 5,
    },
    {
      name: 'Wiselayer Team',
      role: 'Wiselayer',
      company: 'Wiselayer',
      contentKey: 'testimonial_wiselayer',
      rating: 5,
    },
    {
      name: 'Ailert Representative',
      role: 'Ailert',
      company: 'Ailert',
      contentKey: 'testimonial_ailert',
      rating: 5,
    },
    {
      name: 'The Fitting Room Team',
      role: 'The Fitting Room',
      company: 'The Fitting Room',
      contentKey: 'testimonial_fitting_room',
      rating: 5,
    },
    {
      name: 'Wakapi Team',
      role: 'Wakapi',
      company: 'Wakapi',
      contentKey: 'testimonial_wakapi',
      rating: 5,
    },
  ]
  
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-section-alt relative overflow-hidden">
      <BackgroundEffects variant="section" intensity="low" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
            {t('testimonials_title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 [data-theme='light']:text-slate-700 max-w-2xl mx-auto px-4">
            {t('testimonials_subtitle')}
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
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
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
              <Card className="h-full hover:glass-strong transition-all relative overflow-hidden group">
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                />
                
                <CardContent className="p-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-8 h-8 text-primary-400 [data-theme='light']:text-primary-500 mb-4" />
                  </motion.div>
                  
                  <motion.p 
                    className="text-foreground/80 [data-theme='light']:text-slate-800 mb-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    "{t(testimonial.contentKey)}"
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center gap-1 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <Star className="w-4 h-4 fill-primary-400 text-primary-400 [data-theme='light']:fill-primary-500 [data-theme='light']:text-primary-500" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="font-semibold text-foreground [data-theme='light']:text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-foreground/60 [data-theme='light']:text-slate-700">
                      {testimonial.role}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

