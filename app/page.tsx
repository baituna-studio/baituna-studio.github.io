import React from 'react'
import Link from 'next/link'
import { Hero } from '@/components/hero'
import { SectionTitle } from '@/components/section-title'
import { ServiceCard } from '@/components/service-card'
import { PortfolioCard } from '@/components/portfolio-card'
import { siteConfig } from '@/lib/site'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-24 pb-24">
      <Hero />

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Layanan Utama" 
          subtitle="Segala kebutuhan digital untuk membangun kehadiran online bisnis Anda dari nol."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-slate-400">Keunggulan pengerjaan di Baituna Studio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-white">
             <div>
               <div className="text-4xl font-bold mb-2 text-blue-500">100%</div>
               <p className="text-sm text-slate-300">Responsif di Semua Perangkat</p>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2 text-blue-500">Fast</div>
               <p className="text-sm text-slate-300">Pengerjaan Tepat Waktu</p>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2 text-blue-500">SEO</div>
               <p className="text-sm text-slate-300">Teroptimasi Mesin Pencari</p>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2 text-blue-500">Free</div>
               <p className="text-sm text-slate-300">Konsultasi Awal Gratis</p>
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <SectionTitle 
              title="Karya Terbaru Kami" 
              subtitle="Beberapa proyek yang telah kami selesaikan dengan penuh dedikasi."
              className="mb-0"
            />
            <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
              Lihat Semua Project <span aria-hidden="true">→</span>
            </Link>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="rounded-3xl bg-blue-50 px-8 py-16 md:px-16 text-center">
           <svg className="w-12 h-12 text-blue-200 mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6v-8h-6zm12 0v8h6v-8h-6zM10 18v8h6v-8h-6zm12 0v8h6v-8h-6z" /></svg>
           <blockquote className="text-2xl font-medium text-slate-900 leading-snug mb-8">
             "Baituna Studio sangat membantu dalam menyusun identitas brand saya. Prosesnya cepat, komunikatif, dan hasil desainnya sangat rapi!"
           </blockquote>
           <cite className="not-italic">
              <span className="block font-bold text-slate-900">Andari Putri</span>
              <span className="text-sm text-slate-600">Owner, Catering Sehat Madju</span>
           </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-3xl font-bold text-slate-900 mb-6">Siap Membuat Bisnis Anda Tampil Lebih Profesional?</h2>
         <p className="text-lg text-slate-600 mb-10">Konsultasikan kebutuhan digital Anda sekarang juga tanpa biaya tambahan.</p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-8 py-4 text-white font-semibold hover:bg-slate-800 transition-all"
            >
              Hubungi Kami
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-500 transition-all"
            >
              Chat via WhatsApp
            </Link>
         </div>
      </section>
    </div>
  )
}
