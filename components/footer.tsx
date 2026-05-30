import { Instagram, MessageCircle, PawPrint } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">Agapets</span>
        </a>

        <p className="text-muted-foreground">Made with love in Melbourne 🐾</p>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Agapets on Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/61400000000"
            target="_blank"
            rel="noreferrer"
            aria-label="Message Agapets on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Agapets. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
