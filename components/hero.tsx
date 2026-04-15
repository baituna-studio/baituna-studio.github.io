import { Badge, Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core'
import { IconArrowRight, IconSparkles } from '@tabler/icons-react'
import { siteConfig } from '@/lib/site'

export const Hero = () => {
  return (
    <Box component="section" className="relative overflow-hidden border-b border-figma-border/80 py-24 sm:py-30 lg:py-40">
      <Box className="absolute inset-0 premium-hero-mesh" />
      <Box className="absolute -left-12 top-16 h-52 w-52 rounded-full bg-slate-500/20 blur-3xl animate-soft-pulse" />
      <Box className="absolute bottom-8 right-8 h-56 w-56 rounded-full bg-[#8e652b]/20 blur-3xl animate-soft-pulse" />

      <Container size="lg" className="relative z-10">
        <Stack gap="xl" className="animate-slide-up">
          <Group justify="space-between" align="flex-start">
            <Badge
              leftSection={<IconSparkles size={14} />}
              size="lg"
              variant="light"
              color="bronze"
              className="uppercase tracking-[0.16em]"
            >
              Refined Agency Experience
            </Badge>
            <Text className="vertical-label hidden text-[10px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--hero-label-rgb))] lg:block">
              PORTFOLIO DESIGN - EST. 2024
            </Text>
          </Group>

          <Title
            order={1}
            fz={{ base: 48, sm: 74, lg: 102 }}
            lh={0.9}
            maw={840}
            fw={600}
          >
            DIGITAL RESIDENCE FOR MODERN BRANDS.
          </Title>

          <Text fz={{ base: 'md', md: 'lg' }} maw={700} c="dimmed" lh={1.85}>
            {siteConfig.name} membangun website dan branding yang terlihat premium, tetap cepat, dan siap convert.
            Cocok untuk UMKM naik kelas maupun product company yang ingin tampil lebih otoritatif.
          </Text>

          <Group gap="md">
            <Button
              component="a"
              href="/portfolio"
              variant="filled"
              color="dark"
              size="lg"
              rightSection={<IconArrowRight size={16} />}
              className="shadow-lg"
            >
              Lihat Karya
            </Button>
            <Button component="a" href="/contact" variant="default" size="lg">
              Hubungi Kami
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}
