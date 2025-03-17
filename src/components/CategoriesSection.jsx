import { Users, User2, Baby, Sparkles, Shirt, HomeIcon, Footprints, Dumbbell } from "lucide-react"
import Link from "next/link"

export default function CategoriesSection() {
  const categories = [
    { name: "Men", icon: User2, href: "/category/men" },
    { name: "Women", icon: Users, href: "/category/women" },
    { name: "Kids", icon: Baby, href: "/category/kids" },
    { name: "Cosmetics", icon: Sparkles, href: "/category/cosmetics" },
    { name: "Accessories", icon: Shirt, href: "/category/accessories" },
    { name: "Home", icon: HomeIcon, href: "/category/home" },
    { name: "Footwear", icon: Footprints, href: "/category/footwear" },
    { name: "Sports", icon: Dumbbell, href: "/category/sports" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Categories</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <category.icon className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-700">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

