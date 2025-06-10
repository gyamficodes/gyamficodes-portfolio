export const useIcons = () => {

    interface Icon {
  to: string;
  target: "_blank" | "_self" | "_parent" | "_top";
  name: string;
}


const icons = ref<Icon[]>([
  {
    to: "https://github.com/gyamficodes",
    target: "_blank",
    name: "i-lucide-github",
  },
  {
    to: "https://www.linkedin.com/in/gyamfi-john-23aa5727b/",
    target: "_blank",
    name: "i-lucide-linkedin",
  },
  {
    to: "mailto:gyamfijohn08@gmail.com",
    target: "_blank",
    name: "i-lucide-mail",
  },
  {
    to: "https://www.instagram.com/gyamficodes_tech/",
    target: "_blank",
    name: "i-lucide-instagram",
  },
]);


return { icons }
}