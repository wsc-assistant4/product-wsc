// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palet Warna Perusahaan Anda
        'brand-primary': '#3f545f',    // Biru-abu tua (Utama)
        'brand-secondary': '#5f788e',  // Biru-abu medium (Sekunder)
        'brand-accent': '#e8c458',     // Kuning/Emas (Aksen untuk Tombol CTA)
        'neutral-dark': '#1c2120',     // Hitam pekat (Teks Utama)
        'neutral-medium': '#665b4f',   // Coklat-abu (Teks Sekunder/Batas)
        'neutral-light': '#e9e9e9',    // Abu-abu terang (Latar Belakang Utama)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config