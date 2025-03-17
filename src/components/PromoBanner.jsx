import Link from "next/link"

export default function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-teal-800 rounded-xl overflow-hidden relative">
          <div className="p-8 md:p-12 md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lorem ipsum
              <br />
              dolor sit.
            </h2>
            <p className="text-teal-100 mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Vitae ut vel proin eleifend tellus non. Aliquam etiam pellentesque
              duis etiam viverra.
            </p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-white text-teal-800 font-medium rounded-md hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="absolute top-8 right-8">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-teal-800 font-bold">
              <div className="text-center">
                <div className="text-xl">60%</div>
                <div className="text-sm">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

