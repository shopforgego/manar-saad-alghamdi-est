import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Kufi_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import { CartProvider } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-noto-kufi-arabic", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'MANAR SAAD ALGHAMDI Est. | مؤسسة منار سعد الغامدي التجارية',
  description: 'مؤسسة منار سعد الغامدي التجارية - وجهتك الأولى لأحدث الأحذية وحقائب السفر والإكسسوارات الفاخرة في المملكة العربية السعودية | MANAR SAAD ALGHAMDI Establishment Commercial',
  generator: 'Next.js',
  keywords: ['أحذية', 'حقائب سفر', 'إكسسوارات', 'أحذية رياضية', 'شنط سفر', 'shoes', 'bags', 'luggage', 'accessories', 'Jeddah', 'Saudi Arabia', 'جدة', 'سعودية'],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f766e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${_geist.variable} ${_geistMono.variable} ${_notoKufiArabic.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <CartProvider>
              {children}
              <CartDrawer />
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
