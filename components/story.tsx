import Image from "next/image"
import { PawPrint } from "lucide-react"

export function Story() {
  return (
    <section id="story" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-6 md:py-28">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/our-story.png"
            alt="A golden retriever beside a table of freshly baked natural dog treats in a warm Melbourne kitchen"
            width={720}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <PawPrint className="h-4 w-4" />
            Our Story
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Born from love
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Agapets began in a small Melbourne kitchen, with a worried dog parent reading the back of yet another
            treat packet full of words she couldn&apos;t pronounce. There had to be a better way — so she started
            baking treats herself, with ingredients she actually trusted.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Today, every batch is still made by hand with the same care: real food, no shortcuts, and a whole lot of
            love. Because the dogs who give us everything deserve nothing less than the best.
          </p>
        </div>
      </div>
    </section>
  )
}
