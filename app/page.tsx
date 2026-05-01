"use client"

import { useState, useRef, useEffect } from "react"
import { Heart, ChevronDown, Sparkles } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { QuoteCard } from "@/components/quote-card"
import { PhotoGallery } from "@/components/photo-gallery"
import { FloatingHearts } from "@/components/floating-hearts"

export default function TributePage() {
  const [showIntro, setShowIntro] = useState(true)
  const playerRef = useRef<YT.Player | null>(null)
  const [playerReady, setPlayerReady] = useState(false)

  const startTribute = () => {
    setShowIntro(false)
    if (playerRef.current && playerReady) {
      playerRef.current.playVideo()
    }
  }

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize player when API is ready
    ;(window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: "u7XjPmN-tHw", // Just The Way You Are - Bruno Mars
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "u7XjPmN-tHw",
        },
        events: {
          onReady: (event: any) => {
            setPlayerReady(true)
          },
        },
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])


  const quotes = [
    {
      text: "She walks in beauty, like the night of cloudless climes and starry skies; And all that's best of dark and bright meet in her aspect and her eyes.",
      author: "Lord Byron"
    },
    {
      text: "There is no exquisite beauty without some strangeness in the proportion.",
      author: "Edgar Allan Poe"
    },
    {
      text: "Beauty is not in the face; beauty is a light in the heart.",
      author: "Kahlil Gibran"
    },
    {
      text: "The beauty of a woman is not in the clothes she wears, the figure that she carries, or the way she combs her hair. The beauty of a woman is seen in her eyes, because that is the doorway to her heart.",
      author: "Audrey Hepburn"
    },
    {
      text: "I have looked upon those brilliant creatures, and now my heart is sore. All changed, changed utterly: a terrible beauty is born.",
      author: "W.B. Yeats"
    },
    {
      text: "Her beauty made the bright world dim, and everything beside seemed like the fleeting image of a shade.",
      author: "Percy Bysshe Shelley"
    }
  ]

  const images = [
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.56%20AM-npzpNUCZxtnSxt0A1aNFmqidT0bHqs.jpeg", alt: "Beautiful portrait" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.53%20AM-IB0zDj1q78OhItYZv55ETricjr6iG4.jpeg", alt: "In white traditional wear" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.50%20AM%20%282%29-MDSFXdpi26z6NpErMGQYykG6QQoYBh.jpeg", alt: "Casual elegance" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.54%20AM%20%281%29-y9WtqCPdHgHkoeJ0FMqRHavxBNEfLJ.jpeg", alt: "In red traditional wear" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.52%20AM%20%281%29-CCS9WGR6u56zdA97UaCmKtpK2qyIFX.jpeg", alt: "By the lake" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.50%20AM-S0FPvduCBe9h5CdHSo9Uitt6qjeRrE.jpeg", alt: "In red by the pond" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.46%20AM%20%281%29-CoyWVlrUdYaSG8f2tBzB1kIl0sJfSI.jpeg", alt: "At the church" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.47%20AM-BsUPIONqrJ9p7ygPE6le06ePTxhGQc.jpeg", alt: "At the church entrance" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.47%20AM%20%281%29-f2oPBcCHOEnurm8CWP2MCL1VjU5MUP.jpeg", alt: "In black saree" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.48%20AM-akc1fWPAmBS8e0lkHVhZQM5kSbTzGw.jpeg", alt: "With friend" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.46%20AM-mM3Yz6ZwVbFgUW6cVjJmMXludJHZCQ.jpeg", alt: "Looking at the church" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.55%20AM-v4SlPHwAdLXCvegLWOoYx521b8QNyn.jpeg", alt: "In red saree in garden" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.55%20AM%20%281%29-7eooHrMnCK7FMfyKiNFE9dAyH3vnfA.jpeg", alt: "In white dress" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.53%20AM%20%282%29-x2AgNjbOt403EEI0aKvz8AxaXm0QIv.jpeg", alt: "Elegant evening" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.45%20AM%20%281%29-TzdAWWmlawD15Ufg4QBB4qCpTq6YS2.jpeg", alt: "In the garden" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.49%20AM-j5vWO7xZYj17KLTo5eOg5fdM2nYhYS.jpeg", alt: "Red phone booth" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.44%20AM%20%281%29-97xWLbn7ZKvrEYdFlp4esIl0PrA60z.jpeg", alt: "Walking away" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-01%20at%2011.05.48%20AM%20%281%29-G5dGCuZzDd3t6vi48hXlXprjG94qiD.jpeg", alt: "At the church together" },
  ]

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      
      {/* Intro Animation Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-in-out ${
          showIntro ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center px-4">
          <Heart className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            To the most amazing woman <br className="hidden md:block" /> in the world...
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic mb-12">
            Even heaven pales in comparison to your beauty.
          </p>
          <button
            onClick={startTribute}
            disabled={!playerReady}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-serif text-xl shadow-lg hover:scale-105 transition-transform animate-fade-in disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {playerReady ? "Enter Her World" : "Preparing..."}
          </button>
        </div>
      </div>

      {/* Hidden YouTube Player — must not be display:none or the API won't init */}
      <div style={{ position: 'fixed', top: '-9999px', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', pointerEvents: 'none' }}>
        <div id="youtube-player" />
      </div>
      

      {/* Hero Section */}
      <HeroSection mainImage={images[0].src} />

      {/* Scroll Indicator */}
      <div className="flex justify-center -mt-16 relative z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </div>

      {/* Introduction */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">A Love Letter</span>
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
          To the woman who doesn&apos;t see what the whole world sees
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          You ask me why I look at you the way I do. Here&apos;s why. Because every poet who ever 
          wrote about beauty was writing about someone like you. Let their words show you 
          what I see every single day.
        </p>
      </section>

      {/* First Quote */}
      <QuoteCard quote={quotes[0]} index={0} />

      {/* Photo Gallery Section 1 */}
      <PhotoGallery images={images.slice(0, 6)} />

      {/* Second Quote */}
      <QuoteCard quote={quotes[1]} index={1} />

      {/* Photo Gallery Section 2 */}
      <PhotoGallery images={images.slice(6, 12)} variant="masonry" />

      {/* Third Quote */}
      <QuoteCard quote={quotes[2]} index={2} />

      {/* Photo Gallery Section 3 */}
      <PhotoGallery images={images.slice(12, 18)} />

      {/* Fourth Quote */}
      <QuoteCard quote={quotes[3]} index={3} />

      {/* Final Message Section */}
      <section className="py-32 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
            You are my poem, my song, my everything
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            When they wrote about beauty that eclipses heaven itself, they were dreaming of you. 
            And I get to live that dream every single day. You are not just pretty, my love. 
            You are the definition of beauty.
          </p>
          <QuoteCard quote={quotes[4]} index={4} minimal />
          <div className="mt-16">
            <QuoteCard quote={quotes[5]} index={5} minimal />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 text-center bg-secondary/30">
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Heart key={i} className="w-4 h-4 text-primary fill-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <p className="font-serif text-2xl text-foreground mb-2">Forever Yours</p>
        <p className="text-sm text-muted-foreground">Made with infinite love</p>
      </footer>
    </main>
  )
}
