import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import CategoriesSection from "@/components/CategoriesSection"
import FeaturedProducts from "@/components/FeaturedProducts"
import BenefitsSection from "@/components/BenefitsSection"
import PromoBanner from "@/components/PromoBanner"
import PopularProducts from "@/components/PopularProducts"
import BrandsSection from "@/components/BrandsSection"
import FaqSection from "@/components/FaqSection"
import ReviewsSection from "@/components/ReviewsSection"

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products")
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  // Split products for different sections
  const featuredProducts = products.slice(0, 4)
  const popularProducts = products.slice(4, 12)

  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedProducts products={featuredProducts} />
      <BenefitsSection />
      <PromoBanner />
      <PopularProducts products={popularProducts} />
      <BrandsSection />
      <FaqSection />
      <ReviewsSection />
    </main>
  )
}