"use client"

import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const isDark = colorScheme === 'dark'

  return (
    <Tooltip label={isDark ? 'Aktifkan light mode' : 'Aktifkan dark mode'}>
      <ActionIcon
        variant="default"
        radius="xl"
        size="lg"
        onClick={() => toggleColorScheme()}
        aria-label="Toggle color scheme"
      >
        {isDark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </Tooltip>
  )
}
