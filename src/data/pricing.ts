export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$199",
    description: "Perfect for personal websites and small landing pages.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 revision round",
      "7-day delivery",
    ],
  },
  {
    name: "Standard",
    price: "$399",
    description: "Ideal for business websites with CMS and custom features.",
    features: [
      "Up to 15 pages",
      "WordPress CMS setup",
      "Custom theme design",
      "Blog integration",
      "Advanced SEO",
      "3 revision rounds",
      "14-day delivery",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$599",
    description: "Full-scale web applications with advanced functionality.",
    features: [
      "Unlimited pages",
      "Custom PHP/React development",
      "E-commerce integration",
      "Performance optimization",
      "Priority support (30 days)",
      "Unlimited revisions",
      "30-day delivery",
    ],
  },
]
