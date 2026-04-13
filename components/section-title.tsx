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
      "mb-12 space-y-4",
      centered && "text-center mx-auto max-w-2xl",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 bg-blue-600 rounded-full",
        centered && "mx-auto"
      )} />
    </div>
  )
}
