// data/projects.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    link: string;
    latest?: boolean;
  }
  
export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
        "A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.",
        category: "Web Application",
        image: "🛒",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#",
        latest: true,
    },
    {
        id: 2,
        title: "Mobile Banking App",
        description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.",
        category: "Mobile App",
        image: "🏦",
        technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
        link: "#",
        latest: true,
    },
    {
        id: 3,
        title: "Design System",
        description:
        "Comprehensive design system with reusable components, documentation, and design tokens for consistent brand experience.",
        category: "Design System",
        image: "🎨",
        technologies: ["Figma", "Storybook", "React", "Tailwind CSS"],
        link: "#",
        latest: false,
    },
    {
        id: 4,
        title: "AI-Powered Dashboard",
        description:
        "Intelligent dashboard that uses machine learning to provide insights and predictions for business metrics.",
        category: "Web Application",
        image: "📊",
        technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
        link: "#",
        latest: true,
    },
    {
        id: 5,
        title: "Social Media Platform",
        description:
        "Feature-rich social media platform with real-time messaging, content sharing, and community features.",
        category: "Web Application",
        image: "📱",
        technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
        link: "#",
        latest: false,
    },
    {
        id: 6,
        title: "Portfolio Website",
        description:
        "Beautiful portfolio website with modern design, smooth animations, and responsive layout.",
        category: "Website",
        image: "💼",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "#",
        latest: false,
    },
];
