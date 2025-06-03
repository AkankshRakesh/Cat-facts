"use client"

import { useState } from "react"
import { Cat, Sparkles, RefreshCw } from "lucide-react"

export default function Page() {
  const [fact, setFact] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const fetchRandomFact = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("https://catfact.ninja/fact")

      if (!response.ok) {
        throw new Error("Failed to fetch fact")
      }

      const data = await response.json()
      setFact(data.fact)
    } catch (err) {
      setError("Oops! The cats are being shy right now. Try again?")
      console.error("Error fetching fact:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="relative">
        <div
          className="absolute -top-6 -left-6 w-12 h-12 bg-gray-200 rounded-full animate-pulse"
          style={{
            boxShadow: "6px 6px 12px #b8b8b8, -6px -6px 12px #ffffff",
          }}
        ></div>
        <div
          className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-200 rounded-full animate-pulse delay-1000"
          style={{
            boxShadow: "4px 4px 8px #b8b8b8, -4px -4px 8px #ffffff",
          }}
        ></div>

        <div
          className="bg-gray-200 rounded-3xl p-8 max-w-lg w-full relative"
          style={{
            boxShadow: "20px 20px 40px #a6a6a6, -20px -20px 40px #ffffff",
          }}
        >
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-2xl mb-4"
              style={{
                boxShadow: "inset 8px 8px 16px #b8b8b8, inset -8px -8px 16px #ffffff",
              }}
            >
              <Cat className="w-8 h-8 text-gray-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-700 mb-2">Cat Facts Generator</h1>
            <p className="text-gray-500 text-sm">Discover amazing things about our feline friends</p>
          </div>

          <div className="mb-6">
            <button
              onClick={fetchRandomFact}
              disabled={loading}
              className="w-full h-14 bg-gray-200 text-gray-700 font-semibold rounded-2xl transition-all duration-300 hover:text-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                boxShadow: loading
                  ? "inset 8px 8px 16px #b8b8b8, inset -8px -8px 16px #ffffff"
                  : "8px 8px 16px #b8b8b8, -8px -8px 16px #ffffff",
              }}
              onMouseDown={(e) => {
                if (!loading) {
                  e.currentTarget.style.boxShadow = "inset 8px 8px 16px #b8b8b8, inset -8px -8px 16px #ffffff"
                }
              }}
              onMouseUp={(e) => {
                if (!loading) {
                  e.currentTarget.style.boxShadow = "8px 8px 16px #b8b8b8, -8px -8px 16px #ffffff"
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.boxShadow = "8px 8px 16px #b8b8b8, -8px -8px 16px #ffffff"
                }
              }}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Finding a fact...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <Sparkles className="w-5 h-5" />
                  Tell me something cool!
                </div>
              )}
            </button>
          </div>

          {error && (
            <div
              className="mb-6 p-4 bg-red-100 rounded-2xl border-l-4 border-red-300"
              style={{
                boxShadow: "inset 4px 4px 8px #d1a3a3, inset -4px -4px 8px #ffffff",
              }}
            >
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          {fact && !error && (
            <div className="relative mb-6">
              <div
                className="bg-gray-200 rounded-2xl p-6 relative"
                style={{
                  boxShadow: "inset 12px 12px 24px #b8b8b8, inset -12px -12px 24px #ffffff",
                }}
              >
                <div className="flex items-start gap-3">
                  <p className="text-gray-700 leading-relaxed font-medium">{fact}</p>
                </div>
              </div>

              <div
                className="absolute -top-2 -left-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
                style={{
                  boxShadow: "3px 3px 6px #b8b8b8, -3px -3px 6px #ffffff",
                }}
              >
                <span className="text-gray-600 text-xs font-bold">😼</span>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-xs text-gray-400">Powered by cat wisdom & curiosity </p>
          </div>
        </div>
      </div>
    </div>
  )
}
