// app/page.js
'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import Plans from '@/components/Plans'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Features />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}