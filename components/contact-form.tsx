"use client"

import React, { useState } from 'react'
import { leadSchema, type LeadInput } from '@/lib/validations'

export const ContactForm = () => {
  const [formData, setFormData] = useState<LeadInput>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof LeadInput, string[]>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)
    setErrors({})

    // Client-side validation
    const validation = leadSchema.safeParse(formData)
    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors as any)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: result.message })
        setFormData({ name: '', email: '', message: '' })
      } else {
        if (result.errors) {
          setErrors(result.errors)
        }
        setStatus({ type: 'error', message: result.message || 'Gagal mengirim pesan.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Terjadi gangguan koneksi.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-transparent p-0">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="group">
          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-figma-text/40 mb-3 group-focus-within:text-figma-text transition-colors">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="block w-full bg-transparent border-b-2 border-figma-text/10 focus:border-figma-text transition-all py-4 px-0 text-lg font-bold text-figma-text outline-none placeholder:text-figma-text/10"
            placeholder="TYPE YOUR NAME HERE..."
          />
          {errors.name && <p className="mt-2 text-[10px] font-bold uppercase text-red-500 tracking-widest">{errors.name[0]}</p>}
        </div>

        <div className="group">
          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-figma-text/40 mb-3 group-focus-within:text-figma-text transition-colors">Email Bisnis</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="block w-full bg-transparent border-b-2 border-figma-text/10 focus:border-figma-text transition-all py-4 px-0 text-lg font-bold text-figma-text outline-none placeholder:text-figma-text/10"
            placeholder="YOUR@EMAIL.COM"
          />
          {errors.email && <p className="mt-2 text-[10px] font-bold uppercase text-red-500 tracking-widest">{errors.email[0]}</p>}
        </div>

        <div className="group">
          <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-figma-text/40 mb-3 group-focus-within:text-figma-text transition-colors">Pesan atau Konsultasi</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="block w-full bg-transparent border-b-2 border-figma-text/10 focus:border-figma-text transition-all py-4 px-0 text-lg font-bold text-figma-text outline-none placeholder:text-figma-text/10 resize-none"
            placeholder="TELL US ABOUT YOUR PROJECT..."
          />
          {errors.message && <p className="mt-2 text-[10px] font-bold uppercase text-red-500 tracking-widest">{errors.message[0]}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-figma-text text-figma-bg py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-figma-text/90 transition-all active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>

        {status && (
          <div className={`p-6 border-2 font-bold uppercase text-[10px] tracking-widest ${status.type === 'success' ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  )
}
