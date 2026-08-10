import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { MessagingFloat } from "@/components/messaging-float"

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Mantra Spa"
        subtitle="Masajes relajantes, tratamientos corporales y experiencias de bienestar únicas en Concepción"
      />
      <Services />
      <CtaBanner />
      <Footer
        businessName="Mantra Spa"
        tagline="Bienestar y Relax en Concepción"
        address="Concepción"
        phone="0981 000 002"
        hours="Lun-Sáb: 10:00 - 20:00"
        waPhone="595981000002"
      />
      <MessagingFloat />
    </>
  )
}
