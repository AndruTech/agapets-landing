"use client"

import { useEffect, useState } from "react"
import { PawPrint, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Paw {
  id: number
  top: string
  left: string
  size: number
  delay: number
  duration: number
  rotation: number
  opacity: number
}

function FloatingPaws() {
  const [paws, setPaws] = useState<Paw[]>([])

  useEffect(() => {
    const generated: Paw[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      size: Math.floor(Math.random() * 20) + 14,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 3,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.15 + 0.05,
    }))
    setPaws(generated)
  }, [])

  return (
    <>
      <style>{`
        @keyframes pawFloat {
          0%   { opacity: 0; transform: translateY(0px) scale(0.8); }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(-24px) scale(1.1); }
        }
      `}</style>
      {paws.map((paw) => (
        <div
          key={paw.id}
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            top: paw.top,
            left: paw.left,
            animationName: "pawFloat",
            animationDuration: `${paw.duration}s`,
            animationDelay: `${paw.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            transform: `rotate(${paw.rotation}deg)`,
            opacity: 0,
          }}
        >
          <PawPrint
            style={{ width: paw.size, height: paw.size }}
            className="text-gray-300"
          />
        </div>
      ))}
    </>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url(/images/paw-texture.png)",
          backgroundSize: "240px",
          backgroundRepeat: "repeat",
        }}
      />

      <FloatingPaws />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center md:px-6 md:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <Leaf className="h-4 w-4 text-accent" />
          Handmade in Melbourne, Australia
        </span>
        <h1 className="text-balance font-display text-5xl font-semibold leading-[1.08] tracking-tight text-foreground antialiased md:text-7xl">
          Made with love. Crafted for them.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          100% natural, artisan pet treats handmade in Melbourne.
        </p>
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full rounded-full px-8 text-base sm:w-auto">
            <a href="#products">Shop our treats</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-full border-foreground/20 bg-transparent px-8 text-base sm:w-auto"
          >
            <a href="#newsletter">Subscribe for tips</a>
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
          <PawPrint className="h-4 w-4 text-primary" />
          Small-batch, baked fresh, tail-wag approved
        </div>
      </div>
    </section>
  )
}