"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle2, XCircle, ShoppingBag, ArrowRight, CreditCard } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"

function StatusContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { clearCart } = useCart()
  const { t } = useLanguage()
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading")

  const paymentStatus = searchParams.get("status")
  const checkoutId = searchParams.get("checkoutId")
  const orderRef = searchParams.get("orderRef")
  const subtotal = searchParams.get("subtotal")
  const total = searchParams.get("total")
  const paymentMethod = searchParams.get("paymentMethod")
  const cardType = searchParams.get("cardType")
  const cardLast4 = searchParams.get("cardLast4")

  useEffect(() => {
    if (paymentStatus === "success") {
      setStatus("success")
      clearCart()
    } else if (paymentStatus === "failed") {
      setStatus("failed")
    } else {
      setStatus("failed")
    }
  }, [paymentStatus, clearCart])

  // Helper to format payment method display
  const formatPaymentMethod = () => {
    if (!paymentMethod && !cardType) return null
    const parts: string[] = []
    if (paymentMethod) parts.push(paymentMethod)
    if (cardType) parts.push(cardType)
    if (cardLast4) parts.push(`**** ${cardLast4}`)
    return parts.join(" • ")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-3xl p-8 shadow-2xl text-center backdrop-blur-md relative overflow-hidden">
        {/* Success / Failure Glowing background effects */}
        <div className={`absolute -top-12 -left-12 w-32 h-32 rounded-full blur-3xl opacity-20 ${
          status === "success" ? "bg-green-500" : "bg-red-500"
        }`} />
        
        {status === "loading" ? (
          <div className="flex flex-col items-center py-8">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold border-t-transparent mb-4"></div>
            <p className="text-muted-foreground">{t({ ar: "جاري التحقق من عملية الدفع...", en: "Verifying payment..." })}</p>
          </div>
        ) : status === "success" ? (
          <div className="flex flex-col items-center py-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 mb-6">
              <CheckCircle2 className="h-12 w-12 text-green-500 animate-pulse" />
            </div>
            
            <h1 className="text-3xl font-black text-foreground mb-3">
              {t({ ar: "تم الدفع بنجاح!", en: "Payment Successful!" })}
            </h1>
            
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              {t({ 
                ar: `شكراً لك لتسوقك من ${STORE_INFO.name.ar}. تم تسجيل طلبك وتأكيد عملية الدفع بنجاح.`,
                en: `Thank you for shopping at ${STORE_INFO.name.en}. Your payment has been received and order registered.`
              })}
            </p>

            <div className="w-full bg-secondary/50 rounded-2xl p-4 mb-8 text-right text-xs text-muted-foreground space-y-2 border border-border">
              {checkoutId && (
                <div className="flex justify-between">
                  <span>{t({ ar: "معرّف العملية:", en: "Transaction ID:" })}</span>
                  <span className="font-mono text-foreground font-semibold">{checkoutId}</span>
                </div>
              )}
              {orderRef && (
                <div className="flex justify-between">
                  <span>{t({ ar: "رقم الطلب:", en: "Order Ref:" })}</span>
                  <span className="font-mono text-foreground font-semibold">{orderRef}</span>
                </div>
              )}
              {formatPaymentMethod() && (
                <div className="flex justify-between items-center">
                  <span>{t({ ar: "طريقة الدفع:", en: "Payment Method:" })}</span>
                  <span className="flex items-center gap-1.5 text-foreground font-semibold">
                    <CreditCard className="h-3.5 w-3.5" />
                    {formatPaymentMethod()}
                  </span>
                </div>
              )}
              {subtotal && (
                <div className="flex justify-between border-t border-border/50 pt-2">
                  <span>{t({ ar: "المجموع الفرعي:", en: "Subtotal:" })}</span>
                  <span className="text-foreground font-semibold">{subtotal} {t({ ar: "ر.س", en: "SAR" })}</span>
                </div>
              )}
              {total && (
                <div className="flex justify-between font-bold text-sm text-foreground pt-1">
                  <span>{t({ ar: "المجموع الكلي:", en: "Total:" })}</span>
                  <span className="text-gold font-black">{total} {t({ ar: "ر.س", en: "SAR" })}</span>
                </div>
              )}
            </div>

            <Button asChild className="w-full bg-gold hover:bg-gold-light text-foreground font-bold py-6 rounded-2xl shadow-lg shadow-gold/20">
              <Link href="/">
                <ShoppingBag className="h-5 w-5 ml-2" />
                {t({ ar: "العودة للرئيسية", en: "Return to Home" })}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center py-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 mb-6">
              <XCircle className="h-12 w-12 text-destructive" />
            </div>
            
            <h1 className="text-3xl font-black text-foreground mb-3">
              {t({ ar: "فشلت عملية الدفع", en: "Payment Failed" })}
            </h1>
            
            <p className="text-muted-foreground text-sm max-w-sm mb-8 leading-relaxed">
              {t({ 
                ar: "للأسف لم نتمكن من معالجة عملية الدفع بنجاح. يرجى التأكد من بيانات بطاقتك أو المحاولة مرة أخرى.",
                en: "Unfortunately, the transaction could not be processed. Please check your card status and try again."
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button asChild variant="outline" className="flex-1 py-6 rounded-2xl border-border">
                <Link href="/checkout">
                  <ArrowRight className="h-4 w-4 ml-2" />
                  {t({ ar: "إعادة المحاولة", en: "Try Again" })}
                </Link>
              </Button>
              <Button asChild className="flex-1 bg-gold hover:bg-gold-light text-foreground font-bold py-6 rounded-2xl">
                <Link href="/">
                  {t({ ar: "العودة للرئيسية", en: "Home" })}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CheckoutStatusPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold border-t-transparent"></div>
      </div>
    }>
      <StatusContent />
    </Suspense>
  )
}
