import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  IconArrowRight,
  IconBrandReact,
  IconBrush,
  IconShoppingBag,
  IconSparkles,
} from '@tabler/icons-react'
import { Hero } from '@/components/hero'
import { SectionTitle } from '@/components/section-title'
import { ServiceCard } from '@/components/service-card'
import { PortfolioCard } from '@/components/portfolio-card'
import { StatsGroup } from '@/components/stats-group'
import { siteConfig } from '@/lib/site'

export default function HomePage() {
  return (
    <Box className="flex flex-col gap-y-24 pb-28 bg-figma-bg">
      <Hero />

      <Container size="lg" className="pt-2">
        <SectionTitle
          title="SERVICES THAT DRIVE CONVERSION."
          subtitle="Building your residence in the digital world."
          centered
        />
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <ServiceCard
            title="Website Bisnis"
            description="Website profesional yang cepat, responsif, dan mudah dikelola untuk meningkatkan kredibilitas bisnis."
            icon={<IconBrandReact size={24} />}
          />
          <ServiceCard
            title="Branding Visual"
            description="Ciptakan identitas brand yang unik dan berkesan melalui logo, tipografi, dan palet warna yang kohesif."
            icon={<IconBrush size={24} />}
          />
          <ServiceCard
            title="Katalog Digital"
            description="Tampilkan produk atau jasa Anda dalam format katalog yang rapi dan menarik bagi calon pelanggan."
            icon={<IconShoppingBag size={24} />}
          />
        </SimpleGrid>
      </Container>

      <Container size="lg" className="pt-2">
        <StatsGroup
          stats={[
            { label: 'Responsive delivery', value: 100, suffix: '%' },
            { label: 'Average sprint', value: 14, suffix: 'd' },
            { label: 'SEO readiness', value: 96, suffix: '%' },
            { label: 'Client satisfaction', value: 98, suffix: '%' },
          ]}
        />
      </Container>

      <Container size="lg" className="pt-2">
        <Group justify="space-between" align="end" mb="xl" className="max-md:flex-col max-md:items-start">
          <SectionTitle
            title="SELECTED WORKS."
            subtitle="Quality over quantity, always."
            className="mb-0"
          />
          <Button
            component="a"
            href="/portfolio"
            variant="subtle"
            rightSection={<IconArrowRight size={16} />}
          >
            Explore Portfolio
          </Button>
        </Group>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <PortfolioCard
            title="Rebranding Logo UMKM Kuliner"
            category="Logo & Branding"
            image="/og.jpg"
            href="/portfolio/logo-branding"
          />
          <PortfolioCard
            title="Website Company Profile Jasa Properti"
            category="Website Design"
            image="/og.jpg"
            href="/portfolio/company-profile"
          />
        </SimpleGrid>
      </Container>

      <Container size="lg" className="pt-2">
        <Paper withBorder p={{ base: 'lg', md: 'xl' }} className="premium-surface">
          <Stack gap="lg">
            <Group justify="space-between">
              <Badge variant="light" color="bronze">Client Testimonial</Badge>
              <IconSparkles size={20} className="text-[var(--color-figma-accent)]" />
            </Group>
            <Text fz="xl" fw={700}>
              Baituna Studio sangat membantu. Proses cepat, komunikatif, dan hasil desain sangat rapi.
              Team kami jadi lebih percaya diri saat pitching ke klien enterprise.
            </Text>
            <Group>
              <Avatar color="bronze" radius="xl">AP</Avatar>
              <Stack gap={0}>
                <Text fw={700}>Andari Putri</Text>
                <Text size="sm" c="dimmed">Owner, Catering Sehat Madju</Text>
              </Stack>
            </Group>
          </Stack>
        </Paper>
      </Container>

      <Container size="sm" className="pt-2">
        <Paper
          p={{ base: 'xl', md: 56 }}
          radius="xl"
          className="relative overflow-hidden border border-[#8e652b]/35 bg-[#1c2027] text-[#f1ede6]"
        >
          <Box className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#8e652b]/20 blur-3xl" />
          <Stack align="center" gap="lg" className="relative z-10 text-center">
            <Title order={2} c="#f5f2eb" fz={{ base: 36, md: 60 }} fw={600}>
              READY TO BUILD?
            </Title>
            <Text c="rgba(241,237,230,0.82)" maw={560}>
              Konsultasikan kebutuhan digital Anda sekarang juga. Kami bantu dari strategy, desain, hingga delivery.
            </Text>
            <Group justify="center">
              <Button component="a" href="/contact" color="bronze" radius="xl">
                Contact Us
              </Button>
              <Button
                component="a"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                variant="outline"
                color="bronze"
                radius="xl"
              >
                WhatsApp
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
