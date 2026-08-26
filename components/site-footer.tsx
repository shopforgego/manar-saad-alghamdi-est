"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={t(STORE_INFO.name)}
                width={52}
                height={52}
                className="rounded-xl shadow-sm border border-border/50"
              />
              <div>
                <p className="font-bold text-foreground leading-tight">{t(STORE_INFO.name)}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t(STORE_INFO.tagline)}</p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "مؤسستك الموثوقة لأحدث الأحذية وحقائب السفر والإكسسوارات الفاخرة. نقدم أفضل المنتجات بأسعار تنافسية مع شحن سريع لجميع أنحاء المملكة العربية السعودية.",
                en: "Your trusted establishment for premium footwear, travel luggage & accessories. High quality products at competitive prices with fast shipping across KSA.",
              })}
            </p>
            <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-3 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">
                {t({ ar: "السجل التجاري / الرقم الموحد:", en: "Unified CR No:" })} <span className="font-mono text-accent font-bold" dir="ltr">{STORE_INFO.commercialRegNo}</span>
              </p>
              <p className="mt-1">
                {t({ ar: "العنوان الوطني:", en: "National Address:" })} <span className="font-mono text-foreground">{STORE_INFO.shortAddress}</span> - {t(STORE_INFO.city)}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">
              {t({ ar: "روابط سريعة", en: "Quick Links" })}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "الرئيسية", en: "Home" })}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "المنتجات", en: "Products" })}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "تواصل معنا", en: "Contact Us" })}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "الشروط والأحكام", en: "Terms & Conditions" })}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "سياسة الخصوصية والاسترداد", en: "Privacy & Refund Policy" })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">
              {t({ ar: "الأقسام", en: "Categories" })}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/products?category=clothing" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "ملابس وأزياء", en: "Fashion & Clothing" })}
                </Link>
              </li>
              <li>
                <Link href="/products?category=shoes" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "أحذية رجالية ورياضية", en: "Shoes & Footwear" })}
                </Link>
              </li>
              <li>
                <Link href="/products?category=bags" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "حقائب سفر", en: "Travel Luggage" })}
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t({ ar: "إكسسوارات وحقائب يد", en: "Accessories & Handbags" })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">
              {t({ ar: "تواصل معنا", en: "Contact Us" })}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={`tel:${STORE_INFO.phone}`} className="text-sm text-muted-foreground transition-colors hover:text-accent" dir="ltr">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href={`mailto:${STORE_INFO.emails[0]}`} className="text-sm text-muted-foreground transition-colors hover:text-accent" dir="ltr">
                  {STORE_INFO.emails[0]}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground leading-snug">
                  {t(STORE_INFO.address)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {t({
              ar: `© ${new Date().getFullYear()} ${STORE_INFO.name.ar}. جميع الحقوق محفوظة.`,
              en: `© ${new Date().getFullYear()} ${STORE_INFO.name.en}. All rights reserved.`,
            })}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-whatsapp"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              {t({ ar: "اتصل بنا", en: "Call Us" })}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
