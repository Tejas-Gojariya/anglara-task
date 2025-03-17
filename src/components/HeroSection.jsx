import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Lorem ipsum <br /> dolor sit.
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis.
            </p>
            <div className="flex space-x-4">
              <Link href="/explore">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
                  Explore
                </button>
              </Link>
              <Link href="/shop">
                <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <Image
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Shoe Product"
              width={400}
              height={200}
              className="rounded-lg object-cover"
            />
            {/* Navigation Arrows */}
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
              <button className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition">
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
