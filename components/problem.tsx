import { ShieldOff, Palette, HeartPulse } from "lucide-react"

const items = [
  {
    icon: ShieldOff,
    title: "No preservatives",
    description: "Baked in small batches and made to be eaten fresh — never loaded with shelf-life chemicals.",
  },
  {
    icon: Palette,
    title: "No artificial colors",
    description: "The warm, earthy tones come from real food. What you see is exactly what they eat.",
  },
  {
    icon: HeartPulse,
    title: "No harmful ingredients",
    description: "Only wholesome, recognizable ingredients that are gentle on tummies and good for them.",
  },
]

export function Problem() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Your pet deserves better than chemicals.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We started Agapets because we couldn&apos;t find treats we&apos;d feel good about giving our own dogs.
            So we made them ourselves.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
