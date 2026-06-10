import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="h-5 w-5" />
          </div>
          <span>Tarek<span className="text-primary">.dev</span></span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-3">
            <Link to="/contact">Hire Me</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent",
                  location.pathname === link.href
                    ? "text-primary bg-accent"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
