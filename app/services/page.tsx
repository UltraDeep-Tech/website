'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Headphones, 
  Phone, 
  Mail, 
  GraduationCap,
  Code,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'

interface ServiceData {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  icon?: React.ComponentType<{ className?: string }>
  color?: string
  hasMoreButton?: boolean
  moreLink?: string
  buttonText?: string
}

export default function ServicesPage() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'
  const searchParams = useSearchParams()
  
  const [selectedService, setSelectedService] = useState<string | null>(null)

  useEffect(() => {
    const serviceParam = searchParams.get('product')
    if (serviceParam) {
      setSelectedService(serviceParam)
    }
  }, [searchParams])

  // Obtener datos del servicio seleccionado
  const getServiceData = (serviceId: string | null): ServiceData | null => {
    if (!serviceId) return null

    switch (serviceId) {
      case 'product-1': // AI Security Assessment
        return {
          id: 'product-1',
          title: t('ai_assessment'),
          description: t('ai_assessment_desc'),
          features: [
            t('service1_feat1'),
            t('service1_feat2'),
            t('service1_feat3'),
            t('service1_feat4'),
          ],
          image: '/assets/img/blog/blog-1.jpg',
          icon: Shield,
          color: 'from-emerald-500 to-green-500',
        }
      case 'product-2': // Implementation & Architecture
        return {
          id: 'product-2',
          title: t('implementation'),
          description: t('implementation_desc'),
          features: [
            t('service2_feat1'),
            t('service2_feat2'),
            t('service2_feat3'),
            t('service2_feat4'),
            t('service2_feat5'),
            t('service2_feat6'),
            t('service2_feat7'),
          ],
          image: '/assets/img/blog/blog-3.jpg',
          icon: Code,
          color: 'from-indigo-500 to-violet-500',
        }
      case 'product-3': // Training & Education
        return {
          id: 'product-3',
          title: t('service_training'),
          description: t('training_education_desc'),
          features: [
            t('service3_feat1'),
            t('service3_feat2'),
            t('service3_feat3'),
            t('service3_feat4'),
          ],
          image: '/assets/img/GenAI Safety.jpg',
          icon: GraduationCap,
          color: 'from-orange-500 to-amber-500',
          hasMoreButton: true,
          moreLink: '/services/training',
          buttonText: t('get_certified_now') || (isSpanish ? 'Certificarse Ahora' : 'Get Certified Now'),
        }
      case 'product-4': // AI Strategy & Consulting
        return {
          id: 'product-4',
          title: t('service_strategy'),
          description: t('service_strategy_desc'),
          features: [
            isSpanish ? 'Evaluación de preparación para IA' : 'AI Readiness Assessment',
            isSpanish ? 'Análisis de ROI y planificación' : 'ROI Analysis & Planning',
            isSpanish ? 'Recomendaciones de stack tecnológico' : 'Technology Stack Recommendations',
            isSpanish ? 'Desarrollo de hoja de ruta' : 'Roadmap Development',
            isSpanish ? 'Capacitación y habilitación de equipos' : 'Team Training & Enablement',
            isSpanish ? 'Orientación estratégica continua' : 'Ongoing Strategic Guidance',
          ],
          image: '/assets/img/blog/blog-1.jpg',
          icon: TrendingUp,
          color: 'from-sky-500 to-cyan-500',
        }
      case 'product-5': // Process Automation
        return {
          id: 'product-5',
          title: t('service_automation'),
          description: t('service_automation_desc'),
          features: [
            isSpanish ? 'Automatización de flujos de trabajo' : 'Workflow Automation',
            isSpanish ? 'Automatización de entrada de datos' : 'Data Entry Automation',
            isSpanish ? 'Procesamiento de facturas y documentos' : 'Invoice & Document Processing',
            isSpanish ? 'Automatización de incorporación de clientes' : 'Customer Onboarding Automation',
            isSpanish ? 'Generación automática de informes' : 'Report Generation',
            isSpanish ? 'Seguimiento y optimización de ROI' : 'ROI Tracking & Optimization',
          ],
          image: '/assets/img/blog/blog-3.jpg',
          icon: Zap,
          color: 'from-pink-500 to-rose-500',
        }
      case 'product-6': // Custom AI Development
        return {
          id: 'product-6',
          title: t('service_development'),
          description: t('service_development_desc'),
          features: [
            isSpanish ? 'Desarrollo de aplicaciones personalizadas' : 'Custom Application Development',
            isSpanish ? 'Chatbots y asistentes con IA' : 'AI-Powered Chatbots & Assistants',
            isSpanish ? 'Análisis predictivo y dashboards' : 'Predictive Analytics & Dashboards',
            isSpanish ? 'Automatización de procesamiento de documentos' : 'Document Processing Automation',
            isSpanish ? 'Integración con sistemas existentes' : 'Integration with Existing Systems',
            isSpanish ? 'Soporte y mantenimiento continuo' : 'Ongoing Support & Maintenance',
          ],
          image: '/assets/img/blog/blog-1.jpg',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
        }
      default:
        return null
    }
  }

  const serviceData = getServiceData(selectedService)

  const servicesList = [
    { id: 'product-4', titleKey: 'service_strategy', icon: TrendingUp, color: 'from-sky-500 to-cyan-500' },
    { id: 'product-5', titleKey: 'service_automation', icon: Zap, color: 'from-pink-500 to-rose-500' },
    { id: 'product-6', titleKey: 'service_development', icon: Code, color: 'from-purple-500 to-pink-500' },
    { id: 'product-3', titleKey: 'service_training', icon: GraduationCap, color: 'from-orange-500 to-amber-500' },
    { id: 'product-1', titleKey: 'ai_assessment', icon: Shield, color: 'from-emerald-500 to-green-500' },
    { id: 'product-2', titleKey: 'implementation', icon: Code, color: 'from-indigo-500 to-violet-500' },
  ]

  const industries = [
    {
      title: isSpanish ? 'Servicios Financieros' : 'Financial Services',
      stats: isSpanish
        ? [
            '78% de empresas financieras enfrentan brechas de seguridad IA',
            '$2.5M costo promedio por brecha',
            '45% de sistemas IA vulnerables a ataques',
            '60% violaciones de cumplimiento en sistemas IA',
          ]
        : [
            '78% of financial firms face AI security breaches',
            '$2.5M average cost per breach',
            '45% of AI systems vulnerable to attacks',
            '60% compliance violations in AI systems',
          ],
    },
    {
      title: isSpanish ? 'Salud' : 'Healthcare',
      stats: isSpanish
        ? [
            '85% de sistemas IA de salud expuestos',
            '$1.2M costo promedio por brecha',
            '70% datos de pacientes en riesgo',
            '50% violaciones HIPAA en IA',
          ]
        : [
            '85% of healthcare AI systems exposed',
            '$1.2M average breach cost',
            '70% patient data at risk',
            '50% HIPAA violations in AI',
          ],
    },
    {
      title: isSpanish ? 'E-commerce' : 'E-commerce',
      stats: isSpanish
        ? [
            '92% de sistemas IA de e-commerce atacados',
            '$3.8M pérdida promedio por fraude',
            '65% datos de clientes expuestos',
            '55% pérdida de ingresos por brechas',
          ]
        : [
            '92% of e-commerce AI systems attacked',
            '$3.8M average fraud loss',
            '65% customer data exposed',
            '55% revenue loss from breaches',
          ],
    },
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    const newUrl = serviceId ? `/services?product=${serviceId}` : '/services'
    window.history.pushState({}, '', newUrl)
    // Scroll suave al contenido
    document.getElementById('service-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const getServiceTitle = (titleKey: string) => {
    switch (titleKey) {
      case 'service_strategy': return t('service_strategy')
      case 'service_automation': return t('service_automation')
      case 'service_development': return t('service_development')
      case 'service_training': return t('service_training')
      case 'ai_assessment': return t('ai_assessment')
      case 'implementation': return t('implementation')
      default: return titleKey
    }
  }

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: isSpanish ? 'Inicio' : 'Home', href: '/' },
          { label: t('nav_services') }
        ]} />
      </div>

      {/* Hero Section - Mejorado */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <BackgroundEffects variant="hero" intensity="medium" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/assets/img/blog/blog-6.jpg)' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">
                {isSpanish ? 'Nuestros Servicios' : 'Our Services'}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto [data-theme='light']:text-slate-700">
              {isSpanish 
                ? 'Soluciones integrales de IA para transformar tu negocio. Desde consultoría estratégica hasta automatización de procesos, tenemos todo lo que necesitas.'
                : 'Comprehensive AI solutions to transform your business. From strategic consulting to process automation, we have everything you need.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details Section */}
      <section id="service-content" className="py-8 sm:py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Services List Sidebar - Mejorado */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-4 sm:p-6 sticky top-24"
              >
                <h4 className="text-lg font-semibold text-foreground mb-6 [data-theme='light']:text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-400" />
                  {isSpanish ? 'Nuestros Servicios' : 'Our Services'}
                </h4>
                <div className="space-y-3">
                  {servicesList.map((service) => {
                    const Icon = service.icon
                    return (
                      <motion.button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all flex items-center gap-3 group mb-2 ${
                          selectedService === service.id
                            ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                            : 'bg-white/5 hover:bg-white/10 text-foreground [data-theme="light"]:bg-slate-100 [data-theme="light"]:hover:bg-slate-200 [data-theme="light"]:text-slate-900'
                        }`}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} ${
                          selectedService === service.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                        } transition-opacity`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium flex-1">
                          {getServiceTitle(service.titleKey)}
                        </span>
                        <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          selectedService === service.id ? 'translate-x-0' : 'translate-x-0 group-hover:translate-x-1'
                        }`} />
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>

              {/* Help Box - Mejorado */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-24 sm:mt-20 glass rounded-2xl p-5 sm:p-6 text-center hover:glass-strong transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block mb-3"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto">
                    <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </motion.div>
                <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3 [data-theme='light']:text-slate-900">
                  {isSpanish ? '¿Tienes una Pregunta?' : 'Have a Question?'}
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-foreground/70 [data-theme='light']:text-slate-700">
                  <a 
                    href="https://wa.link/2ebre2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 hover:text-primary-400 transition-colors"
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="break-words">+54 (9) 11 7645 5965</span>
                  </a>
                  <a 
                    href="mailto:contact@ultradeeptech.com" 
                    className="flex items-center justify-center gap-2 hover:text-primary-400 transition-colors"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="break-all text-xs">contact@ultradeeptech.com</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Service Content - Mejorado */}
            <div className="lg:col-span-3">
              <motion.div
                key={selectedService || 'default'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden relative"
              >
                {/* Background gradient effect */}
                {serviceData?.color && (
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${serviceData.color} opacity-5 rounded-full blur-3xl -z-0`} />
                )}
                
                <div className="relative z-10">
                  {!selectedService || !serviceData ? (
                    // Default content - Mejorado
                    <div className="text-center">
                      <div className="inline-block mb-6">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto shadow-lg">
                          <Sparkles className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground [data-theme='light']:text-slate-900">
                        {isSpanish ? 'Servicios de IA Empresarial' : 'Enterprise AI Services'}
                      </h3>
                      <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto [data-theme='light']:text-slate-700">
                        {isSpanish 
                          ? 'Ofrecemos una gama completa de servicios para ayudarte a implementar, proteger y optimizar la IA en tu empresa.'
                          : 'We offer a comprehensive range of services to help you implement, protect, and optimize AI in your business.'}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                        <div className="glass rounded-xl p-6">
                          <h4 className="font-semibold text-lg mb-4 text-foreground [data-theme='light']:text-slate-900 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary-400" />
                            {isSpanish ? 'Servicios Principales:' : 'Core Services:'}
                          </h4>
                          <ul className="space-y-2">
                            {[
                              { key: 'service_strategy', icon: TrendingUp },
                              { key: 'service_automation', icon: Zap },
                              { key: 'service_development', icon: Code },
                              { key: 'service_training', icon: GraduationCap },
                              { key: 'ai_assessment', icon: Shield },
                              { key: 'implementation', icon: Code },
                            ].map((service, idx) => {
                              const Icon = service.icon
                              return (
                                <li key={idx} className="flex items-center gap-2 text-foreground/80 [data-theme='light']:text-slate-700">
                                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                  <span>{t(service.key as any)}</span>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        <div className="glass rounded-xl p-6">
                          <h4 className="font-semibold text-lg mb-4 text-foreground [data-theme='light']:text-slate-900 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-primary-400" />
                            {isSpanish ? 'Beneficios Clave:' : 'Key Benefits:'}
                          </h4>
                          <ul className="space-y-2">
                            {[
                              isSpanish ? 'Ahorro de tiempo y costos' : 'Time & Cost Savings',
                              isSpanish ? 'Mayor eficiencia operativa' : 'Increased Operational Efficiency',
                              isSpanish ? 'Seguridad y cumplimiento' : 'Security & Compliance',
                              isSpanish ? 'Escalabilidad empresarial' : 'Enterprise Scalability',
                              isSpanish ? 'Soporte y mantenimiento' : 'Support & Maintenance',
                              isSpanish ? 'Capacitación continua' : 'Ongoing Training',
                            ].map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-foreground/80 [data-theme='light']:text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Link
                        href="https://calendly.com/avipil/30-min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="lg" className="px-8 text-lg">
                          {t('nav_book_call')}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    // Service content - Mejorado
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        {serviceData.icon && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${serviceData.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <serviceData.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground [data-theme='light']:text-slate-900">
                            {serviceData.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-foreground/80 mb-8 [data-theme='light']:text-slate-700 leading-relaxed">
                        {serviceData.description}
                      </p>
                      
                      {serviceData.features.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold mb-4 text-foreground [data-theme='light']:text-slate-900">
                            {isSpanish ? 'Características Principales:' : 'Key Features:'}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {serviceData.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 [data-theme='light']:bg-slate-100 hover:bg-white/10 [data-theme='light']:hover:bg-slate-200 transition-colors"
                              >
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${serviceData.color ? `text-[${serviceData.color}]` : 'text-primary-400'}`} />
                                <span className="text-foreground/90 [data-theme='light']:text-slate-800">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-center mt-10">
                        {serviceData.hasMoreButton ? (
                          <Link href={serviceData.moreLink!}>
                            <Button size="lg" className="px-8 text-lg">
                              {serviceData.buttonText || t('see_more')}
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                          </Link>
                        ) : (
                          <Link
                            href="https://calendly.com/avipil/30-min"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="lg" className="px-8 text-lg">
                              {t('nav_book_call')}
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Service Image */}
                  {serviceData?.image && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-10 flex justify-center"
                    >
                      <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={serviceData.image}
                          alt={serviceData.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries at Risk Section - Mejorado */}
      <section className="py-12 sm:py-16 relative overflow-hidden bg-section-alt">
        <BackgroundEffects variant="section" intensity="low" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              {isSpanish ? 'Industrias en ' : 'Industries at '}
              <span className="text-gradient">{isSpanish ? 'Riesgo' : 'Risk'}</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
              {isSpanish ? 'Estadísticas Críticas en Sectores Clave' : 'Critical Statistics Across Key Sectors'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full hover:glass-strong transition-all border-2 border-transparent hover:border-primary-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground [data-theme='light']:text-slate-900">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {industry.stats.map((stat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70 [data-theme='light']:text-slate-700">
                          <span className="text-primary-400 font-bold mt-1">•</span>
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
