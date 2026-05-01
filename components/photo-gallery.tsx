"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

interface PhotoGalleryProps {
  images: Array<{
    src: string
    alt: string
  }>
  variant?: "grid" | "masonry"
}

export function PhotoGallery({ images, variant = "grid" }: PhotoGalleryProps) {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set())
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = images.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleImages(prev => new Set([...prev, index]))
          }
        },
        { threshold: 0.1 }
      )
      
      if (refs.current[index]) {
        observer.observe(refs.current[index]!)
      }
      
      return observer
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [images])

  if (variant === "masonry") {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                ref={el => { refs.current[index] = el }}
                className={`mb-4 break-inside-avoid transition-all duration-700 ease-out ${
                  visibleImages.has(index) 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div className={`relative ${index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`} />
                    {/* Heart icon on hover */}
                    <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}>
                      <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground/50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              ref={el => { refs.current[index] = el }}
              className={`transition-all duration-700 ease-out ${
                visibleImages.has(index) 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${(index % 3) * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Heart animation on hover */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}>
                  <Heart className="w-12 h-12 text-primary-foreground fill-primary-foreground/50 animate-pulse" />
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary-foreground/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary-foreground/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
