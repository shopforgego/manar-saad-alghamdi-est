import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Parse the checkout_id from query params (Payzaty appends it)
    const checkoutId = searchParams.get("checkout_id") || searchParams.get("id")
    const orderRef = searchParams.get("ref")
    const subtotal = searchParams.get("subtotal")
    const total = searchParams.get("total")

    const host = request.headers.get("host") || "localhost:3000"
    const protocol = request.headers.get("x-forwarded-proto") || "http"
    const origin = `${protocol}://${host}`

    if (!checkoutId) {
      console.error("Payzaty callback: No checkout_id received")
      // Still redirect to status page with failed
      return NextResponse.redirect(`${origin}/checkout/status?status=failed`, 303)
    }

    // Verify payment status by calling Payzaty API
    const accountNo = process.env.PAYZATY_ACCOUNT_NO
    const secretKey = process.env.PAYZATY_SECRET_KEY
    const env = process.env.PAYZATY_ENV || "sandbox"

    const baseUrl = env === "production"
      ? "https://api.payzaty.com"
      : "https://api.sandbox.payzaty.com"

    let status = "failed"
    let paymentMethod = ""
    let cardType = ""
    let cardLast4 = ""

    if (accountNo && secretKey) {
      try {
        const verifyResponse = await fetch(`${baseUrl}/checkout/${checkoutId}`, {
          method: "GET",
          headers: {
            "X-AccountNo": accountNo,
            "X-SecretKey": secretKey,
          },
        })

        if (verifyResponse.ok) {
          const paymentData = await verifyResponse.json()
          console.log("Payzaty payment verification response:", JSON.stringify(paymentData))

          if (paymentData.paid === true || paymentData.status === "Paid" || paymentData.status === "Captured") {
            status = "success"
          }

          paymentMethod = paymentData.payment_method || ""
          cardType = paymentData.card_type || ""
          cardLast4 = paymentData.card_last4 || ""
        } else {
          console.error("Payzaty verify API error:", verifyResponse.status)
        }
      } catch (verifyError) {
        console.error("Payzaty verify error:", verifyError)
      }
    }

    // Redirect to the status page with all relevant data
    const redirectUrl = new URL("/checkout/status", origin)
    redirectUrl.searchParams.set("status", status)
    redirectUrl.searchParams.set("checkoutId", checkoutId)
    if (orderRef) redirectUrl.searchParams.set("orderRef", orderRef)
    if (subtotal) redirectUrl.searchParams.set("subtotal", subtotal)
    if (total) redirectUrl.searchParams.set("total", total)
    if (paymentMethod) redirectUrl.searchParams.set("paymentMethod", paymentMethod)
    if (cardType) redirectUrl.searchParams.set("cardType", cardType)
    if (cardLast4) redirectUrl.searchParams.set("cardLast4", cardLast4)

    console.log(`Payzaty callback: Redirecting to ${redirectUrl.toString()}`)
    return NextResponse.redirect(redirectUrl.toString(), 303)
  } catch (error) {
    console.error("Payzaty callback handling error:", error)
    const host = request.headers.get("host") || "localhost:3000"
    const protocol = request.headers.get("x-forwarded-proto") || "http"
    const origin = `${protocol}://${host}`
    return NextResponse.redirect(`${origin}/checkout/status?status=failed`, 303)
  }
}
