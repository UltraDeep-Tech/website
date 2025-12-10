'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Clock, DollarSign, Shield, Users, FileText, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'

export interface CaseStudy {
  id: string
  company: string
  companyLogo?: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    icon: React.ComponentType<{ className?: string }>
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
  tags: string[]
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'motorola-ai-security',
    company: 'Motorola Solutions',
    industry: 'Technology & Security',
    challenge: 'Needed enterprise-grade AI security to protect customer data and prevent prompt injection attacks across multiple AI-powered applications.',
    solution: 'Implemented Safety Shield Ultra™ with real-time monitoring, automated threat detection, and compliance with industry standards. Deployed across all AI systems with minimal disruption.',
    results: [
      { metric: 'Threats Blocked', value: '10,000+', icon: Shield },
      { metric: 'Uptime', value: '99.9%', icon: Clock },
      { metric: 'Cost Savings', value: '$500K/year', icon: DollarSign },
      { metric: 'Compliance Score', value: '100%', icon: CheckCircle2 },
    ],
    testimonial: {
      quote: 'Safety Shield Ultra™ has transformed how we secure our AI systems. The real-time protection is incredible and gives us complete peace of mind.',
      author: 'Sarah Johnson',
      role: 'CTO',
      company: 'Motorola Solutions',
    },
    tags: ['AI Security', 'Enterprise', 'Compliance'],
    featured: true,
  },
  {
    id: 'piere-automation',
    company: 'Piere',
    industry: 'E-commerce',
    challenge: 'Manual document processing was taking 40+ hours per week. Needed to automate invoice processing, order management, and customer communications.',
    solution: 'Built custom AI automation system for document processing, customer service chatbots, and inventory management. Integrated with existing e-commerce platform.',
    results: [
      { metric: 'Time Saved', value: '35 hrs/week', icon: Clock },
      { metric: 'Processing Speed', value: '10x faster', icon: TrendingUp },
      { metric: 'Error Reduction', value: '95%', icon: CheckCircle2 },
      { metric: 'ROI', value: '300%', icon: DollarSign },
    ],
    testimonial: {
      quote: 'The automation system has completely transformed our operations. We can now focus on growth instead of manual data entry.',
      author: 'Michael Chen',
      role: 'Operations Director',
      company: 'Piere',
    },
    tags: ['Automation', 'E-commerce', 'Document Processing'],
    featured: true,
  },
  {
    id: 'wiselayer-decision-making',
    company: 'Wiselayer',
    industry: 'Consulting',
    challenge: 'Cognitive biases were affecting strategic decisions. Needed objective analysis tools to improve decision quality and reduce risks.',
    solution: 'Implemented Lucid™ for bias detection and decision optimization. Integrated with existing analytics platforms and trained team on best practices.',
    results: [
      { metric: 'Decision Quality', value: '+40%', icon: TrendingUp },
      { metric: 'Risk Reduction', value: '60%', icon: Shield },
      { metric: 'Time to Decision', value: '-50%', icon: Clock },
      { metric: 'Client Satisfaction', value: '+35%', icon: Users },
    ],
    testimonial: {
      quote: 'Lucid™ has helped us make better decisions by eliminating biases we didn\'t even know we had. Our strategic planning is now more objective and effective.',
      author: 'Emily Rodriguez',
      role: 'AI Lead',
      company: 'Wiselayer',
    },
    tags: ['Decision Making', 'Bias Detection', 'Strategy'],
    featured: false,
  },
]

export function CaseStudies() {
  const { t } = useTranslation()
  
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-section-alt relative overflow-hidden">
      <BackgroundEffects variant="section" intensity="medium" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 [data-theme='light']:text-slate-700 max-w-2xl mx-auto px-4">
            Real results from real companies. See how we help businesses achieve measurable outcomes with AI.
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
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
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
                y: -8,
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 17,
                },
              }}
              className={study.featured ? 'lg:col-span-2' : ''}
            >
              <Card className={`h-full hover:glass-strong transition-all relative overflow-hidden group ${study.featured ? 'lg:flex lg:flex-row' : ''}`}>
                {/* Featured Badge */}
                {study.featured && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                />
                
                <CardHeader className={`relative z-10 ${study.featured ? 'lg:w-1/2 lg:pr-4 xl:pr-6' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-xs text-foreground/60 [data-theme='light']:text-slate-700 uppercase tracking-wider mb-1">
                        {study.industry}
                      </div>
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2">
                        {study.company}
                      </CardTitle>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground/80 [data-theme='light']:text-slate-800 mb-1">Challenge:</h4>
                      <CardDescription className="text-xs sm:text-sm [data-theme='light']:text-slate-700">
                        {study.challenge}
                      </CardDescription>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground/80 [data-theme='light']:text-slate-800 mb-1">Solution:</h4>
                      <CardDescription className="text-xs sm:text-sm [data-theme='light']:text-slate-700">
                        {study.solution}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className={`relative z-10 ${study.featured ? 'lg:w-1/2 lg:pl-4 xl:pl-6 lg:border-l lg:border-primary-500/10' : ''}`}>
                  {/* Results Metrics */}
                  <div className={`grid ${study.featured ? 'grid-cols-2 lg:grid-cols-1 xl:grid-cols-2' : 'grid-cols-2'} gap-2 sm:gap-4 mb-4 sm:mb-6`}>
                    {study.results.map((result, idx) => {
                      const Icon = result.icon
                      return (
                        <motion.div
                          key={idx}
                          className="p-2 sm:p-3 lg:p-4 rounded-lg glass border border-primary-500/10"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 [data-theme='light']:text-primary-600 flex-shrink-0" />
                            <span className="text-xs text-foreground/60 [data-theme='light']:text-slate-700 truncate">{result.metric}</span>
                          </div>
                          <div className="text-base sm:text-lg lg:text-xl font-bold text-foreground [data-theme='light']:text-slate-900">
                            {result.value}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md text-xs bg-primary-500/10 text-primary-400 [data-theme='light']:text-primary-600 border border-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div className="p-4 rounded-lg bg-primary-500/5 border border-primary-500/10 mb-6">
                      <p className="text-sm italic text-foreground/80 [data-theme='light']:text-slate-800 mb-3">
                        "{study.testimonial.quote}"
                      </p>
                      <div className="text-xs text-foreground/60 [data-theme='light']:text-slate-700">
                        <div className="font-semibold">{study.testimonial.author}</div>
                        <div>{study.testimonial.role}, {study.testimonial.company}</div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link href={`/case-studies/${study.id}`}>
                    <Button variant="default" className="w-full group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/case-studies">
            <Button variant="secondary" size="lg">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

