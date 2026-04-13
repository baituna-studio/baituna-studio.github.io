import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Baituna Studio</span>,
  project: {
    link: 'https://github.com/baituna-studio/baituna-studio.github.io',
  },
  docsRepositoryBase: 'https://github.com/baituna-studio/baituna-studio.github.io',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © Baituna Studio.
      </span>
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
