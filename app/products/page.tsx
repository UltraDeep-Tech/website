'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Headphones, 
  Phone, 
  Mail, 
  Shield,
  Code,
  TrendingUp,
  Zap,
  Eye,
  Sparkles,
  CheckCircle2
} from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'

interface ProductData {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  icon?: React.ComponentType<{ className?: string }>
  color?: string
  hasMoreButton?: boolean
  moreLink?: string
  isLucid?: boolean
}

function ProductsContent() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'
  const searchParams = useSearchParams()
  
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  useEffect(() => {
    const productParam = searchParams.get('product')
    if (productParam) {
      setSelectedProduct(productParam)
    }
  }, [searchParams])

  // Obtener datos del producto seleccionado
  const getProductData = (productId: string | null): ProductData | null => {
    if (!productId) return null

    switch (productId) {
      case 'product-1':
        return {
          id: 'product-1',
          title: t('product1_content_title'),
          description: t('product1_content_desc'),
          features: [
            t('product1_feat1'),
            t('product1_feat2'),
            t('product1_feat3'),
            t('product1_feat4'),
            t('product1_feat5'),
          ],
          image: '/assets/img/safetyshield.png',
          icon: Shield,
          color: 'from-emerald-500 to-green-500',
          hasMoreButton: true,
          moreLink: '/products/safety-shield',
        }
      case 'product-2':
        return {
          id: 'product-2',
          title: t('product2_content_title'),
          description: t('product2_content_desc'),
          features: [
            t('product2_feat1'),
            t('product2_feat2'),
            t('product2_feat3'),
            t('product2_feat4'),
          ],
          image: '/assets/img/model-protection.png',
          icon: Code,
          color: 'from-indigo-500 to-violet-500',
        }
      case 'product-3':
        return {
          id: 'product-3',
          title: t('product3_content_title'),
          description: t('product3_content_desc'),
          features: [
            t('product3_feat1'),
            t('product3_feat2'),
            t('product3_feat3'),
            t('product3_feat4'),
          ],
          image: '/assets/img/enterprise-security.png',
          icon: Shield,
          color: 'from-blue-500 to-cyan-500',
        }
      case 'product-4':
        return {
          id: 'product-4',
          title: t('product4_content_title'),
          description: t('product4_content_desc'),
          features: [
            t('product4_feat1'),
            t('product4_feat2'),
            t('product4_feat3'),
            t('product4_feat4'),
          ],
          image: '/assets/img/performance-optimization.png',
          icon: Zap,
          color: 'from-orange-500 to-amber-500',
        }
      case 'product-5':
        return {
          id: 'product-5',
          title: t('product_lucid'),
          description: '',
          features: [],
          image: '/assets/img/dashboardlucid.png',
          icon: Eye,
          color: 'from-purple-500 to-pink-500',
          isLucid: true,
          hasMoreButton: false,
        }
      default:
        return null
    }
  }

  const productData = getProductData(selectedProduct)

  const productsList = [
    { id: 'product-1', titleKey: 'product1_title', icon: Shield, color: 'from-emerald-500 to-green-500' },
    { id: 'product-5', titleKey: 'product_lucid', icon: Eye, color: 'from-purple-500 to-pink-500' },
    { id: 'product-2', titleKey: 'product2_title', icon: Code, color: 'from-indigo-500 to-violet-500' },
    { id: 'product-3', titleKey: 'product3_title', icon: Shield, color: 'from-blue-500 to-cyan-500' },
    { id: 'product-4', titleKey: 'product4_title', icon: Zap, color: 'from-orange-500 to-amber-500' },
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

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId)
    const newUrl = productId ? `/products?product=${productId}` : '/products'
    window.history.pushState({}, '', newUrl)
    // Scroll suave al contenido
    document.getElementById('product-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const getProductTitle = (titleKey: string) => {
    switch (titleKey) {
      case 'product1_title': return t('product1_title')
      case 'product2_title': return t('product2_title')
      case 'product3_title': return t('product3_title')
      case 'product4_title': return t('product4_title')
      case 'product_lucid': return t('product_lucid')
      default: return titleKey
    }
  }

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: isSpanish ? 'Inicio' : 'Home', href: '/' },
          { label: t('nav_products') }
        ]} />
      </div>

      {/* Hero Section - Mejorado */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <BackgroundEffects variant="hero" intensity="medium" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/assets/img/blog/blog-3.jpg)' }}
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
                {isSpanish ? 'Nuestros Productos' : 'Our Products'}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto [data-theme='light']:text-slate-700">
              {isSpanish 
                ? 'Soluciones avanzadas de seguridad y optimización de IA para proteger y potenciar tu infraestructura empresarial.'
                : 'Advanced AI security and optimization solutions to protect and power your enterprise infrastructure.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="product-content" className="py-8 sm:py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Products List Sidebar - Mejorado */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-4 sm:p-6 sticky top-24"
              >
                <h4 className="text-lg font-semibold text-foreground mb-6 [data-theme='light']:text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-400" />
                  {isSpanish ? 'Nuestros Productos' : 'Our Products'}
                </h4>
                <div className="space-y-3">
                  {productsList.map((product) => {
                    const Icon = product.icon
                    return (
                      <motion.button
                        key={product.id}
                        onClick={() => handleProductSelect(product.id)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all flex items-center gap-3 group mb-2 ${
                          selectedProduct === product.id
                            ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                            : 'bg-white/5 hover:bg-white/10 text-foreground [data-theme="light"]:bg-slate-100 [data-theme="light"]:hover:bg-slate-200 [data-theme="light"]:text-slate-900'
                        }`}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${product.color} ${
                          selectedProduct === product.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                        } transition-opacity`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium flex-1">
                          {getProductTitle(product.titleKey)}
                        </span>
                        <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          selectedProduct === product.id ? 'translate-x-0' : 'translate-x-0 group-hover:translate-x-1'
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

            {/* Product Content - Mejorado */}
            <div className="lg:col-span-3">
              <motion.div
                key={selectedProduct || 'default'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden relative"
              >
                {/* Background gradient effect */}
                {productData?.color && (
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${productData.color} opacity-5 rounded-full blur-3xl -z-0`} />
                )}
                
                <div className="relative z-10">
                  {!selectedProduct || !productData ? (
                    // Default content - Mejorado
                    <div className="text-center">
                      <div className="inline-block mb-6">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto shadow-lg">
                          <Sparkles className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground [data-theme='light']:text-slate-900">
                        {isSpanish ? 'Soluciones de IA Empresarial' : 'Enterprise AI Solutions'}
                      </h3>
                      <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto [data-theme='light']:text-slate-700">
                        {isSpanish 
                          ? 'Ofrecemos una gama completa de productos para proteger, optimizar y potenciar la IA en tu empresa.'
                          : 'We offer a comprehensive range of products to protect, optimize, and power AI in your business.'}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                        <div className="glass rounded-xl p-6">
                          <h4 className="font-semibold text-lg mb-4 text-foreground [data-theme='light']:text-slate-900 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-primary-400" />
                            {isSpanish ? 'Productos Principales:' : 'Core Products:'}
                          </h4>
                          <ul className="space-y-2">
                            {[
                              { key: 'product1_title', icon: Shield },
                              { key: 'product_lucid', icon: Eye },
                              { key: 'product2_title', icon: Code },
                              { key: 'product3_title', icon: Shield },
                              { key: 'product4_title', icon: Zap },
                            ].map((product, idx) => {
                              const Icon = product.icon
                              return (
                                <li key={idx} className="flex items-center gap-2 text-foreground/80 [data-theme='light']:text-slate-700">
                                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                  <span>{t(product.key as any)}</span>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        <div className="glass rounded-xl p-6">
                          <h4 className="font-semibold text-lg mb-4 text-foreground [data-theme='light']:text-slate-900 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary-400" />
                            {isSpanish ? 'Beneficios Clave:' : 'Key Benefits:'}
                          </h4>
                          <ul className="space-y-2">
                            {[
                              isSpanish ? 'Seguridad de IA en tiempo real' : 'Real-time AI Security',
                              isSpanish ? 'Cumplimiento normativo' : 'Regulatory Compliance',
                              isSpanish ? 'Optimización de rendimiento' : 'Performance Optimization',
                              isSpanish ? 'Reducción de riesgos' : 'Risk Reduction',
                              isSpanish ? 'Protección de datos' : 'Data Protection',
                              isSpanish ? 'Escalabilidad empresarial' : 'Enterprise Scalability',
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
                  ) : productData.id === 'product-5' ? (
                    // Lucid special content - Mejorado
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        {productData.icon && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${productData.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <productData.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        )}
                        <div className="flex-1">
                          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2 text-gradient">
                            Lucid™
                          </h1>
                        </div>
                      </div>
                      <p className="text-xl text-foreground/80 mb-6 [data-theme='light']:text-slate-700">
                        {isSpanish 
                          ? 'Transforma tus Documentos en Decisiones Inteligentes'
                          : 'Transform Your Documents into Intelligent Decisions'}
                      </p>
                      <p className="text-lg text-foreground/70 mb-8 [data-theme='light']:text-slate-700">
                        {isSpanish
                          ? 'La plataforma líder en análisis de sesgos cognitivos para empresas que buscan la excelencia'
                          : 'The leading platform in cognitive bias analysis for companies seeking excellence'}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a
                          href="https://site.lucidapp.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="lg" className="px-8">
                            {isSpanish ? 'Probar Gratis por 30 Días' : 'Try Free for 30 Days'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                        <Link href="/products/lucid">
                          <Button size="lg" variant="outline" className="px-8">
                            {t('see_more')}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                      <div className="mt-8 space-y-6">
                        <div>
                          <h3 className="text-2xl font-semibold mb-4 text-foreground [data-theme='light']:text-slate-900">
                            {isSpanish ? '¿Qué es Lucid y Cómo Te Ayuda?' : 'What is Lucid and How Does It Help You?'}
                          </h3>
                          <div className="space-y-4">
                            <div className="glass rounded-xl p-6">
                              <h4 className="text-lg font-semibold mb-2 text-foreground [data-theme='light']:text-slate-900">
                                {isSpanish ? 'El Problema que Resuelve' : 'The Problem It Solves'}
                              </h4>
                              <p className="text-foreground/70 [data-theme='light']:text-slate-700">
                                {isSpanish
                                  ? 'Lucid™ detecta patrones de pensamiento subjetivos en documentos empresariales que pueden distorsionar la toma de decisiones de tu organización.'
                                  : 'Lucid™ detects subjective thinking patterns in business documents that can distort your organization\'s decision-making.'}
                              </p>
                            </div>
                            <div className="glass rounded-xl p-6">
                              <h4 className="text-lg font-semibold mb-2 text-foreground [data-theme='light']:text-slate-900">
                                {isSpanish ? '¿Por qué es Importante?' : 'Why is it Important?'}
                              </h4>
                              <p className="text-foreground/70 [data-theme='light']:text-slate-700">
                                {isSpanish
                                  ? 'Las distorsiones en el análisis cuestan a las empresas millones en decisiones erróneas cada año. Lucid™ te da la ventaja de detectar estos problemas antes de que afecten tu negocio.'
                                  : 'Analysis distortions cost companies millions in wrong decisions every year. Lucid™ gives you the advantage of detecting these problems before they affect your business.'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular product content - Mejorado
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        {productData.icon && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${productData.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <productData.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground [data-theme='light']:text-slate-900">
                            {productData.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-foreground/80 mb-8 [data-theme='light']:text-slate-700 leading-relaxed">
                        {productData.description}
                      </p>
                      
                      {productData.features.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold mb-4 text-foreground [data-theme='light']:text-slate-900">
                            {isSpanish ? 'Características Principales:' : 'Key Features:'}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {productData.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 [data-theme='light']:bg-slate-100 hover:bg-white/10 [data-theme='light']:hover:bg-slate-200 transition-colors"
                              >
                                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-400" />
                                <span className="text-foreground/90 [data-theme='light']:text-slate-800">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-center mt-10">
                        {productData.hasMoreButton ? (
                          <Link href={productData.moreLink!}>
                            <Button size="lg" className="px-8 text-lg">
                              {t('see_more')}
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

                  {/* Product Image */}
                  {productData?.image && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-10 flex justify-center"
                    >
                      <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={productData.image}
                          alt={productData.title}
                          fill
                          className="object-contain"
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

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground/70">Cargando productos...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
