import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Products } from "@/components/products"
import { Story } from "@/components/story"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Products />
      <Story />
      <Newsletter />
      <Footer />
    </main>
  )
}
