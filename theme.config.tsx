import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Group, Text, ThemeIcon } from '@mantine/core'
import { IconBuildingSkyscraper } from '@tabler/icons-react'

const config: DocsThemeConfig = {
  logo: (
    <Group gap={8} wrap="nowrap">
      <ThemeIcon size={24} variant="light" color="bronze" radius="xl">
        <IconBuildingSkyscraper size={14} />
      </ThemeIcon>
      <Text fw={700}>
        Baituna Studio
      </Text>
    </Group>
  ),
  project: {
    link: 'https://github.com/baituna-studio/baituna-studio.github.io',
  },
  docsRepositoryBase: 'https://github.com/baituna-studio/baituna-studio.github.io',
  footer: {
    text: (
      <Text size="sm" c="dimmed">
        {new Date().getFullYear()} © Baituna Studio.
      </Text>
    )
  },
  // Disable sidebar for a cleaner business look as per PRD
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  navbar: {
    extraContent: null,
  },
  search: {
    placeholder: 'Cari layanan...',
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
}

export default config
