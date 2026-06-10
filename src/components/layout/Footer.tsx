import { Link } from "react-router-dom"
import { Code2, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { CiFacebook } from "react-icons/ci"
import { FaGithub } from "react-icons/fa";

const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "WordPress Development", href: "/services" },
    { label: "PHP Backend", href: "/services" },
    { label: "React Applications", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
  ],
}

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/md-tarek-islam", label: "GitHub" },
  { icon: CiFacebook, href: "https://www.facebook.com/tarekislam08", label: "Facebook" },
  { icon: Mail, href: "mailto:tarekbd597@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code2 className="h-5 w-5" />
              </div>
              <span>Tarek<span className="text-primary">.dev</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack web developer specializing in WordPress, PHP, and modern
              front-end technologies. Building fast, beautiful, and scalable websites.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Pages</h4>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["WordPress", "PHP", "HTML", "CSS", "Bootstrap", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tarek.dev. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed and developed by Uttom Kumar.
          </p>
        </div>
      </div>
    </footer>
  )
}
