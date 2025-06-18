export const useLinks = () => {

    interface Link {
  to: string;
  text: string;
  active: boolean;
  selector: string ;
  label?: string;
}

const links = ref<Link[]>([
  { to: "/", text: "Home", active: true, selector: "#home" },
  { to: "/", text: "About", active: false, selector: "#about" },
  // { to: "/skills", text: "Skills", active: false },
  { to: "/", text: "Experience", active: false, selector: "#experience" },
  { to: "/", text: "Projects", active: false, selector: "#projects" },
  { to: "/", text: "Contact", active: false, selector: "#contact" },
]);


return { links}

}