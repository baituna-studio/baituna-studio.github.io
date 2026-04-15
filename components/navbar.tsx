"use client"

import Link from 'next/link'
import { useState } from 'react'
import {
  Badge,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  rem,
} from '@mantine/core'
import { IconArrowUpRight, IconBuildingSkyscraper } from '@tabler/icons-react'
import { siteConfig } from '@/lib/site'
import { ColorSchemeToggle } from '@/components/color-scheme-toggle'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-figma-border/70 premium-surface premium-blur">
        <Container size="lg" py="sm">
          <Group justify="space-between" wrap="nowrap">
            <Link href="/" className="no-underline">
              <Group gap={8} wrap="nowrap">
                <IconBuildingSkyscraper size={22} color="var(--color-figma-accent)" />
                <Text fw={700} size="lg" className="tracking-[0.03em]">
                  {siteConfig.name}
                </Text>
                <Badge size="xs" color="bronze" variant="light" visibleFrom="lg">Studio</Badge>
              </Group>
            </Link>

            <Group gap="md" visibleFrom="md">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-inherit transition-opacity hover:opacity-80"
                >
                  {item.title}
                </Link>
              ))}
            </Group>

            <Group gap="xs" wrap="nowrap">
              <ColorSchemeToggle />
              <Button
                component="a"
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="filled"
                color="dark"
                rightSection={<IconArrowUpRight size={16} />}
                visibleFrom="sm"
                radius="xl"
              >
                Konsultasi
              </Button>
              <Burger
                opened={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                hiddenFrom="md"
                aria-label="Toggle navigation"
              />
            </Group>
          </Group>
        </Container>
      </header>

      <Drawer
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        title="Navigasi"
        hiddenFrom="md"
        padding="lg"
        size={rem(300)}
      >
        <Stack gap="md">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-inherit no-underline"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Divider my="xs" />
          <Button
            component="a"
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            variant="filled"
            color="dark"
            rightSection={<IconArrowUpRight size={16} />}
            fullWidth
            radius="xl"
          >
            Konsultasi WhatsApp
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}
