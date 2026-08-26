"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"
import { FileText, Shield, CreditCard, Truck, Scale } from "lucide-react"

export default function TermsPage() {
  const { t, lang } = useLanguage()

  const termsData = [
    {
      icon: FileText,
      title: {
        ar: "1. تمهيد ومقدمة",
        en: "1. Introduction",
      },
      content: {
        ar: `مرحباً بكم في متجر ${t(STORE_INFO.name)}. تحدد هذه الشروط والأحكام القواعد واللوائح الخاصة باستخدام موقعنا الإلكتروني وجميع المعاملات التي تتم من خلاله. باستخدامك للموقع، فإنك توافق على هذه الشروط بالكامل. إذا كنت لا توافق على أي جزء منها، يرجى التوقف عن استخدام المتجر.`,
        en: `Welcome to ${t(STORE_INFO.name)}. These Terms and Conditions outline the rules and regulations for using our website and all transactions processed through it. By accessing this website, you accept these terms in full. If you disagree with any part of these terms, please do not use our store.`,
      },
    },
    {
      icon: Scale,
      title: {
        ar: "2. التعريفات والاتفاقية",
        en: "2. Definitions & Agreement",
      },
      content: {
        ar: `- "المؤسسة" أو "نحن" تشير إلى ${t(STORE_INFO.name)}، المسجلة في المملكة العربية السعودية.\n- "العميل" أو "المستخدم" أو "أنت" يشير إلى الشخص الذي يزور الموقع أو يقوم بالطلب منه.\n- "المتجر" يشير إلى المنصة الإلكترونية التابعة للمؤسسة.`,
        en: `- "Establishment" or "We" refers to ${t(STORE_INFO.name)}, registered in the Kingdom of Saudi Arabia.\n- "Customer" or "User" or "You" refers to the person accessing or purchasing from the website.\n- "Store" refers to the online platform of the Establishment.`,
      },
    },
    {
      icon: Shield,
      title: {
        ar: "3. شروط الاستخدام وتسجيل الحساب",
        en: "3. Terms of Use & Account Registration",
      },
      content: {
        ar: "عند إنشاء حساب أو إتمام طلب كزائر، فإنك تلتزم بتقديم معلومات صحيحة ودقيقة ومحدثة (الاسم، البريد الإلكتروني، رقم الجوال، وعنوان التوصيل). يتحمل العميل المسؤولية الكاملة عن الحفاظ على سرية معلومات حسابه وكلمة المرور، وعن كافة الأنشطة التي تحدث تحت حسابه.",
        en: "When creating an account or placing an order as a guest, you agree to provide true, accurate, and current information (Name, Email, Mobile, and Delivery Address). The customer is solely responsible for maintaining the confidentiality of their account and password, and for all activities that occur under their account.",
      },
    },
    {
      icon: CreditCard,
      title: {
        ar: "4. المنتجات والأسعار والدفع",
        en: "4. Products, Pricing & Payments",
      },
      content: {
        ar: `نحن نسعى جاهدين لضمان دقة معلومات المنتجات والأسعار المعروضة على المتجر. تخضع جميع الأسعار للتحديث دون إشعار مسبق وهي معلنة بالريال السعودي. نقبل الدفع عبر وسائل الدفع الإلكترونية الآمنة المتاحة (مدى، فيزا، ماستر كارد، أبل باي). يتم معالجة جميع المدفوعات بشكل آمن ومشفر بالكامل لحماية بياناتك المالية.`,
        en: `We strive to ensure the accuracy of all product descriptions and pricing on the store. All prices are subject to change without prior notice and are listed in Saudi Riyals (SAR). We accept payments via secure electronic payment methods (mada, Visa, Mastercard, Apple Pay). All payments are processed securely and fully encrypted to protect your financial data.`,
      },
    },
    {
      icon: Truck,
      title: {
        ar: "5. الشحن والتوصيل والمسؤولية",
        en: "5. Shipping, Delivery & Liability",
      },
      content: {
        ar: "نوفر خدمة الشحن لجميع مناطق المملكة العربية السعودية. يتم تقدير أوقات التوصيل بناءً على موقع العميل وشركة الشحن المحددة. لا تتحمل المؤسسة مسؤولية التأخير الخارج عن إرادتها أو بسبب تزويدنا بمعلومات توصيل خاطئة أو غير كاملة من قبل العميل.",
        en: "We provide shipping services across all regions of the Kingdom of Saudi Arabia. Delivery times are estimated based on the customer's location and the selected shipping carrier. The Establishment is not responsible for shipping delays beyond its control or caused by incorrect or incomplete shipping information provided by the customer.",
      },
    },
    {
      icon: Scale,
      title: {
        ar: "6. القانون المطبق والنزاعات",
        en: "6. Governing Law & Dispute Resolution",
      },
      content: {
        ar: "تخضع هذه الشروط والأحكام وتفسر بموجب الأنظمة والقوانين السارية في المملكة العربية السعودية. ويخضع أي نزاع قد ينشأ عن استخدام المتجر أو الشراء منه للاختصاص القضائي الحصري للجهات القضائية المختصة بالمملكة العربية السعودية.",
        en: "These Terms and Conditions shall be governed by and construed in accordance with the laws and regulations of the Kingdom of Saudi Arabia. Any dispute arising in connection with the use of the store or transactions completed through it shall be subject to the exclusive jurisdiction of the competent judicial authorities in KSA.",
      },
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background text-foreground py-10 px-4 md:py-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-black text-foreground md:text-5xl tracking-tight">
              {t({ ar: "الشروط والأحكام", en: "Terms and Conditions" })}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: `اتفاقية استخدام متجر ${t(STORE_INFO.name)} لتوفير بيئة تسوق آمنة وموثوقة لجميع عملائنا.`,
                en: `Usage agreement of ${t(STORE_INFO.name)} to ensure a secure and trusted shopping experience for all our customers.`,
              })}
            </p>
          </div>

          {/* Policy Cards Layout */}
          <div className="space-y-6">
            {termsData.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all hover:border-gold/30"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground md:text-xl">
                      {t(item.title)}
                    </h2>
                  </div>
                  <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {t(item.content)}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Last Update */}
          <div className="mt-8 text-center text-xs text-muted-foreground">
            <span>
              {t({
                ar: "آخر تحديث: أغسطس 2026",
                en: "Last Updated: August 2026",
              })}
            </span>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
