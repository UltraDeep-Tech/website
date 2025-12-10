'use client'

import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <div className="relative py-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="relative h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-2 h-2 rounded-full bg-primary-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}





