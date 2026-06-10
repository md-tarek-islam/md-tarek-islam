import { Link } from "react-router-dom"
import { ExternalLink, FolderGit, ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of recent work showcasing my expertise across WordPress, PHP,
            and modern front-end development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
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

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
