'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Bell, BarChart3, CheckCircle2, ArrowRight, Play } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import Link from 'next/link'
import Image from 'next/image'

export default function SafetyShieldPage() {
  const features = [
    {
      icon: Shield,
      title: 'Prompt Injection Defense',
      description: 'Prevents malicious prompts and unauthorized commands in real-time.',
    },
    {
      icon: Lock,
      title: 'Data Privacy Control',
      description: 'Protects sensitive information and prevents unauthorized data exposure.',
    },
    {
      icon: Bell,
      title: 'Response Monitoring',
      description: 'Analyzes AI responses for safety and compliance in real-time.',
    },
    {
      icon: BarChart3,
      title: 'Security Analytics',
      description: 'Tracks and visualizes security metrics across all AI conversations.',
    },
  ]

  const featuredCards = [
    {
      title: 'Real-time Protection',
      description: 'Monitors and secures AI conversations instantly, blocking threats before they impact your system.',
      image: '/assets/img/cards-4.png',
    },
    {
      title: 'Privacy Compliance',
      description: 'Ensures AI interactions comply with data protection regulations and privacy standards.',
      image: '/assets/img/cards-2.png',
    },
    {
      title: 'Risk Prevention',
      description: 'Identifies and blocks potential security risks in AI conversations before they escalate.',
      image: '/assets/img/cards-6.png',
    },
  ]

  const capabilities = [
    {
      title: 'Conversation Security',
      subtitle: 'Protect all AI interactions with advanced security monitoring.',
      features: [
        'Real-time prompt injection detection and prevention.',
        'Automatic blocking of unauthorized access attempts.',
        'Continuous monitoring of AI responses for safety.',
      ],
      icon: Shield,
    },
    {
      title: 'Privacy Protection',
      subtitle: 'Ensure data privacy in all AI conversations.',
      description: 'Protect sensitive information with automated PII detection, data masking, and privacy compliance monitoring.',
      icon: Lock,
    },
    {
      title: 'Security Analytics',
      description: 'Comprehensive insights into your AI system\'s security status.',
      features: [
        'Detailed security metrics and threat analytics.',
        'Risk assessment and trend analysis.',
        'Custom security reporting and alerts.',
      ],
      icon: BarChart3,
    },
    {
      title: 'Access Control',
      subtitle: 'Manage and monitor AI system access securely.',
      description: 'Control who can access your AI systems with role-based permissions, authentication, and detailed access logs.',
      icon: Bell,
    },
  ]

  const faqs = [
    {
      id: 'faq-1',
      question: 'What is Safety Shield Ultra™?',
      answer: 'Safety Shield Ultra™ is a security platform specifically designed to protect conversational AI systems. It monitors AI interactions in real-time, prevents unauthorized access, and ensures data privacy across all AI conversations.',
    },
    {
      id: 'faq-2',
      question: 'How does Safety Shield Ultra™ protect my AI systems?',
      answer: 'Our platform provides comprehensive protection through real-time prompt injection detection, PII data masking, response monitoring, and access control. It continuously analyzes AI conversations to prevent security breaches and ensure compliance.',
    },
    {
      id: 'faq-3',
      question: 'Which types of AI systems can Safety Shield Ultra™ protect?',
      answer: 'Safety Shield Ultra™ works with all major conversational AI platforms, including customer service chatbots, virtual assistants, and enterprise AI systems. Our solution scales from small chatbots to large-scale AI deployments.',
    },
    {
      id: 'faq-4',
      question: 'How does Safety Shield Ultra™ handle data privacy compliance?',
      answer: 'We automatically detect and mask sensitive information in AI conversations, ensure GDPR and other privacy regulation compliance, and provide detailed audit logs of all data handling practices.',
    },
    {
      id: 'faq-5',
      question: 'Can Safety Shield Ultra™ integrate with existing AI platforms?',
      answer: 'Yes, Safety Shield Ultra™ integrates seamlessly with major AI platforms and can be deployed as a security layer for your existing conversational AI systems without disrupting their functionality.',
    },
    {
      id: 'faq-6',
      question: 'How does prompt injection protection work?',
      answer: 'Our system analyzes every input in real-time to detect and block potentially harmful prompts that could manipulate your AI\'s behavior. This includes attempts to bypass security controls or extract sensitive information.',
    },
    {
      id: 'faq-7',
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 technical support, regular security updates, and expert guidance on AI security best practices. Our team helps you optimize your AI security settings and respond to any security concerns.',
    },
    {
      id: 'faq-8',
      question: 'How does Safety Shield Ultra™ monitor AI responses?',
      answer: 'Our platform continuously analyzes AI outputs to ensure they meet safety and compliance standards, flagging potentially inappropriate or unsafe responses before they reach users.',
    },
    {
      id: 'faq-9',
      question: 'How often is the security system updated?',
      answer: 'We continuously update our security rules and detection patterns to protect against new types of AI attacks and vulnerabilities, ensuring your systems stay protected against emerging threats.',
    },
    {
      id: 'faq-10',
      question: 'Can I try Safety Shield Ultra™ before purchasing?',
      answer: 'Yes, we offer a demo of Safety Shield Ultra™ protecting a test AI system. Contact our team to schedule a personalized demonstration of our security features.',
    },
  ]

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Safety Shield Ultra™' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative py-6 sm:py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Safety Shield Ultra™: <span className="text-gradient">Securing Your Conversational AI</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/70 mb-6">
                Protect your AI conversations with comprehensive security monitoring. Safety Shield Ultra™ safeguards against prompt injection, data leaks, and unauthorized access in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="#about">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Shield className="w-5 h-5 mr-2" />
                    See more features
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Play className="w-5 h-5 mr-2" />
                  See It in Action
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Request a demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Image
                src="/assets/img/image_dashboard.webp"
                alt="Safety Shield Ultra™ Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/assets/img/notebookdash.webp"
                  alt="Safety Shield Dashboard"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl mb-4"
                  loading="lazy"
                />
                <Image
                  src="/assets/img/celudash.webp"
                  alt="Safety Shield Mobile"
                  width={200}
                  height={300}
                  className="absolute bottom-0 right-0 w-32 h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm text-primary-400 mb-2">Discover Safety Shield Ultra™</h4>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Complete Protection for Conversational AI Systems
              </h2>
              <p className="text-foreground/70 mb-6">
                Safety Shield Ultra™ provides comprehensive security for your AI chatbots and virtual assistants. Monitor interactions, prevent unauthorized access, and ensure data privacy in real-time.
              </p>
              <div className="flex gap-4">
                <Link href="#featured">
                  <Button variant="outline">
                    See more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button variant="secondary">
                  Request a demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-6 sm:py-8 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Secure Your AI Conversations
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive protection for all your conversational AI applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-primary-500/80 backdrop-blur-sm flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{card.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section id="features" className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Key Capabilities
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive security features designed specifically for conversational AI systems.
            </p>
          </motion.div>

          <div className="space-y-10">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}
                >
                  <div className={`${!isEven ? 'md:col-start-2' : ''}`}>
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                      {capability.title}
                    </h3>
                    {capability.subtitle && (
                      <p className="text-base text-foreground/70 italic mb-3">
                        {capability.subtitle}
                      </p>
                    )}
                    {capability.description && (
                      <p className="text-sm md:text-base text-foreground/70 mb-3">
                        {capability.description}
                      </p>
                    )}
                    {capability.features && (
                      <ul className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/70">
                            <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="w-full h-64 rounded-2xl bg-gradient-card flex items-center justify-center">
                      <Icon className="w-24 h-24 text-primary-400/30" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Features */}
      <section className="py-6 sm:py-8 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-strong rounded-2xl p-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Know all the features and see how it works
            </h2>
            <p className="text-base md:text-lg text-foreground/70 mb-6">
              Explore with us all the features
            </p>
            <Link href="https://calendly.com/avipil/30-min" target="_blank">
              <Button size="lg">
                Request a demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Common questions about securing your conversational AI systems with Safety Shield Ultra™.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion items={faqs} defaultOpen="faq-1" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-strong rounded-2xl p-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Secure Your <span className="text-gradient">AI?</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/70 mb-6">
              Get started with Safety Shield Ultra™ today and protect your AI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">Contact Sales</Button>
              </Link>
              <Link href="https://calendly.com/avipil/30-min" target="_blank">
                <Button variant="secondary" size="lg">Schedule Demo</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
