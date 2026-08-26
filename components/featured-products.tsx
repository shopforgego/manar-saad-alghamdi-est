"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { PRODUCTS } from "@/lib/store-data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const { lang, t } = useLanguage()
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight

  const featured = PRODUCTS.filter((p) => p.badge || p.oldPrice).slice(0, 8)

  return (
    <section className="bg-card py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
              {t({ ar: "منتجات مميزة", en: "Featured Products" })}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t({
                ar: "أفضل المنتجات المختارة لك",
                en: "Top picks selected for you",
              })}
            </p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="gap-2 text-accent hover:text-accent/80">
              {t({ ar: "عرض الكل", en: "View All" })}
              <Arrow className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
