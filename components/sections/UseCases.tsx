'use client'

import { motion } from 'framer-motion'
import { Code, Zap, TrendingUp, Shield, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'

const useCases = [
  {
    icon: Code,
    title: 'Custom AI Applications',
    description: 'We build custom AI-powered applications tailored to your business needs.',
    examples: [
      'Customer service chatbots',
      'Intelligent document processing',
      'Predictive analytics dashboards',
      'AI-powered recommendation engines',
    ],
    result: 'Faster time-to-market with AI solutions that fit your workflow',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce errors.',
    examples: [
      'Data entry automation',
      'Invoice processing',
      'Customer onboarding workflows',
      'Report generation',
    ],
    result: 'Save 20-40 hours per week on repetitive tasks',
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    icon: TrendingUp,
    title: 'AI Strategy & Consulting',
    description: 'Strategic guidance to identify AI opportunities and build your roadmap.',
    examples: [
      'AI readiness assessment',
      'ROI analysis and planning',
      'Technology stack recommendations',
      'Team training and enablement',
    ],
    result: 'Clear path to AI transformation with measurable goals',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Secure your AI systems and ensure compliance with industry standards.',
    examples: [
      'AI security audits',
      'Data privacy compliance',
      'Model protection',
      'Threat detection systems',
    ],
    result: 'Enterprise-grade security for your AI infrastructure',
    color: 'from-emerald-500 to-green-500',
  },
]

export function UseCases() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-section-alt relative overflow-hidden">
      <BackgroundEffects variant="accent" intensity="medium" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
            How We <span className="text-gradient">Help</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            Practical AI solutions tailored to your industry. See how we help companies achieve measurable results.
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
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
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      transition={{ 
                        scale: { type: 'spring', stiffness: 400 },
                        rotate: { duration: 0.5 },
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3">Use Cases:</h4>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start text-sm text-foreground/70"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary-400 [data-theme='light']:text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                            </motion.div>
                            {example}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.div 
                      className="p-4 rounded-lg bg-primary-500/10 [data-theme='light']:bg-primary-100 border border-primary-500/20 [data-theme='light']:border-primary-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm font-medium text-primary-400 [data-theme='light']:text-primary-600">
                        💡 Result: {useCase.result}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

