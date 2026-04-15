"use client"

import React from 'react'
import { useState } from 'react'
import { Button, Stack, TextInput, Textarea } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { leadSchema, type LeadInput } from '@/lib/validations'

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<LeadInput>({
    mode: 'controlled',
    initialValues: { name: '', email: '', message: '' },
    validate: zodResolver(leadSchema),
  })

  const handleSubmit = form.onSubmit(async (values) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const result = await response.json()

      if (response.ok) {
        notifications.show({
          color: 'green',
          title: 'Pesan terkirim',
          message: result.message,
        })
        form.reset()
      } else {
        notifications.show({
          color: 'red',
          title: 'Pengiriman gagal',
          message: result.message || 'Gagal mengirim pesan.',
        })
      }
    } catch {
      notifications.show({
        color: 'red',
        title: 'Gangguan koneksi',
        message: 'Terjadi gangguan koneksi. Silakan coba lagi.',
      })
    }
    setIsSubmitting(false)
  })

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="lg">
        <TextInput
          label="Nama Lengkap"
          placeholder="Tulis nama Anda"
          withAsterisk
          {...form.getInputProps('name')}
        />

        <TextInput
          label="Email Bisnis"
          placeholder="you@company.com"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <Textarea
          label="Pesan / Kebutuhan"
          placeholder="Ceritakan singkat kebutuhan website/branding Anda"
          minRows={6}
          withAsterisk
          {...form.getInputProps('message')}
        />

        <Button
          type="submit"
          variant="filled"
          color="dark"
          loading={isSubmitting}
          size="md"
        >
          Kirim Pesan
        </Button>
      </Stack>
    </form>
  )
}
