 export const useExperience = () => {


interface Experience {
  position: string;
  company: string;
  duration: string;
  remote?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}


    const experiences: Experience[] = [
  {
    position: " Fullstack Developer",
    company: "Fennelsoft Technologies",
    duration: "2023 - Present",
    remote: true,
    description:
      "Led the development of Clefmate, a hotel management SaaS used by 60+ clients across 3+ countries. Migrated legacy systems to a modern C# .NET, Blazor, and MSSQL stack—boosting performance, scalability, and client retention (98%).",
    achievements: [
      " Led full-stack development serving 60+ clients, contributing 30% company revenue",
      "Built and maintained client websites with 99.9% uptime and dynamic animations using Umbraco CMS + Framer Motion.",
      "Delivered high-performing web apps with 90+ Lighthouse scores, improving accessibility and cutting load times by 40%.",
      "Mentored 3 junior developers who later became mid-level engineers",
      "Implemented CI/CD pipelines with Azure DevOps, reducing deployment time by 50%",
    ],
    technologies: [
      "C#",
      "PHP(Laravel)",
      "Vue.js",
      "React",
      ".NET Core",
      "Azure",
      "Umbraco",
      "Docker",
      "Microservices",
      " MSSQL",
      "Blazor",
      "Tailwind CSS",
      "Git",
      "Agile",
    ],
  },
  {
    position: "Fullstack Developer",
    company: "InnovateMaritime Africa",
    duration: " 2024 – Present (Part-time)",
    description:
      "Contributing to the development of a web platform for connecting innovators, investors, and partners in the maritime sector",
    achievements: [
      "Designing and developing the organization's official website using WordPress",
      "Collaborating with the team to integrate content, collect stakeholder data, and ensure accessibility",
      "Customizing themes and plugins to meet branding and functionality needs",
      "Implementing responsive design for mobile and desktop users",
      "Collaborating with the team to integrate content, collect stakeholder data, and ensure accessibility",
    ],
    technologies: [
      "Vue.Js",
      "Next.Js",
      "PHP(Laravel)",
      "WordPress",
      "MYSQL",
      "GraphQL",
      "Tailwind CSS",
      "Stripe API",
      "SQLite",
      "Git",
      "Agile",
    ],
  },
  {
    position: "Junior Web Developer ",
    company: "Eziteck Solution",
    duration: "2021 - 2023",
    description:
      "Developed Ezi Food, a food delivery platform built with Laravel, Vue.js, and PostgreSQL, featuring real-time location tracking, integrated payments (Stripe/Paystack), and a scalable dashboard used by 50+ restaurants",
    achievements: [
      "Engineered high-performance APIs that reduced latency by 40%, leading to a 25% increase in checkout completion rates",
      "Led the adoption of Agile practices (Scrum/Kanban), improving team velocity and delivery timelines by 30%",
      "Redesigned the RAMS Engineering website with WCAG-compliant accessibility, resulting in a 15% increase in lead generation",
    ],
    technologies: [
      "Html",
      "Css3",
      "TypeScript",
      "Vue.Js",
      "JavaScript",
      "jQuery",
      "MySQL",
      "Bootstrap",
      "Tailwind CSS",
      "Agile (Scrum/Kanban)",
      "Git",
      "Jest",
      "PHP(Laravel)",
      "PostgreSQL",
      "Stripe API",
      "Paystack API",
    ],
  },
];
    return { experiences };

 }