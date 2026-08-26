"use client"

import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductsCatalog } from "@/components/products-catalog"

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" /></div>}>
          <ProductsCatalog />
        </Suspense>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
