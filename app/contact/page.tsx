import React from 'react'
import { ContactForm } from '@/components/contact-form'
import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="bg-figma-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-32 items-start">
          <div>
            <SectionTitle 
              title="LET'S TALK." 
              subtitle="Every great project starts with a conversation."
            />
            
            <div className="mt-24 space-y-16">
               <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-figma-text/20">EMAIL US</span>
                  <Link href={`mailto:${siteConfig.email}`} className="text-3xl md:text-4xl font-bold tracking-tighter text-figma-text hover:underline underline-offset-8 transition-all">
                    {siteConfig.email}
                  </Link>
               </div>

               <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-figma-text/20">WHATSAPP</span>
                  <Link 
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} 
                    className="text-3xl md:text-4xl font-bold tracking-tighter text-figma-text hover:underline underline-offset-8 transition-all"
                  >
                    START CHAT →
                  </Link>
               </div>

               <div className="pt-8 block">
                  <div className="vertical-label text-[10px] font-bold uppercase tracking-[0.5em] text-figma-text/10">
                    BAITUNA STUDIO — YOGYAKARTA, ID
                  </div>
               </div>
            </div>
          </div>

          <div className="mt-24 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
