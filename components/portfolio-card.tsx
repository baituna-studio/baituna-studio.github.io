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
    <Link href={href} className="group relative block overflow-hidden rounded-3xl bg-slate-100 shadow-sm transition-all hover:shadow-xl">
      <div className="aspect-[16/10] overflow-hidden">
        {/* Using a placeholder if image doesn't exist yet */}
        <div className="h-full w-full bg-slate-200 group-hover:scale-105 transition-transform duration-500 ease-out" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
          {category}
        </p>
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
      </div>
    </Link>
  )
}
