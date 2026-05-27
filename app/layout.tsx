import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@ai-whisperers/seo"
import { WhatsAppFloat } from "@ai-whisperers/whatsapp"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mantra-spa.paragu-ai.com"),
  title: "Mantra Spa",
  description: "Masajes relajantes, tratamientos corporales y experiencias de bienestar únicas",
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://mantra-spa.paragu-ai.com" },
  openGraph: {
    title: "Mantra Spa",
    description: "Masajes relajantes, tratamientos corporales y experiencias de bienestar únicas",
    url: "https://mantra-spa.paragu-ai.com",
    siteName: "Mantra Spa",
    locale: "es_PY",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mantra Spa",
    description: "Masajes relajantes, tratamientos corporales y experiencias de bienestar únicas",
    url: "https://mantra-spa.paragu-ai.com",
    image: "https://mantra-spa.paragu-ai.com/images/og-default.jpg",
  }

  return (
    <html lang="es" className={montserrat.variable + " " + playfair.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  )
}
