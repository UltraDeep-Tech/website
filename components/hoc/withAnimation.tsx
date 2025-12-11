'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

interface WithAnimationProps {
  children: ReactNode
  variants?: Variants
  className?: string
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function WithAnimation({ children, variants = defaultVariants, className }: WithAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}










