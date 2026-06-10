export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce WordPress Store",
    description:
      "Full-featured WooCommerce store with custom theme, payment gateway integration, and product filtering.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["WordPress", "PHP", "WooCommerce"],
    link: "#",
    github: "",
  },
  {
    id: 2,
    title: "Corporate Business Website",
    description:
      "Responsive corporate site built with Bootstrap, featuring CMS integration and SEO optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["HTML", "CSS", "Bootstrap"],
    link: "#",
    github: "",
  },
  {
    id: 3,
    title: "SaaS Dashboard UI",
    description:
      "Modern admin dashboard with Tailwind CSS, real-time analytics, and role-based access control.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Tailwind", "React", "PHP"],
    link: "#",
    github: "",
  },
  {
    id: 4,
    title: "Portfolio CMS Platform",
    description:
      "Custom WordPress theme with ACF fields, allowing clients to manage their portfolio content easily.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    tags: ["WordPress", "PHP", "ACF"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description:
      "Online reservation system with PHP backend, responsive design, and email notifications.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["PHP", "HTML", "CSS"],
    link: "#",
    github: "#",
  },
]
