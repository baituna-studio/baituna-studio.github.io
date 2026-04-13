import React from 'react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
            Website, branding, dan katalog digital untuk bisnis yang ingin tampil rapi.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:max-w-xl mx-auto">
            Baituna Studio membantu bisnis menampilkan layanan, portofolio, dan identitas brand lewat website yang sederhana, cepat, dan profesional.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/catalog"
              className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-95"
            >
              Lihat Katalog
            </Link>
            <Link href="/portfolio" className="text-base font-semibold leading-7 text-slate-900 hover:text-blue-600 transition-colors">
              Portfolio Kami <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
