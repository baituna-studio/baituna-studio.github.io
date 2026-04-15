import type React from 'react'
import { Box, Stack, Text, Title } from '@mantine/core'
import { clsx } from 'clsx'

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
    <Stack
      gap="sm"
      className={clsx("mb-12", centered && "mx-auto max-w-3xl text-center", className)}
      align={centered ? 'center' : 'flex-start'}
    >
      <Title
        order={2}
        fz={{ base: 34, md: 52 }}
        fw={600}
        lh={1.08}
      >
        {title}
      </Title>
      {subtitle && (
        <Text c="dimmed" fw={500} fz="xs" maw={680} className="tracking-[0.14em] uppercase">
          {subtitle}
        </Text>
      )}
      <Box h={2} w={80} className="rounded-full bg-[var(--color-figma-accent)]" />
    </Stack>
  )
}
