import React from 'react'
import { Card, Group, Text, ThemeIcon, Title } from '@mantine/core'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card
      className="premium-surface h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      shadow="sm"
    >
      <Group mb="lg">
        <ThemeIcon
          size={52}
          radius="xl"
          variant="light"
          color="slate"
        >
          {icon}
        </ThemeIcon>
      </Group>
      <Title order={3} fz="h4" mb="sm">
        {title}
      </Title>
      <Text c="dimmed" size="sm" lh={1.7}>
        {description}
      </Text>
    </Card>
  )
}
