export interface Skill {
  name: string
  level: number
  icon: string
  description: string
}

export const skills: Skill[] = [
  {
    name: "WordPress",
    level: 95,
    icon: "🌐",
    description: "Custom themes, plugins, WooCommerce, and full site development.",
  },
  {
    name: "PHP",
    level: 90,
    icon: "🐘",
    description: "Backend logic, REST APIs, Laravel integration, and server-side apps.",
  },
  {
    name: "HTML & CSS",
    level: 98,
    icon: "🎨",
    description: "Semantic markup, responsive layouts, animations, and accessibility.",
  },
  {
    name: "Bootstrap",
    level: 92,
    icon: "📱",
    description: "Rapid prototyping with grid systems and pre-built components.",
  },
  {
    name: "Tailwind CSS",
    level: 94,
    icon: "💨",
    description: "Utility-first styling for modern, maintainable interfaces.",
  }
]
