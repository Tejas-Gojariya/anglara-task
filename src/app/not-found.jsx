import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
          Go back home
        </Link>
      </div>
    </div>
  )
}