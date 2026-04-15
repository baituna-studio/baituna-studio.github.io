import { createTheme, rem } from '@mantine/core'

export const premiumTheme = createTheme({
  primaryColor: 'slate',
  fontFamily: 'var(--font-body), sans-serif',
  headings: {
    fontFamily: 'var(--font-display), serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
  colors: {
    slate: [
      '#f1f3f6',
      '#e3e8ed',
      '#c8d0d9',
      '#aab6c3',
      '#8f9fb0',
      '#7d8f9f',
      '#748899',
      '#627584',
      '#56697a',
      '#495b6b',
    ],
    bronze: [
      '#f9f4eb',
      '#efe4d2',
      '#decaab',
      '#ceb082',
      '#c09a61',
      '#b98c4b',
      '#b5853f',
      '#9f7232',
      '#8e652b',
      '#7d5622',
    ],
    charcoal: [
      '#f5f5f5',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#9b9b9b',
      '#8c8c8c',
      '#848484',
      '#717171',
      '#656565',
      '#575757',
    ],
  },
  shadows: {
    xs: '0 1px 2px rgba(7, 11, 23, 0.04)',
    sm: '0 8px 16px rgba(16, 24, 40, 0.06)',
    md: '0 14px 32px rgba(16, 24, 40, 0.1)',
    lg: '0 20px 56px rgba(16, 24, 40, 0.16)',
    xl: '0 28px 72px rgba(16, 24, 40, 0.2)',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
        size: 'md',
        fw: 700,
      },
    },
    Card: {
      defaultProps: {
        radius: 'xl',
        padding: 'xl',
        withBorder: true,
      },
    },
    Paper: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Input: {
      defaultProps: {
        radius: 'md',
      },
    },
    Textarea: {
      defaultProps: {
        radius: 'md',
      },
    },
    Title: {
      defaultProps: {
        c: 'var(--mantine-color-text)',
      },
      styles: {
        root: {
          letterSpacing: '-0.015em',
          lineHeight: 1.08,
        },
      },
    },
    Badge: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Container: {
      defaultProps: {
        size: rem(1200),
      },
    },
  },
})
