---
project: baituna-studio
brand: Baituna Studio
domain: https://baitunastudio.biz.id
type: website
format: ai-friendly
status: starter
stack:
  - Next.js App Router
  - Nextra
  - MDX
  - TypeScript
  - Tailwind CSS
  - Zod
deployment:
  mode: server-runtime
  static_export: false
language: id
---

# Baituna Studio

Dokumen ini adalah spesifikasi proyek **AI-friendly** untuk website **Baituna Studio**.

Tujuannya agar file ini mudah dipakai oleh:
- ChatGPT
- Claude
- Cursor
- Copilot
- coding assistant lain

Dokumen ini dirancang untuk menjadi **single source of truth** untuk struktur website, arah branding, arsitektur teknis, dan task implementasi.

---

## 1. Ringkasan proyek

**Baituna Studio** adalah studio digital untuk:
- website bisnis
- company profile
- katalog layanan
- portofolio digital
- branding visual

Website utama akan memakai domain:

`baitunastudio.biz.id`

Tujuan website:
1. menampilkan identitas studio secara profesional
2. menampilkan layanan dalam bentuk katalog
3. menampilkan portofolio proyek
4. menerima lead dari calon klien
5. mudah diupdate tanpa CMS yang rumit

---

## 2. Rekomendasi teknis

Gunakan:
- **Nextra** untuk halaman konten
- **Next.js App Router** untuk routing dan backend ringan
- **MDX** untuk katalog dan portofolio
- **Route Handlers** atau **Server Actions** untuk form kontak / lead
- **deploy non-static** agar endpoint backend tetap aktif

### Catatan penting
Jangan gunakan static export murni bila project membutuhkan:
- `/api/leads`
- form submit ke server
- integrasi email
- webhook
- logic backend lain

---

## 3. Tujuan desain

Arah desain website:
- sederhana
- modern
- bersih
- profesional
- ringan
- mudah dibaca
- fokus pada trust dan conversion

Nuansa brand:
- studio digital
- elegan
- tenang
- rapi
- tidak terlalu ramai
- cocok untuk bisnis, UMKM, personal brand, dan jasa profesional

---

## 4. Sitemap utama

Gunakan struktur halaman berikut:

- `/` → Homepage
- `/services` → Halaman layanan
- `/catalog` → Daftar layanan / paket
- `/catalog/branding` → Detail layanan branding
- `/catalog/website` → Detail layanan website bisnis
- `/portfolio` → Daftar portfolio
- `/portfolio/logo-branding` → Detail portfolio branding
- `/portfolio/company-profile` → Detail portfolio website company profile
- `/about` → Tentang Baituna Studio
- `/contact` → Halaman kontak
- `/api/leads` → Endpoint submit lead

---

## 5. Struktur folder yang disarankan

```txt
baitunastudio/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ about/page.mdx
│  ├─ services/page.mdx
│  ├─ portfolio/
│  │  ├─ page.mdx
│  │  ├─ logo-branding/page.mdx
│  │  └─ company-profile/page.mdx
│  ├─ catalog/
│  │  ├─ page.mdx
│  │  ├─ branding/page.mdx
│  │  └─ website/page.mdx
│  ├─ contact/page.tsx
│  └─ api/
│     └─ leads/
│        └─ route.ts
├─ components/
│  ├─ hero.tsx
│  ├─ navbar.tsx
│  ├─ footer.tsx
│  ├─ section-title.tsx
│  ├─ service-card.tsx
│  ├─ portfolio-card.tsx
│  └─ contact-form.tsx
├─ lib/
│  ├─ site.ts
│  ├─ validations.ts
│  └─ actions.ts
├─ public/
│  ├─ favicon.ico
│  ├─ og.jpg
│  └─ images/
├─ mdx-components.tsx
├─ next.config.mjs
├─ package.json
└─ tsconfig.json
```

---

## 6. Konfigurasi inti

### package.json

```json
{
  "name": "baitunastudio",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "nextra": "latest",
    "nextra-theme-docs": "latest",
    "zod": "latest"
  }
}
```

### next.config.mjs

```js
import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true
})
```

---

## 7. Metadata situs

Gunakan metadata berikut sebagai baseline:

```ts
export const siteConfig = {
  name: 'Baituna Studio',
  url: 'https://baitunastudio.biz.id',
  description: 'Studio digital untuk website, branding, katalog, dan portofolio bisnis.',
  email: 'hello@baitunastudio.biz.id',
  whatsapp: '6281234567890',
  nav: [
    { title: 'Layanan', href: '/services' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Katalog', href: '/catalog' },
    { title: 'Tentang', href: '/about' },
    { title: 'Kontak', href: '/contact' }
  ]
}
```

---

## 8. Komponen utama

Komponen minimal yang perlu dibuat:

### `Hero`
Fungsi:
- headline utama
- subheadline singkat
- CTA ke katalog
- CTA ke portfolio

### `Navbar`
Isi:
- logo / nama brand
- link ke halaman utama
- link layanan
- link portfolio
- link kontak
- CTA WhatsApp atau konsultasi

### `Footer`
Isi:
- deskripsi singkat studio
- navigasi cepat
- kontak
- copyright

### `ServiceCard`
Fungsi:
- menampilkan layanan dengan judul dan deskripsi singkat

### `PortfolioCard`
Fungsi:
- menampilkan preview hasil kerja

### `ContactForm`
Fungsi:
- input nama
- input email
- input pesan
- submit ke `/api/leads`

---

## 9. Konten halaman homepage

Homepage sebaiknya berisi section berikut:

1. hero section
2. ringkasan layanan
3. keunggulan studio
4. preview katalog
5. preview portfolio
6. testimonial singkat
7. CTA kontak / konsultasi

### Contoh headline
`Website, branding, dan katalog digital untuk bisnis yang ingin tampil rapi.`

### Contoh subheadline
`Baituna Studio membantu bisnis menampilkan layanan, portofolio, dan identitas brand lewat website yang sederhana, cepat, dan profesional.`

---

## 10. Halaman layanan

Halaman `/services` harus menjelaskan jenis layanan utama, misalnya:
- website bisnis
- landing page
- company profile
- katalog digital
- portfolio setup
- branding visual

Struktur isi:
- intro singkat
- daftar layanan
- siapa yang cocok memakai layanan ini
- CTA ke kontak

---

## 11. Halaman katalog

Halaman `/catalog` adalah daftar layanan yang dijual.

Minimal punya 2 detail layanan:
- `/catalog/branding`
- `/catalog/website`

Setiap halaman detail layanan sebaiknya berisi:
- nama layanan
- deskripsi singkat
- cocok untuk siapa
- output yang didapat
- alur kerja singkat
- CTA order / konsultasi

### Contoh isi `branding`
Output:
- logo utama
- logo alternatif
- warna brand
- tipografi dasar
- arahan visual

### Contoh isi `website`
Output:
- homepage
- about
- services
- portfolio
- contact
- basic SEO metadata

---

## 12. Halaman portfolio

Halaman `/portfolio` adalah daftar hasil kerja.

Setiap item portfolio sebaiknya berisi:
- nama proyek
- kategori
- deskripsi masalah klien
- solusi yang dibuat
- hasil akhir
- screenshot atau visual preview

Minimal buat contoh:
- branding project
- company profile project

---

## 13. Halaman about

Halaman `/about` harus menjawab:
- siapa Baituna Studio
- apa fokus layanan
- siapa target klien
- nilai utama studio

Contoh positioning:
`Baituna Studio adalah studio digital yang membantu bisnis tampil lebih rapi melalui website, katalog, portofolio, dan branding.`

---

## 14. Halaman contact

Halaman `/contact` harus berisi:
- headline singkat
- deskripsi ajakan kontak
- form kontak
- email bisnis
- CTA WhatsApp

Tujuan halaman ini:
- menangkap lead
- mempermudah calon klien bertanya
- mengarahkan user ke konsultasi

---

## 15. Backend ringan

Backend awal cukup sederhana.

### Endpoint
`POST /api/leads`

### Tugas endpoint
- menerima data form
- validasi input
- menyimpan atau meneruskan lead
- mengembalikan respons sukses / gagal

### Input minimal
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### Validasi
Gunakan `zod`:

```ts
import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  message: z.string().min(10, 'Pesan minimal 10 karakter')
})
```

---

## 16. Integrasi lanjutan yang bisa ditambahkan

Tahap berikutnya bisa menambahkan:
- email notification
- simpan lead ke database
- simpan lead ke Google Sheets
- webhook ke Telegram
- webhook ke Discord
- CTA WhatsApp otomatis
- analytics
- SEO metadata per halaman
- testimonial CMS sederhana

---

## 17. Prioritas implementasi

Ikuti urutan ini:

### Tahap 1
- setup project Next.js + Nextra
- buat layout dasar
- buat homepage
- buat navbar dan footer

### Tahap 2
- buat halaman services
- buat halaman catalog
- buat halaman portfolio
- buat halaman about
- buat halaman contact

### Tahap 3
- buat komponen contact form
- buat endpoint `/api/leads`
- tambahkan validasi Zod

### Tahap 4
- isi konten awal
- tambah SEO metadata
- tambah gambar dan preview portfolio

### Tahap 5
- deploy ke domain utama
- hubungkan email bisnis
- pasang analytics

---

## 18. Constraint proyek

Gunakan constraint berikut saat AI menulis kode:

- gunakan **TypeScript**
- gunakan **App Router**
- gunakan **Nextra**
- gunakan **MDX** untuk konten katalog dan portfolio
- jangan pakai CMS eksternal dulu
- jangan pakai database dulu kecuali benar-benar perlu
- tetap sederhana dan mudah dirawat
- utamakan clean UI
- utamakan struktur yang mudah dikembangkan
- gunakan nama brand **Baituna Studio**
- gunakan domain **baitunastudio.biz.id**

---

## 19. Prompt context untuk AI coder

Gunakan konteks berikut jika dokumen ini diberikan ke AI:

```txt
Build a clean and modern business website for Baituna Studio using Next.js App Router and Nextra.
The site should support a homepage, services, catalog, portfolio, about, and contact pages.
Use MDX for content pages and build a lightweight backend endpoint at /api/leads for contact form submission.
Do not use static export because the site needs backend functionality.
Keep the UI minimalist, elegant, and professional.
Use TypeScript and create reusable components for hero, navbar, footer, service card, portfolio card, and contact form.
```

---

## 20. Prompt task turunan untuk AI

### Prompt 1 — generate starter
```txt
Create the initial project structure for Baituna Studio using Next.js App Router and Nextra.
Include homepage, services, catalog, portfolio, about, and contact pages.
Add a simple navbar, footer, and hero section.
Prepare MDX pages for catalog and portfolio.
```

### Prompt 2 — generate contact form
```txt
Create a reusable ContactForm component for Baituna Studio.
Use a POST request to /api/leads and validate input using Zod on the server.
Fields: name, email, message.
Return user-friendly error and success messages in Indonesian.
```

### Prompt 3 — generate homepage UI
```txt
Design a modern homepage for Baituna Studio.
Make it minimalist, elegant, and conversion-focused.
Sections: hero, services, portfolio preview, benefits, testimonials, CTA.
Use clean spacing and simple typography.
```

### Prompt 4 — generate portfolio layout
```txt
Create a reusable portfolio page layout for Baituna Studio.
Each portfolio item should include title, category, project summary, challenge, solution, and result.
Keep the layout simple and readable.
```

---

## 21. Rekomendasi deploy

Gunakan platform yang mendukung runtime Next.js server.

Jangan pilih mode deploy yang hanya mendukung static export bila ingin:
- API route aktif
- form submit server-side
- webhook
- integrasi email

---

## 22. Rekomendasi domain dan branding

Domain utama:
`baitunastudio.biz.id`

Alasan:
- paling jelas untuk branding
- cocok untuk katalog dan portofolio
- langsung menunjukkan nama usaha
- lebih kuat daripada memakai subdomain seperti `studio.baituna.biz.id`

---

## 23. Deliverable minimum viable website

Versi minimum yang sudah layak online:

- homepage
- services page
- catalog page
- portfolio page
- about page
- contact page
- contact form aktif
- metadata SEO dasar
- favicon
- og image
- WhatsApp CTA

---

## 24. Deliverable ideal fase berikutnya

Setelah versi awal selesai, tingkatkan ke:

- halaman detail layanan lebih lengkap
- halaman detail portfolio lebih rapi
- testimonial real client
- FAQ
- pricing / paket layanan
- blog / artikel
- integrasi email bisnis
- lead tracking sederhana

---

## 25. Kesimpulan

Arsitektur yang disarankan untuk Baituna Studio adalah:

- **Nextra** untuk halaman konten
- **Next.js App Router** untuk struktur aplikasi
- **MDX** untuk katalog dan portfolio
- **backend ringan** lewat `/api/leads`
- **deploy server runtime**
- **domain utama** `baitunastudio.biz.id`

Pendekatan ini paling cocok untuk:
- studio digital
- website katalog
- portofolio jasa
- brand yang ingin tampil rapi dan profesional
- pengelolaan konten sederhana tanpa CMS berat
