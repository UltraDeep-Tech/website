'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, Clock, DollarSign, Shield, Users, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { caseStudies } from '@/components/sections/CaseStudies'

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  const study = caseStudies.find(s => s.id === params.id)

  if (!study) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/case-studies">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
            
            <div className="text-xs text-foreground/60 [data-theme='light']:text-slate-700 uppercase tracking-wider mb-4">
              {study.industry}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {study.company} Case Study
            </h1>
            <p className="text-xl text-foreground/70 [data-theme='light']:text-slate-700">
              {study.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">The Challenge</h2>
                    <p className="text-sm sm:text-base text-foreground/70 [data-theme='light']:text-slate-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Solution</h2>
                    <p className="text-sm sm:text-base text-foreground/70 [data-theme='light']:text-slate-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </CardContent>
                </Card>

                {study.testimonial && (
                  <Card className="bg-primary-500/5 border-primary-500/20">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Client Testimonial</h2>
                      <p className="text-base sm:text-lg italic text-foreground/80 [data-theme='light']:text-slate-800 mb-3 sm:mb-4">
                        "{study.testimonial.quote}"
                      </p>
                      <div className="text-sm sm:text-base text-foreground/60 [data-theme='light']:text-slate-700">
                        <div className="font-semibold">{study.testimonial.author}</div>
                        <div>{study.testimonial.role}, {study.testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6">
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Key Results</h3>
                    <div className="space-y-3 sm:space-y-4">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon
                        return (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 [data-theme='light']:text-primary-600 mt-0.5 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <div className="text-xs sm:text-sm text-foreground/60 [data-theme='light']:text-slate-700">{result.metric}</div>
                              <div className="text-lg sm:text-xl font-bold">{result.value}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm bg-primary-500/10 text-primary-400 [data-theme='light']:text-primary-600 border border-primary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
                    <p className="text-xs sm:text-sm text-foreground/70 [data-theme='light']:text-slate-700 mb-3 sm:mb-4">
                      See how we can help your business achieve similar results.
                    </p>
                    <Link href="/contact">
                      <Button className="w-full text-xs sm:text-sm">Schedule a Consultation</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

