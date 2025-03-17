'use client'
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-4 px-4 text-left font-medium text-gray-700">PRODUCT DETAILS</th>
              <th className="py-4 px-4 text-left font-medium text-gray-700">PRICE</th>
              <th className="py-4 px-4 text-left font-medium text-gray-700">QUANTITY</th>
              <th className="py-4 px-4 text-left font-medium text-gray-700">SHIPPING</th>
              <th className="py-4 px-4 text-left font-medium text-gray-700">SUBTOTAL</th>
              <th className="py-4 px-4 text-left font-medium text-gray-700">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                    <Image
                      src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                      alt="Blue Flower Print Crop Top"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Blue Flower Print Crop Top</h3>
                    <p className="mt-1 text-sm text-gray-500">Color: Yellow</p>
                    <p className="mt-1 text-sm text-gray-500">Size: M</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-base text-gray-900">Rs.1000</td>
              <td className="py-4 px-4">
                <div className="flex items-center border rounded-md w-24">
                  <button className="px-3 py-1 text-gray-600 hover:text-gray-800">−</button>
                  <span className="px-3 py-1 text-gray-800">1</span>
                  <button className="px-3 py-1 text-gray-600 hover:text-gray-800">+</button>
                </div>
              </td>
              <td className="py-4 px-4 text-base text-gray-900">FREE</td>
              <td className="py-4 px-4 text-base font-medium text-gray-900">Rs.1000</td>
              <td className="py-4 px-4">
                <button className="text-primary hover:text-primary/80">
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                    <Image
                      src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                      alt="Levender Hoodie"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Levender Hoodie</h3>
                    <p className="mt-1 text-sm text-gray-500">Color: Levender</p>
                    <p className="mt-1 text-sm text-gray-500">Size: XXL</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-base text-gray-900">Rs.2050</td>
              <td className="py-4 px-4">
                <div className="flex items-center border rounded-md w-24">
                  <button className="px-3 py-1 text-gray-600 hover:text-gray-800">−</button>
                  <span className="px-3 py-1 text-gray-800">1</span>
                  <button className="px-3 py-1 text-gray-600 hover:text-gray-800">+</button>
                </div>
              </td>
              <td className="py-4 px-4 text-base text-gray-900">FREE</td>
              <td className="py-4 px-4 text-base font-medium text-gray-900">Rs.2050</td>
              <td className="py-4 px-4">
                <button className="text-primary hover:text-primary/80">
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Actions and Summary */}
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {/* Discount Code */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Discount Codes</h2>
              <p className="text-sm text-gray-500 mb-4">Enter your coupon code if you have one</p>
              <div className="flex max-w-md">
                <input
                  type="text"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Enter coupon code"
                />
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-black bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Continue Shopping */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
            <div className="flow-root">
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base text-gray-600">Sub Total</dt>
                  <dd className="text-base font-medium text-gray-900">Rs.3050</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base text-gray-600">Shipping</dt>
                  <dd className="text-base font-medium text-gray-900">Rs.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Grand Total</dt>
                  <dd className="text-base font-medium text-gray-900">Rs.3050</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6">
              <button className="w-full bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

