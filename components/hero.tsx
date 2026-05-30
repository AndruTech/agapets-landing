import { PawPrint, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

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
