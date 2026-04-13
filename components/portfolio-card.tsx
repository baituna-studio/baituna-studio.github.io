import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface PortfolioCardProps {
  title: string
  category: string
  image: string
  href: string
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, category, image, href }) => {
  return (
    <Link href={href} className="group relative block overflow-hidden border-2 border-figma-text/10 hover:border-figma-text transition-all bg-figma-bg">
      <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        {/* Fill with a placeholder color to simulate mockup background from Figma */}
        <div className="h-full w-full bg-figma-text/5 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center p-12">
           <div className="w-full h-full border-2 border-figma-text/5 bg-white shadow-2xl origin-bottom group-hover:rotate-1 transition-transform duration-700" />
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-figma-text/30 mb-2">
              {category}
            </p>
            <h3 className="text-2xl font-bold text-figma-text uppercase tracking-tighter leading-none">
              {title}
            </h3>
          </div>
          <div className="text-figma-text/20 group-hover:text-figma-text transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
