const products = [
  {
    emoji: "🍪",
    name: "Artisan Cookies",
    description: "Crunchy, oven-baked biscuits made with peanut butter, pumpkin and oats.",
  },
  {
    emoji: "🍦",
    name: "Frozen Popsicles",
    description: "Cooling fruit-and-yogurt pops — the perfect treat for warm Melbourne days.",
  },
  {
    emoji: "🎂",
    name: "Birthday Combos",
    description: "A little cake and candle bundle to make their special day unforgettable.",
  },
  {
    emoji: "🎁",
    name: "Gift Boxes",
    description: "Beautifully wrapped assortments for the pampered pup in your life.",
  },
]

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Handcrafted with real ingredients
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Each treat is made by hand, in small batches, right here in Melbourne.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-28 items-center justify-center rounded-xl bg-secondary text-5xl">
                <span aria-hidden="true">{product.emoji}</span>
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{product.name}</h3>
                  <span className="shrink-0 rounded-full bg-accent/20 px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    Coming soon
                  </span>
                </div>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
