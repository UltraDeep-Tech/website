'use client'

import { motion } from 'framer-motion'

interface BackgroundEffectsProps {
  variant?: 'hero' | 'section' | 'accent' | 'minimal'
  intensity?: 'low' | 'medium' | 'high'
}

export function BackgroundEffects({ variant = 'section', intensity = 'medium' }: BackgroundEffectsProps) {
  const particleCount = intensity === 'high' ? 50 : intensity === 'medium' ? 35 : 20
  const glowIntensity = intensity === 'high' ? 0.25 : intensity === 'medium' ? 0.15 : 0.08

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Professional Mesh Gradient - Colores corporativos más sutiles */}
      <motion.div
        className="absolute inset-0 opacity-25 [data-theme='light']:opacity-15"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.10) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.10) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Light theme mesh gradient - más visible y colorido */}
      <motion.div
        className="absolute inset-0 opacity-0 [data-theme='light']:opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(99, 102, 241, 0.20) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.25) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(99, 102, 241, 0.20) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Professional Grid Pattern - Más sutil y elegante */}
      {(variant === 'section' || variant === 'hero' || variant === 'accent') && (
        <>
          <motion.div
            className="absolute inset-0 opacity-[0.03] [data-theme='light']:opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '60px 60px'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          {/* Light theme grid - más visible y colorido */}
          <motion.div
            className="absolute inset-0 opacity-0 [data-theme='light']:opacity-[0.18]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '60px 60px'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </>
      )}

      {/* Connection Lines - Efecto de conexión profesional y colorido */}
      {(variant === 'hero' || variant === 'accent') && (
        <>
          {/* Dark theme lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10 [data-theme='light']:hidden" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 100 200 Q 400 100, 700 200 T 1300 200"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 200 400 Q 500 300, 800 400 T 1400 400"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </svg>
          {/* Light theme lines - más coloridas */}
          <svg className="absolute inset-0 w-full h-full opacity-20 hidden [data-theme='light']:block" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.5)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.7)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 100 200 Q 400 100, 700 200 T 1300 200"
              stroke="url(#lineGradientLight)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 200 400 Q 500 300, 800 400 T 1400 400"
              stroke="url(#lineGradientLight)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </svg>
        </>
      )}

      {/* Professional Glow Orbs - Más sutiles y corporativos */}
      {variant !== 'minimal' && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl [data-theme='light']:opacity-100"
            style={{
              width: 'clamp(200px, 400px, 100vw)',
              height: 'clamp(200px, 400px, 100vw)',
              background: `radial-gradient(circle, rgba(99, 102, 241, ${glowIntensity * 0.6}) 0%, transparent 70%)`,
              left: '5%',
              top: '15%',
            }}
            animate={{
              x: [0, 80, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Light theme glow orbs - más visibles y coloridos */}
          <motion.div
            className="absolute rounded-full blur-3xl opacity-0 [data-theme='light']:opacity-100"
            style={{
              width: 'clamp(200px, 400px, 100vw)',
              height: 'clamp(200px, 400px, 100vw)',
              background: `radial-gradient(circle, rgba(99, 102, 241, ${glowIntensity * 1.8}) 0%, rgba(139, 92, 246, ${glowIntensity * 1.2}) 40%, transparent 70%)`,
              left: '5%',
              top: '15%',
            }}
            animate={{
              x: [0, 80, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.45, 0.35],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl [data-theme='light']:opacity-100"
            style={{
              width: 'clamp(150px, 350px, 80vw)',
              height: 'clamp(150px, 350px, 80vw)',
              background: `radial-gradient(circle, rgba(139, 92, 246, ${glowIntensity * 0.5}) 0%, transparent 70%)`,
              right: '10%',
              bottom: '20%',
            }}
            animate={{
              x: [0, -60, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />
          {/* Light theme glow orb 2 - más colorido */}
          <motion.div
            className="absolute rounded-full blur-3xl opacity-0 [data-theme='light']:opacity-100"
            style={{
              width: 'clamp(150px, 350px, 80vw)',
              height: 'clamp(150px, 350px, 80vw)',
              background: `radial-gradient(circle, rgba(139, 92, 246, ${glowIntensity * 1.6}) 0%, rgba(168, 85, 247, ${glowIntensity * 1.0}) 40%, transparent 70%)`,
              right: '10%',
              bottom: '20%',
            }}
            animate={{
              x: [0, -60, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.35, 0.45, 0.35],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl [data-theme='light']:opacity-100"
            style={{
              width: 'clamp(120px, 300px, 70vw)',
              height: 'clamp(120px, 300px, 70vw)',
              background: `radial-gradient(circle, rgba(99, 102, 241, ${glowIntensity * 0.4}) 0%, transparent 70%)`,
              left: '50%',
              top: '5%',
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
          />
          {/* Light theme glow orb 3 - más colorido */}
          <motion.div
            className="absolute rounded-full blur-3xl opacity-0 [data-theme='light']:opacity-100"
            style={{
              width: 'clamp(120px, 300px, 70vw)',
              height: 'clamp(120px, 300px, 70vw)',
              background: `radial-gradient(circle, rgba(99, 102, 241, ${glowIntensity * 1.4}) 0%, rgba(139, 92, 246, ${glowIntensity * 0.9}) 40%, transparent 70%)`,
              left: '50%',
              top: '5%',
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
          />
          {variant === 'accent' && (
            <motion.div
              className="absolute rounded-full blur-3xl"
              style={{
                width: 'clamp(100px, 250px, 60vw)',
                height: 'clamp(100px, 250px, 60vw)',
                background: `radial-gradient(circle, rgba(139, 92, 246, ${glowIntensity * 0.5}) 0%, transparent 70%)`,
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 4,
              }}
            />
          )}
        </>
      )}

      {/* Professional Floating Particles - Más sutiles */}
      {variant !== 'minimal' && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => {
            // Colores más corporativos - principalmente azules y púrpuras
            const corporateColors = [
              '99, 102, 241', // indigo - principal
              '139, 92, 246', // purple - principal
              '168, 85, 247', // violet - para modo claro
              '99, 102, 241', // indigo
              '139, 92, 246', // purple
              '14, 165, 233', // sky - ocasional
            ]
            const randomColor = corporateColors[Math.floor(Math.random() * corporateColors.length)]
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1.5,
                  height: Math.random() * 3 + 1.5,
                  background: `rgba(${randomColor}, ${Math.random() * 0.25 + 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(${randomColor}, 0.3)`,
                }}
                className="[data-theme='light']:opacity-100"
                animate={{
                  y: [0, Math.random() * -80 - 40, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  opacity: [0, Math.random() * 0.5 + 0.3, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 6 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </div>
      )}

      {/* Geometric Shapes - Formas geométricas profesionales */}
      {(variant === 'hero' || variant === 'section') && (
        <>
          <motion.div
            className="absolute border border-indigo-500/10 [data-theme='light']:border-indigo-500/40 [data-theme='light']:shadow-[0_0_20px_rgba(99,102,241,0.3)] rounded-lg"
            style={{
              width: 'clamp(100px, 200px, 50vw)',
              height: 'clamp(100px, 200px, 50vw)',
              left: '15%',
              top: '30%',
              rotate: 45,
            }}
            animate={{
              rotate: [45, 50, 45],
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute border border-violet-500/10 [data-theme='light']:border-violet-500/40 [data-theme='light']:shadow-[0_0_20px_rgba(139,92,246,0.3)] rounded-full"
            style={{
              width: 'clamp(80px, 150px, 40vw)',
              height: 'clamp(80px, 150px, 40vw)',
              right: '20%',
              bottom: '25%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </>
      )}

      {/* Enhanced Animated Grid Pattern - Más profesional y colorido en modo claro */}
      {variant === 'hero' && (
        <>
          <motion.div
            className="absolute inset-0 opacity-[0.04] [data-theme='light']:opacity-[0.12]"
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
            className="absolute inset-0 opacity-[0.02] [data-theme='light']:opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
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
        </>
      )}

      {/* Professional Wave Effect - Más sutil */}
      {variant === 'accent' && (
        <>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.08) 50%, rgba(139, 92, 246, 0.05) 100%)`,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
            }}
            animate={{
              clipPath: [
                'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                'polygon(0 0, 100% 0, 100% 100%, 0 75%)',
                'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.05) 100%)`,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
            }}
            animate={{
              clipPath: [
                'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
                'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </>
      )}

      {/* Professional Shimmer Effect - Más sutil y colorido */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(110deg, transparent 40%, rgba(99, 102, 241, 0.03) 50%, transparent 60%)`,
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 3,
        }}
      />
      {/* Light theme shimmer - más colorido */}
      <motion.div
        className="absolute inset-0 hidden [data-theme='light']:block"
        style={{
          background: `linear-gradient(110deg, transparent 40%, rgba(99, 102, 241, 0.08) 50%, rgba(139, 92, 246, 0.06) 52%, transparent 60%)`,
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 3,
        }}
      />

      {/* Depth Layers - Capas de profundidad profesional */}
      {(variant === 'hero' || variant === 'accent') && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at top, rgba(99, 102, 241, 0.05) 0%, transparent 50%)`,
            }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-0 hidden [data-theme='light']:block"
            style={{
              background: `radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.10) 30%, transparent 50%)`,
            }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.04) 0%, transparent 50%)`,
            }}
            animate={{
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
          <motion.div
            className="absolute inset-0 hidden [data-theme='light']:block"
            style={{
              background: `radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 30%, transparent 50%)`,
            }}
            animate={{
              opacity: [0.12, 0.20, 0.12],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </>
      )}

      {/* Data Flow Lines - Líneas de flujo de datos profesionales y coloridas */}
      {variant === 'hero' && (
        <>
          {/* Dark theme data flow */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08] [data-theme='light']:hidden" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
              </linearGradient>
            </defs>
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 15}%`}
                y1="0"
                x2={`${20 + i * 15}%`}
                y2="100%"
                stroke="url(#dataFlowGradient)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>
          {/* Light theme data flow - más coloridas */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] hidden [data-theme='light']:block" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="dataFlowGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
              </linearGradient>
            </defs>
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 15}%`}
                y1="0"
                x2={`${20 + i * 15}%`}
                y2="100%"
                stroke="url(#dataFlowGradientLight)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>
        </>
      )}
    </div>
  )
}

