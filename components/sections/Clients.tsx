'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'

// Helper function para codificar rutas con espacios correctamente
function encodeImagePath(path: string): string {
  // Dividir la ruta y codificar solo los segmentos (no las barras)
  const parts = path.split('/')
  return parts.map(part => part ? encodeURIComponent(part) : '').join('/')
}

const clients = [
  { name: 'Piere', logo: '/assets/img/Piere.svg' },
  { name: 'Motorola Solutions', logo: '/assets/img/motorola solutions.jpg' },
  { name: 'Wiselayer', logo: '/assets/img/wiselayer.png' },
  { name: 'Ailert', logo: '/assets/img/ailert.png' },
  { name: 'The Fitting Room', logo: '/assets/img/the fitting room.png' },
  { name: 'Wakapi', logo: '/assets/img/wakapi.png' },
]

export function Clients() {
  const { t } = useTranslation()
  
  return (
    <section className="py-6 sm:py-8 md:py-10 relative overflow-hidden">
      <BackgroundEffects variant="minimal" intensity="low" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.p 
            className="text-xs sm:text-sm text-foreground/60 [data-theme='light']:text-slate-700 uppercase tracking-wider mb-2 sm:mb-3 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('clients_trusted_by')}
          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            {t('clients_title')}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-foreground/70 [data-theme='light']:text-slate-700 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t('clients_subtitle')}
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-12"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{
              animationPlayState: 'paused',
            }}
          >
            {[...clients, ...clients].map((client, i) => (
              <motion.div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 p-4 sm:p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all [data-theme='light']:grayscale-0"
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={encodeImagePath(client.logo)}
                    alt={`${client.name} - Cliente de Ultra Deep Tech`}
                    width={120}
                    height={60}
                    loading="lazy"
                    quality={85}
                    unoptimized={client.logo.endsWith('.svg')}
                    className="object-contain max-w-full max-h-full filter grayscale group-hover:grayscale-0 transition-all [data-theme='light']:grayscale-0"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

