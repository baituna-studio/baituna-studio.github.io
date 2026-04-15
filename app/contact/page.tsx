import { ContactForm } from '@/components/contact-form'
import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import { Badge, Button, Container, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBrandWhatsapp, IconMail, IconMapPin } from '@tabler/icons-react'

export default function ContactPage() {
  return (
    <Container size="lg" py={88}>
      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={{ base: 'lg', lg: 'xl' }}>
        <Stack gap="lg">
          <SectionTitle
            title="LET'S TALK."
            subtitle="Every great product and agency project starts with one sharp conversation."
            className="mb-0"
          />

          <Paper withBorder p="xl" className="premium-surface">
            <Stack gap="md">
              <Badge variant="light" color="bronze">Contact Channel</Badge>
              <Group gap="sm">
                <ThemeIcon variant="light" color="bronze"><IconMail size={16} /></ThemeIcon>
                <Link href={`mailto:${siteConfig.email}`} className="text-inherit no-underline hover:underline">
                  {siteConfig.email}
                </Link>
              </Group>
              <Group gap="sm">
                <ThemeIcon variant="light" color="bronze"><IconBrandWhatsapp size={16} /></ThemeIcon>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  className="text-inherit no-underline hover:underline"
                >
                  Start WhatsApp Chat
                </Link>
              </Group>
              <Group gap="sm" align="start">
                <ThemeIcon variant="light" color="bronze"><IconMapPin size={16} /></ThemeIcon>
                <Text c="dimmed" size="sm">Bantul, Daerah Istimewa Yogyakarta, Indonesia</Text>
              </Group>
            </Stack>
          </Paper>

          <Paper withBorder p="xl" className="premium-surface">
            <Stack gap="sm">
              <Title order={4}>Prefer instant briefing?</Title>
              <Text c="dimmed" size="sm">
                Klik WhatsApp untuk dapatkan estimasi timeline dan skema pengerjaan.
              </Text>
              <Button
                component="a"
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="filled"
                color="dark"
                radius="xl"
              >
                Chat Sekarang
              </Button>
            </Stack>
          </Paper>
        </Stack>

        <Paper withBorder p={{ base: 'lg', md: 'xl' }} className="premium-surface">
          <ContactForm />
        </Paper>
      </SimpleGrid>
    </Container>
  )
}
