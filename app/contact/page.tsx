'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import { useState } from 'react'

// Nota: Para agregar metadata a esta página, crear un layout.tsx en app/contact/
// o convertir este componente a Server Component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.status === 'success') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
      </div>
      {/* Hero */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">
                      Corrientes 800<br />
                      Ciudad Autónoma de Buenos Aires<br />
                      CP1008, Argentina
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="https://wa.link/2ebre2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      +54 (9) 11 7645-5965
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:contact@ultradeeptech.com"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      contact@ultradeeptech.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 rounded-lg bg-primary-500/20 text-primary-400 text-sm"
                      >
                        Message sent successfully! We'll get back to you soon.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 rounded-lg bg-destructive/20 text-destructive text-sm"
                      >
                        Error sending message. Please try again.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Common questions about our AI security solutions and services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion
              defaultOpen="faq-1"
              items={[
                {
                  id: 'faq-1',
                  question: "What is Ultra Deep Tech's core focus?",
                  answer: "Ultra Deep Tech provides AI security solutions and services. Our platform, Safety Shield Ultra™, delivers real-time protection for AI conversations, models, and infrastructure, ensuring your systems remain secure and compliant. We also offer AI consulting and implementation services to help businesses deploy secure AI solutions across all environments.",
                },
                {
                  id: 'faq-2',
                  question: 'What specific security services do you provide?',
                  answer: (
                    <>
                      <p className="mb-3">Our security services cover the complete AI protection lifecycle:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AI security monitoring and protection</li>
                        <li>Model security assessment</li>
                        <li>AI governance and compliance</li>
                        <li>Data protection</li>
                        <li>Infrastructure security</li>
                        <li>Security training</li>
                        <li>AI consulting and implementation</li>
                      </ul>
                    </>
                  ),
                },
                {
                  id: 'faq-3',
                  question: 'How does your security approach differ from traditional security providers?',
                  answer: (
                    <>
                      <p className="mb-3">Our approach is specifically designed for AI systems:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AI-first security architecture</li>
                        <li>Real-time AI monitoring</li>
                        <li>AI-specific threat protection</li>
                        <li>Automated security controls</li>
                        <li>Continuous AI threat adaptation</li>
                        <li>AI compliance coverage</li>
                      </ul>
                    </>
                  ),
                },
                {
                  id: 'faq-4',
                  question: 'What security standards and compliance do you support?',
                  answer: (
                    <>
                      <p className="mb-3">Our solutions align with key security standards:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>ISO 27001 for information security</li>
                        <li>GDPR and data privacy regulations</li>
                        <li>NIST AI Risk Management Framework</li>
                        <li>Industry-specific compliance requirements</li>
                        <li>AI-specific security guidelines</li>
                        <li>Cloud security standards</li>
                      </ul>
                      <p className="mt-3">We ensure your AI systems meet all relevant security and compliance requirements.</p>
                    </>
                  ),
                },
                {
                  id: 'faq-5',
                  question: 'How does Safety Shield Ultra™ handle incidents?',
                  answer: (
                    <>
                      <p className="mb-3">Safety Shield Ultra™ provides automated incident response:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-4">
                        <li>Continuous AI monitoring</li>
                        <li>Automated alerts</li>
                        <li>Real-time analysis</li>
                        <li>Automated containment</li>
                        <li>Incident logging</li>
                        <li>Security updates</li>
                      </ol>
                    </>
                  ),
                },
                {
                  id: 'faq-6',
                  question: 'What makes your solutions scalable?',
                  answer: (
                    <>
                      <p className="mb-3">Our architecture supports enterprise deployment:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Cloud-native controls</li>
                        <li>Automated scaling</li>
                        <li>Centralized management</li>
                        <li>Multi-environment support</li>
                        <li>API integration</li>
                        <li>Flexible deployment</li>
                      </ul>
                      <p className="mt-3">We ensure your security grows with your AI infrastructure.</p>
                    </>
                  ),
                },
                {
                  id: 'faq-7',
                  question: 'How do you maintain security?',
                  answer: (
                    <>
                      <p className="mb-3">We maintain security through:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Regular assessments</li>
                        <li>Threat updates</li>
                        <li>Patch management</li>
                        <li>Performance optimization</li>
                        <li>Security training updates</li>
                        <li>Compliance monitoring</li>
                      </ul>
                      <p className="mt-3">Our security evolves with emerging threats and new AI technologies.</p>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="mapa" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0194292984957!2d-58.37789599999999!3d-34.603670199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccace8409c981%3A0xb8cadd77ba71d9f3!2sAv.%20Corrientes%20800%2C%20C1008%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718907700672!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

