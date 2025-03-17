export default function StatsSection() {
    return (
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Happy Customer</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">1 Million+</h3>
              <p className="text-gray-600">Yearly Sale</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">20k+</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
