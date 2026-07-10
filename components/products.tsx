"use client"

import { useEffect } from "react"

const products = [
  {
    emoji: "🍪",
    name: "Artisan Cookies",
    description: "Crunchy, oven-baked biscuits made with peanut butter, pumpkin and oats.",
    componentId: "product-component-1783676906526",
    shopifyId: "8403253526572",
  },
  {
    emoji: "🍦",
    name: "Frozen Popsicles",
    description: "Cooling fruit-and-yogurt pops — the perfect treat for warm Melbourne days.",
    componentId: "product-component-1783677352429",
    shopifyId: "8403259785260",
  },
  {
    emoji: "🟠",
    name: "Pumpkin Gummies",
    description: "Natural pumpkin and chicken broth gummies — grain-free and irresistible.",
    componentId: "product-component-1783677452241",
    shopifyId: "8403257589804",
  },
  {
    emoji: "🎁",
    name: "Gift Boxes",
    description: "Beautifully wrapped assortments for the pampered pup in your life.",
    componentId: "product-component-giftbox",
    shopifyId: "",
  },
]

declare global {
  interface Window {
    ShopifyBuy: any
  }
}

export function Products() {
  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: "agapet-official.myshopify.com",
        storefrontAccessToken: "faa7f6b38a4eb469c123009e872b7362",
      })

      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        products.forEach((product) => {
          if (!product.shopifyId) return // skip productos sin ID todavía
          
          ui.createComponent("product", {
            id: product.shopifyId,
            node: document.getElementById(product.componentId),
            moneyFormat: "%24%7B%7Bamount%7D%7D",
            options: {
              product: {
                styles: {
                  button: {
                    ":hover": { "background-color": "#b06c26" },
                    "background-color": "#c4782a",
                    ":focus": { "background-color": "#b06c26" },
                    "border-radius": "40px",
                  },
                },
                text: { button: "Add to cart" },
              },
              cart: {
                styles: {
                  button: {
                    ":hover": { "background-color": "#b06c26" },
                    "background-color": "#c4782a",
                    ":focus": { "background-color": "#b06c26" },
                    "border-radius": "40px",
                  },
                },
                text: {
                  total: "Subtotal",
                  button: "Checkout",
                },
              },
              toggle: {
                styles: {
                  toggle: {
                    "background-color": "#c4782a",
                    ":hover": { "background-color": "#b06c26" },
                    ":focus": { "background-color": "#b06c26" },
                  },
                },
              },
            },
          })
        })
      })
    }

    if (window.ShopifyBuy?.UI) {
      ShopifyBuyInit()
    } else {
      const script = document.createElement("script")
      script.async = true
      script.src = scriptURL
      script.onload = ShopifyBuyInit
      document.head.appendChild(script)
    }
  }, [])

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
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4" id={product.componentId}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
