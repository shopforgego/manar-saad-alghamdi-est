"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingBag, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { STORE_INFO, type Product } from "@/lib/store-data"
import { Badge } from "@/components/ui/badge"

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter()
  const { t } = useLanguage()
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const handleBuyNow = () => {
    addToCart(product)
    router.push("/checkout")
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
      {/* Badge */}
      {product.badge && (
        <Badge className="absolute start-3 top-3 z-10 bg-accent text-accent-foreground font-bold shadow-md hover:bg-accent/90">
          {t(product.badge)}
        </Badge>
      )}

      {/* Image */}
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-square bg-secondary/30 overflow-hidden">
          <Image
            src={product.image}
            alt={t(product.name)}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-108"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <Link href={`/products/${product.id}`}>
            <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-accent line-clamp-1">
              {t(product.name)}
            </h3>
          </Link>
          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
            {t(product.description)}
          </p>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-base font-black text-amber-600 dark:text-amber-400">
            {product.price} {t({ ar: "ر.س", en: "SAR" })}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {product.oldPrice} {t({ ar: "ر.س", en: "SAR" })}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-3 flex gap-2">
          <button
            onClick={handleBuyNow}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent px-3 py-2.5 text-xs font-bold text-accent-foreground shadow-sm transition-all hover:bg-accent/90 cursor-pointer active:scale-95"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            {t({ ar: "شراء الآن", en: "Buy Now" })}
          </button>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            aria-label={t({ ar: "أضف للسلة", en: "Add to cart" })}
            className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${added
                ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "border-border bg-secondary/50 text-muted-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
              }`}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                {t({ ar: "أضيف", en: "Added" })}
              </>
            ) : (
              <>
                <ShoppingCart className="h-3.5 w-3.5" />
                {t({ ar: "السلة", en: "Cart" })}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
