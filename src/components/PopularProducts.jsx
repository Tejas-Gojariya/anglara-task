import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function PopularProducts({ products }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Most Popular Products</h2>
          <Link href="/products" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                </button>
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">-15%</div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1 truncate">{product.title}</h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${(product.price * 1.15).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-xs text-gray-600 ml-1">{product.rating.rate}</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

