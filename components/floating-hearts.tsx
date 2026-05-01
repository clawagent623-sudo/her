"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

interface FloatingHeart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const initialHearts: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
      size: 8 + Math.random() * 16,
      opacity: 0.1 + Math.random() * 0.2,
    }))
    setHearts(initialHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.x}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart
            className="text-primary fill-primary"
            style={{
              width: heart.size,
              height: heart.size,
              opacity: heart.opacity,
            }}
          />
        </div>
      ))}
      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up linear infinite;
        }
      `}</style>
    </div>
  )
}
