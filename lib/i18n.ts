export type Language = 'en' | 'es'

export const translations = {
  en: {
    // Navigation
    nav_about: 'About Us',
    nav_products: 'Products',
    nav_services: 'Services',
    nav_case_studies: 'Case Studies',
    nav_career: 'Career',
    nav_contact: 'Contact',
    nav_book_call: 'Book a Call',
    nav_company_history: 'Company History',
    nav_leadership_team: 'Leadership Team',
    nav_youtube: 'YouTube Channel',
    nav_blog: 'Blog & Social',
    
    // Hero
    hero_title: 'Secure Your AI',
    hero_subtitle: 'Automate Everything',
    hero_title_phrases_0: 'Secure Your AI',
    hero_title_phrases_1: 'Protect Your Data',
    hero_title_phrases_2: 'Defend Your Systems',
    hero_title_phrases_3: 'Shield Your Models',
    hero_subtitle_phrases_0: 'Automate Everything',
    hero_subtitle_phrases_1: 'Optimize Processes',
    hero_subtitle_phrases_2: 'Streamline Workflows',
    hero_subtitle_phrases_3: 'Accelerate Growth',
    hero_description: 'Enterprise-grade AI security and intelligent automation. Protect your AI systems while automating processes to drive efficiency and growth.',
    hero_badge: 'AI Consultancy | Custom Development | Process Automation | Training & Education',
    hero_get_started: 'Get Started',
    hero_see_action: 'See It in Action',
    hero_stat_projects: 'Projects Delivered',
    hero_stat_time: 'Time Saved',
    hero_stat_satisfaction: 'Client Satisfaction',
    
    // Products
    products_title: 'Our Products',
    products_subtitle: 'Enterprise-grade AI security and optimization tools that protect and enhance your AI infrastructure.',
    product_safety_shield: 'Safety Shield Ultra™',
    product_safety_shield_desc: 'Real-time defense against prompt injection, leakage & model hijacking.',
    product_lucid: 'Lucid™',
    product_lucid_desc: 'Eliminate cognitive biases automatically and improve business decisions.',
    product_model_protection: 'AI Model Protection Suite',
    product_model_protection_desc: 'Prevent reverse engineering and misuse of your proprietary AI models.',
    product_enterprise: 'Enterprise AI Security',
    product_enterprise_desc: 'Comprehensive protection with encryption, access control, and audits.',
    product_optimization: 'AI Performance Optimization',
    product_optimization_desc: 'Boost latency, accuracy & cost-efficiency with model optimization tools.',
    learn_more: 'Learn More',
    examples_label: 'Examples:',
    
    // Product Details
    product1_title: 'Safety Shield Ultra™',
    product2_title: 'Model Protection Suite',
    product3_title: 'Enterprise Security',
    product4_title: 'Performance Optimization',
    product5_title: 'Lucid™',
    product1_content_title: 'Safety Shield Ultra™',
    product1_content_desc: 'Safety Shield Ultra™ is an intelligent, real-time security platform specifically engineered to protect virtual assistants and AI chatbots from adversarial attacks and malicious inputs. It continuously monitors AI interactions and instantly blocks suspicious behavior, ensuring privacy and compliance at every step.',
    product1_feat1: 'Real-time malicious prompt filtering',
    product1_feat2: 'Jailbreak & injection threat prevention',
    product1_feat3: 'Continuous anomaly monitoring',
    product1_feat4: 'Customizable security controls',
    product1_feat5: 'Automated compliance with GDPR, ISO',
    product2_content_title: 'Model Protection Suite',
    product2_content_desc: 'Designed for tech teams seeking to safeguard their models\' internal logic while preserving explainability and data confidentiality. The suite leverages cutting-edge anonymization, adversarial defense, and interpretability frameworks to maximize trust and performance.',
    product2_feat1: 'Explainability through advanced XAI tools',
    product2_feat2: 'Robust data anonymization pipelines',
    product2_feat3: 'Adversarial attack prevention',
    product2_feat4: 'Full-stack AI security benchmarking',
    product3_content_title: 'Enterprise Security',
    product3_content_desc: 'Tailored for large-scale deployments in regulated industries, this solution helps organizations enforce security policies, perform risk assessments, and rapidly respond to threats using AI-driven insights. Ideal for financial institutions, government, and critical infrastructure.',
    product3_feat1: 'AI-specific risk evaluations',
    product3_feat2: 'Integration with GRC frameworks',
    product3_feat3: 'Real-time security monitoring',
    product3_feat4: 'Automated incident response with generative AI',
    product4_content_title: 'Performance Optimization',
    product4_content_desc: 'Performance Optimization delivers measurable gains in AI processing speed, cost-efficiency, and cloud scalability. Ideal for production-grade systems needing to scale intelligently while maintaining top-tier security.',
    product4_feat1: 'Production-ready model compression',
    product4_feat2: 'Live performance and latency benchmarking',
    product4_feat3: 'Cloud resource optimization',
    product4_feat4: 'Intelligent cost-saving strategies',
    
    // Services
    services_title: 'Services',
    services_subtitle: 'We help businesses like yours unlock the power of AI. Whether you need a custom app, want to automate processes, or need strategic guidance—we\'ve got you covered.',
    service_development: 'Custom AI Development',
    service_development_desc: 'We build custom AI-powered applications tailored to your business. From chatbots to predictive analytics, we turn your ideas into reality.',
    service_automation: 'Process Automation',
    service_automation_desc: 'Automate repetitive tasks and workflows to save time and reduce errors. Let AI handle the routine so your team can focus on what matters.',
    service_strategy: 'AI Strategy & Consulting',
    service_strategy_desc: 'Strategic guidance to identify AI opportunities and build your roadmap. We help you make informed decisions about AI investments.',
    service_security: 'AI Security & Compliance',
    service_security_desc: 'Secure your AI systems and ensure compliance. From security audits to threat detection, we keep your AI infrastructure safe.',
    service_training: 'Training & Education',
    service_training_desc: 'Build your team\'s AI expertise with comprehensive training programs, certifications, and hands-on workshops. From fundamentals to advanced enterprise AI security.',
    service_assessment: 'AI Security Assessment',
    service_implementation: 'Implementation',
    
    // Service Details
    ai_assessment: 'AI Security Assessment & Strategy',
    ai_assessment_desc: 'Security evaluation and strategic planning for AI systems. Our team conducts assessments and develops security strategies.',
    service1_feat1: 'Vulnerability Assessment',
    service1_feat2: 'Security Analysis',
    service1_feat3: 'Compliance Management',
    service1_feat4: 'Executive Consulting',
    implementation: 'Implementation & Architecture',
    implementation_desc: 'Design and implementation of secure AI architectures. We ensure your infrastructure is built and maintained securely.',
    service2_feat1: 'Security Architecture',
    service2_feat2: 'Controls Deployment',
    service2_feat3: 'Integration Planning',
    service2_feat4: 'Access Management',
    service2_feat5: 'Security Monitoring',
    service2_feat6: 'Incident Response',
    service2_feat7: 'Performance Analytics',
    training_education_desc: 'Training programs to build your team\'s AI security expertise, from basics to advanced practices.',
    service3_feat1: 'Custom Training',
    service3_feat2: 'Hands-on Workshops',
    service3_feat3: 'Security Best Practices',
    service3_feat4: 'Team Certification',
    get_certified_now: 'Get Certified Now',
    
    // Clients
    clients_trusted_by: 'Trusted by',
    clients_title: 'Companies That Trust Us',
    clients_subtitle: 'Leading enterprises worldwide rely on our AI solutions to drive innovation and growth.',
    
    // CTA
    cta_title: 'Ready to Transform Your Business with AI?',
    cta_subtitle: 'Schedule a free consultation to discover how AI can solve your specific business challenges. Get started today.',
    cta_button: 'Contact Us',
    cta_book_call: 'Book a Call',
    
    // Footer
    footer_about: 'Securing enterprise AI with measurable results. Schedule a demo to see your risk exposure.',
    footer_useful_links: 'Useful Links',
    footer_products: 'Products',
    footer_services: 'Services',
    footer_contact: 'Contact Us',
    footer_phone: 'Phone',
    footer_email: 'Email',
    
    // Newsletter
    newsletter_title: 'Newsletter',
    newsletter_description: 'Get the latest news about AI',
    newsletter_placeholder: 'your.email@example.com',
    newsletter_subscribe: 'Subscribe',
    
    // Testimonials
    testimonials_title: 'What Our Clients Say',
    testimonials_subtitle: 'Trusted by leading enterprises worldwide',
    testimonial_piere: 'Safety Shield Ultra™ has transformed how we secure our AI systems. The real-time protection is incredible and has significantly improved our security posture.',
    testimonial_motorola: 'The best AI security solution we\'ve implemented. Easy to use and incredibly effective at protecting our enterprise infrastructure.',
    testimonial_wiselayer: 'Ultra Deep Tech\'s solutions have helped us make better decisions and streamline our processes. Their AI expertise is unmatched.',
    testimonial_ailert: 'Working with Ultra Deep Tech has been exceptional. Their custom AI solutions have revolutionized our operations and improved efficiency.',
    testimonial_fitting_room: 'The automation solutions provided by Ultra Deep Tech have transformed our business processes. Highly recommend their services.',
    testimonial_wakapi: 'Outstanding service and innovative solutions. Ultra Deep Tech understands our needs and delivers exactly what we need.',
    
    // Automation
    automation_title: 'Automate All Processes',
    automation_subtitle: 'Automate any business process with AI. Documents, communication, sales, and more.',
    automation_document_processing: 'Document Processing',
    automation_document_processing_desc: 'Automatically extract, classify, and process documents with AI-powered OCR and NLP.',
    automation_customer_communication: 'Customer Communication',
    automation_customer_communication_desc: 'Automate email responses, ticket routing, and customer support with intelligent chatbots.',
    automation_ecommerce: 'E-commerce & Sales',
    automation_ecommerce_desc: 'Automate inventory management, pricing, and sales processes with predictive analytics.',
    automation_hr: 'HR & Recruitment',
    automation_hr_desc: 'Streamline hiring, onboarding, and employee management with AI automation.',
    
    // Courses
    courses_title: 'Courses & Certifications',
    courses_subtitle: 'Professional AI security training. Industry-recognized certifications for enterprise teams.',
    courses_includes: 'Includes:',
    courses_see_more: 'See more',
    courses_view_all: 'View All Courses',
    
    // YouTube
    youtube_see_more: 'See more videos on our YouTube channel',
    youtube_no_videos: 'No videos available at this time',
    
    // Awards
    awards_title: 'Award-Winning Safety Shield Ultra™',
    awards_description: 'Recognized for our innovative solution that makes artificial intelligence safer, protecting sensitive corporate data and ensuring privacy in every interaction.',
    awards_benefit_realtime: 'Real-time protection against attacks',
    awards_benefit_data: 'Prevention of corporate data leakage',
    awards_benefit_compliance: 'Automatic compliance with security standards',
    awards_protection_title: 'Intelligent Protection for Enterprises',
    awards_protection_desc: 'Safety Shield Ultra™ uses cutting-edge technology to monitor and protect all artificial intelligence interactions in real-time. Our solution prevents malicious prompt injections, blocks unauthorized access attempts, and protects against sensitive data leakage, ensuring corporate information remains secure at all times.',
    awards_feature_1: 'Instant threat detection and blocking',
    awards_feature_2: 'Protection of personal data and confidential information',
    awards_feature_3: 'Automatic compliance with GDPR, ISO 27001 and other standards',
    awards_feature_4: 'Continuous 24/7 monitoring with zero performance impact',
    awards_cta: 'Learn More About Safety Shield Ultra™',
    
    // Search
    search_placeholder: 'Search products, services...',
    search_no_results: 'No results found',
    search_results: 'Search Results',
    
    // Common
    all_rights_reserved: 'All Rights Reserved',
    designed_by: 'Designed by',
    see_more: 'See More',
  },
  es: {
    // Navigation
    nav_about: 'Nosotros',
    nav_products: 'Productos',
    nav_services: 'Servicios',
    nav_case_studies: 'Casos de Estudio',
    nav_career: 'Carreras',
    nav_contact: 'Contacto',
    nav_book_call: 'Reservar Llamada',
    nav_company_history: 'Historia de la Empresa',
    nav_leadership_team: 'Equipo de Liderazgo',
    nav_youtube: 'Canal de YouTube',
    nav_blog: 'Blog y Redes Sociales',
    
    // Hero
    hero_title: 'Protege tu IA',
    hero_subtitle: 'Automatiza Todo',
    hero_title_phrases_0: 'Protege tu IA',
    hero_title_phrases_1: 'Protege tus Datos',
    hero_title_phrases_2: 'Defiende tus Sistemas',
    hero_title_phrases_3: 'Escuda tus Modelos',
    hero_subtitle_phrases_0: 'Automatiza Todo',
    hero_subtitle_phrases_1: 'Optimiza Procesos',
    hero_subtitle_phrases_2: 'Simplifica Flujos',
    hero_subtitle_phrases_3: 'Acelera el Crecimiento',
    hero_description: 'Seguridad IA de nivel empresarial y automatización inteligente. Protege tus sistemas de IA mientras automatizas procesos para impulsar eficiencia y crecimiento.',
    hero_badge: 'Consultoría IA | Desarrollo Personalizado | Automatización de Procesos | Capacitación y Educación',
    hero_get_started: 'Comenzar',
    hero_see_action: 'Ver en Acción',
    hero_stat_projects: 'Proyectos Entregados',
    hero_stat_time: 'Tiempo Ahorrado',
    hero_stat_satisfaction: 'Satisfacción del Cliente',
    
    // Products
    products_title: 'Nuestros Productos',
    products_subtitle: 'Herramientas de seguridad y optimización de IA de nivel empresarial que protegen y mejoran tu infraestructura.',
    product_safety_shield: 'Safety Shield Ultra™',
    product_safety_shield_desc: 'Defensa en tiempo real contra inyección de prompts, fuga de datos e interceptación de modelos.',
    product_lucid: 'Lucid™',
    product_lucid_desc: 'Elimina sesgos cognitivos automáticamente y mejora las decisiones empresariales.',
    product_model_protection: 'Suite de Protección de Modelos IA',
    product_model_protection_desc: 'Previene la ingeniería inversa y el uso indebido de tus modelos de IA propietarios.',
    product_enterprise: 'Seguridad Empresarial IA',
    product_enterprise_desc: 'Protección integral con encriptación, control de acceso y auditorías.',
    product_optimization: 'Optimización de Rendimiento IA',
    product_optimization_desc: 'Mejora la latencia, precisión y eficiencia de costos con herramientas de optimización de modelos.',
    learn_more: 'Saber Más',
    examples_label: 'Ejemplos:',
    
    // Product Details
    product1_title: 'Safety Shield Ultra™',
    product2_title: 'Suite de Protección de Modelos IA',
    product3_title: 'Seguridad Empresarial',
    product4_title: 'Optimización de Rendimiento',
    product5_title: 'Lucid™',
    product1_content_title: 'Safety Shield Ultra™',
    product1_content_desc: 'Safety Shield Ultra™ es una plataforma de seguridad en tiempo real e inteligente diseñada específicamente para proteger asistentes virtuales y chatbots de IA contra ataques adversariales e inputs maliciosos. Monitorea continuamente las interacciones de IA y bloquea al instante comportamientos sospechosos, garantizando privacidad y cumplimiento en cada paso.',
    product1_feat1: 'Filtrado de prompts maliciosos en tiempo real',
    product1_feat2: 'Prevención de jailbreaks e inyecciones',
    product1_feat3: 'Monitoreo continuo de anomalías',
    product1_feat4: 'Controles de seguridad personalizables',
    product1_feat5: 'Cumplimiento automático con GDPR, ISO',
    product2_content_title: 'Suite de Protección de Modelos IA',
    product2_content_desc: 'Diseñado para equipos técnicos que buscan salvaguardar la lógica interna de sus modelos mientras preservan la explicabilidad y confidencialidad de datos. La suite aprovecha anonimización avanzada, defensa adversarial y marcos de interpretabilidad para maximizar confianza y rendimiento.',
    product2_feat1: 'Explicabilidad mediante herramientas XAI avanzadas',
    product2_feat2: 'Canalizaciones robustas de anonimización de datos',
    product2_feat3: 'Prevención de ataques adversariales',
    product2_feat4: 'Benchmarking completo de seguridad IA',
    product3_content_title: 'Seguridad Empresarial',
    product3_content_desc: 'Adaptado para despliegues a gran escala en industrias reguladas, esta solución ayuda a organizaciones a hacer cumplir políticas de seguridad, realizar evaluaciones de riesgo y responder rápidamente a amenazas usando insights impulsados por IA. Ideal para instituciones financieras, gobierno e infraestructura crítica.',
    product3_feat1: 'Evaluaciones de riesgo específicas de IA',
    product3_feat2: 'Integración con frameworks GRC',
    product3_feat3: 'Monitoreo de seguridad en tiempo real',
    product3_feat4: 'Respuesta automática a incidentes con IA generativa',
    product4_content_title: 'Optimización de Rendimiento',
    product4_content_desc: 'Ofrece ganancias de rendimiento medibles en velocidad de procesamiento de IA, eficiencia de costos y escalabilidad en la nube. Ideal para sistemas de producción que necesitan escalar inteligentemente mientras mantienen seguridad de primer nivel.',
    product4_feat1: 'Compresión de modelos lista para producción',
    product4_feat2: 'Benchmarking en vivo de rendimiento y latencia',
    product4_feat3: 'Optimización de recursos en la nube',
    product4_feat4: 'Estrategias inteligentes de reducción de costos',
    
    // Services
    services_title: 'Servicios',
    services_subtitle: 'Ayudamos a empresas como la tuya a desbloquear el poder de la IA. Ya sea que necesites una app personalizada, quieras automatizar procesos o necesites orientación estratégica—estamos aquí para ayudarte.',
    service_development: 'Desarrollo de IA Personalizado',
    service_development_desc: 'Desarrollamos aplicaciones personalizadas con IA adaptadas a tu negocio. Desde chatbots hasta análisis predictivos, convertimos tus ideas en realidad.',
    service_automation: 'Automatización de Procesos',
    service_automation_desc: 'Automatiza tareas repetitivas y flujos de trabajo para ahorrar tiempo y reducir errores. Deja que la IA maneje lo rutinario para que tu equipo se enfoque en lo importante.',
    service_strategy: 'Estrategia y Consultoría IA',
    service_strategy_desc: 'Orientación estratégica para identificar oportunidades de IA y construir tu hoja de ruta. Te ayudamos a tomar decisiones informadas sobre inversiones en IA.',
    service_security: 'Seguridad y Cumplimiento IA',
    service_security_desc: 'Asegura tus sistemas de IA y garantiza el cumplimiento. Desde auditorías de seguridad hasta detección de amenazas, mantenemos tu infraestructura de IA segura.',
    service_training: 'Capacitación y Educación',
    service_training_desc: 'Desarrolla la experiencia en IA de tu equipo con programas de capacitación integrales, certificaciones y talleres prácticos. Desde fundamentos hasta seguridad empresarial avanzada de IA.',
    service_assessment: 'Evaluación de Seguridad IA',
    service_implementation: 'Implementación',
    
    // Service Details
    ai_assessment: 'Evaluación & Estrategia de Seguridad IA',
    ai_assessment_desc: 'Evaluaciones de seguridad y planificación estratégica para sistemas de IA. Nuestro equipo realiza auditorías y desarrolla estrategias de protección.',
    service1_feat1: 'Evaluación de Vulnerabilidades',
    service1_feat2: 'Análisis de Seguridad',
    service1_feat3: 'Gestión de Cumplimiento',
    service1_feat4: 'Consultoría Ejecutiva',
    implementation: 'Implementación & Arquitectura',
    implementation_desc: 'Diseño e implementación de arquitecturas de IA seguras. Aseguramos que tu infraestructura esté construida y mantenida de forma segura.',
    service2_feat1: 'Arquitectura de Seguridad',
    service2_feat2: 'Despliegue de Controles',
    service2_feat3: 'Planificación de Integración',
    service2_feat4: 'Gestión de Accesos',
    service2_feat5: 'Monitoreo de Seguridad',
    service2_feat6: 'Respuesta a Incidentes',
    service2_feat7: 'Análisis de Rendimiento',
    training_education_desc: 'Programas de capacitación para desarrollar la experiencia en seguridad de IA de tu equipo, desde conceptos básicos hasta prácticas avanzadas.',
    service3_feat1: 'Capacitación Personalizada',
    service3_feat2: 'Talleres Prácticos',
    service3_feat3: 'Buenas Prácticas de Seguridad',
    service3_feat4: 'Certificación de Equipo',
    get_certified_now: 'Certificarse Ahora',
    
    // Clients
    clients_trusted_by: 'Confían en nosotros',
    clients_title: 'Empresas Que Confían en Nosotros',
    clients_subtitle: 'Empresas líderes en todo el mundo confían en nuestras soluciones de IA para impulsar la innovación y el crecimiento.',
    
    // CTA
    cta_title: '¿Listo para Transformar tu Negocio con IA?',
    cta_subtitle: 'Agenda una consulta gratuita para descubrir cómo la IA puede resolver los desafíos específicos de tu negocio. Comienza hoy.',
    cta_button: 'Contáctanos',
    cta_book_call: 'Reservar Llamada',
    
    // Footer
    footer_about: 'Asegurando IA empresarial con resultados medibles. Programa una demo para ver tu exposición al riesgo.',
    footer_useful_links: 'Enlaces Útiles',
    footer_products: 'Productos',
    footer_services: 'Servicios',
    footer_contact: 'Contáctanos',
    footer_phone: 'Teléfono',
    footer_email: 'Correo',
    
    // Newsletter
    newsletter_title: 'Newsletter',
    newsletter_description: 'Recibe las últimas noticias sobre IA',
    newsletter_placeholder: 'tu@email.com',
    newsletter_subscribe: 'Suscribirse',
    
    // Testimonials
    testimonials_title: 'Lo Que Dicen Nuestros Clientes',
    testimonials_subtitle: 'Confianza de empresas líderes en todo el mundo',
    testimonial_piere: 'Safety Shield Ultra™ ha transformado la forma en que aseguramos nuestros sistemas de IA. La protección en tiempo real es increíble y ha mejorado significativamente nuestra postura de seguridad.',
    testimonial_motorola: 'La mejor solución de seguridad IA que hemos implementado. Fácil de usar e increíblemente efectiva para proteger nuestra infraestructura empresarial.',
    testimonial_wiselayer: 'Las soluciones de Ultra Deep Tech nos han ayudado a tomar mejores decisiones y optimizar nuestros procesos. Su experiencia en IA es inigualable.',
    testimonial_ailert: 'Trabajar con Ultra Deep Tech ha sido excepcional. Sus soluciones personalizadas de IA han revolucionado nuestras operaciones y mejorado la eficiencia.',
    testimonial_fitting_room: 'Las soluciones de automatización proporcionadas por Ultra Deep Tech han transformado nuestros procesos empresariales. Recomiendo ampliamente sus servicios.',
    testimonial_wakapi: 'Servicio excepcional y soluciones innovadoras. Ultra Deep Tech comprende nuestras necesidades y entrega exactamente lo que necesitamos.',
    
    // Automation
    automation_title: 'Automatiza Todos los Procesos',
    automation_subtitle: 'Automatiza cualquier proceso empresarial con IA. Documentos, comunicación, ventas y más.',
    automation_document_processing: 'Procesamiento de Documentos',
    automation_document_processing_desc: 'Extrae, clasifica y procesa documentos automáticamente con OCR y NLP impulsados por IA.',
    automation_customer_communication: 'Comunicación con Clientes',
    automation_customer_communication_desc: 'Automatiza respuestas por email, enrutamiento de tickets y soporte al cliente con chatbots inteligentes.',
    automation_ecommerce: 'E-commerce y Ventas',
    automation_ecommerce_desc: 'Automatiza gestión de inventario, precios y procesos de ventas con análisis predictivo.',
    automation_hr: 'Recursos Humanos y Reclutamiento',
    automation_hr_desc: 'Optimiza contratación, incorporación y gestión de empleados con automatización de IA.',
    
    // Courses
    courses_title: 'Cursos y Certificaciones',
    courses_subtitle: 'Capacitación profesional en seguridad IA. Certificaciones reconocidas por la industria para equipos empresariales.',
    courses_includes: 'Incluye:',
    courses_see_more: 'Ver más',
    courses_view_all: 'Ver Todos los Cursos',
    
    // YouTube
    youtube_see_more: 'Ver más videos en nuestro canal de YouTube',
    youtube_no_videos: 'No hay videos disponibles en este momento',
    
    // Awards
    awards_title: 'Premio por Safety Shield Ultra™',
    awards_description: 'Reconocidos por nuestra innovadora solución que hace que las inteligencias artificiales sean más seguras, protegiendo los datos sensibles de las empresas y garantizando la privacidad en cada interacción.',
    awards_benefit_realtime: 'Protección en tiempo real contra ataques',
    awards_benefit_data: 'Prevención de fuga de datos empresariales',
    awards_benefit_compliance: 'Cumplimiento automático con estándares de seguridad',
    awards_protection_title: 'Protección Inteligente para Empresas',
    awards_protection_desc: 'Safety Shield Ultra™ utiliza tecnología de vanguardia para monitorear y proteger todas las interacciones con inteligencia artificial en tiempo real. Nuestra solución previene inyecciones de prompts maliciosos, bloquea intentos de acceso no autorizado y protege contra la fuga de datos sensibles, garantizando que la información corporativa permanezca segura en todo momento.',
    awards_feature_1: 'Detección y bloqueo instantáneo de amenazas',
    awards_feature_2: 'Protección de datos personales e información confidencial',
    awards_feature_3: 'Cumplimiento automático con GDPR, ISO 27001 y otros estándares',
    awards_feature_4: 'Monitoreo continuo 24/7 sin impacto en el rendimiento',
    awards_cta: 'Conocer más sobre Safety Shield Ultra™',
    
    // Search
    search_placeholder: 'Buscar productos, servicios...',
    search_no_results: 'No se encontraron resultados',
    search_results: 'Resultados de Búsqueda',
    
    // Common
    all_rights_reserved: 'Todos los Derechos Reservados',
    designed_by: 'Diseñado por',
    see_more: 'Ver Más',
  },
} as const

export function getTranslation(lang: Language, key: keyof typeof translations.en): string {
  return translations[lang][key] || translations.en[key] || key
}

export function useLanguage() {
  if (typeof window === 'undefined') return 'en'
  
  const saved = localStorage.getItem('site_lang') as Language | null
  const browser = navigator.language.slice(0, 2) as Language
  return saved || (['es', 'en'].includes(browser) ? browser : 'en')
}

export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('site_lang', lang)
    window.dispatchEvent(new Event('languagechange'))
  }
}

