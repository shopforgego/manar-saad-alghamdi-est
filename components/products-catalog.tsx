"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { PRODUCTS, CATEGORIES } from "@/lib/store-data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ProductsCatalog() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const { t } = useLanguage()
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState<"all" | "low" | "mid" | "high">("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory
      const matchesSearch =
        search === "" ||
        product.name.ar.toLowerCase().includes(search.toLowerCase()) ||
        product.name.en.toLowerCase().includes(search.toLowerCase())
      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "low" && product.price < 500) ||
        (priceRange === "mid" && product.price >= 500 && product.price < 1500) ||
        (priceRange === "high" && product.price >= 1500)
      return matchesCategory && matchesSearch && matchesPrice
    })
  }, [activeCategory, search, priceRange])

  const priceFilters = [
    { id: "all" as const, label: { ar: "الكل", en: "All" } },
    { id: "low" as const, label: { ar: "أقل من 500 ر.س", en: "Under 500 SAR" } },
    { id: "mid" as const, label: { ar: "500 - 1500 ر.س", en: "500 - 1500 SAR" } },
    { id: "high" as const, label: { ar: "أكثر من 1500 ر.س", en: "Over 1500 SAR" } },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t({ ar: "جميع المنتجات", en: "All Products" })}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t({
            ar: `عرض ${filteredProducts.length} منتج`,
            en: `Showing ${filteredProducts.length} products`,
          })}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t({ ar: "ابحث عن منتج...", en: "Search products..." })}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ps-10"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button
          variant="outline"
          className="gap-2 sm:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          {t({ ar: "الفلاتر", en: "Filters" })}
        </Button>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar Filters */}
        <aside className={`shrink-0 lg:w-56 ${showFilters ? "block" : "hidden lg:block"}`}>
          {/* Categories */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-bold text-foreground">
              {t({ ar: "الأقسام", en: "Categories" })}
            </h3>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-lg px-3 py-2 text-start text-sm transition-colors ${
                  activeCategory === "all"
                    ? "bg-accent/10 font-semibold text-accent"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {t({ ar: "جميع الأقسام", en: "All Categories" })}
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-lg px-3 py-2 text-start text-sm transition-colors ${
                    activeCategory === cat.id
                      ? "bg-accent/10 font-semibold text-accent"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {t(cat.name)}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">
              {t({ ar: "السعر", en: "Price" })}
            </h3>
            <div className="flex flex-col gap-1">
              {priceFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setPriceRange(filter.id)}
                  className={`rounded-lg px-3 py-2 text-start text-sm transition-colors ${
                    priceRange === filter.id
                      ? "bg-accent/10 font-semibold text-accent"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {t(filter.label)}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <Search className="h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-lg font-semibold text-foreground">
                {t({ ar: "لا توجد نتائج", en: "No results found" })}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t({ ar: "جرب تغيير كلمة البحث أو الفلاتر", en: "Try changing your search or filters" })}
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearch("")
                  setActiveCategory("all")
                  setPriceRange("all")
                }}
              >
                {t({ ar: "إعادة تعيين", en: "Reset Filters" })}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
