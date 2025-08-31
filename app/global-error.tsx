'use client'

import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-millet px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-kanhaGreen mb-4">
              Something went wrong!
            </h1>
            <p className="text-lg text-soil mb-8">
              We're sorry, but something unexpected happened. Please try again or return to our homepage.
            </p>
            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-block px-8 py-4 bg-terracotta text-white font-semibold rounded-xl hover:bg-kanhaGreen transition-colors mr-4"
              >
                Try again
              </button>
              <Link 
                href="/" 
                className="inline-block px-8 py-4 bg-white text-terracotta font-semibold rounded-xl border-2 border-terracotta hover:bg-terracotta hover:text-white transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
