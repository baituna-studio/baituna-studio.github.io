import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export const Footer = () => {
  return (
    <footer className="bg-figma-bg border-t border-figma-text/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-24">
          <div className="space-y-8">
            <span className="text-2xl font-bold tracking-tighter text-figma-text uppercase">
              {siteConfig.name}
            </span>
            <p className="max-w-xs text-sm text-figma-text/60 leading-relaxed font-medium">
              {siteConfig.description}
            </p>
            <div className="flex space-x-6">
               <Link href={siteConfig.links.instagram} className="text-figma-text/40 hover:text-figma-text transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.35a4.188 4.188 0 110-8.376 4.188 4.188 0 010 8.376zm4.961-9.484a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-figma-text">Navigasi</h3>
                <ul role="list" className="mt-6 space-y-4">
                   {siteConfig.nav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm font-medium text-figma-text/60 hover:text-figma-text transition-colors">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-bold uppercase tracking-widest text-figma-text">Hubungi Kami</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-figma-text/60 hover:text-figma-text transition-colors lowercase">
                      {siteConfig.email}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                      className="text-sm font-medium text-figma-text/60 hover:text-figma-text transition-colors"
                    >
                      WhatsApp
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-figma-text">Alamat</h3>
              <p className="mt-6 text-sm font-medium text-figma-text/60 leading-relaxed">
                Bantul, Daerah Istimewa Yogyakarta<br />
                Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-figma-text/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-figma-text/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-figma-text/20">
            Built with dedication
          </div>
        </div>
      </div>
    </footer>
  )
}
