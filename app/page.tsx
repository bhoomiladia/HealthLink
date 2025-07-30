import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import NearbyClinics from "@/components/nearby-clinics"
import TokenManagement from "@/components/token-management"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      <Hero />
      <Features />
      <NearbyClinics />
      <TokenManagement />
      <Footer />
    </main>
  )
}
