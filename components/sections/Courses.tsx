'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Shield, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'

const courses = [
  {
    icon: Shield,
    title: 'AISP - AI Security Professional',
    titleEs: 'AISP - Profesional en Seguridad IA',
    description: 'Comprehensive certification in AI security fundamentals and best practices.',
    descriptionEs: 'Certificación integral en fundamentos de seguridad IA y mejores prácticas.',
    duration: '40 hours',
    durationEs: '40 horas',
    level: 'Intermediate',
    levelEs: 'Intermedio',
    features: [
      'AI/ML architecture vulnerabilities',
      'Threat landscape overview',
      'Risk assessment frameworks',
      'Defensive controls implementation',
    ],
    featuresEs: [
      'Vulnerabilidades de arquitectura IA/ML',
      'Panorama de amenazas',
      'Marcos de evaluación de riesgos',
      'Implementación de controles defensivos',
    ],
    color: 'from-primary-500 to-primary-600',
    href: '/services/training#aisp',
  },
  {
    icon: Award,
    title: 'AIGP - AI Governance Professional',
    titleEs: 'AIGP - Profesional en Gobernanza IA',
    description: 'Learn governance frameworks and compliance for AI systems.',
    descriptionEs: 'Aprende marcos de gobernanza y cumplimiento para sistemas IA.',
    duration: '35 hours',
    durationEs: '35 horas',
    level: 'Advanced',
    levelEs: 'Avanzado',
    features: [
      'Governance frameworks',
      'Compliance standards',
      'Ethical AI principles',
      'Risk management',
    ],
    featuresEs: [
      'Marcos de gobernanza',
      'Estándares de cumplimiento',
      'Principios éticos de IA',
      'Gestión de riesgos',
    ],
    color: 'from-accent-500 to-accent-600',
    href: '/services/training#aigp',
  },
  {
    icon: BookOpen,
    title: 'Enterprise AI Security',
    titleEs: 'Seguridad IA Empresarial',
    description: 'Advanced training for securing AI at enterprise scale.',
    descriptionEs: 'Capacitación avanzada para asegurar IA a escala empresarial.',
    duration: '50 hours',
    durationEs: '50 horas',
    level: 'Expert',
    levelEs: 'Experto',
    features: [
      'Enterprise-scale security',
      'Advanced threat detection',
      'Incident response',
      'Continuous monitoring',
    ],
    featuresEs: [
      'Seguridad a escala empresarial',
      'Detección avanzada de amenazas',
      'Respuesta a incidentes',
      'Monitoreo continuo',
    ],
    color: 'from-cyan-500 to-cyan-600',
    href: '/services/training#enterprise',
  },
]

export function Courses() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 relative overflow-hidden">
      <BackgroundEffects variant="section" intensity="medium" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
          <Link href="/services/training" className="block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4 hover:opacity-80 transition-opacity cursor-pointer">
              {isSpanish ? (
                <>
                  Cursos y <span className="text-gradient">Certificaciones</span>
                </>
              ) : (
                <>
                  Courses & <span className="text-gradient">Certifications</span>
                </>
              )}
            </h2>
          </Link>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 [data-theme='light']:text-slate-700 max-w-2xl mx-auto px-4">
            {t('courses_subtitle')}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {courses.map((course, i) => {
            const Icon = course.icon
            return (
              <motion.div
                key={course.title}
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
                    className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      transition={{ 
                        scale: { type: 'spring', stiffness: 400 },
                        rotate: { duration: 0.5 },
                      }}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2">
                      {isSpanish ? course.titleEs : course.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {isSpanish ? course.descriptionEs : course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    {/* Course Info */}
                    <div className="space-y-2 mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60 [data-theme='light']:text-slate-700">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{isSpanish ? course.durationEs : course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60 [data-theme='light']:text-slate-700">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>{isSpanish ? course.levelEs : course.level}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground/80 [data-theme='light']:text-slate-800 mb-2 sm:mb-3">
                        {isSpanish ? 'Incluye:' : 'Includes:'}
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {(isSpanish ? course.featuresEs : course.features).map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start text-xs sm:text-sm text-foreground/70 [data-theme='light']:text-slate-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 [data-theme='light']:text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link href="/services/training">
                      <Button variant="default" className="w-full group text-xs sm:text-sm">
                        {t('courses_see_more')}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Link href="/services/training">
            <Button variant="secondary" size="lg" className="text-sm sm:text-base">
              {isSpanish ? 'Ver Todos los Cursos' : 'View All Courses'}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

