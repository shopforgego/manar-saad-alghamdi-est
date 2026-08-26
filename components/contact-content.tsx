"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle, Clock, Building, ShieldCheck, FileCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"
import { Button } from "@/components/ui/button"

export function ContactContent() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t({ ar: "تواصل معنا", en: "Contact Us" })}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t({
            ar: "نحن هنا لمساعدتك والإجابة على استفساراتك. تواصل معنا عبر القنوات الرسمية وسنرد عليك في أسرع وقت.",
            en: "We're here to assist you. Contact us through any official channel and we'll respond promptly.",
          })}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4">
          {/* Store Info */}
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Image
              src="/images/logo.png"
              alt={t(STORE_INFO.name)}
              width={60}
              height={60}
              className="rounded-xl shadow-sm border border-border/50"
            />
            <div>
              <h2 className="text-lg font-bold text-foreground">{t(STORE_INFO.name)}</h2>
              <p className="text-sm text-muted-foreground">{t(STORE_INFO.tagline)}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{t({ ar: "سجل تجاري نشط ومعتمد", en: "Active & Certified CR" })}</span>
              </div>
            </div>
          </div>

          {/* Official Registration & CR Info Card */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <FileCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {t({ ar: "البيانات الرسمية والتجارية", en: "Official Commercial Data" })}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t({ ar: "موثق لدى وزارة التجارة والعنوان الوطني السعودي", en: "Verified with Ministry of Commerce & National Address" })}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-card/80 rounded-xl p-3 border border-border/60">
                <span className="text-muted-foreground block">{t({ ar: "الرقم الوطني الموحد (السجل التجاري):", en: "Unified CR Number:" })}</span>
                <span className="font-bold font-mono text-sm text-foreground" dir="ltr">{STORE_INFO.commercialRegNo}</span>
              </div>
              <div className="bg-card/80 rounded-xl p-3 border border-border/60">
                <span className="text-muted-foreground block">{t({ ar: "تاريخ الإصدار:", en: "Issue Date:" })}</span>
                <span className="font-semibold text-foreground">{STORE_INFO.issueDate}</span>
              </div>
              <div className="bg-card/80 rounded-xl p-3 border border-border/60">
                <span className="text-muted-foreground block">{t({ ar: "العنوان المختصر:", en: "Short Address:" })}</span>
                <span className="font-bold font-mono text-sm text-accent">{STORE_INFO.shortAddress}</span>
              </div>
              <div className="bg-card/80 rounded-xl p-3 border border-border/60">
                <span className="text-muted-foreground block">{t({ ar: "المدينة والمنطقة:", en: "City & Region:" })}</span>
                <span className="font-semibold text-foreground">{t(STORE_INFO.city)} - {t({ ar: "المملكة العربية السعودية", en: "Saudi Arabia" })}</span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "الهاتف المباشر", en: "Direct Phone" })}
              </p>
              <p className="text-sm text-muted-foreground font-mono" dir="ltr">{STORE_INFO.phone}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-whatsapp/40 hover:shadow-lg hover:shadow-whatsapp/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp/10">
              <MessageCircle className="h-5 w-5 text-whatsapp" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "واتساب خدمة العملاء", en: "Customer Support WhatsApp" })}
              </p>
              <p className="text-sm text-muted-foreground font-mono" dir="ltr">{STORE_INFO.phone}</p>
            </div>
          </a>

          {/* Emails */}
          {STORE_INFO.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t({ ar: "البريد الإلكتروني الرسمي", en: "Official Email" })}
                </p>
                <p className="text-sm text-muted-foreground font-mono" dir="ltr">{email}</p>
              </div>
            </a>
          ))}

          {/* Location */}
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "العنوان الوطني الكامل", en: "Full National Address" })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{t(STORE_INFO.address)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t({ ar: "رقم المبنى:", en: "Building No:" })} {STORE_INFO.buildingNo} | {t({ ar: "الرقم الإضافي:", en: "Additional No:" })} {STORE_INFO.additionalNo} | {t({ ar: "الرمز البريدي:", en: "Postal Code:" })} {STORE_INFO.postalCode}
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "ساعات العمل وخدمة العملاء", en: "Working & Support Hours" })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {t({ ar: "السبت - الخميس: 9:00 صباحاً - 11:00 مساءً", en: "Saturday - Thursday: 9:00 AM - 11:00 PM" })}
              </p>
              <p className="text-sm text-muted-foreground">
                {t({ ar: "الجمعة: 4:00 عصراً - 11:00 مساءً", en: "Friday: 4:00 PM - 11:00 PM" })}
              </p>
            </div>
          </div>
        </div>

        {/* Map & CTA */}
        <div className="flex flex-col gap-6">
          {/* Google Maps Embed - Jeddah Madain Al Fahd */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title={t({ ar: "موقع المتجر - جدة", en: "Store Location - Jeddah" })}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.8!2d39.2245!3d21.4925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI5JzMzLjAiTiAzOcKwMTMnMjguMiJF!5e0!3m2!1sar!2ssa!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="bg-secondary"
            />
          </div>

          {/* CTA Card */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">
              {t({ ar: "هل لديك أي استفسار أو طلب خاص؟", en: "Have any questions or special orders?" })}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t({
                ar: "فريق خدمة العملاء متواجد على مدار الساعة لمساعدتكم وإتمام طلباتكم بأعلى درجات الكفاءة.",
                en: "Our customer service team is ready 24/7 to help you and process your inquiries promptly.",
              })}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full gap-2 bg-whatsapp text-white hover:bg-whatsapp/90 sm:w-auto shadow-sm">
                  <MessageCircle className="h-4 w-4" />
                  {t({ ar: "تواصل عبر واتساب", en: "Chat on WhatsApp" })}
                </Button>
              </a>
              <a href={`tel:${STORE_INFO.phone}`}>
                <Button variant="outline" className="w-full gap-2 border-accent text-accent hover:bg-accent/10 sm:w-auto">
                  <Phone className="h-4 w-4" />
                  {t({ ar: "اتصل الآن", en: "Call Now" })}
                </Button>
              </a>
            </div>
          </div>

          {/* About Store */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-bold text-foreground">
              {t({ ar: "عن المؤسسة", en: "About the Establishment" })}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: `تعتبر ${STORE_INFO.name.ar} منشأة تجارية مسجلة ومعتمدة في المملكة العربية السعودية برقم سجل موحد (${STORE_INFO.commercialRegNo}) ومقرها مدينة ${STORE_INFO.city.ar}. نحن متخصصون في تقديم أحدث الأحذية وحقائب السفر والإكسسوارات الفاخرة بأعلى معايير الجودة والضمان، مع توفير تجربة تسوق إلكتروني آمنة وسلسة وشحن سريع لجميع مدن ومناطق المملكة.`,
                en: `${STORE_INFO.name.en} is a registered and certified commercial establishment in the Kingdom of Saudi Arabia under unified CR (${STORE_INFO.commercialRegNo}) based in ${STORE_INFO.city.en}. We specialize in providing the latest footwear, travel luggage, and premium accessories with the highest quality standards, seamless secure online checkout, and expedited delivery across all regions of KSA.`,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
