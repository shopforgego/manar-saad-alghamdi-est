"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"
import { Shield, Eye, Lock, RotateCcw, HelpCircle, DollarSign } from "lucide-react"

export default function PrivacyRefundPage() {
  const { t, lang } = useLanguage()

  const privacySections = [
    {
      icon: Eye,
      title: {
        ar: "1. جمع المعلومات واستخدامها",
        en: "1. Information Collection & Usage",
      },
      content: {
        ar: "نقوم بجمع المعلومات اللازمة لإتمام طلباتك وتقديم خدمة متميزة، ويشمل ذلك: الاسم، البريد الإلكتروني، رقم الجوال، وعنوان الشحن. تُستخدم هذه البيانات حصراً لمعالجة طلباتك وتوصيلها، وتزويدك بآخر تحديثات طلبك، وتقديم الدعم الفني اللازم لك.",
        en: "We collect information necessary to complete your orders and provide an excellent shopping experience, including: your name, email address, mobile number, and shipping address. This data is used exclusively to process and deliver your orders, send status updates, and provide support.",
      },
    },
    {
      icon: Lock,
      title: {
        ar: "2. أمان وحماية البيانات والمدفوعات",
        en: "2. Data Security & Payment Protection",
      },
      content: {
        ar: `نحن نولي أمان بياناتك الشخصية والمالية أهمية قصوى. يتم تشفير جميع المعاملات المالية بالكامل من خلال بروتوكولات الأمان العالمية المتقدمة عبر بوابة الدفع الآمنة (بيزاتي). لا نقوم بتخزين بيانات بطاقتك الائتمانية أو تفاصيل الدفع الخاصة بك على خوادمنا.`,
        en: `We take the security of your personal and financial data very seriously. All transactions are fully encrypted using advanced security protocols via the secure payment gateway (Payzaty). We do not store your credit card information or payment details on our servers.`,
      },
    },
    {
      icon: Shield,
      title: {
        ar: "3. مشاركة المعلومات مع أطراف ثالثة",
        en: "3. Sharing Information with Third Parties",
      },
      content: {
        ar: "نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أي جهات خارجية لأغراض تسويقية. يتم مشاركة البيانات فقط مع شركات الشحن والتوصيل المعتمدة وبوابة الدفع بهدف إتمام طلبك وتسليمه بنجاح.",
        en: "We do not sell, rent, or share your personal information with third parties for marketing purposes. Your details are shared only with authorized shipping companies and the payment gateway to complete and deliver your order successfully.",
      },
    },
  ]

  const refundSections = [
    {
      icon: RotateCcw,
      title: {
        ar: "1. شروط الاستبدال والاسترجاع",
        en: "1. Exchange & Return Policy",
      },
      content: {
        ar: "- يحق للعميل طلب الاسترجاع أو الاستبدال خلال 7 أيام من تاريخ استلام المنتج.\n- يجب أن يكون المنتج في حالته الأصلية، غير مستخدم، وبداخل تغليفه الأصلي المغلق مع كامل ملحقاته ودليل الاستخدام.\n- لا يمكن استبدال أو استرجاع المنتجات التالفة بسبب سوء الاستخدام من قبل العميل.",
        en: "- Customers have the right to request a return or exchange within 7 days of receiving the product.\n- The product must be unused, in its original packaging, sealed, and including all accessories and manuals.\n- Products damaged due to customer misuse cannot be returned or exchanged.",
      },
    },
    {
      icon: DollarSign,
      title: {
        ar: "2. تكاليف الشحن والاسترداد المالي",
        en: "2. Shipping Costs & Refund Process",
      },
      content: {
        ar: `- في حال كان المنتج معيباً أو غير مطابق للمواصفات، تتحمل المؤسسة كامل تكاليف الشحن وتسترد القيمة كاملة.\n- في حال رغبة العميل بالاسترجاع أو الاستبدال بسبب تغيير رأيه، يتحمل العميل رسوم الشحن والتوصيل للمتجر.\n- تتم معالجة المبالغ المستردة وإعادتها إلى وسيلة الدفع الأصلية (البطاقة البنكية) خلال 7 إلى 14 يوم عمل حسب سياسة البنك المصدر للبطاقة.`,
        en: `- If the product is defective or does not match specifications, the Establishment will cover all shipping costs and process a full refund.\n- If the customer wishes to return or exchange the product due to a change of mind, they will be responsible for the return shipping fees.\n- Refunded amounts are processed back to the original payment method (bank card) within 7 to 14 business days, depending on the issuing bank's policies.`,
      },
    },
    {
      icon: HelpCircle,
      title: {
        ar: "3. كيفية تقديم طلب استرجاع",
        en: "3. How to Submit a Return Request",
      },
      content: {
        ar: `يمكنك تقديم طلب استرجاع أو استبدال بسهولة عن طريق التواصل مع خدمة العملاء مباشرة عبر البريد الإلكتروني [${STORE_INFO.emails[0]}] أو عبر الواتساب على الرقم [${STORE_INFO.phone}]. يرجى تزويدنا برقم الطلب وصورة المنتج لتسهيل وسرعة الإجراءات.`,
        en: `You can easily request a return or exchange by contacting customer service via email at [${STORE_INFO.emails[0]}] or WhatsApp at [${STORE_INFO.phone}]. Please provide your order number and product photos to expedite the process.`,
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
              {t({ ar: "سياسة الخصوصية والاسترداد", en: "Privacy & Refund Policy" })}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: `نلتزم في ${t(STORE_INFO.name)} بحماية خصوصية بياناتك وتوفير سياسة واضحة وعادلة للاسترجاع والاسترداد المالي لضمان رضاكم التام عن مشترياتكم.`,
                en: `At ${t(STORE_INFO.name)}, we are committed to protecting your privacy and providing a clear, fair return and refund policy to ensure your complete satisfaction.`,
              })}
            </p>
          </div>

          {/* Privacy Policy Section */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-foreground md:text-2xl mb-6 border-b border-border pb-3 flex items-center gap-2">
              <Shield className="h-6 w-6 text-gold" />
              {t({ ar: "سياسة الخصوصية وسرية المعلومات", en: "Privacy Policy" })}
            </h2>
            <div className="space-y-6">
              {privacySections.map((item, index) => {
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
                      <h3 className="text-lg font-bold text-foreground md:text-xl">
                        {t(item.title)}
                      </h3>
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                      {t(item.content)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Refund & Returns Policy Section */}
          <div>
            <h2 className="text-xl font-black text-foreground md:text-2xl mb-6 border-b border-border pb-3 flex items-center gap-2">
              <RotateCcw className="h-6 w-6 text-gold" />
              {t({ ar: "سياسة الاستبدال والاسترجاع", en: "Exchange & Refund Policy" })}
            </h2>
            <div className="space-y-6">
              {refundSections.map((item, index) => {
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
                      <h3 className="text-lg font-bold text-foreground md:text-xl">
                        {t(item.title)}
                      </h3>
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                      {t(item.content)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Last Update */}
          <div className="mt-12 text-center text-xs text-muted-foreground">
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
