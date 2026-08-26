"use client"

import { MessageCircle } from "lucide-react"
import { STORE_INFO } from "@/lib/store-data"
import { useLanguage } from "@/lib/language-context"

export function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href={`https://wa.me/${STORE_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t({ ar: "تواصل عبر واتساب", en: "Chat on WhatsApp" })}
      className="fixed bottom-6 start-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">
        {t({ ar: "واتساب", en: "WhatsApp" })}
      </span>
    </a>
  )
}
