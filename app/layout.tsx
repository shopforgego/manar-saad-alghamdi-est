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

const siteUrl = "https://manar.protosoft.cloud"
const ogImageAbsolute = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'مؤسسة منار سعد الغامدي التجارية | MANAR SAAD ALGHAMDI Est.',
    template: '%s | مؤسسة منار سعد الغامدي التجارية',
  },
  description: 'مؤسسة منار سعد الغامدي التجارية (سجل تجاري 7054990010) — وجهتك الأولى لأحدث صيحات الأزياء والملابس، الأحذية الرياضية والكاجوال، وحقائب السفر والإكسسوارات الفاخرة في المملكة العربية السعودية مع شحن سريع ودفع إلكتروني آمن.',
  generator: 'Next.js',
  applicationName: 'مؤسسة منار سعد الغامدي التجارية',
  keywords: [
    'مؤسسة منار سعد الغامدي التجارية',
    'منار سعد الغامدي',
    'متجر أزياء',
    'ملابس نسائية',
    'ملابس رياضية',
    'فساتين',
    'أحذية رجالية',
    'أحذية رياضية',
    'حقائب سفر',
    'شنط سفر',
    'إكسسوارات فاخرة',
    'جدة',
    'السعودية',
    'MANAR SAAD ALGHAMDI',
    'fashion',
    'clothing',
    'shoes',
    'luggage',
    'accessories',
  ],
  authors: [{ name: 'مؤسسة منار سعد الغامدي التجارية' }],
  creator: 'مؤسسة منار سعد الغامدي التجارية',
  publisher: 'مؤسسة منار سعد الغامدي التجارية',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/og-image.jpg' },
    ],
    other: [
      {
        rel: 'image_src',
        url: ogImageAbsolute,
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: siteUrl,
    siteName: 'مؤسسة منار سعد الغامدي التجارية',
    title: 'مؤسسة منار سعد الغامدي التجارية | متجر الأزياء، الأحذية وحقائب السفر',
    description: 'تسوق أحدث صيحات الأزياء والملابس، الأحذية الرياضية وحقائب السفر الفاخرة من مؤسسة منار سعد الغامدي التجارية (س.ت: 7054990010) — شحن لجميع مدن المملكة ودفع آمن.',
    images: [
      {
        url: ogImageAbsolute,
        secureUrl: ogImageAbsolute,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'مؤسسة منار سعد الغامدي التجارية',
      },
      {
        url: `${siteUrl}/home_screenshot.png`,
        secureUrl: `${siteUrl}/home_screenshot.png`,
        width: 1200,
        height: 870,
        type: 'image/png',
        alt: 'مؤسسة منار سعد الغامدي التجارية - واجهة المتجر',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مؤسسة منار سعد الغامدي التجارية | متجر الأزياء، الأحذية وحقائب السفر',
    description: 'تسوق أحدث صيحات الأزياء والملابس، الأحذية الرياضية وحقائب السفر الفاخرة من مؤسسة منار سعد الغامدي التجارية — شحن لجميع مدن المملكة ودفع آمن.',
    images: [ogImageAbsolute],
    creator: '@manar_alghamdi',
  },
  alternates: {
    canonical: siteUrl,
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
