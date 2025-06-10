 export const  useTech = () => {

    interface Technology {
  name: string;
  image: string;
}


const techStack: Technology[] = [
  { name: "JavaScript", image: "js.png" },
  { name: "Vue.JS", image: "vue.png" },
  { name: "React", image: "react.svg" },
  { name: "Next.JS", image: "next.svg" },
  { name: "TypeScript", image: "typescript.svg" },
  { name: "TailwindCSS", image: "tailwind.svg" },
  { name: "Bootstrap", image: "bootstrap.svg" },
  { name: "PHP", image: "php.png" },
  { name: "Laravel", image: "laravel.png" },
  { name: "Nodejs", image: "nodejs.svg" },
  { name: "SQL", image: "sql.svg" },
  { name: "MongoDb", image: "mongodb.svg" },
  { name: "Firebase", image: "firebase.svg" },
  { name: "Postgre", image: "postgre.png" },
  { name: "C#", image: "c.svg" },
  { name: "Git", image: "git.png" },
  { name: "Figma", image: "figma.svg" },
  { name: "AWS", image: "aws.png" },
  { name: "Sass", image: "sass.svg" },
  { name: "Docker", image: "docker.png" },
  { name: "Umbraco", image: "R.png" },
];

return { techStack}
 }
