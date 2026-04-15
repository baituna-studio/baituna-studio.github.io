import Link from 'next/link'
import { AspectRatio, Badge, Group, Image, Paper, Text, Title } from '@mantine/core'
import { IconArrowUpRight } from '@tabler/icons-react'

interface PortfolioCardProps {
  title: string
  category: string
  image: string
  href: string
}

export function PortfolioCard({ title, category, image, href }: PortfolioCardProps) {
  return (
    <Link href={href} className="block no-underline">
      <Paper
        p={0}
        withBorder
        radius="xl"
        className="group premium-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <AspectRatio ratio={16 / 10}>
          <Image src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </AspectRatio>

        <Group justify="space-between" align="flex-start" p="xl">
          <div>
            <Badge variant="light" color="bronze" mb={10}>
              {category}
            </Badge>
            <Title order={3} fz="h4" maw={340}>
              {title}
            </Title>
            <Text size="sm" c="dimmed" mt="sm">
              Explore case study
            </Text>
          </div>
          <IconArrowUpRight size={22} className="text-[var(--color-figma-accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Group>
      </Paper>
    </Link>
  )
}
