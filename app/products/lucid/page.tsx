'use client'

import { motion } from 'framer-motion'
import { Eye, Brain, Target, TrendingUp, CheckCircle2, ArrowRight, Clock, DollarSign, Users, Trophy, Filter, Shield, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import Link from 'next/link'
import Image from 'next/image'

export default function LucidPage() {
  const faqs = [
    {
      id: 'faq-1',
      question: '¿Cuál es el ROI esperado con Lucid?',
      answer: 'Nuestros clientes reportan un ROI promedio del 300% en el primer año. Esto se debe a la reducción de decisiones erróneas, ahorro de tiempo en revisiones y mejora en la calidad de los procesos. El ROI se hace evidente desde el primer mes de uso.',
    },
    {
      id: 'faq-2',
      question: '¿Cuánto tiempo toma implementar Lucid?',
      answer: 'La implementación es inmediata. Puedes comenzar a usar Lucid en menos de 5 minutos. No requiere instalación de software ni configuración compleja. Simplemente sube tu documento y obtén resultados instantáneos.',
    },
    {
      id: 'faq-3',
      question: '¿Es seguro usar Lucid con documentos confidenciales?',
      answer: 'Absolutamente. Lucid cumple con los más altos estándares de seguridad empresarial. Utilizamos encriptación de extremo a extremo, no almacenamos el contenido de tus documentos y cumplimos con GDPR, SOC 2 y otros estándares internacionales de seguridad.',
    },
    {
      id: 'faq-4',
      question: '¿Puedo probar Lucid antes de comprarlo?',
      answer: 'Sí, ofrecemos una prueba gratuita de 30 días sin compromiso. Puedes analizar hasta 10 documentos y experimentar todos los beneficios de Lucid. No se requiere tarjeta de crédito para comenzar.',
    },
    {
      id: 'faq-5',
      question: '¿Qué incluye el soporte técnico?',
      answer: 'Incluimos soporte por email para todos los planes, soporte prioritario para planes Professional y Enterprise, y soporte 24/7 para clientes Enterprise. También ofrecemos capacitación personalizada y consultoría para maximizar el valor de tu inversión.',
    },
    {
      id: 'faq-6',
      question: '¿Hay descuentos para equipos grandes?',
      answer: 'Sí, ofrecemos descuentos especiales para equipos de más de 10 usuarios. Para equipos de 50+ usuarios, proporcionamos precios personalizados y planes Enterprise con características adicionales. Contacta a nuestro equipo de ventas para obtener una cotización personalizada.',
    },
  ]

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Products', href: '/products' },
          { label: 'Lucid™' }
        ]} />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/dashboardlucid.png"
            alt="Lucid Dashboard"
            fill
            className="object-cover opacity-20"
            loading="eager"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Toma Decisiones <span className="text-gradient">Más Inteligentes</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-4">
                Elimina automáticamente los sesgos cognitivos que comprometen la calidad de tus decisiones empresariales. <strong>95% de usuarios reportan decisiones más objetivas en menos de 2 minutos.</strong>
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Shield className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-foreground/80">Más de 200 empresas confían en Lucid</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="https://site.lucidapp.io/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    Probar Lucid Gratis
                  </Button>
                </Link>
                <Link href="#benefits">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Eye className="w-5 h-5 mr-2" />
                    Ver Características
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Image
                src="/assets/img/lucidnotebook.png"
                alt="Lucid Dashboard"
                width={600}
                height={400}
                className="rounded-2xl"
                loading="eager"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm text-primary-400 mb-2">Descubre Lucid</h4>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Análisis Objetivo para Decisiones Empresariales
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                Lucid detecta patrones de pensamiento subjetivos en documentos empresariales que pueden distorsionar la toma de decisiones de tu organización. Transforma análisis subjetivos en decisiones objetivas.
              </p>
              <Link href="#benefits">
                <Button variant="secondary">
                  Ver más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Filter,
                  title: 'Análisis Instantáneo',
                  description: 'Procesa documentos complejos en menos de 2 minutos con precisión profesional.',
                },
                {
                  icon: Lock,
                  title: 'Reportes Profesionales',
                  description: 'Genera informes listos para uso corporativo y legal con recomendaciones claras.',
                },
                {
                  icon: TrendingUp,
                  title: 'Dashboard Avanzado',
                  description: 'Métricas en tiempo real y análisis de tendencias para seguimiento continuo.',
                },
                {
                  icon: Shield,
                  title: 'Cumplimiento Regulatorio',
                  description: 'Asegura transparencia y objetividad en documentos oficiales y legales.',
                },
              ].map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1 text-sm">{feature.title}</h3>
                    <p className="text-xs text-foreground/70">{feature.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              ¿Por qué Elegir <span className="text-gradient">Lucid?</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Resultados medibles que transforman la forma en que tu empresa toma decisiones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: '40% Menos Tiempo',
                description: 'En análisis de documentos empresariales. Procesa informes complejos en minutos, no horas.',
              },
              {
                icon: TrendingUp,
                title: '95% Más Objetivos',
                description: 'Decisiones basadas en datos reales. Elimina sesgos inconscientes y mejora la precisión.',
              },
              {
                icon: DollarSign,
                title: 'ROI Inmediato',
                description: 'Reducción de riesgos desde el primer día. Ahorra costos evitando decisiones erróneas.',
              },
              {
                icon: Users,
                title: 'Equipos Más Efectivos',
                description: 'Mejora la calidad de decisiones colectivas. Alinea equipos con objetivos claros.',
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features by Industry */}
      <section id="features" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Beneficios por <span className="text-gradient">Industria</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Soluciones especializadas para diferentes roles y departamentos empresariales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              {
                icon: TrendingUp,
                title: 'Para Ejecutivos C-Level',
                description: 'Reduce riesgos en decisiones estratégicas críticas. Elimina sesgos que pueden comprometer el futuro de tu empresa y toma decisiones basadas en datos objetivos.',
                tags: ['Decisiones Estratégicas', 'Reducción de Riesgos'],
              },
              {
                icon: Users,
                title: 'Para RRHH',
                description: 'Elimina prejuicios en evaluaciones y contrataciones. Crea procesos más justos y transparentes que mejoran la calidad de tu equipo y la cultura organizacional.',
                tags: ['Contrataciones Justas', 'Evaluaciones Objetivas'],
              },
              {
                icon: Shield,
                title: 'Para Equipos Legales',
                description: 'Fortalece contratos eliminando sesgos que debilitan casos. Mejora la calidad de tus documentos legales y aumenta las posibilidades de éxito en litigios.',
                tags: ['Contratos Sólidos', 'Casos Más Fuertes'],
              },
              {
                icon: Brain,
                title: 'Para Consultores',
                description: 'Ofrece análisis más objetivos diferenciándote de la competencia. Proporciona recomendaciones basadas en datos que generan mayor confianza en tus clientes.',
                tags: ['Análisis Objetivos', 'Diferenciación'],
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Result Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold">El Resultado Final</h3>
            </div>
            <p className="text-lg text-foreground/70 mb-6">
              Decisiones más inteligentes, equipos más efectivos y resultados empresariales superiores. Lucid transforma la forma en que tu organización toma decisiones críticas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Decisiones más objetivas y precisas',
                'Reducción significativa de riesgos',
                'Mayor confianza en procesos internos',
                'ROI medible desde el primer mes',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              ¿Listo para Tomar Decisiones Más Inteligentes?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Únete a más de 200 empresas que ya han mejorado la calidad de sus decisiones con Lucid
            </p>
            <Link href="https://site.lucidapp.io/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="mb-4">
                Probar Lucid Gratis
              </Button>
            </Link>
            <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Sin compromiso • Configuración en 5 minutos • Soporte 24/7
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Preguntas <span className="text-gradient">Frecuentes</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre Lucid
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion items={faqs} defaultOpen="faq-1" />
          </div>
        </div>
      </section>
    </div>
  )
}
