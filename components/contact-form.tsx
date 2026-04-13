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
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="block w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
            placeholder="Masukkan nama Anda"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Bisnis</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="block w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
            placeholder="nama@perusahaan.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email[0]}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Pesan atau Konsultasi</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="block w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
            placeholder="Ceritakan sedikit tentang proyek atau kebutuhan Anda..."
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message[0]}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
        </button>

        {status && (
          <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  )
}
