"use client"

import { use } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductDetail } from "@/components/product-detail"
import { PRODUCTS } from "@/lib/store-data"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const product = PRODUCTS.find((p) => p.id === id)

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        {product ? (
          <ProductDetail product={product} />
        ) : (
          <div className="flex min-h-[50vh] items-center justify-center">
            <p className="text-lg text-muted-foreground">Product not found</p>
          </div>
        )}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
