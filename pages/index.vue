
<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/no-multiple-template-root -->


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import BannerImage from "~/assets/images/John-removebg-preview.png";
import funfact from "@/components/funfact.vue";
// Importing composables for data
import { useProject } from "@/composables/useProjects";
import { useLinks } from "@/composables/useLinks";
import {useIcons} from "@/composables/useIcons";
import {useSkills} from "@/composables/useSkills";
import { useTech} from "@/composables/useTech";
import { useExperience } from "@/composables/useExperience";

//  composables  data
const { projects } = useProject();
const { links } = useLinks();
const { icons } = useIcons();
const { skills } = useSkills();
const { techStack } = useTech();
const { experiences } = useExperience();


const isScrolled = ref(false);

const ShowSidebar = ref<boolean>(true);

const handdleSideBar = () => {
  ShowSidebar.value = !ShowSidebar.value;
};


const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});



// Helper function to ensure correct image paths
const getImagePath = (imageName: string) => {
  return new URL(`/assets/images/skills/${imageName}`, import.meta.url).href;
};



const getProjectImageUrl = (imagePath: string) => {
  return new URL(`/assets/images/project/${imagePath}`, import.meta.url).href;
};


const socialLinks = [
  {
    name: "GitHub",
    icon: "i-simple-icons-github",
    url: "https://github.com/gyamficodes",
  },
  {
    name: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    url: "https://www.linkedin.com/in/gyamfi-john-23aa5727b/",
  },
  {
    name: "linktree",
    icon: "i-simple-icons-linktree",
    url: "https://linktr.ee/Gyamficodes",
  },
  {
    name: "Instagram",
    icon: "i-simple-icons-instagram",
    url: "https://www.instagram.com/gyamficodes_tech/#",
  },
];

const handleScrollToView = (className: string) => {
  const element = document.querySelector(className);
  element?.scrollIntoView({ behavior: "smooth" });
};


function getProjectImageUrls(image: string) {
  return `/assets/images/project${image}` 
}



</script>



<template>

 


  <section
    id="home"
    class="bg-[url('/assets/images/photo_2020-07-24_20-37-32.jpg')] relative bg-center bg-cover bg-no-repeat h-auto lg:h-screen"
  >
    <!-- Animated Navbar -->
    <nav
      v-motion="{
        initial: {
          y: -100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'keyframes',
            duration: 300,
            ease: [0.25, 0.1, 0.25, 1], // Fast ease-out
          },
        },
        scrolled: {
          backgroundColor: '#020040',
          transition: {
            duration: 150,
            ease: 'linear',
          },
        },
      }"
      class="fixed w-full h-[90px] z-50"
      :class="isScrolled ? 'bg-[#020040] shadow-lg ' : 'bg-transparent'"
    >
      <div
        class="w-[97%] lg:w-[95%] xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0"
      >
        <div class="flex items-center justify-between h-full">
          <NuxtLink to="/">
            <h1
              v-motion="{
                initial: {
                  scale: 0.8,
                  opacity: 0,
                },
                enter: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: 'keyframes',
                    duration: 200,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 50,
                  },
                },
              }"
              class="cursor-pointer text-[15px] sm:text-[20px] md:text-[30px] font-[600]"
            >
              <span class="text-[#ffA801]"><</span> Gyamficodes
              <span class="text-[#ffA801]">/></span>
            </h1>
          </NuxtLink>

          <!-- Animated Links -->
          <div class="lg:flex items-center gap-8 hidden">
            <NuxtLink
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              v-motion="{
                initial: {
                  y: -20,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 400, // Snappier spring
                    damping: 25, // Quick settling
                    mass: 0.4, // Lighter feel
                    delay: 150 + index * 50, // Reduced base delay + stagger
                    duration: 300, // Explicit duration
                  },
                },
              }"
              class="capitalize text-white text-[15px] font-[600] hover:text-[#0ebeff] transition-all duration-300 ease"
              :class="link.active ? 'text-[#0ebeff]' : '#fff'"
              @click="handleScrollToView(link.selector)"
            >
              {{ link.text }}
            </NuxtLink>
          </div>

          <!-- Animated Icons -->
          <div class="flex items-center gap-3">
            <NuxtLink
              v-for="(icon, index) in icons"
              :key="index"
              :to="icon.to"
              :target="icon.target"
              v-motion="{
                initial: {
                  y: -20,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                    mass: 0.4,
                    delay: 150 + index * 50,
                    duration: 300,
                  },
                },
              }"
              class="w-[23px] h-[23px] p-1 sm:w-[30px] sm:h-[30px] border-1 border-[#0ebeff] hover:bg-[#0ebeff] transition-all duration-300 hover:text-[#020040] rounded-md flex items-center justify-center"
              :aria-label="icon.label || icon.name"
            >
              <UIcon
                :name="icon.name"
                class="size-4 sm:size-5"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>

          <!-- menu icon -->
          <div
            @click="handdleSideBar"
            class="cursor-pointer lg:hidden relative"
          >
            <transition name="fade-scale" mode="out-in">
              <UIcon
                v-if="ShowSidebar"
                name="i-lucide-menu"
                class="size-10 hover:scale-110 transition-transform duration-200"
                key="menu"
              />
              <UIcon
                v-else
                name="i-lucide-x"
                class="size-10 hover:scale-110 transition-transform duration-200"
                key="close"
              />
            </transition>

            <!-- sidebar -->
            <div class="relative lg:hidden">
              <!-- mobile side bar start -->
              <div class="absolute right-0 top-0">
                <div class="flex flex-col overflow-hidden relative z-[999]">
                  <div
                    v-for="(link, index) in links"
                    :key="index"
                    @click="handleScrollToView(link.selector || '' )"
                    :class="{
                      'translate-x-72': ShowSidebar,
                      '-translate-x-0': !ShowSidebar,
                    }"
                    class="h-[55px] w-[250px] cursor-pointer sm:w-[300px] rounded-lg rounded-r-none px-3 flex items-center bg-[#01033a] font-[600] capitalize group text-white transition-all"
                    :style="`transition-duration: ${700 - index * 100}ms`"
                  >
                    <span
                      class="transition-all duration-150 group-hover:translate-x-3"
                      >{{ link.text.toLowerCase() }}</span
                    >
                  </div>
                </div>
              </div>
              <!-- mobile side bar end -->
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div
      class="w-[97%] lg:w-[95%] xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0 pt-[150px] lg:pt-0"
    >
      <div
        class="flex items-center justify-between h-full !flex-wrap lg:!flex-nowrap"
      >
        <div class="w-full h-full flex flex-col justify-center gap-5">
          <h1
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 100, // reduced from 300
                  type: 'spring',
                  stiffness: 200, // increased from 100
                },
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 100, // reduced from 300
                  type: 'spring',
                  stiffness: 200, // increased from 100
                },
              },
              inViewOnce: false,
            }"
            class="text-[20px] text-white"
          >
            <span class="text-[#ffA801]"><</span> hello world!
            <span class="text-[#ffA801]">/></span>
          </h1>
          <h2
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 200,
                  type: 'spring',
                  stiffness: 200,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 200,
                  type: 'spring',
                  stiffness: 200,
                },
              },
              inViewOnce: false,
            }"
            class="text-white text-[40px] lg:text-[60px] font-[700] leading-[50px]"
          >
            I'm <span class="text-[#0ebeff]">Gyamfi John</span>
          </h2>

          <p
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 300,
                  type: 'spring',
                  stiffness: 200,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 300,
                  type: 'spring',
                  stiffness: 200,
                },
              },
              inViewOnce: false,
            }"
            class="text-white text-[15px] font-[400] lg:w-[50%]"
          >
            A passionate
            <span class="text-[#ffA801]">fullstack developer</span> with a knack
            for building stunning and functional web applications from intuitive
            front-end interfaces to robust back-end systems.
          </p>

          <div
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 400,
                  type: 'spring',
                  stiffness: 200,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 400,
                  type: 'spring',
                  stiffness: 200,
                },
              },
              inViewOnce: false,
            }"
            class="flex items-center gap-3"
          >
            <a
              href="mailto:gyamfijohn08@gmail.com"
              target="_blank"
              class="btn btn-wobble !text-[18px] rounded-md font-[500] flex items-center justify-center"
              >Hire Me</a
            >

            <a
              href="/Gyamfi John _CV.pdf"
              target="_blank"
              class="glow-on-hover !text-[18px] rounded-md font-[500] flex items-center justify-center"
            >
              Download CV</a
            >
          </div>
        </div>
        <div
          v-motion="{
            initial: { scale: 0.8, opacity: 0 },
            enter: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 500,
                type: 'spring',
                stiffness: 200,
              },
            },
            visible: {
              // Changed from inView to visible for better semantics
              scale: 1,
              opacity: 1,
              transition: {
                delay: 500,
                type: 'spring',
                stiffness: 200,
              },
            },
            inViewOnce: false,
          }"
          class="relative"
        >
        <div class="md:shake relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl group transition duration-500 ease-in-out hover:shadow-3xl">
  <img
    :src="BannerImage"
    class="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition duration-700 ease-in-out"
    alt="Gyamfi John - Fullstack Developer"
  />
  <!-- Optional gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
</div>

        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section
    id="about"
    style="
      background: linear-gradient(
        90deg,
        rgba(2, 0, 64, 1) 0%,
        rgba(3, 2, 85, 0.85) 35%,
        rgba(1, 3, 58, 0.9) 65%,
        rgba(0, 5, 50, 0.95) 85%,
        rgba(0, 0, 30, 1) 100%
      );
      background-attachment: fixed; /* Ensures gradient covers entire scroll area */
    "
    class="h-[auto] !py-[60px]"
  >
    <div
      class="w-[97%] lg:w-[95%] xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0"
    >
      <div class="grid lg:grid-cols-2 w-full gap-7">
        <!-- Left Column - About Content -->
        <div class="w-full">
          <div class="flex gap-5 flex-col">
            <!-- About Me Title -->
            <h1
              v-motion="{
                initial: { y: 20, opacity: 0 },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                  },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                  },
                },
                inViewOnce: false,
              }"
              class="text-[20px] md:text-[35px] font-[600]"
            >
              <span class="text-[#ffA801]"><</span> About Me
              <span class="text-[#ffA801]">/></span>
            </h1>

            <!-- First Paragraph -->
            <p
              v-motion="{
                initial: { y: 20, opacity: 0 },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 50,
                    type: 'spring',
                    stiffness: 200,
                  },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 50,
                    type: 'spring',
                    stiffness: 200,
                  },
                },
                inViewOnce: false,
              }"
              class="text-white/80 text-[15px] font-[400] leading-[25px]"
            >
              I'm a full-stack developer with 4+ years of experience building
              web applications using Vue.js, React, PHP, and C#/.NET. I
              specialize in Umbraco CMS solutions and have delivered measurable
              results like 30%+ revenue growth and 98% client retention through
              high-performance systems scoring 90+ in Lighthouse metrics. With
              3+ years of remote collaboration with global teams, I combine
              technical expertise with business-focused development.
            </p>

            <!-- Second Paragraph -->
            <p
              v-motion="{
                initial: { y: 20, opacity: 0 },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 100,
                    type: 'spring',
                    stiffness: 200,
                  },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 100,
                    type: 'spring',
                    stiffness: 200,
                  },
                },
                inViewOnce: false,
              }"
              class="text-white/80 text-[15px] font-[400] leading-[25px]"
            >
              My passion lies in creating seamless user experiences and scalable
              back-end systems. I thrive on challenges and am always eager to
              learn new technologies to enhance my skill set.
            </p>

            <!-- Skills & Tools Section -->
            <div
              v-motion="{
                initial: { scale: 0.8, opacity: 0 },
                enter: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 100 + index * 50,
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                  },
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 50 + index * 50,
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                  },
                },
                hovered: {
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400 },
                },
                inViewOnce: false,
              }"
            >
              <h1 class="text-white text-[20px] lg:text-[25px] mt-4 font-[600]">
                Skills & Tools
              </h1>
              <hr class="border-[#ffA801] w-full mb-4" />

              <div
                class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1"
              >
                <div
                  v-for="(tech, index) in techStack"
                  :key="index"
                  v-motion="{
                    initial: { scale: 0.8, opacity: 0 },
                    enter: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 50 + index * 30,
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                      },
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 50 + index * 20,
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                      },
                    },
                    hovered: {
                      scale: 1.05,
                      transition: { type: 'spring', stiffness: 400 },
                    },
                    inViewOnce: false,
                  }"
                  class="w-[90px] h-auto p-1 border-2 border-[#0ebeff]/40 rounded-lg bg-gradient-to-br from-[#0ebeff]/10 to-[#0ebeff]/05 shadow-sm hover:shadow-[0_0_10px_-2px_rgba(14,190,255,0.6)] transition-all duration-300 hover:border-[#0ebeff]/80 flex flex-col items-center justify-center group relative overflow-hidden"
                >
                  <!-- Animated inner glow -->
                  <div
                    class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,190,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                  <img
                    :src="getImagePath(tech.image)"
                    class="object-cover h-[40px] rounded-sm"
                    :alt="`${tech.name} logo`"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                  <p class="text-[12px] font-[700] mt-1">{{ tech.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Services -->
        <div class="w-full flex flex-col gap-5">
          <!-- What I Offer Title -->
          <h1
            v-motion="{
              initial: { y: 20, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                },
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                },
              },
              inViewOnce: false,
            }"
            class="text-[20px] md:text-[35px] font-[600]"
          >
            <span class="text-[#ffA801]"><</span> What I offer you?
            <span class="text-[#ffA801]">/></span>
          </h1>

          <!-- Services Grid -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-3"
          >
            <div
              v-for="(skill, index) in skills"
              :key="index"
              v-motion="{
                initial: { y: 30, opacity: 0, scale: 0.9 },
                enter: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 100 + index * 100,
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                  },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 100 + index * 100,
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                  },
                },
                hovered: {
                  y: -5,
                  transition: { type: 'spring', stiffness: 400 },
                },
                inViewOnce: false,
              }"
              class="w-full h-[200px] bg-[rgba(2,0,64,0.7)] gap-1 justify-center p-2 backdrop-blur-sm border border-[#0ebeff]/30 hover:border-[#0ebeff]/80 rounded-lg shadow-xl hover:shadow-[#0ebeff]/20 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group flex items-center flex-col"
            >
              <!-- Glow Effect -->
              <div
                class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,190,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <UIcon
                :name="skill.icon"
                class="size-10 text-[#0ebeff] group-hover:text-white transition-colors duration-300"
              />
              <h2
                class="capitalize font-bold text-center text-[#ffA801] text-[17px]"
              >
                {{ skill.title }}
              </h2>
              <p class="text-[12px] text-center">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section
    id="experience"
    class="relative h-auto py-[80px] bg-[#03032b] overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div
        v-motion="{
          initial: { x: -100, y: -100 },
          visible: {
            x: [0, -50, -30, -70, 0],
            y: [0, -30, -50, -20, 0],
            transition: {
              duration: 12000,
              repeat: Infinity,
              ease: 'linear',
            },
          },
        }"
        class="absolute w-[300px] h-[300px] rounded-full bg-[#ffA801]/20 blur-[80px] -left-[150px] -top-[150px]"
      ></div>
      <div
        v-motion="{
          initial: { x: 100, y: 100 },
          visible: {
            x: [0, 50, 30, 70, 0],
            y: [0, 30, 50, 20, 0],
            transition: {
              duration: 15000,
              repeat: Infinity,
              ease: 'linear',
              delay: 2000,
            },
          },
        }"
        class="absolute w-[400px] h-[400px] rounded-full bg-[#0ebeff]/20 blur-[100px] -right-[200px] -bottom-[200px]"
      ></div>
    </div>

    <div
      class="relative w-[97%] lg:w-[95%] xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0"
    >
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h1
          v-motion="{
            initial: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 10,
              },
            },
          }"
          class="text-[20px] md:text-[35px] font-[600] mb-3"
        >
          <span class="text-[#ffA801]"><</span> Professional Journey
          <span class="text-[#ffA801]">/></span>
        </h1>
        <p
          v-motion="{
            initial: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 100,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              },
            },
          }"
          class="text-white/60 max-w-2xl mx-auto text-sm md:text-base"
        >
          My career path as a fullstack developer, highlighting key roles,
          achievements, and technologies mastered along the way.
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="relative">
        <!-- Decorative timeline line -->
        <div
          class="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gradient-to-b from-[#0ebeff]/10 via-[#0ebeff] to-[#0ebeff]/10"
        ></div>

        <div class="space-y-16 pl-8 md:pl-12">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            v-motion="{
              initial: {
                x: index % 2 === 0 ? -50 : 50,
                opacity: 0,
                scale: 0.95,
              },
              visible: {
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 100 + index * 150,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                },
              },
              hovered: {
                y: -5,
                transition: { type: 'spring', stiffness: 400 },
              },
            }"
            class="relative group"
          >
            <!-- Animated timeline dot -->
            <div
              v-motion="{
                initial: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: {
                    delay: 200 + index * 150,
                    type: 'spring',
                    stiffness: 500,
                    damping: 10,
                  },
                },
                hovered: {
                  scale: 1.2,
                  boxShadow: '0 0 0 8px rgba(14, 190, 255, 0.2)',
                  transition: { type: 'spring', stiffness: 400 },
                },
              }"
              class="absolute w-4 h-4 rounded-full bg-[#0ebeff] -left-[12px] top-6 z-10 ring-4 ring-[#0ebeff]/10 group-hover:ring-[#0ebeff]/30 transition-all duration-300"
            ></div>

            <!-- Experience Card -->
            <div
              class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 group-hover:border-[#0ebeff]/60 transition-all duration-300 shadow-lg group-hover:shadow-[0_10px_30px_-10px_rgba(14,190,255,0.3)]"
            >
              <div
                class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"
              >
                <h2 class="text-xl md:text-2xl font-bold text-[#0ebeff]">
                  {{ exp.position }}
                </h2>
                <span
                  v-motion="{
                    initial: { scale: 0.8 },
                    visible: {
                      scale: 1,
                      transition: {
                        delay: 100 + index * 50,
                        type: 'spring',
                        stiffness: 500,
                      },
                    },
                  }"
                  class="px-3 py-1 text-sm font-medium rounded-full bg-[#0ebeff]/10 text-[#0ebeff] border border-[#0ebeff]/30"
                >
                  {{ exp.duration }}
                </span>
              </div>

              <div class="flex items-center gap-3 mb-3">
                <UIcon
                  name="i-heroicons-building-office-2"
                  class="text-[#ffA801] text-lg"
                />
                <h4 class="text-lg font-semibold text-white">
                  {{ exp.company }}
                </h4>
                <UIcon
                  v-if="exp.remote"
                  name="i-heroicons-globe-alt"
                  class="text-[#0ebeff] text-sm ml-auto"
                  title="Remote Position"
                />
              </div>

              <p class="text-white/80 mb-5">{{ exp.description }}</p>

              <div class="mb-4">
                <h5 class="text-sm font-medium text-[#ffA801] mb-2">
                  Key Achievements:
                </h5>
                <ul class="space-y-2">
                  <li
                    v-for="(achievement, aIndex) in exp.achievements"
                    :key="aIndex"
                    class="flex items-start text-white/70 text-sm"
                  >
                    <UIcon
                      name="i-heroicons-check-badge"
                      class="text-[#0ebeff] mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 class="text-sm font-medium text-[#ffA801] mb-2">
                  Technologies Used:
                </h5>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in exp.technologies"
                    :key="techIndex"
                    v-motion="{
                      initial: { scale: 0 },
                      visible: {
                        scale: 1,
                        transition: {
                          delay: 200 + index * 50 + techIndex * 30,
                          type: 'spring',
                          stiffness: 500,
                        },
                      },
                    }"
                    class="px-2 py-1 text-xs font-medium rounded bg-[#0ebeff]/10 text-[#0ebeff] border border-[#0ebeff]/20 hover:bg-[#0ebeff]/20 hover:text-white transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section
    id="projects"
    class="relative py-20 bg-gradient-to-b from-[#03032b] to-[#0a0a1a]"
  >
    <div
      class="w-[97%] lg:w-[95%] xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0"
    >
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden opacity-15">
        <div
          v-motion="{
            initial: { x: -100, y: -100 },
            visible: {
              x: [0, -50, -30, -70, 0],
              y: [0, -30, -50, -20, 0],
              transition: {
                duration: 15000,
                repeat: Infinity,
                ease: 'linear',
              },
            },
          }"
          class="absolute w-[300px] h-[300px] rounded-full bg-[#ffA801]/20 blur-[80px] -left-[150px] -top-[150px]"
        />
        <div
          v-motion="{
            initial: { x: 100, y: 100 },
            visible: {
              x: [0, 50, 30, 70, 0],
              y: [0, 30, 50, 20, 0],
              transition: {
                duration: 18000,
                repeat: Infinity,
                ease: 'linear',
                delay: 2000,
              },
            },
          }"
          class="absolute w-[400px] h-[400px] rounded-full bg-[#0ebeff]/20 blur-[100px] -right-[200px] -bottom-[200px]"
        />
      </div>

      <div class="relative container mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            v-motion="{
              initial: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                },
              },
            }"
            class="text-[20px] md:text-[35px] font-[600] mb-4"
          >
            <span class="text-[#ffA801]"><</span> Featured Projects
            <span class="text-[#ffA801]">/></span>
          </h2>
          <p
            v-motion="{
              initial: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 100,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                },
              },
            }"
            class="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A selection of my recent work showcasing full-stack development
            expertise
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            v-motion="{
              initial: { y: 50, opacity: 0, scale: 0.95 },
              visible: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 100 + index * 30,
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                },
              },
              hovered: {
                y: -10,
                transition: { type: 'spring', stiffness: 400 },
              },
            }"
            class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 hover:border-[#0ebeff]/60 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(14,190,255,0.3)]"
          >
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden">
              <NuxtImg
                :src="getProjectImageUrl(project.image)"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width="600"
                height="300"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"
              />
              <div class="absolute bottom-0 left-0 p-4">
                <h3 class="text-xl font-bold text-white">
                  {{ project.title }}
                </h3>
                <p class="text-[#0ebeff] text-sm">{{ project.category }}</p>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <p class="text-gray-300 mb-4">{{ project.description }}</p>

              <!-- Technologies -->
              <div class="mb-4">
                <h4 class="text-sm font-medium text-[#ffA801] mb-2">
                  Technologies
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-2 py-1 text-xs font-medium rounded bg-[#0ebeff]/10 text-[#0ebeff] border border-[#0ebeff]/20"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Project Links -->
              <div class="flex gap-3">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  class="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg bg-[#0ebeff]/10 text-[#0ebeff] hover:bg-[#0ebeff]/20 transition-colors"
                >
                  <UIcon name="i-heroicons-globe-alt" class="text-sm" />
                  Live Demo
                </a>
                <a
                  v-if="project.codeUrl"
                  :href="project.codeUrl"
                  target="_blank"
                  class="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <UIcon name="i-heroicons-code-bracket" class="text-sm" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- fuvfact component  -->
  <funfact />
  <!-- fuvfact component  -->

  <!-- Contact Section -->
  <section
    id="contact"
    class="relative py-20 bg-gradient-to-b from-[#03032b] to-[#0a0a1a] overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div
        v-motion="{
          initial: { x: -100, y: -100 },
          visible: {
            x: [0, -50, -30, -70, 0],
            y: [0, -30, -50, -20, 0],
            transition: {
              duration: 15000,
              repeat: Infinity,
              ease: 'linear',
            },
          },
        }"
        class="absolute w-[300px] h-[300px] rounded-full bg-[#ffA801]/20 blur-[80px] -left-[150px] -top-[150px]"
      ></div>
      <div
        v-motion="{
          initial: { x: 100, y: 100 },
          visible: {
            x: [0, 50, 30, 70, 0],
            y: [0, 30, 50, 20, 0],
            transition: {
              duration: 18000,
              repeat: Infinity,
              ease: 'linear',
              delay: 2000,
            },
          },
        }"
        class="absolute w-[400px] h-[400px] rounded-full bg-[#0ebeff]/20 blur-[100px] -right-[200px] -bottom-[200px]"
      ></div>
    </div>

    <div class="relative container mx-auto px-6 max-w-3xl text-center">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2
          v-motion="{
            initial: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
              },
            },
          }"
          class="text-3xl md:text-5xl font-bold mb-4"
        >
          <span class="text-[#ffA801]">👋</span> Say Hello!
        </h2>
        <p
          v-motion="{
            initial: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 100,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              },
            },
          }"
          class="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Get in touch and discover how I can contribute to the growth of your
          business and team.
        </p>
      </div>

      <!-- Primary CTA Button -->
      <div
        v-motion="{
          initial: { scale: 0.9, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 200,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            },
          },
          hovered: {
            scale: 1.05,
            transition: { type: 'spring', stiffness: 400 },
          },
        }"
        class="animating mb-5 w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center border border-white"
      >
        <UIcon name="i-lucide-arrow-down" class="size-5" />
      </div>
      <div
        v-motion="{
          initial: { scale: 0.9, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 200,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            },
          },
          hovered: {
            scale: 1.05,
            transition: { type: 'spring', stiffness: 400 },
          },
        }"
        class="mb-16"
      >
        <a
          href="mailto:gyamfijohn08.com"
          target="_blank"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#fea701] text-white font-bold hover:bg-[#0d9ed8] transition-all duration-300 text-lg border border-[#0ebeff]/30 hover:border-[#0ebeff]/60 hover:shadow-[0_0_20px_rgba(14,190,255,0.3)]"
          v-motion="{
            initial: { opacity: 0, y: 10 },
            enter: { opacity: 1, y: 0, transition: { delay: 200 } },
            hovered: { scale: 1.02 },
            tapped: { scale: 0.98 },
          }"
        >
          <UIcon name="i-heroicons-envelope" class="text-xl" />
          Send Me an Email
        </a>
      </div>

      <!-- Contact Details -->
      <div
        v-motion="{
          initial: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 200,
              type: 'spring',
              stiffness: 200,
              damping: 10,
            },
          },
        }"
        class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 rounded-xl p-8 max-w-2xl mx-auto"
      >
        <!-- Phone -->
        <div class="flex flex-col items-center gap-3 p-4">
          <div class="p-3 rounded-full bg-[#0ebeff]/10 text-[#0ebeff]">
            <UIcon name="i-heroicons-phone" class="text-xl" />
          </div>
          <h4 class="text-sm font-medium text-gray-400">Phone</h4>
          <a
            href="tel:+2348123456789"
            class="text-white hover:text-[#0ebeff] transition-colors"
            >+233 539214630</a
          >
        </div>

        <!-- Email -->
        <div class="flex flex-col items-center gap-3 p-4">
          <div class="p-3 rounded-full bg-[#0ebeff]/10 text-[#0ebeff]">
            <UIcon name="i-heroicons-envelope" class="text-xl" />
          </div>
          <h4 class="text-sm font-medium text-gray-400">Email</h4>
          <a
            href="mailto:hello@yourdomain.com"
            class="text-white hover:text-[#0ebeff] transition-colors"
            >gyamfijohn08@gmail.com</a
          >
        </div>

        <!-- Location -->
        <div class="flex flex-col items-center gap-3 p-4">
          <div class="p-3 rounded-full bg-[#0ebeff]/10 text-[#0ebeff]">
            <UIcon name="i-heroicons-map-pin" class="text-xl" />
          </div>
          <h4 class="text-sm font-medium text-gray-400">Location</h4>
          <p class="text-white">Sunyani, Ghana</p>
        </div>
      </div>

      <!-- Social Links -->
      <div
        v-motion="{
          initial: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 300,
              type: 'spring',
              stiffness: 200,
              damping: 10,
            },
          },
        }"
        class="mt-12"
      >
        <h4 class="text-sm font-medium text-gray-400 mb-6">Connect With Me</h4>
        <div class="flex justify-center gap-4">
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Follow me on ${social.name}`"
            class="w-[23px] h-[23px] border-1 border-[#0ebeff] rounded-md p-1 bg-[#0ebeff]/10 text-[#0ebeff] hover:bg-[#0ebeff]/20 hover:text-white transition-all"
            v-motion="{
              initial: { scale: 0 },
              visible: {
                scale: 1,
                transition: {
                  delay: 500 + index * 100,
                  type: 'spring',
                  stiffness: 500,
                },
              },
              hovered: {
                scale: 1.1,
              },
            }"
          >
            <UIcon :name="social.icon" class="text-xl" :aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="h-[70px] border-t border-[#020040a6] bg-[#020040]">
    <p
      class="py-4 text-white font-medium text-base md:text-lg font-work text-center"
    >
      Copyright © {{ new Date().getFullYear() }} – GyamfiCodes. All Rights
      Reserved
    </p>
   
  </div>



</template>



<style scoped>
/* Custom animations */
:deep(.v-motion-enter-active) {
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Glow effect on cards */
.group:hover .shadow-lg {
  box-shadow: 0 10px 30px -10px rgba(14, 190, 255, 0.3) !important;
}

/* Custom scrollbar for achievements */
ul {
  scrollbar-width: thin;
  scrollbar-color: #0ebeff #0ebeff10;
}

ul::-webkit-scrollbar {
  height: 4px;
}

ul::-webkit-scrollbar-track {
  background: #0ebeff10;
  border-radius: 10px;
}

ul::-webkit-scrollbar-thumb {
  background-color: #0ebeff;
  border-radius: 10px;
}

.animating {
  animation: move 1s linear infinite;
}

@keyframes move {
  0% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-10px);
  }
}
</style>
