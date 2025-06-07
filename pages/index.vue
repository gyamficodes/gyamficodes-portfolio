<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <section
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
            type: 'spring',
            stiffness: 100,
            damping: 15,
            mass: 0.5,
          },
        },
        scrolled: {
          backgroundColor: '#020040',
          transition: {
            duration: 300,
          },
        },
      }"
      class="fixed w-full h-[90px] z-50"
      :class="isScrolled ? 'bg-[#020040] shadow-lg' : 'bg-transparent'"
    >
      <div class="w-[97%] lg:w-[95%] xl:w-[75%] mx-auto h-full px-3 lg:px-0">
        <div class="flex items-center justify-between h-full">
          <NuxtLink to="/">
            <h1
              v-motion="{
                initial: { scale: 0.8 },
                enter: { scale: 1 },
                transition: {
                  delay: 200,
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
                initial: { y: -20, opacity: 0 },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 300 + index * 100,
                  },
                },
              }"
              class="capitalize text-white text-[15px] font-[600] hover:text-[#0ebeff] transition-all duration-300 ease"
              :class="link.active ? 'text-[#0ebeff]' : ''"
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
                initial: { scale: 0, opacity: 0 },
                enter: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 900 + index * 100,
                    type: 'spring',
                  },
                },
              }"
              class="w-[23px] h-[23px] p-1 sm:w-[30px] sm:h-[30px] border-1 hover:bg-[#0ebeff] transition-all duration-300 hover:text-[#020040] rounded-md flex items-center justify-center border-[#0ebeff]"
            >
              <UIcon :name="icon.name" class="size-4 sm:size-5" />
            </NuxtLink>
          </div>

          <!-- menu icon -->
          <div @click="handdleSideBar" class="cursor-pointer lg:hidden">
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
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div
      class="w-[97%] lg:w-[95%] xl:w-[75%] mx-auto h-full px-3 lg:px-0 pt-[150px] lg:pt-0"
    >
      <div
        class="flex items-center justify-between h-full !flex-wrap lg:!flex-nowrap"
      >
        <div class="w-full h-full flex flex-col justify-center gap-5">
          <h3
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 400,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 400,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              inViewOnce: false,
            }"
            class="text-[20px] text-white"
          >
            <span class="text-[#ffA801]"><</span> hello world!
            <span class="text-[#ffA801]">/></span>
          </h3>
          <h1
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 500,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 500,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              inViewOnce: false,
            }"
            class="text-white text-[40px] lg:text-[60px] font-[700] leading-[50px]"
          >
            I'm <span class="text-[#0ebeff]">Gyamfi John</span>
          </h1>

          <p
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 700,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 700,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              inViewOnce: false,
            }"
            class="text-white text-[15px] font-[400] lg:w-[50%]"
          >
            A passionate fullstack developer with a knack for building stunning
            and functional web applications from intuitive front-end interfaces
            to robust back-end systems.
          </p>

          <div
            v-motion="{
              initial: { y: 50, opacity: 0 },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 600,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 600,
                  type: 'spring',
                  stiffness: 100,
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
              href="/assets/files/Gyamfi_John_CV.pdf"
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
                delay: 800,
                type: 'spring',
                stiffness: 100,
              },
            },
            visible: {
              // Changed from inView to visible for better semantics
              scale: 1,
              opacity: 1,
              transition: {
                delay: 800,
                type: 'spring',
                stiffness: 100,
              },
            },
            inViewOnce: false,
          }"
          class="relative"
        >
          <div class="shake">
            <img
              :src="BannerImage"
              class="w-full md:h-[450px] object-cover justify-center shadow-xl"
              style="transform: scale(1.08)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="h-[100vh]">
    <h1>Content Section</h1>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import BannerImage from "~/assets/images/model-DcS2olqc.png";

interface Link {
  to: string;
  text: string;
  active: boolean;
}

interface Icon {
  to: string;
  target: "_blank" | "_self" | "_parent" | "_top";
  name: string;
}

const isScrolled = ref(false);

const ShowSidebar = ref<boolean>(true);

const handdleSideBar = () => {
  ShowSidebar.value = !ShowSidebar.value;
};

const links = ref<Link[]>([
  { to: "/", text: "Home", active: true },
  { to: "/about", text: "About", active: false },
  { to: "/skills", text: "Skills", active: false },
  { to: "/experience", text: "Experience", active: false },
  { to: "/projects", text: "Projects", active: false },
  { to: "/contact", text: "Contact", active: false },
]);

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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
