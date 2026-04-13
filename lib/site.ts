export const siteConfig = {
  name: 'Baituna Studio',
  url: 'https://baitunastudio.biz.id',
  ogImage: 'https://baitunastudio.biz.id/og.jpg',
  description: 'Studio digital untuk website bisnis, branding, katalog, dan portofolio profesional.',
  email: 'hello@baitunastudio.biz.id',
  whatsapp: '6281234567890', // Default dummy number
  whatsappMessage: 'Halo Baituna Studio, saya tertarik untuk konsultasi mengenai layanan studio.',
  nav: [
    { title: 'Layanan', href: '/services' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Katalog', href: '/catalog' },
    { title: 'Tentang', href: '/about' },
    { title: 'Kontak', href: '/contact' }
  ],
  links: {
    github: 'https://github.com/baituna-studio',
    instagram: 'https://instagram.com/baitunastudio',
  }
}

export type SiteConfig = typeof siteConfig
