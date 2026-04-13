import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="relative flex flex-col items-start p-10 bg-transparent border-2 border-figma-text/10 hover:border-figma-text transition-all group">
      {icon && (
        <div className="mb-8 p-0 text-figma-text group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-figma-text mb-4 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-figma-text/60 leading-relaxed text-sm font-medium">
        {description}
      </p>
    </div>
  )
}
