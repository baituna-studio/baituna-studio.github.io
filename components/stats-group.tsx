"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { Group, Paper, Stack, Text } from '@mantine/core'

interface StatItem {
  label: string
  value: number
  suffix?: string
}

interface StatsGroupProps {
  stats: StatItem[]
}

function useCountUp(target: number, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const duration = 1400
    const stepDuration = 16
    const totalSteps = duration / stepDuration
    const increment = target / totalSteps
    let current = 0

    const timer = window.setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        window.clearInterval(timer)
        return
      }
      setCount(Math.round(current))
    }, stepDuration)

    return () => window.clearInterval(timer)
  }, [shouldStart, target])

  return count
}

function StatsValue({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
      },
      { threshold: 0.35 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(value, isVisible)

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsGroup({ stats }: StatsGroupProps) {
  const visibleStats = useMemo(() => stats.slice(0, 4), [stats])

  return (
    <Paper p={{ base: 'lg', md: 'xl' }} withBorder className="premium-surface">
      <Group justify="space-between" align="stretch" wrap="nowrap" gap="xs" className="max-md:flex-col">
        {visibleStats.map((item, index) => (
          <Stack
            key={item.label}
            gap={8}
            className={`flex-1 ${index < visibleStats.length - 1 ? 'md:border-r md:border-figma-border md:pr-5' : ''}`}
          >
            <Text component="div" fw={700} fz={{ base: 34, md: 48 }} className="leading-none">
              <StatsValue value={item.value} suffix={item.suffix} />
            </Text>
            <Text c="dimmed" fz="xs" tt="uppercase" fw={600} className="tracking-[0.14em]">
              {item.label}
            </Text>
          </Stack>
        ))}
      </Group>
    </Paper>
  )
}
