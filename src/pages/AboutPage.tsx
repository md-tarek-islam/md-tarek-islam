import { Code2, Award, Users, Coffee } from "lucide-react"
import { skills } from "@/data/skills"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const stats = [
  { icon: Code2, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Award, label: "Years Experience", value: "3+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
]

export function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-linear-to-br from-primary/5 to-transparent py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Passionate web developer crafting digital experiences that make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-primary/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/tarek-islam.jpg"
                  alt="Tarek Profile"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Hi, I&apos;m Tarek</h2>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a full-stack web developer with over 3 years of experience building
                websites and web applications. I specialize in WordPress development, PHP
                backend systems, and modern front-end technologies including React.js,
                Tailwind CSS, and Bootstrap.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines clean code, responsive design, and performance
                optimization to deliver websites that not only look great but also
                convert visitors into customers. Whether you need a simple landing page
                or a complex e-commerce platform, I&apos;ve got you covered.
              </p>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "PHP", "React", "Tailwind", "Bootstrap", "HTML/CSS"].map(
                  (tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  )
                )}
              </div>
              <Button asChild>
                <Link to="/contact">Let&apos;s Work Together</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">My Tech Stack</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <Card key={skill.name}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <CardDescription>{skill.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
