"use client"

import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const FEATURES = [
  {
    icon: Truck,
    title: { ar: "شحن سريع وموثوق", en: "Fast & Reliable Shipping" },
    description: { ar: "توصيل سريع وآمن لكافة مدن ومحافظات المملكة", en: "Quick and secure delivery to all Saudi regions" },
  },
  {
    icon: ShieldCheck,
    title: { ar: "مؤسسة معتمدة وجودة مضمونة", en: "Certified Est. & Quality" },
    description: { ar: "سجل تجاري نشط ومنتجات أصلية مع ضمان الجودة", en: "Active commercial CR with genuine guaranteed products" },
  },
  {
    icon: Headphones,
    title: { ar: "دعم متواصل 24/7", en: "24/7 Support" },
    description: { ar: "فريق دعم فني متواجد عبر واتساب والمكالمات", en: "Dedicated support team available on WhatsApp & phone" },
  },
  {
    icon: CreditCard,
    title: { ar: "دفع إلكتروني آمن 100%", en: "100% Secure Payment" },
    description: { ar: "معاملات مشفرة بالكامل عبر مدى وفيزا وماستركارد وأبل باي", en: "Fully encrypted checkout with mada, Visa, Mastercard & Apple Pay" },
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-secondary/20 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-2">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground">
                {t(feature.title)}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {t(feature.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
