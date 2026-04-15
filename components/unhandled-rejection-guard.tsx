"use client"

import { useEffect } from 'react'

function isEventLike(value: unknown): value is Event {
  return typeof value === 'object' && value !== null && 'type' in value
}

export function UnhandledRejectionGuard() {
  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason

      // Some browser APIs reject with an Event/AbortEvent-like object.
      // This guard prevents noisy dev overlay crashes and logs a clearer message.
      if (isEventLike(reason)) {
        // eslint-disable-next-line no-console
        console.error('Unhandled promise rejection (Event-like):', {
          type: (reason as any).type,
          reason,
        })
        event.preventDefault()
        return
      }

      // Let non-Event rejections surface normally (important for debugging real issues).
    }

    window.addEventListener('unhandledrejection', onUnhandledRejection)
    return () => window.removeEventListener('unhandledrejection', onUnhandledRejection)
  }, [])

  return null
}

