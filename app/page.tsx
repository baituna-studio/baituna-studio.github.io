import React from 'react'
import Link from 'next/link'
import { Hero } from '@/components/hero'
import { SectionTitle } from '@/components/section-title'
import { ServiceCard } from '@/components/service-card'
import { PortfolioCard } from '@/components/portfolio-card'
import { siteConfig } from '@/lib/site'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-48 pb-48 bg-figma-bg">
      <Hero />

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="SERVICES." 
          subtitle="Building your residence in the digital world."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-r-2 border-b-2 border-figma-text/10">
          <ServiceCard
            title="Website Bisnis"
            description="Website profesional yang cepat, responsif, dan mudah dikelola untuk meningkatkan kredibilitas bisnis."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          />
          <ServiceCard
            title="Branding Visual"
            description="Ciptakan identitas brand yang unik dan berkesan melalui logo, tipografi, dan palet warna yang kohesif."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
          />
          <ServiceCard
            title="Katalog Digital"
            description="Tampilkan produk atau jasa Anda dalam format katalog yang rapi dan menarik bagi calon pelanggan."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>}
          />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 border-y-2 border-figma-text/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
             <div className="border-l-2 border-figma-text pl-6">
                <div className="text-5xl font-bold tracking-tighter mb-2 text-figma-text">100%</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-figma-text/40">Responsif di Semua Perangkat</p>
             </div>
             <div className="border-l-2 border-figma-text pl-6">
                <div className="text-5xl font-bold tracking-tighter mb-2 text-figma-text">FAST.</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-figma-text/40">Pengerjaan Tepat Waktu</p>
             </div>
             <div className="border-l-2 border-figma-text pl-6">
                <div className="text-5xl font-bold tracking-tighter mb-2 text-figma-text">SEO+</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-figma-text/40">Teroptimasi Mesin Pencari</p>
             </div>
             <div className="border-l-2 border-figma-text pl-6">
                <div className="text-5xl font-bold tracking-tighter mb-2 text-figma-text">FREE.</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-figma-text/40">Konsultasi Awal Gratis</p>
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <SectionTitle 
              title="SELECTED WORKS." 
              subtitle="Quality over quantity, always."
              className="mb-0"
            />
            <Link href="/portfolio" className="text-xs font-bold uppercase tracking-widest text-figma-text hover:underline underline-offset-8 decoration-2 mb-4">
              Explore Portfolio →
            </Link>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-figma-text/10 border-2 border-figma-text/10">
            <PortfolioCard
              title="Rebranding Logo UMKM Kuliner"
              category="Logo & Branding"
              image="/images/portfolio-1.jpg"
              href="/portfolio/logo-branding"
            />
            <PortfolioCard
              title="Website Company Profile Jasa Properti"
              category="Website Design"
              image="/images/portfolio-2.jpg"
              href="/portfolio/company-profile"
            />
         </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-figma-text p-12 md:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
              <div className="text-[20vw] font-bold uppercase tracking-tighter absolute -top-12 -left-12 rotate-12">
                TESTIMONY
              </div>
           </div>
           
           <svg className="w-12 h-12 text-figma-text/10 mx-auto mb-12" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6v-8h-6zm12 0v8h6v-8h-6zM10 18v8h6v-8h-6zm12 0v8h6v-8h-6z" /></svg>
           <blockquote className="text-3xl md:text-5xl font-bold tracking-tighter text-figma-text leading-tight mb-12 uppercase italic">
             "Baituna Studio sangat membantu. Proses cepat, komunikatif, dan hasil desain sangat rapi!"
           </blockquote>
           <cite className="not-italic">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-figma-text mb-1">Andari Putri</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-figma-text/30">Owner, Catering Sehat Madju</span>
           </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center bg-figma-text text-figma-bg py-24 border-8 border-figma-text outline outline-8 outline-figma-bg -outline-offset-[16px]">
         <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-[0.8]">
           READY TO<br />BUILD?
         </h2>
         <p className="text-lg font-medium text-figma-bg/60 mb-12 max-w-2xl mx-auto">Konsultasikan kebutuhan digital Anda sekarang juga tanpa biaya tambahan.</p>
         <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-figma-bg px-12 py-5 text-figma-text text-sm font-bold uppercase tracking-widest hover:bg-transparent hover:text-figma-bg border-2 border-figma-bg transition-all active:scale-95"
            >
              Contact Us
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="border-2 border-figma-bg/20 px-12 py-5 text-figma-bg text-sm font-bold uppercase tracking-widest hover:bg-figma-bg hover:text-figma-text transition-all active:scale-95"
            >
              WhatsApp
            </Link>
         </div>
      </section>
    </div>
  )
}
