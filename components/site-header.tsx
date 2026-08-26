"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingBag, Moon, Sun, Globe, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { STORE_INFO } from "@/lib/store-data"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { ar: "الرئيسية", en: "Home", href: "/" },
  { ar: "المنتجات", en: "Products", href: "/products" },
  { ar: "تواصل معنا", en: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()
  const { totalItems, openCart } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs font-medium">
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-1.5"
          >
            <Phone className="h-3 w-3" />
            <span dir="ltr">{STORE_INFO.phone}</span>
          </a>
          <span className="hidden sm:block">
            {t(STORE_INFO.direct_payment_discount)}
          </span>
          <span>
            {t({ ar: "شحن سريع لجميع أنحاء المملكة", en: "Fast shipping across KSA" })}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={t(STORE_INFO.name)}
            width={44}
            height={44}
            className="rounded-xl shadow-sm border border-border/50"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-foreground">
              {t(STORE_INFO.name)}
            </p>
            <p className="text-xs text-muted-foreground">
              {t(STORE_INFO.tagline)}
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {t(link)}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLang}
            className="text-muted-foreground hover:text-accent"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-accent"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={openCart}
            className="relative text-muted-foreground hover:text-accent"
            aria-label={t({ ar: "السلة", en: "Cart" })}
          >
            <ShoppingBag className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute -end-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {t(link)}
            </Link>
          ))}
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t({ ar: "تواصل واتساب", en: "Chat on WhatsApp" })}
          </a>
        </div>
      )}
    </header>
  )
}
