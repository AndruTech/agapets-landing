"use client"

import { useEffect, useState } from "react"
import { Instagram, MessageCircle, Menu, X, PawPrint } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { label: "Products", href: "#products", id: "products" },
  { label: "Our Story", href: "#story", id: "story" },
  { label: "Newsletter", href: "#newsletter", id: "newsletter" },
]

const announcements = [
  "🐾 Free shipping on orders over $55 — Australia-wide",
  "🌿 All-natural ingredients. No preservatives. No nasties.",
  "🏠 Handmade in small batches in Melbourne",
]

function AnnouncementBar() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % announcements.length)
        setFading(false)
      }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#1E1610] px-4 py-2.5 text-center">
      <p
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
        className="text-xs font-semibold tracking-wide text-[#FAF6EF] md:text-sm"
      >
        {announcements[current]}
      </p>
    </div>
  )
}

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
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/AGAPETS_LOGO_SIN_FONDO.png"
              alt="Agapets Treats"
              width={200}
              height={200}
              className="h-40 w-auto object-contain"
            />
          </a>

          {/* Nav links — desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Social icons — desktop */}
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/61400000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-secondary hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="#products"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              Shop now
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border/60 bg-white md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const isActive = active === link.id
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                )
              })}
              <div className="mt-3 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/61400000000"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="#products"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-foreground py-2 text-center text-sm font-semibold text-background"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}