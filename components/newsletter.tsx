"use client"

import type React from "react"
import { useState } from "react"
import { PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6 md:py-28">
        <span className="flex justify-center">
          <PawPrint className="h-8 w-8" />
        </span>
        <h2 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Join the Agapets family
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
          Weekly tips on pet care, local Melbourne pet events, and exclusive early access to our products.
        </p>

        {submitted ? (
          <p className="mt-8 text-lg font-medium">Welcome to the family! Check your inbox soon. 🐾</p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="h-12 flex-1 rounded-full border-0 bg-primary-foreground px-5 text-base text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-full bg-foreground px-8 text-base text-background hover:bg-foreground/90"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
