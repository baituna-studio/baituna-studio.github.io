import React from 'react'
import { ContactForm } from '@/components/contact-form'
import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <SectionTitle 
            title="Mari Mulai Berdiskusi" 
            subtitle="Kami selalu terbuka untuk mendengar tentang ide project atau tantangan bisnis Anda. Konsultasi awal tidak dipungut biaya apapun."
          />
          
          <div className="mt-12 space-y-8">
             <div className="flex items-start gap-4">
               <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900">Email Bisnis</h4>
                  <Link href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</Link>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900">WhatsApp</h4>
                  <Link 
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} 
                    className="text-blue-600 hover:underline"
                  >
                    Mulai Chat Sekarang
                  </Link>
               </div>
             </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
