'use client'

import { Hero } from '@/components/sections/Hero'
import { Clients } from '@/components/sections/Clients'
import { Automation } from '@/components/sections/Automation'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Courses } from '@/components/sections/Courses'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { Awards } from '@/components/sections/Awards'
import { Stats } from '@/components/sections/Stats'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <Awards />
      <Services />
      <Courses />
      <Clients />
      <Automation />
      <Testimonials />
      <CTA />
    </>
  )
}

