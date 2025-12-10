'use client'

import { motion } from 'framer-motion'
import { use } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

// Esto sería dinámico en producción
const blogPost = {
  id: 1,
  title: 'The Future of AI Security: What to Expect in 2024',
  content: `
    <p>As we move into 2024, the landscape of AI security continues to evolve rapidly. Organizations are facing new challenges and opportunities in securing their AI infrastructure.</p>
    
    <h2>Key Trends</h2>
    <p>This year, we're seeing several important trends:</p>
    <ul>
      <li>Increased focus on prompt injection protection</li>
      <li>Growing importance of model security</li>
      <li>Enhanced compliance requirements</li>
      <li>Advanced threat detection capabilities</li>
    </ul>
    
    <h2>What This Means for You</h2>
    <p>Organizations need to stay ahead of these trends to protect their AI investments and ensure compliance with evolving regulations.</p>
  `,
  date: '2024-01-15',
  readTime: '5 min read',
  category: 'Security',
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

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
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
              <span className="px-3 py-1 rounded-full glass text-sm">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {blogPost.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 prose prose-invert max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  className="text-foreground/80 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-foreground [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>li]:mb-2"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}





