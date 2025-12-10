'use client'

import { motion } from 'framer-motion'
import { 
  Bot, 
  FileText, 
  Mail, 
  ShoppingCart, 
  Users
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { useTranslation } from '@/hooks/useTranslation'


export function Automation() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'

  const automationAreas = [
    {
      icon: FileText,
      title: t('automation_document_processing'),
      description: t('automation_document_processing_desc'),
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Mail,
      title: t('automation_customer_communication'),
      description: t('automation_customer_communication_desc'),
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: ShoppingCart,
      title: t('automation_ecommerce'),
      description: t('automation_ecommerce_desc'),
      color: 'from-sky-500 to-cyan-500',
    },
    {
      icon: Users,
      title: t('automation_hr'),
      description: t('automation_hr_desc'),
      color: 'from-warm-500 to-orange-500',
    },
  ]

  // Mostrar solo las 4 áreas más relevantes
  const relevantAreas = automationAreas.slice(0, 4)

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-section-alt relative overflow-hidden">
      <BackgroundEffects variant="accent" intensity="low" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-block mb-3"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto">
              <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2 sm:mb-3 px-4">
            {isSpanish ? (
              <>
                Automatiza <span className="text-gradient">Todos los Procesos</span> con IA
              </>
            ) : (
              <>
                Automate <span className="text-gradient">All Processes</span> with AI
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 [data-theme='light']:text-slate-700 max-w-2xl mx-auto px-4">
            {isSpanish
              ? 'Automatiza cualquier proceso empresarial con IA. Documentos, comunicación, ventas y más.'
              : 'Automate any business process with AI. Documents, communication, sales, and more.'}
          </p>
        </motion.div>

        {/* Automation Areas Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {relevantAreas.map((area, i) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
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
                    className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  />

                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-3`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      transition={{
                        scale: { type: 'spring', stiffness: 400 },
                        rotate: { duration: 0.5 },
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

