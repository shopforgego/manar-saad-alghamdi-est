"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Phone, ShieldCheck, Sparkles, Truck, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { lang, t } = useLanguage()
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card via-card to-background border-b border-border/60">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 end-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 start-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t({ ar: "المتجر الرسمي المعتمد", en: "Official Certified Store" })}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>{t({ ar: "تخفيضات حصرية 2026", en: "Exclusive 2026 Deals" })}</span>
            </div>

            <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t({
                ar: "أرقى تشكيلات الأحذية",
                en: "Exclusive Footwear &",
              })}
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-amber-400">
                {t({
                  ar: "وحقائب السفر الفاخرة",
                  en: "Premium Travel Bags",
                })}
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {t({
                ar: `مرحباً بكم في ${STORE_INFO.name.ar}. وجهتك الموثوقة لأحدث الأحذية الرياضية والكاجوال وشنط السفر العصرية بأعلى معايير الجودة وبأفضل الأسعار.`,
                en: `Welcome to ${STORE_INFO.name.en}. Your trusted destination for modern footwear and premium luggage at the best prices across KSA.`,
              })}
            </p>

            {/* Quick Benefits Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-foreground/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t({ ar: "سجل تجاري نشط ومعتمد", en: "Certified Commercial Record" })}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-accent" />
                <span>{t({ ar: "شحن سريع لجميع مدن المملكة", en: "Fast Nationwide Delivery" })}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-500" />
                <span>{t({ ar: "دفع إلكتروني آمن 100%", en: "100% Secure Payments" })}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/products">
                <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-6 rounded-xl shadow-lg shadow-accent/20">
                  {t({ ar: "استكشف المنتجات", en: "Explore Products" })}
                  <Arrow className="h-4 w-4" />
                </Button>
              </Link>
              <a href={`tel:${STORE_INFO.phone}`}>
                <Button variant="outline" className="gap-2 border-border text-foreground hover:border-accent hover:text-accent px-6 py-6 rounded-xl">
                  <Phone className="h-4 w-4" />
                  {t({ ar: "تواصل معنا", en: "Contact Us" })}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/80 pt-6">
              <div>
                <p className="text-2xl font-black text-foreground">200+</p>
                <p className="text-xs text-muted-foreground">{t({ ar: "منتج متاح", en: "Products" })}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-foreground">1,500+</p>
                <p className="text-xs text-muted-foreground">{t({ ar: "عميل راضٍ", en: "Happy Customers" })}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</p>
                <p className="text-xs text-muted-foreground">{t({ ar: "ضمان الجودة", en: "Quality Guaranteed" })}</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 shadow-2xl bg-secondary/30">
              <Image
                src="https://assets.lightfunnels.com/account-99794/images_library/8b2952c6-2f54-41bf-95f2-25f6c2a9dfbd.png"
                alt={t({ ar: "تشكيلة الأحذية وحقائب السفر", en: "Footwear & Luggage Collection" })}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 inset-x-6 flex items-end justify-between">
                <div className="text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {t({ ar: "المجموعة الحصرية", en: "Exclusive Edition" })}
                  </p>
                  <p className="text-lg font-bold">
                    {t({ ar: "حقائب وأحذية موديل 2026", en: "Bags & Shoes 2026 Collection" })}
                  </p>
                </div>
              </div>
            </div>

            {/* Promo badge */}
            <div className="absolute -bottom-4 start-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-center shadow-xl text-white sm:start-8 border border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider">
                {t({ ar: "خصومات تصل إلى", en: "Discounts up to" })}
              </p>
              <p className="text-3xl font-black">68%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
