'use client'

import { motion } from 'framer-motion'

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Grid Pattern */}
      <motion.div 
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 [data-theme='light']:opacity-10"
      />
      
      {/* Professional Gradient Overlay - Colores corporativos */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.10) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.10) 0%, transparent 50%), radial-gradient(circle at 50% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0"
      />
      
      {/* Enhanced Grid Pattern - Más profesional */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '60px 60px'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.5,
        }}
      />
    </div>
  )
}






