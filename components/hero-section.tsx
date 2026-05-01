"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

interface HeroSectionProps {
  mainImage: string
}

export function HeroSection({ mainImage }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center gap-12">
          {/* Main Image */}
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <Image
                src={mainImage}
                alt="My beautiful lady"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Decorative hearts around the image */}
            <Heart className="absolute -top-4 -right-4 w-8 h-8 text-primary fill-primary animate-pulse" />
            <Heart className="absolute -bottom-2 -left-6 w-6 h-6 text-primary/70 fill-primary/70 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <Heart className="absolute top-1/2 -right-8 w-5 h-5 text-primary/50 fill-primary/50 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Title */}
          <div 
            className={`text-center transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground mb-4">
              To the most beautiful woman in the world
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6">
              You Are
              <span className="block text-primary">Breathtaking</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Even if you don&apos;t believe it, let the greatest poets and writers 
              of all time tell you what I already know.
            </p>
          </div>

          {/* Decorative line */}
          <div 
            className={`flex items-center gap-4 transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-16 h-px bg-primary/30" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="w-16 h-px bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
