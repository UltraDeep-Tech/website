'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, ExternalLink, Loader2 } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface YouTubeVideo {
  id: string
  title: string
}

export function YouTubeCarousel() {
  const { t } = useTranslation()
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Cargar videos del canal
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube')
        const data = await response.json()
        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos)
        }
      } catch (error) {
        console.error('Error loading YouTube videos:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  // Auto-play: cambiar video cada 15 segundos
  useEffect(() => {
    if (!isPlaying && videos.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length)
      }, 15000) // Cambiar cada 15 segundos

      return () => clearInterval(interval)
    }
  }, [isPlaying, videos.length])

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const currentVideo = videos[currentIndex]

  // Mostrar loading state
  if (isLoading) {
    return (
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong shadow-2xl border border-primary-500/20 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
        </div>
      </div>
    )
  }

  // Si no hay videos, mostrar embed del canal
  if (videos.length === 0) {
    return (
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong shadow-2xl border border-primary-500/20">
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=UltraDeepTech"
            title="Ultra Deep Tech - YouTube Channel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 text-center"
        >
          <a
            href="https://www.youtube.com/@UltraDeepTech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-foreground/70 [data-theme='light']:text-slate-700 hover:text-primary-400 [data-theme='light']:hover:text-primary-600 transition-colors group"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{t('youtube_see_more')}</span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-60" />
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong shadow-2xl border border-primary-500/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0&modestbranding=1&controls=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              onLoad={() => setIsPlaying(true)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Solo mostrar si hay más de un video */}
        {videos.length > 1 && (
          <>
            <button
              onClick={prevVideo}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass backdrop-blur-md flex items-center justify-center hover:glass-strong transition-all group shadow-lg"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary-400 [data-theme='light']:group-hover:text-primary-600 transition-colors" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass backdrop-blur-md flex items-center justify-center hover:glass-strong transition-all group shadow-lg"
              aria-label="Next video"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary-400 [data-theme='light']:group-hover:text-primary-600 transition-colors" />
            </button>

            {/* Video Indicators - Solo mostrar si hay más de un video */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-400 [data-theme="light"]:bg-primary-600 w-8'
                      : 'bg-foreground/30 [data-theme="light"]:bg-slate-400/50 hover:bg-foreground/50 w-2'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Link to YouTube Channel */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 sm:mt-6 text-center"
      >
        <a
          href="https://www.youtube.com/@UltraDeepTech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-foreground/70 [data-theme='light']:text-slate-700 hover:text-primary-400 [data-theme='light']:hover:text-primary-600 transition-colors group"
        >
          <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>{t('youtube_see_more')}</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-60" />
        </a>
      </motion.div>
    </div>
  )
}

