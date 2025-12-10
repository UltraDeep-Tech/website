'use client'

import { motion } from 'framer-motion'
import { History, Users, Linkedin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import { Clients } from '@/components/sections/Clients'

// Helper function para codificar rutas con espacios correctamente
function encodeImagePath(path: string): string {
  // Dividir la ruta y codificar solo los segmentos (no las barras)
  const parts = path.split('/')
  return parts.map(part => part ? encodeURIComponent(part) : '').join('/')
}

// Nota: Para agregar metadata a esta página, crear un layout.tsx en app/about/
// o convertir este componente a Server Component

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Avi Pilcer',
      role: 'CEO and Chief Scientist',
      bio: 'AI expert, ex-Israeli intelligence. Drives advancements in AI and cybersecurity.',
      linkedin: 'https://www.linkedin.com/in/avipil/',
      image: '/assets/img/team/Avi Pilcer.png',
    },
    {
      name: 'Karla Lemoine',
      role: 'Legal and Operations Lead',
      bio: 'Law and HR expert. Ensures regulatory compliance and operational efficiency. Strong communicator.',
      linkedin: 'https://www.linkedin.com/in/karla-lemoine-2393a433/',
      image: '/assets/img/team/Karla Lemoine.jpeg',
    },
    {
      name: 'Sasha Daich',
      role: 'VP Business Development',
      bio: '7.18× revenue generation in 2.5 years at Forter, now at a valuation of $3.3 B. Expert in strategic growth and market expansion.',
      linkedin: 'https://www.linkedin.com/in/sasha-daich/',
      image: '/assets/img/team/Sasha Daich.jpeg',
    },
    {
      name: 'Maximilian Acri',
      role: 'Tech Lead',
      bio: 'Technology expert. Developed numerous applications and platforms serving millions daily. Leads with technical mastery.',
      linkedin: 'https://www.linkedin.com/in/maximilianoeacri/',
      image: '/assets/img/team/maximilianoacri.jpg',
    },
    {
      name: 'Luciano Camano',
      role: 'Strategic Partnerships Manager',
      bio: 'Brings extensive expertise in enterprise AI security solutions, forging high-impact relationships with industry leaders in highly regulated organizations.',
      linkedin: 'https://www.linkedin.com/in/luciano-camano-0996822b4/',
      image: '/assets/img/team/luciano camano.png',
    },
  ]

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">About</span> Ultra Deep Tech
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Your trusted AI consultancy partner. We help businesses transform with custom apps, process automation, and strategic AI guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section id="company-history" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <History className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Company History</h2>
                <p className="text-foreground/70 mb-4">
                  Ultra Deep Tech was founded in 2023 by security professionals and AI specialists with 15+ years of combined experience in enterprise AI. Our founders witnessed the security gaps as organizations adopted AI without adequate protection. Drawing from backgrounds securing critical systems at Fortune 500 companies and addressing vulnerabilities in early machine learning implementations, we established Ultra Deep Tech to secure AI across enterprise environments.
                </p>
                <p className="text-foreground/70">
                  Our leadership team has navigated AI security challenges since the early deep learning boom, giving us insight into current and emerging threats. We leverage this technical knowledge to address the full spectrum of AI vulnerabilities—from model poisoning to prompt injection to data exfiltration—with the urgency modern enterprises require.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-2xl overflow-hidden">
                <Image
                  src="/assets/img/about-page-title-bg.jpg"
                  alt="Ultra Deep Tech Company"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Brands that <span className="text-gradient">trust us</span>
            </h2>
          </motion.div>
          <Clients />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Leadership <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Meet the experts helping businesses transform with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full text-center relative overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={encodeImagePath(member.image)}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-600"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                    <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-primary-400 font-medium mb-3">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
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

