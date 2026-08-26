"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CreditCard, ShoppingBag, Send, Phone, User, Mail, MapPin, ChevronRight, Shield } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { STORE_INFO } from "@/lib/store-data"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, isInitialized } = useCart()
  const { t, lang } = useLanguage()

  // 1. Form States
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Jeddah",
    state: "Makkah Region",
    zip: "22343",
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  // 2. Validate shipping information
  const validateForm = () => {
    const tempErrors: Record<string, string> = {}
    if (!customer.name.trim()) tempErrors.name = lang === "ar" ? "الاسم مطلوب" : "Name is required"
    if (!customer.email.trim()) {
      tempErrors.email = lang === "ar" ? "البريد الإلكتروني مطلوب" : "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
      tempErrors.email = lang === "ar" ? "البريد الإلكتروني غير صالح" : "Invalid email"
    }
    if (!customer.phone.trim()) tempErrors.phone = lang === "ar" ? "رقم الجوال مطلوب" : "Phone number is required"
    if (!customer.address.trim()) tempErrors.address = lang === "ar" ? "العنوان مطلوب" : "Address is required"

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  // 3. Handle Form submit → Payzaty
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    setLoading(true)

    try {
      const response = await fetch("/api/checkout/payzaty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          totalPrice,
          customer,
        }),
      })

      const data = await response.json()
      
      if (response.ok && data.redirectUrl) {
        // Redirect the browser to the Payzaty Hosted Payment Page
        window.location.href = data.redirectUrl
      } else {
        alert(data.error || (lang === "ar" ? "خطأ في الاتصال ببوابة الدفع" : "Payment gateway connection error"))
        setLoading(false)
      }
    } catch (err) {
      console.error("Payzaty checkout submission error:", err)
      alert(lang === "ar" ? "حدث خطأ غير متوقع أثناء معالجة الدفع" : "An unexpected error occurred during payment processing")
      setLoading(false)
    }
  }

  // Redirect to home if cart is empty
  useEffect(() => {
    if (isInitialized && items.length === 0 && !loading) {
      router.push("/")
    }
  }, [isInitialized, items, router, loading])

  if (!isInitialized || (items.length === 0 && !loading)) return null

  return (
    <main className="min-h-screen bg-background text-foreground py-10 px-4 md:px-8" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => router.push("/")} className="hover:text-gold transition-colors">
            {t({ ar: "الرئيسية", en: "Home" })}
          </button>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-semibold">{t({ ar: "الدفع الإلكتروني", en: "Secure Checkout" })}</span>
        </div>

        <h1 className="text-3xl font-black text-foreground mb-8">
          {t({ ar: "إتمام طلبك", en: "Checkout Your Order" })}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Form & Payment (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Card 1: Customer Details */}
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
                  <User className="h-5 w-5 text-gold" />
                  {t({ ar: "معلومات الشحن والتوصيل", en: "Shipping & Delivery Info" })}
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      {t({ ar: "الاسم الكامل *", en: "Full Name *" })}
                    </label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        className={`w-full bg-secondary/50 border ${errors.name ? "border-destructive" : "border-border"} rounded-xl py-3 pr-10 pl-3 text-sm focus:outline-none focus:border-gold`}
                        placeholder={t({ ar: "عبدالله محمد", en: "John Doe" })}
                      />
                    </div>
                    {errors.name && <span className="text-xs text-destructive mt-1 block">{errors.name}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        {t({ ar: "البريد الإلكتروني *", en: "Email Address *" })}
                      </label>
                      <div className="relative">
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          required
                          value={customer.email}
                          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                          className={`w-full bg-secondary/50 border ${errors.email ? "border-destructive" : "border-border"} rounded-xl py-3 pr-10 pl-3 text-sm focus:outline-none focus:border-gold`}
                          placeholder="example@mail.com"
                        />
                      </div>
                      {errors.email && <span className="text-xs text-destructive mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        {t({ ar: "رقم الجوال *", en: "Mobile Phone *" })}
                      </label>
                      <div className="relative">
                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="tel"
                          required
                          value={customer.phone}
                          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                          className={`w-full bg-secondary/50 border ${errors.phone ? "border-destructive" : "border-border"} rounded-xl py-3 pr-10 pl-3 text-sm focus:outline-none focus:border-gold`}
                          placeholder="0509530554"
                        />
                      </div>
                      {errors.phone && <span className="text-xs text-destructive mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      {t({ ar: "العنوان بالتفصيل *", en: "Street Address *" })}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className={`w-full bg-secondary/50 border ${errors.address ? "border-destructive" : "border-border"} rounded-xl py-3 pr-10 pl-3 text-sm focus:outline-none focus:border-gold`}
                        placeholder={t({ ar: "جدة - حي مدائن الفهد - شارع محمد ابن صالح العثيمين", en: "Jeddah, Madain Al Fahd Dist., Muhammad Ibn Saleh Al Uthaymeen St." })}
                      />
                    </div>
                    {errors.address && <span className="text-xs text-destructive mt-1 block">{errors.address}</span>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        {t({ ar: "المدينة", en: "City" })}
                      </label>
                      <input
                        type="text"
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        className="w-full bg-secondary/50 border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        {t({ ar: "الرمز البريدي", en: "Postal Code" })}
                      </label>
                      <input
                        type="text"
                        value={customer.zip}
                        onChange={(e) => setCustomer({ ...customer, zip: e.target.value })}
                        className="w-full bg-secondary/50 border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Payment Method */}
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
                  <CreditCard className="h-5 w-5 text-gold" />
                  {t({ ar: "الدفع الآمن", en: "Secure Payment" })}
                </h2>

                {/* Supported Payment Methods Display */}
                <div className="mb-6 p-5 bg-secondary/30 rounded-2xl border border-border">
                  <p className="text-xs text-muted-foreground font-semibold text-center mb-4">
                    {t({ ar: "وسائل الدفع المدعومة", en: "Supported payment methods" })}
                  </p>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    {/* mada */}
                    <div className="bg-white rounded-xl px-3 py-2 border border-gray-200 shadow-sm flex items-center justify-center h-10 min-w-[60px]">
                      <svg viewBox="0 0 200 80" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.2 16.8h-8.3L34.6 53h8.3l7.3-36.2z" fill="#00A4E4"/>
                        <path d="M85.4 17.5c-1.6-.6-4.2-1.3-7.4-1.3-8.2 0-13.9 4.3-14 10.5-.1 4.6 4.1 7.1 7.2 8.6 3.2 1.6 4.3 2.6 4.3 4 0 2.2-2.6 3.1-4.9 3.1-3.3 0-5-0.5-7.7-1.6l-1.1-.5-1.2 7.1c1.9.9 5.4 1.6 9.1 1.7 8.7 0 14.3-4.3 14.4-10.9.1-3.6-2.2-6.4-6.9-8.6-2.9-1.5-4.7-2.5-4.7-4 0-1.3 1.5-2.8 4.7-2.8 2.7 0 4.6.6 6.1 1.2l.7.4 1.4-6.9z" fill="#00A4E4"/>
                        <path d="M97.7 38.9l3.3-8.9.8-2.2 1.5 8.1.9 3H97.7zm10.2-22.1h-6.4c-2 0-3.5.6-4.3 2.6l-12.3 30.5h8.7l1.7-4.8h10.6l1 4.8h7.7l-6.7-33.1z" fill="#00A4E4"/>
                        <path d="M30.8 16.8l-8.1 24.7-0.9-4.4c-1.5-5.1-6.2-10.7-11.5-13.5l7.4 29.3h8.8l13-36.1h-8.7z" fill="#00A4E4"/>
                        <path d="M16.3 16.8H3.1l-.1.7c10.4 2.6 17.3 9 20.1 16.7l-2.9-14.7c-0.5-2-2-2.6-3.9-2.7z" fill="#6CC04A"/>
                        <text x="115" y="55" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="32" fill="#5C2D91">mada</text>
                      </svg>
                    </div>
                    {/* Visa */}
                    <div className="bg-white rounded-xl px-3 py-2 border border-gray-200 shadow-sm flex items-center justify-center h-10 min-w-[60px]">
                      <svg viewBox="0 0 780 500" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                        <path d="M293.2 348.7l33.4-195.8h53.4L346.6 348.7H293.2z" fill="#1A1F71"/>
                        <path d="M539.3 157.5c-10.5-4-27-8.3-47.5-8.3-52.4 0-89.4 26.3-89.6 64.1-0.3 27.9 26.3 43.4 46.4 52.7 20.6 9.5 27.5 15.6 27.4 24.1-0.1 13-16.4 18.9-31.6 18.9-21.2 0-32.4-2.9-49.8-10.2l-6.8-3.1-7.4 43.2c12.4 5.4 35.2 10 58.9 10.3 55.7 0 91.9-26 92.3-66.4 0.2-22.1-14-39-44.6-52.8-18.6-9-30-15-29.9-24.2 0-8.1 9.6-16.8 30.4-16.8 17.4-0.3 30 3.5 39.8 7.4l4.8 2.2 7.2-41.1z" fill="#1A1F71"/>
                        <path d="M651.5 152.9h-41c-12.7 0-22.2 3.5-27.8 16.1l-78.7 178h55.7s9.1-23.9 11.2-29.2c6.1 0 60.2 0.1 67.9 0.1 1.6 6.8 6.5 29.1 6.5 29.1h49.2l-42.9-194.1zM583 281.6c4.4-11.2 21.1-54.3 21.1-54.3-0.3 0.5 4.4-11.2 7-18.2l3.6 16.4s10.1 46.3 12.3 56.1h-44z" fill="#1A1F71"/>
                        <path d="M247.8 152.9L196 289.2l-5.5-26.9c-9.6-30.8-39.4-64.2-72.7-80.9l47.5 167.1h56.1L304 152.9h-56.2z" fill="#1A1F71"/>
                        <path d="M131.9 152.9H46.3l-0.7 4.1c66.5 16.1 110.5 54.9 128.7 101.6L156.4 169c-3.2-12.1-12.5-15.7-24.5-16.1z" fill="#F9A533"/>
                      </svg>
                    </div>
                    {/* Mastercard */}
                    <div className="bg-white rounded-xl px-3 py-2 border border-gray-200 shadow-sm flex items-center justify-center h-10 min-w-[60px]">
                      <svg viewBox="0 0 152 100" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="48" cy="50" r="36" fill="#EB001B"/>
                        <circle cx="104" cy="50" r="36" fill="#F79E1B"/>
                        <path d="M76 22.2c10.7 8.2 17.6 21.1 17.6 35.5S86.7 89.1 76 97.3c-10.7-8.2-17.6-21.1-17.6-35.5S65.3 30.4 76 22.2z" fill="#FF5F00"/>
                      </svg>
                    </div>
                    {/* Apple Pay */}
                    <div className="bg-white rounded-xl px-3 py-2 border border-gray-200 shadow-sm flex items-center justify-center h-10 min-w-[60px]">
                      <svg viewBox="0 0 165 40" className="h-4 w-auto" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8 7.8c1.3-1.6 2.1-3.8 1.9-6-1.9.1-4.2 1.3-5.6 2.9-1.2 1.4-2.3 3.7-2 5.9 2.2.2 4.3-1.1 5.7-2.8zm1.9 3c-3.1-.2-5.8 1.8-7.3 1.8s-3.8-1.7-6.3-1.6c-3.2.1-6.2 1.9-7.8 4.8-3.4 5.8-.9 14.4 2.4 19.1 1.6 2.4 3.5 5 6.1 4.9 2.4-.1 3.3-1.6 6.2-1.6s3.7 1.6 6.3 1.5c2.6-.1 4.3-2.4 5.9-4.8 1.8-2.7 2.6-5.3 2.6-5.4-.1 0-5-1.9-5-7.6-.1-4.8 3.9-7 4.1-7.2-2.2-3.3-5.7-3.7-7-3.8l-.2-.1z" fill="#000"/>
                        <path d="M57.7 5.3c7.5 0 12.7 5.2 12.7 12.7 0 7.6-5.3 12.8-12.9 12.8h-8.3v13.3h-6V5.3h14.5zm-8.5 20.4h6.9c5.2 0 8.2-2.8 8.2-7.6 0-4.8-3-7.6-8.2-7.6h-6.9v15.2zm23.4 7c0-5 3.8-8 10.5-8.4l7.7-.4v-2.2c0-3.2-2.1-5-5.7-5-3.4 0-5.5 1.6-6 4.1h-5.5c.3-5.2 4.6-9 11.7-9 6.9 0 11.3 3.6 11.3 9.3v19.4h-5.6v-4.6h-.1c-1.6 3.1-5.2 5.1-9 5.1-5.6 0-9.3-3.5-9.3-8.3zm18.2-2.5v-2.3l-6.9.4c-3.5.2-5.4 1.7-5.4 4.1 0 2.4 2.1 4 5.3 4 4.2 0 7-2.8 7-6.2zm13.3 15.4V41c.4.1 1.4.1 1.8.1 2.6 0 4-1.1 4.9-3.9l.5-1.6-10.1-27.8h6.3l7 22h.1l7-22h6.1l-10.5 29.4c-2.4 6.7-5.1 8.9-10.9 8.9-.4 0-1.8-.1-2.2-.2z" fill="#000"/>
                      </svg>
                    </div>
                    {/* Google Pay */}
                    <div className="bg-white rounded-xl px-3 py-2 border border-gray-200 shadow-sm flex items-center justify-center h-10 min-w-[60px]">
                      <svg viewBox="0 0 150 40" className="h-4 w-auto" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.6 19.3v11.5h-3.6V1.5h9.5c2.4 0 4.4.8 6.1 2.4 1.7 1.6 2.6 3.5 2.6 5.8 0 2.3-.9 4.3-2.6 5.8-1.7 1.6-3.7 2.3-6.1 2.3h-5.9v1.5zm0-14.2v11.1h6c1.4 0 2.6-.5 3.6-1.5 1-1 1.5-2.2 1.5-3.6 0-1.4-.5-2.6-1.5-3.6-1-1-2.2-1.5-3.6-1.5h-6v.1z" fill="#3C4043"/>
                        <path d="M87.4 10.2c2.6 0 4.7.7 6.3 2.1 1.5 1.4 2.3 3.3 2.3 5.7v11.6h-3.4v-2.6h-.2c-1.5 2.2-3.5 3.2-6 3.2-2.2 0-4-.6-5.4-1.9-1.4-1.3-2.2-2.9-2.2-4.8 0-2 .8-3.6 2.3-4.8 1.5-1.2 3.5-1.8 6.1-1.8 2.2 0 3.9.4 5.3 1.2v-.9c0-1.3-.5-2.5-1.5-3.4-1-.9-2.2-1.4-3.6-1.4-2 0-3.6.9-4.8 2.6l-3.1-2c1.7-2.5 4.2-3.8 7.4-3.8v.1zm-4.6 15c0 1 .4 1.8 1.3 2.5.8.7 1.8 1 2.9 1 1.6 0 3-.6 4.2-1.8 1.2-1.2 1.8-2.6 1.8-4.2-1.1-.9-2.7-1.4-4.8-1.4-1.5 0-2.8.4-3.8 1.1-1.1.7-1.6 1.7-1.6 2.8z" fill="#3C4043"/>
                        <path d="M112.2 10.8l-11.9 27.4h-3.7l4.4-9.7-7.8-17.7h3.9l5.6 13.5h.1l5.5-13.5h3.9z" fill="#3C4043"/>
                        <path d="M44.3 18.6c0-1.2-.1-2.3-.3-3.4H22.7v6.4h12.1c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.6-9.5 6.6-15.2h.2z" fill="#4285F4"/>
                        <path d="M22.7 39.1c6 0 11-2 14.7-5.4l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.1H3v5.7c3.6 7.2 11 12.2 19.7 12.2z" fill="#34A853"/>
                        <path d="M10.3 21.2c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1V7.3H3c-1.5 2.9-2.3 6.2-2.3 9.7s.8 6.8 2.3 9.7l7.3-5.5z" fill="#FBBC04"/>
                        <path d="M22.7 4c3.3 0 6.2 1.1 8.5 3.3l6.4-6.4C33.7.3 28.7-1.5 22.7-1.5 14 -1.5 6.6 3.5 3 10.7l7.3 5.7C12 11 16.9 4 22.7 4z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold hover:bg-gold-light text-foreground font-bold py-6 rounded-2xl shadow-lg shadow-gold/20"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground border-t-transparent"></span>
                      {t({ ar: "جاري الانتقال لبوابة الدفع...", en: "Redirecting to payment gateway..." })}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      {t({ ar: "ادفع الآن", en: "Pay Now" })}
                      <span className="font-black mx-1">{totalPrice.toFixed(2)} {t({ ar: "ر.س", en: "SAR" })}</span>
                    </span>
                  )}
                </Button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5" />
                  <span>{t({ ar: "مدفوعاتك محمية بتقنية التشفير من بيزاتي", en: "Your payments are secured by Payzaty encryption" })}</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary (5 columns) */}
          <div className="lg:col-span-5">
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm sticky top-6 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-3 border-b border-border pb-4">
                <ShoppingBag className="h-5 w-5 text-gold" />
                {t({ ar: "ملخص طلبك", en: "Order Summary" })}
              </h2>

              {/* Items List */}
              <ul className="divide-y divide-border overflow-y-auto max-h-[300px] pr-2 space-y-4">
                {items.map((item) => (
                  <li key={item.product.id} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-secondary/50 border border-border">
                      <Image
                        src={item.product.image}
                        alt={t(item.product.name)}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between overflow-hidden">
                      <div>
                        <h3 className="text-xs font-semibold text-foreground line-clamp-1 leading-snug">
                          {t(item.product.name)}
                        </h3>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {t({ ar: "الكمية:", en: "Qty:" })} {item.quantity}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">
                          {item.product.price} {t({ ar: "ر.س", en: "SAR" })}
                        </span>
                        <span className="text-sm font-bold text-gold">
                          {(item.product.price * item.quantity).toFixed(2)} {t({ ar: "ر.س", en: "SAR" })}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Totals Section */}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{t({ ar: "المجموع الفرعي", en: "Subtotal" })}</span>
                  <span>{totalPrice.toFixed(2)} {t({ ar: "ر.س", en: "SAR" })}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{t({ ar: "شحن وتوصيل", en: "Shipping" })}</span>
                  <span className="text-green-500 font-semibold">{t({ ar: "مجاني", en: "Free" })}</span>
                </div>

                {STORE_INFO.direct_payment_discount && (
                  <div className="flex flex-col bg-gold/10 text-gold rounded-xl p-3 border border-gold/20 text-xs gap-1">
                    <span className="font-bold">{t({ ar: "خصم الدفع المباشر (5%)", en: "Direct Payment Discount (5%)" })}</span>
                    <p className="opacity-90">{t(STORE_INFO.direct_payment_discount)}</p>
                  </div>
                )}

                <div className="flex justify-between text-lg font-black text-foreground border-t border-border pt-4">
                  <span>{t({ ar: "المجموع الكلي", en: "Total Amount" })}</span>
                  <div className="flex flex-col items-end">
                    <span className="text-gold text-xl">
                      {totalPrice.toFixed(2)} {t({ ar: "ر.س", en: "SAR" })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
