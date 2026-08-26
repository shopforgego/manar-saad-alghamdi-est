"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedProducts } from "@/components/featured-products"
import { FeaturesSection } from "@/components/features-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <FeaturesSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
