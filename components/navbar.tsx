"use client"

import { useEffect, useState } from "react"
import { Instagram, MessageCircle, Menu, X, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Products", href: "#products", id: "products" },
  { label: "Our Story", href: "#story", id: "story" },
  { label: "Newsletter", href: "#newsletter", id: "newsletter" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">Agapets</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "border-b-2 pb-1 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-primary text-primary"
                    : "border-foreground/25 text-foreground hover:border-primary hover:text-primary",
                )}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            variant="outline"
            className="h-auto flex-col gap-1 rounded-xl border-foreground/20 bg-transparent px-4 py-2 text-foreground hover:border-primary hover:text-primary"
          >
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="h-6 w-6" />
              <span className="text-xs font-semibold">Instagram</span>
            </a>
          </Button>
          <Button
            asChild
            className="h-auto flex-col gap-1 rounded-xl px-4 py-2"
          >
            <a href="https://wa.me/61400000000" target="_blank" rel="noreferrer">
              <MessageCircle className="h-6 w-6" />
              <span className="text-xs font-semibold">WhatsApp</span>
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-[#FAF7F2] shadow-lg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-lg border-l-4 px-3 py-2.5 text-base font-semibold transition-colors",
                    isActive
                      ? "border-primary bg-secondary text-primary"
                      : "border-transparent text-foreground hover:bg-secondary",
                  )}
                >
                  {link.label}
                </a>
              )
            })}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button
                asChild
                variant="outline"
                className="h-auto flex-col gap-1 rounded-xl border-foreground/20 bg-transparent py-3 text-foreground"
              >
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="h-6 w-6" />
                  <span className="text-xs font-semibold">Instagram</span>
                </a>
              </Button>
              <Button asChild className="h-auto flex-col gap-1 rounded-xl py-3">
                <a href="https://wa.me/61400000000" target="_blank" rel="noreferrer">
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-xs font-semibold">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
