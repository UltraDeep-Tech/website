'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  GraduationCap, Award, BookOpen, Shield, Clock, Users, ArrowRight, 
  CheckCircle2, Award as AwardIcon, Link2, Lightbulb, Settings, 
  MapPin, Phone, Mail, Send, Star, Quote, Play, Sparkles,
  TrendingUp, Lock
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Modal } from '@/components/ui/Modal'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

// Helper para codificar rutas de imágenes
function encodeImagePath(path: string): string {
  const parts = path.split('/')
  return parts.map(part => part ? encodeURIComponent(part) : '').join('/')
}

// Datos de certificados
const certificates = [
  {
    id: 'aisp',
    title: 'AISP - AI Security Professional',
    titleEs: 'AISP - Profesional en Seguridad IA',
    code: 'AISP-80012-ARG',
    description: 'Con la certificación AISP, tu empresa demostrará a clientes, inversores y auditores que cuenta con un equipo capaz de anticipar y neutralizar ciberamenazas basadas en IA, fortaleciendo la confianza institucional y garantizando la continuidad operativa.',
    descriptionEs: 'Con la certificación AISP, tu empresa demostrará a clientes, inversores y auditores que cuenta con un equipo capaz de anticipar y neutralizar ciberamenazas basadas en IA, fortaleciendo la confianza institucional y garantizando la continuidad operativa.',
    image: '/assets/img/certificates/aisp.png',
    exampleImage: '/assets/img/certificates/cert-aisp.png',
    format: 'Taller intensivo de 3 días (9:00-13:00 cada día)',
    formatEs: 'Taller intensivo de 3 días (9:00-13:00 cada día)',
    days: [
      {
        title: 'Day 1: AI Security Fundamentals',
        titleEs: 'Día 1: Fundamentos de Seguridad en IA',
        items: [
          'AI/ML architecture vulnerabilities',
          'Threat landscape overview',
          'Risk assessment frameworks',
          'Lab: Vulnerability identification exercises',
        ],
        itemsEs: [
          'Vulnerabilidades en arquitecturas de IA/ML',
          'Panorama de amenazas',
          'Marcos de evaluación de riesgos',
          'Laboratorio: Ejercicios de identificación de vulnerabilidades',
        ],
      },
      {
        title: 'Day 2: Attack Vectors and Controls',
        titleEs: 'Día 2: Vectores de Ataque y Controles',
        items: [
          'Data poisoning and adversarial attacks',
          'Prompt injection vulnerabilities',
          'Defensive controls implementation',
          'Lab: Defensive measures implementation',
        ],
        itemsEs: [
          'Envenenamiento de datos y ataques adversarios',
          'Vulnerabilidades de inyección de prompts',
          'Implementación de controles defensivos',
          'Laboratorio: Implementación de medidas defensivas',
        ],
      },
      {
        title: 'Day 3: Deployment and Response',
        titleEs: 'Día 3: Despliegue y Respuesta',
        items: [
          'Secure deployment pipelines',
          'Incident detection and response',
          'Continuous monitoring frameworks',
          'Certification assessment',
        ],
        itemsEs: [
          'Pipelines seguros de despliegue',
          'Detección y respuesta a incidentes',
          'Marcos de monitoreo continuo',
          'Evaluación para certificación',
        ],
      },
    ],
    includes: [
      'Enterprise-level training materials',
      'Digital certification',
      'Access to expert instructors',
      'Post-training support',
    ],
    includesEs: [
      'Materiales de formación de nivel empresarial',
      'Certificación digital',
      'Acceso a instructores expertos',
      'Soporte post-formación',
    ],
  },
  {
    id: 'caise',
    title: 'CAISE - Certified AI Security Expert',
    titleEs: 'CAISE - Experto Certificado en Seguridad IA',
    code: 'CAISE-50045-ARG',
    description: 'El programa CAISE forma a tus líderes en técnicas avanzadas de defensa y auditoría de sistemas de IA, aportando un diferencial estratégico en licitaciones y proyectos de alta complejidad, y asegurando el cumplimiento normativo más exigente.',
    descriptionEs: 'El programa CAISE forma a tus líderes en técnicas avanzadas de defensa y auditoría de sistemas de IA, aportando un diferencial estratégico en licitaciones y proyectos de alta complejidad, y asegurando el cumplimiento normativo más exigente.',
    image: '/assets/img/certificates/cais.png',
    exampleImage: '/assets/img/certificates/cert-cais.png',
    format: 'Taller avanzado de 4 días (9:00-13:00 cada día)',
    formatEs: 'Taller avanzado de 4 días (9:00-13:00 cada día)',
    days: [
      {
        title: 'Day 1: Advanced Security Architecture',
        titleEs: 'Día 1: Arquitectura Avanzada de Seguridad',
        items: [
          'Security by design for AI systems',
          'Threat modeling methodologies',
          'Zero-Trust architecture implementation',
          'Lab: Architecture evaluation',
        ],
        itemsEs: [
          'Seguridad por diseño para sistemas de IA',
          'Metodologías de modelado de amenazas',
          'Implementación de arquitectura Zero-Trust',
          'Laboratorio: Evaluación de arquitectura',
        ],
      },
      {
        title: 'Day 2: Advanced Threat Detection',
        titleEs: 'Día 2: Detección Avanzada de Amenazas',
        items: [
          'ML-based anomaly detection',
          'Neural network integrity verification',
          'Behavioral analysis techniques',
          'Lab: Detection systems configuration',
        ],
        itemsEs: [
          'Detección de anomalías basada en ML',
          'Verificación de integridad de redes neuronales',
          'Técnicas de análisis conductual',
          'Laboratorio: Configuración de sistemas de detección',
        ],
      },
      {
        title: 'Day 3: Forensic Analysis and Testing',
        titleEs: 'Día 3: Análisis Forense y Pruebas',
        items: [
          'Model forensic analysis',
          'Training data compromise investigation',
          'Red team testing methodologies',
          'Lab: Forensic investigation',
        ],
        itemsEs: [
          'Análisis forense de modelos',
          'Investigación de compromiso en datos de entrenamiento',
          'Metodologías de pruebas de equipo rojo',
          'Laboratorio: Investigación forense',
        ],
      },
      {
        title: 'Day 4: Secure DevOps and Certification',
        titleEs: 'Día 4: DevOps Seguro y Certificación',
        items: [
          'CI/CD pipeline security for AI',
          'Automated security testing',
          'Secrets management best practices',
          'Certification assessment',
        ],
        itemsEs: [
          'Seguridad en pipelines CI/CD para IA',
          'Pruebas automatizadas de seguridad',
          'Mejores prácticas de gestión de secretos',
          'Evaluación para certificación',
        ],
      },
    ],
    includes: [
      'Enterprise-level training materials',
      'Digital certification',
      'Access to expert instructors',
      'Post-training support',
    ],
    includesEs: [
      'Materiales de formación de nivel empresarial',
      'Certificación digital',
      'Acceso a instructores expertos',
      'Soporte post-formación',
    ],
  },
  {
    id: 'aigp',
    title: 'AIGP - AI Governance Professional',
    titleEs: 'AIGP - Profesional en Gobernanza IA',
    code: 'AIGP-61008-ARG',
    description: 'AIGP capacita a tu alta gerencia en el diseño e implementación de gobernanza de IA, estableciendo políticas y métricas que aseguren transparencia, responsabilidad y alineación con estándares internacionales, clave para la reputación corporativa.',
    descriptionEs: 'AIGP capacita a tu alta gerencia en el diseño e implementación de gobernanza de IA, estableciendo políticas y métricas que aseguren transparencia, responsabilidad y alineación con estándares internacionales, clave para la reputación corporativa.',
    image: '/assets/img/certificates/aigp.png',
    exampleImage: '/assets/img/certificates/cert-aigp.png',
    format: 'Taller ejecutivo de 3 días (9:00-13:00 cada día)',
    formatEs: 'Taller ejecutivo de 3 días (9:00-13:00 cada día)',
    days: [
      {
        title: 'Day 1: Governance Fundamentals',
        titleEs: 'Día 1: Fundamentos de Gobernanza',
        items: [
          'Key governance principles',
          'International standards (ISO, NIST, OECD)',
          'Regulatory compliance requirements',
          'Workshop: Governance framework planning',
        ],
        itemsEs: [
          'Principios clave de gobernanza',
          'Estándares internacionales (ISO, NIST, OCDE)',
          'Requisitos de cumplimiento regulatorio',
          'Taller: Planificación de marco de gobernanza',
        ],
      },
      {
        title: 'Day 2: Risk and Ethics',
        titleEs: 'Día 2: Riesgo y Ética',
        items: [
          'AI-specific risk assessment',
          'Bias detection and mitigation',
          'Ethical implementation strategies',
          'Workshop: Risk register development',
        ],
        itemsEs: [
          'Evaluación de riesgos específicos de IA',
          'Detección y mitigación de sesgos',
          'Estrategias de implementación ética',
          'Taller: Desarrollo de registro de riesgos',
        ],
      },
      {
        title: 'Day 3: Implementation and Assurance',
        titleEs: 'Día 3: Implementación y Garantía',
        items: [
          'Governance framework deployment',
          'Documentation requirements',
          'Continuous compliance monitoring',
          'Certification assessment',
        ],
        itemsEs: [
          'Despliegue de marco de gobernanza',
          'Requisitos de documentación',
          'Monitoreo continuo de cumplimiento',
          'Evaluación para certificación',
        ],
      },
    ],
    includes: [
      'Enterprise-level training materials',
      'Digital certification',
      'Access to expert instructors',
      'Post-training support',
    ],
    includesEs: [
      'Materiales de formación de nivel empresarial',
      'Certificación digital',
      'Acceso a instructores expertos',
      'Soporte post-formación',
    ],
  },
]

// Testimonios
const testimonials = [
  {
    name: 'Pablo Montero',
    code: 'AISP-79954-ARG',
    text: 'La certificación AISP de Ultra Deep Tech elevó mi perfil profesional en el sector público.',
    textEs: 'La certificación AISP de Ultra Deep Tech elevó mi perfil profesional en el sector público.',
    image: '/assets/img/testimonials/testimonials-4.jpg',
  },
  {
    name: 'Valentina Torres',
    code: 'CAISE-50045-ARG',
    text: 'Gracias a la formación CAISE, ahora lidero auditorías de IA con total confianza y rigurosidad.',
    textEs: 'Gracias a la formación CAISE, ahora lidero auditorías de IA con total confianza y rigurosidad.',
    image: '/assets/img/testimonials/testimonials-3.jpg',
  },
  {
    name: 'Diego Saenz',
    code: 'AISP-80013-ARG',
    text: 'La certificación AISP me proporcionó herramientas prácticas para mejorar la seguridad de nuestros sistemas de IA.',
    textEs: 'La certificación AISP me proporcionó herramientas prácticas para mejorar la seguridad de nuestros sistemas de IA.',
    image: '/assets/img/testimonials/testimonials-5.jpg',
  },
]

// Alianzas
const alliances = [
  {
    name: 'ISC²',
    nameEs: 'ISC²',
    description: 'Aplicando para ofrecer los cursos oficiales CISSP y CCSP con aval de ISC² y formar a tus equipos al más alto nivel de seguridad.',
    descriptionEs: 'Aplicando para ofrecer los cursos oficiales CISSP y CCSP con aval de ISC² y formar a tus equipos al más alto nivel de seguridad.',
    logo: '/assets/img/isc2.svg',
  },
  {
    name: 'EC-Council',
    nameEs: 'EC-Council',
    description: 'Aplicando para brindar los programas CEH y CND con certificación oficial EC-Council, garantizando experiencia práctica y acreditación reconocida.',
    descriptionEs: 'Aplicando para brindar los programas CEH y CND con certificación oficial EC-Council, garantizando experiencia práctica y acreditación reconocida.',
    logo: '/assets/img/ec-council-white-logo.webp',
  },
  {
    name: 'CESSI',
    nameEs: 'CESSI',
    description: 'Miembro Activo de CESSI – Cámara de Empresas de Software y Servicios Informáticos, lo que avala nuestros workshops y seminarios.',
    descriptionEs: 'Miembro Activo de CESSI – Cámara de Empresas de Software y Servicios Informáticos, lo que avala nuestros workshops y seminarios.',
    logo: '/assets/img/cessi.png',
  },
  {
    name: 'Fintech',
    nameEs: 'Fintech',
    description: 'Miembro de la Cámara Argentina Fintech, respaldo esencial para nuestras formaciones en seguridad financiera de IA.',
    descriptionEs: 'Miembro de la Cámara Argentina Fintech, respaldo esencial para nuestras formaciones en seguridad financiera de IA.',
    logo: '/assets/img/fintech1.png',
  },
]

// Lineamientos Internacionales
const alignments = [
  {
    name: 'ISO/IEC 27001',
    nameEs: 'ISO/IEC 27001',
    description: 'Seguimos los controles y procesos de seguridad de la información definidos por ISO/IEC 27001.',
    descriptionEs: 'Seguimos los controles y procesos de seguridad de la información definidos por ISO/IEC 27001.',
    logo: '/assets/img/certificates/alliance/iso-removebg-preview.png',
  },
  {
    name: 'NIST AI RMF',
    nameEs: 'NIST AI RMF',
    description: 'Nos alineamos con el Marco de Gestión de Riesgos de IA de NIST para garantizar integridad y confiabilidad.',
    descriptionEs: 'Nos alineamos con el Marco de Gestión de Riesgos de IA de NIST para garantizar integridad y confiabilidad.',
    logo: '/assets/img/certificates/alliance/nest.svg',
  },
  {
    name: 'UNESCO AI Ethics',
    nameEs: 'UNESCO Ética IA',
    description: 'Adoptamos las recomendaciones de Ética en IA de UNESCO para promover el uso responsable de la tecnología.',
    descriptionEs: 'Adoptamos las recomendaciones de Ética en IA de UNESCO para promover el uso responsable de la tecnología.',
    logo: '/assets/img/certificates/alliance/unesco.svg',
  },
  {
    name: 'OECD AI Principles',
    nameEs: 'Principios OCDE IA',
    description: 'Incorporamos los Principios de IA de la OCDE para garantizar transparencia, equidad y seguridad.',
    descriptionEs: 'Incorporamos los Principios de IA de la OCDE para garantizar transparencia, equidad y seguridad.',
    logo: '/assets/img/certificates/alliance/oecd.svg',
  },
]

// Stats
const stats = [
  { icon: BookOpen, value: 50, label: 'Cursos Impartidos', labelEs: 'Cursos Impartidos' },
  { icon: Users, value: 500, label: 'Participantes Capacitados', labelEs: 'Participantes Capacitados' },
  { icon: Clock, value: 1750, label: 'Horas de Formación', labelEs: 'Horas de Formación' },
  { icon: AwardIcon, value: 416, label: 'Certificados Emitidos', labelEs: 'Certificados Emitidos' },
]

// Why Us
const whyUsItems = [
  {
    icon: Lightbulb,
    title: 'Expertos Reconocidos',
    titleEs: 'Expertos Reconocidos',
    description: 'Contamos con profesionales certificados y con amplia experiencia en IA y ciberseguridad, listos para guiar a tu equipo.',
    descriptionEs: 'Contamos con profesionales certificados y con amplia experiencia en IA y ciberseguridad, listos para guiar a tu equipo.',
  },
  {
    icon: Settings,
    title: 'Soluciones a Medida',
    titleEs: 'Soluciones a Medida',
    description: 'Diseñamos planes de formación personalizados según las necesidades y objetivos de tu organización.',
    descriptionEs: 'Diseñamos planes de formación personalizados según las necesidades y objetivos de tu organización.',
  },
  {
    icon: Users,
    title: 'Impacto Tangible',
    titleEs: 'Impacto Tangible',
    description: 'Nuestros programas mejoran la capacidad de tu equipo para prevenir riesgos y optimizar procesos de seguridad.',
    descriptionEs: 'Nuestros programas mejoran la capacidad de tu equipo para prevenir riesgos y optimizar procesos de seguridad.',
  },
]

export default function TrainingPage() {
  const { t, language } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const isSpanish = language === 'es'
  const [openModal, setOpenModal] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Fix hydration issue by ensuring client-side only rendering for language-dependent content
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: `Cursos - ${formData.subject}` }),
      })

      const data = await response.json()

      if (data.status === 'success') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedCert = certificates.find(c => c.id === openModal)

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: mounted && isSpanish ? 'Capacitación' : 'Training' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <BackgroundEffects variant="hero" intensity="medium" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
                {mounted && isSpanish 
                  ? 'Formación en Seguridad de IA para Gobiernos y Empresas'
                  : 'AI Security Training for Governments and Enterprises'}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                {mounted && isSpanish
                  ? 'Capacite a su equipo con cursos diseñados para garantizar cumplimiento, privacidad y resiliencia frente a amenazas de IA.'
                  : 'Train your team with courses designed to ensure compliance, privacy, and resilience against AI threats.'}
              </p>
              <Link href="#about">
                <Button size="lg" variant="default">
                  {mounted && isSpanish ? 'Ver Más' : 'Learn More'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
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
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/img/mujer.jpg"
                  alt={isSpanish ? 'Equipo recibiendo capacitación' : 'Team receiving training'}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                  unoptimized
                />
                <Link 
                  href="https://www.youtube.com/@UltraDeepTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-primary-500/90 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {isSpanish 
                  ? 'Formación Certificada en Seguridad de IA'
                  : 'Certified AI Security Training'}
              </h3>
              <p className="text-lg text-foreground/70 mb-8">
                {isSpanish
                  ? 'En Ultra Deep Tech combinamos experiencia, certificaciones profesionales y alianzas estratégicas para ofrecer una capacitación de élite en seguridad de inteligencia artificial:'
                  : 'At Ultra Deep Tech we combine experience, professional certifications, and strategic alliances to offer elite training in artificial intelligence security:'}
              </p>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <AwardIcon className="w-8 h-8 text-primary-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg mb-2">
                      {isSpanish 
                        ? 'Certificaciones AISP, CAISE y AIGP'
                        : 'AISP, CAISE, and AIGP Certifications'}
                    </h5>
                    <p className="text-foreground/70">
                      {isSpanish
                        ? 'Diplomas propios que avalan competencias avanzadas en detección de amenazas, gobierno y protección de IA.'
                        : 'Our own diplomas certifying advanced competencies in threat detection, governance, and AI protection.'}
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Link2 className="w-8 h-8 text-primary-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg mb-2">
                      {isSpanish
                        ? 'Alianzas con ISC², EC-Council, CESSI y Fintech'
                        : 'Alliances with ISC², EC-Council, CESSI, and Fintech'}
                    </h5>
                    <p className="text-foreground/70">
                      {isSpanish
                        ? 'Formación oficial respaldada por líderes en ciberseguridad y tecnología financiera.'
                        : 'Official training backed by leaders in cybersecurity and financial technology.'}
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Shield className="w-8 h-8 text-primary-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg mb-2">
                      {isSpanish
                        ? 'Alineamiento con ISO, NIST, UNESCO y OCDE'
                        : 'Alignment with ISO, NIST, UNESCO, and OECD'}
                    </h5>
                    <p className="text-foreground/70">
                      {isSpanish
                        ? 'Programas diseñados siguiendo estándares internacionales de seguridad y ética en IA.'
                        : 'Programs designed following international standards for AI security and ethics.'}
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Settings className="w-8 h-8 text-primary-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg mb-2">
                      {isSpanish
                        ? 'Metodología Práctica y Personalizada'
                        : 'Practical and Personalized Methodology'}
                    </h5>
                    <p className="text-foreground/70">
                      {isSpanish
                        ? 'Ejercicios y casos de estudio adaptados a los retos de tu organización para garantizar resultados reales.'
                        : 'Exercises and case studies adapted to your organization\'s challenges to ensure real results.'}
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificaciones que obtendrás */}
      <section id="certificaciones-obtendras" className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {isSpanish 
                ? 'Certificaciones que obtendrás'
                : 'Certifications You Will Earn'}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestros graduados como Diego, Valentina y Martín ya están implementando sus conocimientos en importantes organizaciones'
                : 'Our graduates like Diego, Valentina, and Martín are already implementing their knowledge in important organizations'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <Image
                    src={encodeImagePath(cert.exampleImage || cert.image)}
                    alt={isSpanish ? cert.titleEs : cert.title}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg mx-auto shadow-lg"
                    loading="lazy"
                    unoptimized
                  />
                  <span className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    EJEMPLO
                  </span>
                </div>
                <h3 className="text-xl font-semibold">
                  {isSpanish ? cert.titleEs : cert.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {isSpanish ? 'Testimonios' : 'Testimonials'}
            </h2>
            <p className="text-lg text-foreground/70">
              {isSpanish
                ? 'Lo que dicen nuestros graduados tras certificarse con Ultra Deep Tech'
                : 'What our graduates say after certifying with Ultra Deep Tech'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={encodeImagePath(testimonial.image)}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover"
                        loading="lazy"
                        unoptimized
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/60">{testimonial.code}</p>
                      </div>
                    </div>
                    <Quote className="w-6 h-6 text-primary-400 mb-3" />
                    <p className="text-foreground/80 italic mb-4">
                      "{isSpanish ? testimonial.textEs : testimonial.text}"
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary-400 text-primary-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificados Section */}
      <section id="certificados" className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {isSpanish
                ? 'Forma a tu equipo con nuestros cursos'
                : 'Train Your Team with Our Courses'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => {
              const Icon = Shield
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:glass-strong transition-all">
                    <CardHeader>
                      <div className="w-20 h-20 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                        <Image
                          src={encodeImagePath(cert.image)}
                          alt={isSpanish ? cert.titleEs : cert.title}
                          width={60}
                          height={60}
                          className="object-contain"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                      <CardTitle className="text-xl text-center">
                        {isSpanish ? cert.titleEs : cert.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70 mb-4 text-sm">
                        {isSpanish ? cert.descriptionEs : cert.description}
                      </p>
                      <p className="text-xs text-foreground/60 mb-6">{cert.code}</p>
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => setOpenModal(cert.id)}
                      >
                        {isSpanish ? 'Ver más detalles' : 'View Details'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-accent-600 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              {isSpanish
                ? 'Impulsa la seguridad de tu organización'
                : 'Boost Your Organization\'s Security'}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Capacita a tu equipo con nuestros cursos certificados en Seguridad de IA, diseñados específicamente para Gobiernos, Bancos y Grandes Empresas.'
                : 'Train your team with our certified AI Security courses, designed specifically for Governments, Banks, and Large Enterprises.'}
            </p>
            <Link href="#contact">
              <Button size="lg" variant="secondary">
                {isSpanish ? 'Inscríbete Ahora' : 'Enroll Now'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Alliances Section */}
      <section id="alliances" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {isSpanish ? 'Alianzas y Membresías' : 'Alliances and Memberships'}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {isSpanish
                ? 'Combinamos nuestro estatus de Miembros Activos y aplicaciones en curso para avalar y ofrecer formaciones con estas instituciones:'
                : 'We combine our Active Member status and ongoing applications to endorse and offer training with these institutions:'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {alliances.map((alliance, i) => (
              <motion.div
                key={alliance.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={encodeImagePath(alliance.logo)}
                        alt={isSpanish ? alliance.nameEs : alliance.name}
                        width={96}
                        height={96}
                        className="object-contain max-w-full max-h-full"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {isSpanish ? alliance.nameEs : alliance.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {isSpanish ? alliance.descriptionEs : alliance.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value.toLocaleString()}+
                  </div>
                  <p className="text-sm text-foreground/70">
                    {isSpanish ? stat.labelEs : stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Alignment Section */}
      <section id="alignment" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {isSpanish
                ? 'Lineamientos Internacionales'
                : 'International Guidelines'}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestras certificaciones se desarrollan siguiendo las mejores prácticas y estándares globales de la industria.'
                : 'Our certifications are developed following industry best practices and global standards.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {alignments.map((alignment, i) => (
              <motion.div
                key={alignment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={encodeImagePath(alignment.logo)}
                        alt={isSpanish ? alignment.nameEs : alignment.name}
                        width={96}
                        height={96}
                        className="object-contain max-w-full max-h-full"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {isSpanish ? alignment.nameEs : alignment.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {isSpanish ? alignment.descriptionEs : alignment.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-accent-600 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              {isSpanish ? 'No esperes más' : 'Don\'t Wait Any Longer'}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Da el siguiente paso para proteger y certificar a tu equipo en seguridad de IA. ¡Impulsa la confianza de tus clientes y fortalece tu reputación corporativa!'
                : 'Take the next step to protect and certify your team in AI security. Boost your clients\' trust and strengthen your corporate reputation!'}
            </p>
            <Link href="#contact">
              <Button size="lg" variant="secondary">
                {isSpanish ? 'Certifícate Ahora' : 'Get Certified Now'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {isSpanish ? '¿Por Qué Elegirnos?' : 'Why Choose Us?'}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {isSpanish
                ? 'Descubre cómo Ultra Deep Tech puede elevar la seguridad de tus equipos y asegurar el éxito de tu organización.'
                : 'Discover how Ultra Deep Tech can elevate your team\'s security and ensure your organization\'s success.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full text-center hover:glass-strong transition-all">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {isSpanish ? item.titleEs : item.title}
                      </h3>
                      <p className="text-foreground/70">
                        {isSpanish ? item.descriptionEs : item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full text-center hover:glass-strong transition-all border-primary-500/50">
                <CardContent className="p-6">
                  <Link href="https://wa.link/2ebre2" target="_blank">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {isSpanish ? 'Contáctanos' : 'Contact Us'}
                    </h3>
                    <p className="text-foreground/70">
                      {isSpanish
                        ? '¿Listo para fortalecer a tu equipo?'
                        : 'Ready to strengthen your team?'}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-8">
                {isSpanish ? 'Contáctanos' : 'Contact Us'}
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isSpanish ? 'Dirección' : 'Address'}
                    </h3>
                    <Link 
                      href="https://maps.app.goo.gl/7zrBWkn4vfhJcYh4A" 
                      target="_blank"
                      className="text-foreground/70 hover:text-primary-400"
                    >
                      Corrientes 800, Ciudad Autónoma de Buenos Aires
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isSpanish ? 'Teléfono' : 'Phone'}
                    </h3>
                    <Link 
                      href="https://wa.link/2ebre2"
                      target="_blank"
                      className="text-foreground/70 hover:text-primary-400"
                    >
                      +54 (9) 11 7645-5965
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isSpanish ? 'Email' : 'Email'}
                    </h3>
                    <Link 
                      href="mailto:contact@ultradeeptech.com"
                      className="text-foreground/70 hover:text-primary-400"
                    >
                      contact@ultradeeptech.com
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    {isSpanish ? 'Envía un mensaje' : 'Send us a message'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {isSpanish ? 'Nombre' : 'Name'}
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {isSpanish ? 'Asunto' : 'Subject'}
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {isSpanish ? 'Mensaje' : 'Message'}
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting 
                        ? (isSpanish ? 'Enviando...' : 'Sending...')
                        : (isSpanish ? 'Enviar Mensaje' : 'Send Message')}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                    {submitStatus === 'success' && (
                      <p className="text-green-500 text-sm text-center">
                        {isSpanish 
                          ? '¡Mensaje enviado con éxito!'
                          : 'Message sent successfully!'}
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-500 text-sm text-center">
                        {isSpanish
                          ? 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
                          : 'Error sending message. Please try again.'}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modales para Certificados */}
      {selectedCert && (
        <Modal
          isOpen={openModal === selectedCert.id}
          onClose={() => setOpenModal(null)}
          title={mounted && isSpanish ? selectedCert.titleEs : selectedCert.title}
          size="lg"
        >
          <div className="space-y-4">
            <div className="bg-primary-500/10 rounded-lg p-3 text-sm">
              <strong className="text-sm">{mounted && isSpanish ? 'Formato:' : 'Format:'}</strong>
              <span className="ml-2">{mounted && isSpanish ? selectedCert.formatEs : selectedCert.format}</span>
            </div>

            {selectedCert.days.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h4 className="text-lg font-semibold mb-2">
                  {mounted && isSpanish ? day.titleEs : day.title}
                </h4>
                <ul className="space-y-1.5 ml-4">
                  {(mounted && isSpanish && day.itemsEs ? day.itemsEs : day.items).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="border-t pt-4">
              <h4 className="text-lg font-semibold mb-3">
                {mounted && isSpanish ? 'El curso incluye:' : 'The course includes:'}
              </h4>
              <ul className="space-y-1.5 ml-4">
                {(mounted && isSpanish && selectedCert.includesEs ? selectedCert.includesEs : selectedCert.includes).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-semibold">
                {mounted && isSpanish
                  ? 'Personalización disponible para necesidades empresariales'
                  : 'Customization available for enterprise needs'}
              </p>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button
                variant="secondary"
                onClick={() => setOpenModal(null)}
                className="flex-1 text-sm"
                size="sm"
              >
                {mounted && isSpanish ? 'Cerrar' : 'Close'}
              </Button>
              <Link
                href="https://api.whatsapp.com/send?phone=541176455965"
                target="_blank"
                className="flex-1"
              >
                <Button variant="default" className="w-full text-sm" size="sm">
                  {mounted && isSpanish ? 'Solicitar información' : 'Request Information'}
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
