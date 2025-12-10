'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import Script from 'next/script'

interface LinkedInPost {
  title: string
  link: string
}

interface SocialMediaPost {
  platform: string
  title: string
  link: string
}

export default function BlogPage() {
  const { t, language } = useTranslation()
  const isSpanish = language === 'es'
  
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([])
  const [selectedPostIndex, setSelectedPostIndex] = useState(0)
  const [instagramPosts, setInstagramPosts] = useState<SocialMediaPost[]>([])
  const [instagramScriptLoaded, setInstagramScriptLoaded] = useState(false)
  const instagramContainerRef = useRef<HTMLDivElement>(null)

  const SHEET_ID = '10e-1fLzNWcySdZYXyJnlpb-29Dx_HtfeC0_aid17PQ4'
  const LINKEDIN_SHEET = 'Hoja1'
  const SOCIAL_MEDIA_SHEET = 'SocialMedia'

  // Cargar posts de LinkedIn
  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${LINKEDIN_SHEET}`
    
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const jsonData = JSON.parse(data.substring(47).slice(0, -2))
        const rows = jsonData.table.rows
        
        const posts = rows.slice(1).map((row: any) => ({
          title: row.c[0]?.v || '',
          link: row.c[1]?.v || ''
        })).filter((post: LinkedInPost) => post.title && post.link)
        
        setLinkedInPosts(posts)
      })
      .catch(error => {
        console.error('Error loading LinkedIn posts:', error)
      })
  }, [])

  // Cargar posts de Instagram
  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SOCIAL_MEDIA_SHEET}`
    
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const jsonData = JSON.parse(data.substring(47).slice(0, -2))
        if (!jsonData.table || !jsonData.table.rows) throw new Error('Invalid data structure')

        const posts = jsonData.table.rows.slice(1)
          .map((row: any) => row.c && row.c.length >= 3 ? {
            platform: row.c[0]?.v || '',
            title: row.c[1]?.v || '',
            link: row.c[2]?.v || ''
          } : null)
          .filter((post: SocialMediaPost | null) => post !== null && post.platform.toLowerCase() === 'instagram')
        
        setInstagramPosts(posts as SocialMediaPost[])
      })
      .catch(error => {
        console.error('Error loading Instagram posts:', error)
      })
  }, [])

  // Procesar embeds de Instagram cuando el script está listo
  useEffect(() => {
    if (instagramScriptLoaded && instagramPosts.length > 0 && window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [instagramScriptLoaded, instagramPosts])

  const extractLinkedInPostId = (url: string): string | null => {
    const patterns = [
      /activity-(\d+)/,
      /linkedin\.com\/posts\/.*-(\d+)/,
      /linkedin\.com\/feed\/update\/urn:li:activity:(\d+)/
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return `urn:li:activity:${match[1]}`
      }
    }

    const urlParts = url.split(/[?#]/)[0].split('/')
    const lastPart = urlParts[urlParts.length - 1]
    
    if (lastPart && lastPart !== '') {
      return `urn:li:activity:${lastPart}`
    }

    return null
  }

  const extractInstagramPostId = (url: string): string => {
    const match = url.match(/instagram\.com\/p\/([^/?]+)/)
    return match ? match[1] : ''
  }

  const selectedPost = linkedInPosts[selectedPostIndex]
  const selectedPostId = selectedPost ? extractLinkedInPostId(selectedPost.link) : null

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: isSpanish ? 'Inicio' : 'Home', href: '/' },
          { label: isSpanish ? 'Blog y Redes Sociales' : 'Blog & Social Media' }
        ]} />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/img/anonymization.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">
                {isSpanish ? 'Blog y Redes Sociales' : 'Blog & Social Media'}
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* LinkedIn CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src="/assets/img/linkedin.png"
                alt="LinkedIn"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-3">
              <Linkedin className="w-8 h-8 text-[#0077b5]" />
              <span>{isSpanish ? 'Nuestras Publicaciones Recientes' : 'Check Our Recent Posts'}</span>
            </h2>
          </motion.div>

          {/* LinkedIn Posts */}
          {linkedInPosts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Menu lateral */}
              <div className="lg:col-span-1">
                <div className="glass rounded-xl p-4 space-y-2">
                  {linkedInPosts.map((post, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPostIndex(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedPostIndex === index
                          ? 'bg-gradient-primary text-white'
                          : 'bg-white/5 hover:bg-white/10 text-foreground [data-theme="light"]:bg-slate-100 [data-theme="light"]:hover:bg-slate-200'
                      }`}
                    >
                      <p className="text-sm font-medium line-clamp-2">{post.title}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feed container */}
              <div className="lg:col-span-2">
                <div className="glass rounded-xl p-4 sm:p-6 flex items-center justify-center min-h-[600px]">
                  {selectedPostId ? (
                    <iframe
                      src={`https://www.linkedin.com/embed/feed/update/${selectedPostId}`}
                      height="580"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title="Embedded LinkedIn post"
                      className="max-w-full rounded-lg"
                    />
                  ) : (
                    <p className="text-foreground/60">
                      {isSpanish ? 'Cargando publicación...' : 'Loading post...'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {linkedInPosts.length === 0 && (
            <div className="glass rounded-xl p-8 text-center">
              <p className="text-foreground/60">
                {isSpanish ? 'No hay publicaciones disponibles en este momento.' : 'No posts available at this time.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 sm:py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src="/assets/img/instagram.png"
                alt="Instagram"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-3">
              <Instagram className="w-8 h-8 text-[#E4405F]" />
              <span>{isSpanish ? 'Nuestro Instagram' : 'Check Our Instagram'}</span>
            </h2>
          </motion.div>

          {/* Instagram Feed */}
          {instagramPosts.length > 0 && (
            <div 
              ref={instagramContainerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {instagramPosts.map((post, index) => {
                const postId = extractInstagramPostId(post.link)
                return (
                  <div key={index} className="instagram-embed-container">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
                      data-instgrm-version="14"
                      style={{
                        width: '100%',
                        maxWidth: '540px',
                        margin: '1px',
                      }}
                      data-instgrm-captioned
                      data-instgrm-autoplay-disabled
                    >
                      <a
                        href={`https://www.instagram.com/p/${postId}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {isSpanish ? 'Ver esta publicación en Instagram' : 'View this post on Instagram'}
                      </a>
                    </blockquote>
                  </div>
                )
              })}
            </div>
          )}

          {instagramPosts.length === 0 && (
            <div className="glass rounded-xl p-8 text-center">
              <p className="text-foreground/60">
                {isSpanish ? 'No hay publicaciones disponibles en este momento.' : 'No posts available at this time.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Embed Script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          setInstagramScriptLoaded(true)
          if (window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }}
      />
    </div>
  )
}

// Extender Window para incluir instgrm
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
