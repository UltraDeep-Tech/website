'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  links?: { text: string; href: string }[]
}

interface FAQItem {
  keywords: string[]
  answer: string
  answerEs: string
  links?: { text: string; href: string }[]
}

export function CompanyChatbot() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // FAQs sobre la empresa
  const faqs: FAQItem[] = [
    {
      keywords: ['producto', 'productos', 'product', 'safety', 'shield', 'lucid'],
      answer: 'We offer enterprise-grade AI security and automation products. Our main products are Safety Shield Ultra™ (AI security), Lucid™ (bias elimination), AI Model Protection Suite, Enterprise AI Security, and AI Performance Optimization. Would you like to know more about any specific product?',
      answerEs: 'Ofrecemos productos de seguridad y automatización IA de nivel empresarial. Nuestros principales productos son Safety Shield Ultra™ (seguridad IA), Lucid™ (eliminación de sesgos), Suite de Protección de Modelos IA, Seguridad Empresarial IA y Optimización de Rendimiento IA. ¿Te gustaría saber más sobre algún producto específico?',
      links: [
        { text: isSpanish ? 'Ver Productos' : 'View Products', href: '/products' },
        { text: isSpanish ? 'Safety Shield' : 'Safety Shield', href: '/products/safety-shield' },
      ]
    },
    {
      keywords: ['servicio', 'servicios', 'service', 'services', 'capacitación', 'training', 'desarrollo', 'development'],
      answer: 'We provide comprehensive AI services including Custom AI Development, Process Automation, AI Strategy & Consulting, AI Security & Compliance, and Training & Education with professional certifications. How can we help you?',
      answerEs: 'Ofrecemos servicios integrales de IA incluyendo Desarrollo de IA Personalizado, Automatización de Procesos, Estrategia y Consultoría IA, Seguridad y Cumplimiento IA, y Capacitación y Educación con certificaciones profesionales. ¿Cómo podemos ayudarte?',
      links: [
        { text: isSpanish ? 'Ver Servicios' : 'View Services', href: '/services' },
        { text: isSpanish ? 'Cursos' : 'Courses', href: '/services/training' },
      ]
    },
    {
      keywords: ['empresa', 'about', 'nosotros', 'company', 'quienes', 'somos', 'who', 'are'],
      answer: 'Ultra Deep Tech is a leading AI consultancy specializing in enterprise AI security and intelligent automation. We help businesses protect their AI systems and automate processes to drive efficiency and growth. Learn more about us on our About page.',
      answerEs: 'Ultra Deep Tech es una consultoría líder en IA especializada en seguridad empresarial de IA y automatización inteligente. Ayudamos a empresas a proteger sus sistemas de IA y automatizar procesos para impulsar eficiencia y crecimiento. Conoce más sobre nosotros en nuestra página Acerca de.',
      links: [
        { text: isSpanish ? 'Sobre Nosotros' : 'About Us', href: '/about' },
      ]
    },
    {
      keywords: ['contacto', 'contact', 'hablar', 'speak', 'llamar', 'call', 'email', 'correo'],
      answer: 'You can contact us through our contact page, book a free consultation call, or chat with us on WhatsApp. We\'re here to help!',
      answerEs: 'Puedes contactarnos a través de nuestra página de contacto, reservar una llamada de consulta gratuita o chatear con nosotros en WhatsApp. ¡Estamos aquí para ayudarte!',
      links: [
        { text: isSpanish ? 'Contacto' : 'Contact', href: '/contact' },
        { text: isSpanish ? 'Reservar Llamada' : 'Book a Call', href: 'https://calendly.com/avipil/30-min' },
      ]
    },
    {
      keywords: ['precio', 'precios', 'price', 'cost', 'costo', 'cuanto', 'how much'],
      answer: 'Our pricing varies based on your specific needs and requirements. We offer custom solutions tailored to each client. Schedule a free consultation to discuss your project and receive a personalized quote.',
      answerEs: 'Nuestros precios varían según tus necesidades y requisitos específicos. Ofrecemos soluciones personalizadas adaptadas a cada cliente. Agenda una consulta gratuita para discutir tu proyecto y recibir una cotización personalizada.',
      links: [
        { text: isSpanish ? 'Reservar Consulta' : 'Book Consultation', href: 'https://calendly.com/avipil/30-min' },
      ]
    },
    {
      keywords: ['curso', 'cursos', 'curso', 'training', 'certificación', 'certification', 'certificado'],
      answer: 'We offer professional AI security training and certifications including AISP (AI Security Professional), AIGP (AI Governance Professional), and Enterprise AI Security courses. All courses include certifications recognized by the industry.',
      answerEs: 'Ofrecemos capacitación profesional en seguridad IA y certificaciones incluyendo AISP (Profesional en Seguridad IA), AIGP (Profesional en Gobernanza IA) y cursos de Seguridad Empresarial IA. Todos los cursos incluyen certificaciones reconocidas por la industria.',
      links: [
        { text: isSpanish ? 'Ver Cursos' : 'View Courses', href: '/services/training' },
      ]
    },
    {
      keywords: ['hola', 'hi', 'hello', 'buenos', 'días', 'good', 'morning', 'ayuda', 'help'],
      answer: 'Hello! I\'m here to help you learn about Ultra Deep Tech. You can ask me about our products, services, company, contact information, pricing, courses, or anything else. What would you like to know?',
      answerEs: '¡Hola! Estoy aquí para ayudarte a conocer Ultra Deep Tech. Puedes preguntarme sobre nuestros productos, servicios, empresa, información de contacto, precios, cursos o cualquier otra cosa. ¿Qué te gustaría saber?',
    },
  ]

  // Mensaje de bienvenida inicial
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: isSpanish 
          ? '¡Hola! 👋 Soy el asistente virtual de Ultra Deep Tech. Puedo ayudarte con información sobre nuestros productos, servicios, cursos y más. ¿En qué puedo ayudarte?'
          : 'Hello! 👋 I\'m Ultra Deep Tech\'s virtual assistant. I can help you with information about our products, services, courses, and more. How can I help you?',
        isBot: true,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, isSpanish])

  // Scroll automático a los nuevos mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus en el input cuando se abre
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const findAnswer = (query: string): FAQItem | null => {
    const lowerQuery = query.toLowerCase().trim()
    
    for (const faq of faqs) {
      const matches = faq.keywords.some(keyword => 
        lowerQuery.includes(keyword.toLowerCase())
      )
      if (matches) {
        return faq
      }
    }
    
    return null
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const queryText = inputValue

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      text: queryText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Buscar respuesta
    setTimeout(() => {
      const faq = findAnswer(queryText)
      let botText = ''

      if (faq) {
        botText = isSpanish ? faq.answerEs : faq.answer
      } else {
        botText = isSpanish
          ? 'Gracias por tu mensaje. No estoy seguro de cómo responder exactamente a eso, pero puedo ayudarte con información sobre nuestros productos, servicios, cursos, contacto o cualquier otra pregunta sobre Ultra Deep Tech. ¿Hay algo específico en lo que pueda ayudarte?'
          : 'Thank you for your message. I\'m not sure how to answer that exactly, but I can help you with information about our products, services, courses, contact, or any other questions about Ultra Deep Tech. Is there something specific I can help you with?'
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        links: faq?.links || undefined
      }

      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Buscar respuesta
    setTimeout(() => {
      const faq = findAnswer(question)
      let botText = ''

      if (faq) {
        botText = isSpanish ? faq.answerEs : faq.answer
      } else {
        botText = isSpanish
          ? 'Gracias por tu mensaje. No estoy seguro de cómo responder exactamente a eso, pero puedo ayudarte con información sobre nuestros productos, servicios, cursos, contacto o cualquier otra pregunta sobre Ultra Deep Tech. ¿Hay algo específico en lo que pueda ayudarte?'
          : 'Thank you for your message. I\'m not sure how to answer that exactly, but I can help you with information about our products, services, courses, contact, or any other questions about Ultra Deep Tech. Is there something specific I can help you with?'
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        links: faq?.links || undefined
      }

      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const quickQuestions = isSpanish 
    ? [
        '¿Qué productos ofrecen?',
        '¿Qué servicios tienen?',
        '¿Cómo contactarlos?',
        '¿Ofrecen cursos?'
      ]
    : [
        'What products do you offer?',
        'What services do you have?',
        'How can I contact you?',
        'Do you offer courses?'
      ]

  return (
    <>
      {/* Botón flotante */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/50 flex items-center justify-center cursor-pointer relative"
          aria-label={isSpanish ? 'Abrir chat' : 'Open chat'}
        >
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </motion.div>
            )}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
              >
                <X className="w-7 h-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[32rem] max-h-[600px] z-50 flex flex-col glass-strong rounded-2xl shadow-2xl border border-white/10 [data-theme='light']:border-slate-200/50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 [data-theme='light']:border-slate-200/50 bg-gradient-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground [data-theme='light']:text-slate-900">
                    {isSpanish ? 'Ultra Deep Tech' : 'Ultra Deep Tech'}
                  </h3>
                  <p className="text-xs text-foreground/60 [data-theme='light']:text-slate-600">
                    {isSpanish ? 'Asistente Virtual' : 'Virtual Assistant'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/5 [data-theme='light']:hover:bg-slate-900/5 transition-colors"
                aria-label={isSpanish ? 'Cerrar chat' : 'Close chat'}
              >
                <X className="w-5 h-5 text-foreground/60" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? 'bg-white/5 [data-theme="light"]:bg-slate-100 text-foreground [data-theme="light"]:text-slate-900'
                        : 'bg-gradient-primary text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    {message.links && message.links.length > 0 && (
                      <div className="mt-3 space-y-2 pt-3 border-t border-white/10 [data-theme='light']:border-slate-300">
                        {message.links.map((link, idx) => (
                          <Link
                            key={idx}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-2 text-xs font-medium text-primary-400 hover:text-primary-300 [data-theme='light']:text-primary-600 [data-theme='light']:hover:text-primary-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <ArrowRight className="w-3 h-3" />
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Preguntas rápidas */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-foreground/60 mb-2">
                  {isSpanish ? 'Preguntas rápidas:' : 'Quick questions:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 [data-theme='light']:bg-slate-100 text-foreground/80 [data-theme='light']:text-slate-700 hover:bg-white/10 [data-theme='light']:hover:bg-slate-200 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 [data-theme='light']:border-slate-200/50">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isSpanish ? 'Escribe tu mensaje...' : 'Type your message...'}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 [data-theme='light']:bg-slate-100 border border-white/10 [data-theme='light']:border-slate-200 text-foreground [data-theme='light']:text-slate-900 placeholder:text-foreground/40 [data-theme='light']:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                  aria-label={isSpanish ? 'Enviar mensaje' : 'Send message'}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Botón de WhatsApp directo */}
              <Link
                href="https://wa.link/2ebre2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#128c7e] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {isSpanish ? 'Hablar con un humano' : 'Talk to a human'}
              </Link>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

