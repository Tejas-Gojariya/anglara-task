import Image from "next/image"

export default function BrandsSection() {
  const brands = [
    { name: "Adidas", logo: "" },
    { name: "Puma", logo: "" },
    { name: "Nike", logo: "" },
    { name: "Forever 21", logo: "" },
    { name: "Fila", logo: "" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Popular Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={brand.logo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4k3BUgDhYfar63WW7lmQvBgffYHapAxK6Lw&s"}
                alt={brand.name}
                width={150}
                height={100}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

