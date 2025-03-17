import Image from "next/image"

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Freya Mitra",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum faucibus sed integer facilisis. Massa nunc velit nunc faucibus.",
    },
    {
      id: 2,
      name: "Samuel Richards",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum faucibus sed integer facilisis. Massa nunc velit nunc faucibus.",
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum faucibus sed integer facilisis. Massa nunc velit nunc faucibus.",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Customers Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuP5AT-ARGcFJNKACImGwt-1I8fyGAXfeZ5FRqzU2vZ8Pjl7MlFseUX48&s"
                  alt={review.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{review.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="w-3 h-3 rounded-full bg-primary mx-1"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 mx-1"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 mx-1"></button>
        </div>
      </div>
    </section>
  )
}

