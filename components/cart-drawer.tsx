"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { X, Minus, Plus, ShoppingCart, Trash2, CreditCard } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"
import { Button } from "@/components/ui/button"

export function CartDrawer() {
    const router = useRouter()
    const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart()
    const { t, lang } = useLanguage()

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                onClick={closeCart}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${lang === "ar" ? "left-0" : "right-0"
                    }`}
                role="dialog"
                aria-label={t({ ar: "سلة المشتريات", en: "Shopping Cart" })}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div className="flex items-center gap-3">
                        <ShoppingCart className="h-5 w-5 text-accent" />
                        <h2 className="text-lg font-bold text-foreground">
                            {t({ ar: "سلة المشتريات", en: "Shopping Cart" })}
                        </h2>
                        {totalItems > 0 && (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                                {totalItems}
                            </span>
                        )}
                    </div>
                    <Button variant="ghost" size="icon" onClick={closeCart} aria-label="Close cart">
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                    {items.length === 0 ? (
                        /* Empty state */
                        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-12 text-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                                <ShoppingCart className="h-10 w-10 text-accent/60" />
                            </div>
                            <p className="text-lg font-semibold text-foreground">
                                {t({ ar: "سلتك فارغة", en: "Your cart is empty" })}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {t({ ar: "أضف منتجات لتبدأ التسوق", en: "Add products to start shopping" })}
                            </p>
                            <Button
                                onClick={closeCart}
                            >
                                {t({ ar: "تصفح المنتجات", en: "Browse Products" })}
                            </Button>
                        </div>
                    ) : (
                        <>
                            {/* Items list */}
                            <ul className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
                                {items.map((item) => (
                                    <li
                                        key={item.product.id}
                                        className="group flex gap-4 rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-md"
                                    >
                                        {/* Product image */}
                                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-secondary/50">
                                            <Image
                                                src={item.product.image}
                                                alt={t(item.product.name)}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex flex-1 flex-col justify-between overflow-hidden">
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="line-clamp-2 text-sm font-semibold text-foreground leading-snug">
                                                    {t(item.product.name)}
                                                </p>
                                                <button
                                                    onClick={() => removeFromCart(item.product.id)}
                                                    className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                {/* Quantity controls */}
                                                <div className="flex items-center gap-1 rounded-lg border border-border">
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                        className="flex h-7 w-7 items-center justify-center rounded-s-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                                                        aria-label="Decrease quantity"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold text-foreground">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                        className="flex h-7 w-7 items-center justify-center rounded-e-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                                                        aria-label="Increase quantity"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>

                                                {/* Item total */}
                                                <span className="text-sm font-bold text-gold">
                                                    {(item.product.price * item.quantity).toFixed(2)}{" "}
                                                    {t({ ar: "ر.س", en: "SAR" })}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Footer */}
                            <div className="border-t border-border bg-card px-5 py-5 flex flex-col gap-4">
                                {/* Total */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {t({ ar: "المجموع الكلي", en: "Total" })}
                                    </span>
                                    <span className="text-2xl font-black text-gold">
                                        {totalPrice.toFixed(2)} {t({ ar: "ر.س", en: "SAR" })}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <Button
                                    onClick={() => {
                                        closeCart()
                                        router.push("/checkout")
                                    }}
                                    className="flex items-center justify-center gap-2 rounded-xl px-4 py-6 text-sm font-bold transition-opacity active:scale-[0.98] cursor-pointer"
                                >
                                    <CreditCard className="h-5 w-5" />
                                    {t({ ar: "إتمام الدفع الإلكتروني", en: "Proceed to Checkout" })}
                                </Button>


                                {/* Clear cart */}
                                <button
                                    onClick={clearCart}
                                    className="text-center text-xs text-muted-foreground transition-colors hover:text-destructive cursor-pointer"
                                >
                                    {t({ ar: "إفراغ السلة", en: "Clear cart" })}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
