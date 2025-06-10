export const useSkills = () => {
    interface Skill {
  title: string;
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    title: "FullStack Development",
    description:
      "Fullstack Web and Application development with cutting edge MERN stack and other technologies for responsive designs and integrated features.",
    icon: "i-lucide-code",
  },
  {
    title: "Frontend Development",
    description:
      "Responsive Frontend Development and Browser Extension with Vue.JS, Nuxt.js, NextJs, ReactJs, Chrome extension and more for engaging user interfaces.",
    icon: "i-lucide-monitor",
  },
  {
    title: "Backend Development",
    description:
      "Backend API Development with PHP ,C# ,MYSQL  and Laravel to power app functionality.",
    icon: "i-lucide-server",
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-Platform Mobile App development using React Native , MAUI Hybrid for a unified experience.",
    icon: "i-lucide-smartphone",
  },
  {
    title: "API Integration",
    description:
      "Extending functionality through integrations with third-party APIs and real-time capabilities.",
    icon: "i-lucide-plug",
  },
  {
    title: "Content Creation & Consultation",
    description:
      "Sharing development knowledge through training, tutorials, blogs and code consultation services.",
    icon: "i-lucide-book-open",
  },
];

return { skills };
}