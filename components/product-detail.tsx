"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, ArrowLeft, Phone, Check, ChevronRight, ChevronLeft, ShoppingCart, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { STORE_INFO, PRODUCTS, type Product } from "@/lib/store-data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProductDetail({ product }: { product: Product }) {
  const router = useRouter()
  const { lang, t } = useLanguage()
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(product)
    router.push("/checkout")
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/" className="transition-colors hover:text-accent">
          {t({ ar: "الرئيسية", en: "Home" })}
        </Link>
        <Chevron className="h-3 w-3" />
        <Link href="/products" className="transition-colors hover:text-accent">
          {t({ ar: "المنتجات", en: "Products" })}
        </Link>
        <Chevron className="h-3 w-3" />
        <span className="font-medium text-foreground">{t(product.name)}</span>
      </nav>

      {/* Product Detail */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary/30">
          {product.badge && (
            <Badge className="absolute start-4 top-4 z-10 bg-accent text-accent-foreground hover:bg-accent/80">
              {t(product.badge)}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute end-4 top-4 z-10 bg-destructive-foreground text-primary-foreground hover:bg-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          <Image
            src={product.image}
            alt={t(product.name)}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {t(product.name)}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t(product.description)}
          </p>

          {/* Price */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-black text-gold">
              {product.price} {t({ ar: "ر.س", en: "SAR" })}
            </span>
            {product.oldPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {product.oldPrice} {t({ ar: "ر.س", en: "SAR" })}
              </span>
            )}
          </div>

          {/* Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-4 text-sm font-bold text-foreground">
                {t({ ar: "المواصفات", en: "Specifications" })}
              </h2>
              <ul className="flex flex-col gap-3">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{t(spec)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3">
            {/* Add to Cart - Primary Action */}
            <button
              onClick={handleAddToCart}
              className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all duration-300 ${added
                  ? "bg-green-500 text-white"
                  : "bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98]"
                }`}
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" />
                  {t({ ar: "تمت الإضافة للسلة!", en: "Added to Cart!" })}
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  {t({ ar: "أضف للسلة", en: "Add to Cart" })}
                </>
              )}
            </button>

            {/* Buy Now and Call */}
            <div className="flex gap-3">
              <Button onClick={handleBuyNow} className="flex-1 gap-2 cursor-pointer">
                <ShoppingBag className="h-4 w-4" />
                {t({ ar: "شراء الآن", en: "Buy Now" })}
              </Button>
              <a href={`tel:${STORE_INFO.phone}`} className="flex-1">
                <Button variant="outline" className="w-full gap-2 border-border text-muted-foreground hover:bg-secondary/40">
                  <Phone className="h-4 w-4" />
                  {t({ ar: "اتصال", en: "Call" })}
                </Button>
              </a>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 rounded-xl border border-border bg-card p-4">
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>{t({ ar: "شحن سريع وتوصيل لجميع أنحاء المملكة", en: "Fast shipping & delivery across KSA" })}</p>
              <p>{t({ ar: "منتج أصلي مع ضمان الجودة", en: "Genuine product with quality warranty" })}</p>
              <p>{t({ ar: "إمكانية الاستلام من فرعنا - جدة", en: "Store pickup available - Jeddah" })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-foreground">
            {t({ ar: "منتجات ذات صلة", en: "Related Products" })}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
