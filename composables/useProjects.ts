export const useProject = () => {


interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl: string | null;
    codeUrl: string | null;
}




const projects: Project[] = [
  {
    id: 1,
    title: "Clefmate Hotel SaaS",
    category: "Full-stack Web Application",
    description:
      "Hotel Management SaaS built with C#, .NET, MSSQL, Blazor scaled to 60+ clients, contributing 30% of company revenue with 98% retention.",
    technologies: [
      "C#",
      "Blazor",
      ".NET",
      "MSSQL",
      "BootStrap",
      "Azure",
      "Agile",
      "Microservices",
      "JavaScript",
    ],
    image: "friday.png",
    liveUrl: "https://app.clefmate.com/account/login",
    codeUrl: null,
  },
  {
    id: 2,
    title: "RAMS Engineering Site",
    category: "Corporate Website Redesign",
    description:
      "Redesigned and rebuilt the corporate website with HTML5, CSS3, JavaScript and jQuery, ensuring full WCAG 2.1 AA compliance for accessibility. Implemented responsive layouts, optimized contact forms, and performance enhancements that increased leads by 15% while achieving 95+ Lighthouse scores for accessibility and performance.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "WCAG 2.1",
      "Lighthouse",
      "SEO",
    ],
    image: "contact.png",
    liveUrl: "https://www.reamc.com/",
    codeUrl: null,
  },
  {
    id: 3,
    title: "Ezi Food",
    category: "Food Ordering Platform",
    description:
      "Food ordering platform developed with Laravel, Vue.js, and PostgreSQL. Features real-time tracking and Stripe/PayStack integration, serving 50+ restaurants.",
    technologies: [
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "Stripe",
      "PayStack",
      "Tailwind CSS",
      "TypeScript",
      "Jest",
      "Git",
      "PHPUnit",
      "MySQL",
      "Agile",
    ],
    image: "EziFood.png",
    liveUrl: "https://www.ezifood.com/location",
    codeUrl: null,
  },
  {
    id: 4,
    title: "Personal Portfolio",
    category: "Portfolio",
    description:
      "Modern developer portfolio built with Nuxt.js, Tailwind CSS, Nuxt UI and Vue Motion animations. Features smooth scroll-triggered animations and responsive design with 95+ Lighthouse scores.",
    technologies: [
      "Nuxt.Js",
      "Tailwind CSS",
      "Nuxt UI",
      "Vue Motion",
      "TypeScript",
      "Git",
      "SEO",
    ],
    image: "portfolio.png",
    liveUrl: "https://yourportfolio.com", // Update with your actual URL
    codeUrl: "https://github.com/gyamficodes/gyamficodes-portfolio", // Add your GitHub repo if public
  },

  {
    id: 5,
    title: "FennelSoft Website",
    category: "Company Website",
    description:
      "Built and managed company website with SEO architecture (90% page speed score) and implemented structured data markup increasing organic traffic by 30% YoY.",
    technologies: [
      "C#",
      "Umbraco",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "Framer Motion",
      "SEO",
    ],
    image: "fennelsoft.png",
    liveUrl: "https://fennelsoft.com",
    codeUrl: null,
  },
  {
    id: 6,
    title: "New Joko Hotel",
    category: "Reservation System",
    description:
      "Message-based reservation system handling 200+ monthly bookings with 99% uptime.",
    technologies: [
      "C#",
      "Umbraco",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "Framer Motion",
      "SEO",
    ],
    image: "Newjokohotel.png",
    liveUrl: "https://newjokohotel.com/",
    codeUrl: null,
  },
  {
    id: 7,
    title: "Aberfo Business Platform",
    category: "Corporate Website",
    description:
      "Designed and built a performant, cross-browser-compatible corporate website using Umbraco CMS, Tailwind CSS, JavaScript, jQuery and Framer Motion that increased conversions by 27%, achieved 95+ Lighthouse scores, and delivered flawless IE11+ support through a custom JavaScript SDK.",
    technologies: [
      "C#",
      "Umbraco",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "Framer Motion",
      "SEO",
    ],
    image: "aberfo.png",
    liveUrl: "https://aberfo.com",
    codeUrl: null,
  },
  {
    id: 8,
    title: "Ecormence Advance Filtering App",
    category: "Ecormence",
    description:
      "Experience seamless online shopping with my advanced e-commerce filter app, a side project built with React, Tailwind CSS, and JavaScript. It offers personalized product searches for a streamlined shopping experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
    image: "Ecormence.png",
    liveUrl: "https://aberfo.com",
    codeUrl: null,
  },
];


const experiences = [
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
return { projects }

}