import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, totalPrice, customer } = body

    // 1. Validate inputs
    if (!items || items.length === 0 || !totalPrice || !customer) {
      return NextResponse.json({ error: "Missing required checkout parameters" }, { status: 400 })
    }

    const accountNo = process.env.PAYZATY_ACCOUNT_NO
    const secretKey = process.env.PAYZATY_SECRET_KEY
    const env = process.env.PAYZATY_ENV || "sandbox"

    if (!accountNo || !secretKey || accountNo === "your_account_number_here" || secretKey === "your_secret_key_here") {
      console.error("Payzaty credentials are not configured in environment variables.")
      return NextResponse.json({ error: "بيانات اعتماد بوابة الدفع غير مكتملة. يرجى التواصل مع إدارة المتجر." }, { status: 500 })
    }

    // 2. Select base URL based on environment
    const baseUrl = env === "production"
      ? "https://api.payzaty.com"
      : "https://api.sandbox.payzaty.com"

    // 3. Generate a unique order reference
    const orderRef = `ORD-${Date.now()}`

    // 4. Define response and cancel URLs
    const origin = request.headers.get("origin") || request.headers.get("referer")?.replace(/\/+$/, "") || "http://localhost:3000"
    const responseUrl = `${origin}/api/checkout/payzaty/callback?ref=${orderRef}&subtotal=${totalPrice.toFixed(2)}&total=${totalPrice.toFixed(2)}`
    const cancelUrl = `${origin}/checkout?cancelled=true`

    // 5. Format phone number for Payzaty (expects +966 XXXXXXXXX)
    let phone = customer.phone || ""
    phone = phone.replace(/\D/g, "")
    if (phone.startsWith("0")) {
      phone = "966" + phone.slice(1)
    }
    if (!phone.startsWith("966")) {
      phone = "966" + phone
    }
    phone = "+" + phone.replace(/(\d{3})(\d+)/, "$1 $2")

    // 6. Construct Payzaty request body
    const payzatyPayload = {
      amount: parseFloat(totalPrice.toFixed(2)),
      currency: "SAR",
      language: "ar",
      reference: orderRef,
      customer: {
        name: customer.name || "عميل المتجر",
        email: customer.email || "mwsstmnar2@gmail.com",
        phone: phone,
      },
      response_url: responseUrl,
      cancel_url: cancelUrl,
    }

    // 7. Send POST request to Payzaty API
    const response = await fetch(`${baseUrl}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-AccountNo": accountNo,
        "X-SecretKey": secretKey,
      },
      body: JSON.stringify(payzatyPayload),
    })

    // 8. Parse response safely (handle empty or non-JSON responses)
    const responseText = await response.text()
    let responseData: any = {}

    if (responseText) {
      try {
        responseData = JSON.parse(responseText)
      } catch {
        console.error("Payzaty returned non-JSON response:", responseText.substring(0, 500))
        return NextResponse.json(
          { error: "بوابة الدفع أرجعت رداً غير متوقع. يرجى المحاولة لاحقاً." },
          { status: 502 }
        )
      }
    } else {
      console.error("Payzaty returned empty response. HTTP Status:", response.status)
      return NextResponse.json(
        { error: "بوابة الدفع لم ترد. يرجى التحقق من بيانات الاعتماد أو المحاولة لاحقاً." },
        { status: 502 }
      )
    }

    if (!response.ok || !responseData.checkout_url) {
      console.error("Payzaty API error response:", responseData)
      return NextResponse.json(
        { error: responseData.error_text || responseData.error || "فشل في إنشاء جلسة الدفع" },
        { status: response.status }
      )
    }

    // 9. Return the checkout URL for redirect
    return NextResponse.json({
      redirectUrl: responseData.checkout_url,
      checkoutId: responseData.checkout_id,
    })
  } catch (error: any) {
    console.error("Payzaty checkout initiation error:", error)
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 })
  }
}
