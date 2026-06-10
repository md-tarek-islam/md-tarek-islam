import { Link } from "react-router-dom"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
            Available for freelance projects
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            I Build{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Websites
            </span>{" "}
            That Drive Results
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Full-stack web developer mastering WordPress, PHP, HTML, CSS, Bootstrap,
            Tailwind CSS. I craft fast, responsive, and scalable web
            solutions for businesses worldwide.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {["WordPress", "PHP", "React", "Tailwind", "Bootstrap"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
