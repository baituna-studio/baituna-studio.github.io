import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className 
}) => {
  return (
    <div className={cn(
      "mb-16 space-y-4",
      centered && "text-center mx-auto max-w-2xl",
      className
    )}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-figma-text uppercase leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm font-bold uppercase tracking-widest text-figma-text/40 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-[2px] w-12 bg-figma-text",
        centered && "mx-auto"
      )} />
    </div>
  )
}
