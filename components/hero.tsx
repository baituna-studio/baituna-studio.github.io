import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-figma-bg py-24 sm:py-32 lg:py-48 border-b border-figma-text/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold tracking-tighter text-figma-text sm:text-8xl lg:text-9xl leading-[0.8] mb-8">
              DIGITAL<br />
              RESIDENCE.
            </h1>
            <p className="text-lg font-medium text-figma-text/60 sm:max-w-xl leading-relaxed mb-12">
              Baituna Studio membangun "rumah digital" yang rapi, cepat, dan profesional untuk UMKM dan bisnis modern.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border-2 border-figma-text bg-figma-text px-10 py-4 text-sm font-bold uppercase tracking-widest text-figma-bg hover:bg-transparent hover:text-figma-text transition-all active:scale-95"
              >
                Lihat Karya
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-bold uppercase tracking-widest text-figma-text hover:underline decoration-2 underline-offset-8 transition-all"
              >
                Hubungi Kami →
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="vertical-label text-[10px] font-bold uppercase tracking-[0.5em] text-figma-text/20">
              PORTFOLIO DESIGN — EST. 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
