"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

interface QuoteCardProps {
  quote: {
    text: string
    author: string
  }
  index: number
  minimal?: boolean
}

export function QuoteCard({ quote, index, minimal = false }: QuoteCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  if (minimal) {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <blockquote className="font-serif text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
          &ldquo;{quote.text}&rdquo;
        </blockquote>
        <cite className="block mt-4 text-sm text-muted-foreground not-italic">
          — {quote.author}
        </cite>
      </div>
    )
  }

  const bgColors = [
    "bg-primary/5",
    "bg-secondary",
    "bg-accent/10",
    "bg-primary/5",
    "bg-secondary",
    "bg-accent/10",
  ]

  return (
    <section 
      ref={ref}
      className={`py-24 px-4 ${bgColors[index % bgColors.length]}`}
    >
      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Quote className="w-12 h-12 text-primary/40 mx-auto mb-8 rotate-180" />
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
          {quote.text}
        </blockquote>
        <cite className="text-lg text-muted-foreground not-italic flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-primary/30" />
          {quote.author}
          <span className="w-8 h-px bg-primary/30" />
        </cite>
      </div>
    </section>
  )
}
