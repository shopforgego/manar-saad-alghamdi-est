"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactContent } from "@/components/contact-content"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <ContactContent />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
