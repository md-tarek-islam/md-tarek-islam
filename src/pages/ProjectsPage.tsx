import { ExternalLink, FolderGit } from "lucide-react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsPage() {
  return (
    <div>
      <section className="border-b border-border bg-linear-to-br from-primary/5 to-transparent py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A collection of web development projects built with WordPress, PHP, React,
              and modern CSS frameworks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                    {
                      project.github!== "" && (
                        <Button asChild variant="ghost" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FolderGit className="h-3.5 w-3.5" />
                            Code
                          </a>
                        </Button>
                      )
                    }
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
