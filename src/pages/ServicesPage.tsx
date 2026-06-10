import { Link } from "react-router-dom"
import { Check, Globe, Server, Palette, ShoppingCart } from "lucide-react"
import { pricingPlans } from "@/data/pricing"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom themes, plugins, and full WordPress site builds with WooCommerce integration.",
  },
  {
    icon: Server,
    title: "PHP Backend Development",
    description:
      "Robust server-side applications, REST APIs, database design, and third-party integrations.",
  },
  {
    icon: Palette,
    title: "Front-End Development",
    description:
      "Responsive interfaces with HTML, CSS, Bootstrap, Tailwind CSS, and React.js components.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Online stores with payment gateways, inventory management, and conversion optimization.",
  },
]

export function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-transparent py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Services & Pricing</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Professional web development services tailored to your business needs and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">What I Offer</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-4 text-center text-3xl font-bold">Pricing Plans</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Choose from Basic, Standard, or Premium packages. All plans include responsive
            design and post-launch support.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative flex flex-col",
                  plan.popular && "border-primary shadow-lg ring-1 ring-primary"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> / project</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
