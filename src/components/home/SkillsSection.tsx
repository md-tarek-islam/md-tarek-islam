import { skills } from "@/data/skills"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Expertise</h2>
          <p className="mt-4 text-muted-foreground">
            Technologies I master to deliver high-quality web development solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.name} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <CardDescription className="mt-1">{skill.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-semibold text-primary">{skill.level}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
