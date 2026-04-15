import Link from 'next/link'
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconBrandGithub, IconBrandInstagram, IconMail, IconMapPin } from '@tabler/icons-react'
import { siteConfig } from '@/lib/site'

export const Footer = () => {
  return (
    <Box component="footer" className="border-t border-figma-border/70 bg-figma-bg">
      <Container size="lg" py={84}>
        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
          <Stack gap="sm">
            <Title order={3} fw={600} lh={1.1}>
              {siteConfig.name}
            </Title>
            <Text c="dimmed" size="sm" lh={1.75}>
              Studio digital untuk website premium, branding modern, dan execution cepat untuk agency-grade result.
            </Text>
            <Group gap="xs">
              <ActionIcon component="a" href={siteConfig.links.instagram} variant="light" radius="xl" size="lg">
                <IconBrandInstagram size={18} />
              </ActionIcon>
              <ActionIcon component="a" href={siteConfig.links.github} variant="light" radius="xl" size="lg">
                <IconBrandGithub size={18} />
              </ActionIcon>
              <ActionIcon component="a" href={`mailto:${siteConfig.email}`} variant="light" radius="xl" size="lg">
                <IconMail size={18} />
              </ActionIcon>
            </Group>
          </Stack>

          <Stack gap="xs">
            <Text fw={700}>Navigasi</Text>
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-inherit no-underline opacity-70 transition hover:opacity-100">
                {item.title}
              </Link>
            ))}
          </Stack>

          <Stack gap="xs">
            <Text fw={700}>Hubungi Kami</Text>
            <Link href={`mailto:${siteConfig.email}`} className="text-sm text-inherit no-underline opacity-70 transition hover:opacity-100">
              {siteConfig.email}
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              className="text-sm text-inherit no-underline opacity-70 transition hover:opacity-100"
            >
              WhatsApp Consultation
            </Link>
            <Group gap={6} mt="xs">
              <IconMapPin size={14} />
              <Text size="sm" c="dimmed">Bantul, Daerah Istimewa Yogyakarta</Text>
            </Group>
          </Stack>

          <Stack gap="sm">
            <Text fw={700}>Newsletter Insight</Text>
            <Text size="sm" c="dimmed">
              Dapatkan insight desain, website conversion, dan trend branding setiap bulan.
            </Text>
            <Group gap="xs" wrap="nowrap">
              <TextInput placeholder="you@company.com" radius="xl" className="flex-1" />
              <Button variant="filled" color="dark" radius="xl">
                Join
              </Button>
            </Group>
          </Stack>
        </SimpleGrid>

        <Divider my="xl" />

        <Group justify="space-between" gap="xs">
          <Text size="xs" c="dimmed" className="tracking-[0.04em]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Text>
          <Text size="xs" c="dimmed" className="tracking-[0.04em]">
            Premium digital residence for modern business.
          </Text>
        </Group>
      </Container>
    </Box>
  )
}
