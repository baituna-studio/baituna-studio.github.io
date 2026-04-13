"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-figma-text/10 bg-figma-bg/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tighter text-figma-text uppercase">
                {siteConfig.name}
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-widest text-figma-text/70 hover:text-figma-text transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                className="inline-flex items-center justify-center border-2 border-figma-text px-6 py-2 text-xs font-bold uppercase tracking-widest text-figma-text hover:bg-figma-text hover:text-figma-bg transition-all active:scale-95"
              >
                Konsultasi
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-figma-text hover:bg-figma-text/5 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-2 pb-6 pt-2 sm:px-3 bg-figma-bg border-b border-figma-text/10 shadow-xl">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-sm font-bold uppercase tracking-widest text-figma-text/70 hover:text-figma-text transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <div className="px-3 pt-4">
             <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                className="flex w-full items-center justify-center border-2 border-figma-text px-5 py-3 text-xs font-bold uppercase tracking-widest text-figma-text hover:bg-figma-text hover:text-figma-bg transition-all"
              >
                Konsultasi WhatsApp
              </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
