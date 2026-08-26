"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { CATEGORIES } from "@/lib/store-data"

export function CategoriesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {t({ ar: "تسوق حسب القسم", en: "Shop by Category" })}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t({
              ar: "اختر من بين مجموعة واسعة من الأقسام",
              en: "Choose from a wide range of categories",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={cat.image}
                  alt={t(cat.name)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-center text-white">
                <p className="text-lg font-bold">
                  {t(cat.name)}
                </p>
                <p className="text-xs text-white/80 mt-1 group-hover:text-amber-300 transition-colors">
                  {t({ ar: "عرض جميع المنتجات ←", en: "View All Products →" })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
