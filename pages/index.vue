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
      <div class="w-[97%] lg:w-[95%]  xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0">
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
      class="w-[97%] lg:w-[95%]  xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0 pt-[150px] lg:pt-0"
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
                  delay: 300,
                  type: 'spring',
                  stiffness: 100,
                },
              },
              visible: {
                // Changed from inView to visible for better semantics
                y: 0,
                opacity: 1,
                transition: {
                  delay: 300,
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
                delay: 700,
                type: 'spring',
                stiffness: 100,
              },
            },
            visible: {
              // Changed from inView to visible for better semantics
              scale: 1,
              opacity: 1,
              transition: {
                delay: 700,
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
  <section
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
    <div class="w-[97%] lg:w-[95%]  xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0">
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
                    delay: 100,
                    type: 'spring',
                    stiffness: 100,
                  },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 100,
                    type: 'spring',
                    stiffness: 100,
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
                    delay: 200,
                    type: 'spring',
                    stiffness: 100,
                  },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 200,
                    type: 'spring',
                    stiffness: 100,
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
                initial: { y: 20, opacity: 0 },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 300,
                    type: 'spring',
                    stiffness: 100,
                  },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 300,
                    type: 'spring',
                    stiffness: 100,
                  },
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
              <h3
                class="capitalize font-bold text-center text-[#ffA801] text-[17px]"
              >
                {{ skill.title }}
              </h3>
              <p class="text-[12px] text-center">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="experience" class="relative h-auto py-[80px] bg-[#03032b] overflow-hidden">
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
              ease: 'linear'
            }
          }
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
              delay: 2000
            }
          }
        }"
        class="absolute w-[400px] h-[400px] rounded-full bg-[#0ebeff]/20 blur-[100px] -right-[200px] -bottom-[200px]"
      ></div>
    </div>

    <div class="relative w-[97%] lg:w-[95%] xl:w-[90%] 2xl:w-[75%] mx-auto h-full px-3 lg:px-0">
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
                stiffness: 100,
                damping: 10
              }
            }
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
                damping: 10
              }
            }
          }"
          class="text-white/60 max-w-2xl mx-auto text-sm md:text-base"
        >
          My career path as a fullstack developer, highlighting key roles, achievements, and technologies mastered along the way.
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="relative">
        <!-- Decorative timeline line -->
        <div class="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gradient-to-b from-[#0ebeff]/10 via-[#0ebeff] to-[#0ebeff]/10"></div>
        
        <div class="space-y-16 pl-8 md:pl-12">
          <div 
            v-for="(exp, index) in experiences"
            :key="index"
            v-motion="{
              initial: { x: index % 2 === 0 ? -50 : 50, opacity: 0, scale: 0.95 },
              visible: {
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 100 + (index * 150),
                  type: 'spring',
                  stiffness: 100,
                  damping: 10
                }
              },
              hovered: {
                y: -5,
                transition: { type: 'spring', stiffness: 400 }
              }
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
                    delay: 200 + (index * 150),
                    type: 'spring',
                    stiffness: 500,
                    damping: 10
                  }
                },
                hovered: {
                  scale: 1.2,
                  boxShadow: '0 0 0 8px rgba(14, 190, 255, 0.2)',
                  transition: { type: 'spring', stiffness: 400 }
                }
              }"
              class="absolute w-4 h-4 rounded-full bg-[#0ebeff] -left-[12px] top-6 z-10 ring-4 ring-[#0ebeff]/10 group-hover:ring-[#0ebeff]/30 transition-all duration-300"
            ></div>
            
            <!-- Experience Card -->
            <div class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 group-hover:border-[#0ebeff]/60 transition-all duration-300 shadow-lg group-hover:shadow-[0_10px_30px_-10px_rgba(14,190,255,0.3)]">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 class="text-xl md:text-2xl font-bold text-[#0ebeff]">{{ exp.position }}</h3>
                <span 
                  v-motion="{
                    initial: { scale: 0.8 },
                    visible: {
                      scale: 1,
                      transition: {
                        delay: 300 + (index * 150),
                        type: 'spring',
                        stiffness: 500
                      }
                    }
                  }"
                  class="px-3 py-1 text-sm font-medium rounded-full bg-[#0ebeff]/10 text-[#0ebeff] border border-[#0ebeff]/30"
                >
                  {{ exp.duration }}
                </span>
              </div>
              
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-heroicons-building-office-2" class="text-[#ffA801] text-lg" />
                <h4 class="text-lg font-semibold text-white">{{ exp.company }}</h4>
                <UIcon 
                  v-if="exp.remote" 
                  name="i-heroicons-globe-alt" 
                  class="text-[#0ebeff] text-sm ml-auto"
                  title="Remote Position"
                />
              </div>
              
              <p class="text-white/80 mb-5">{{ exp.description }}</p>
              
              <div class="mb-4">
                <h5 class="text-sm font-medium text-[#ffA801] mb-2">Key Achievements:</h5>
                <ul class="space-y-2">
                  <li 
                    v-for="(achievement, aIndex) in exp.achievements"
                    :key="aIndex"
                    class="flex items-start text-white/70 text-sm"
                  >
                    <UIcon name="i-heroicons-check-badge" class="text-[#0ebeff] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 class="text-sm font-medium text-[#ffA801] mb-2">Technologies Used:</h5>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(tech, techIndex) in exp.technologies"
                    :key="techIndex"
                    v-motion="{
                      initial: { scale: 0 },
                      visible: {
                        scale: 1,
                        transition: {
                          delay: 400 + (index * 150) + (techIndex * 50),
                          type: 'spring',
                          stiffness: 500
                        }
                      }
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
  // { to: "/skills", text: "Skills", active: false },
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

// Helper function to ensure correct image paths
const getImagePath = (imageName: string) => {
  return new URL(`/assets/images/skills/${imageName}`, import.meta.url).href;
};

const experiences = [
  {
    position: " Fullstack Developer",
    company: "Fennelsoft Technologies",
    duration: "2023 - Present",
    remote: true,
    description: "Led the development of Clefmate, a hotel management SaaS used by 60+ clients across 3+ countries. Migrated legacy systems to a modern C# .NET, Blazor, and MSSQL stack—boosting performance, scalability, and client retention (98%).",
    achievements: [
      " Led full-stack development serving 60+ clients, contributing 30% company revenue",
      "Built and maintained client websites with 99.9% uptime and dynamic animations using Umbraco CMS + Framer Motion.",
      "Delivered high-performing web apps with 90+ Lighthouse scores, improving accessibility and cutting load times by 40%.",
      "Mentored 3 junior developers who later became mid-level engineers",
      "Implemented CI/CD pipelines with Azure DevOps, reducing deployment time by 50%",
    ],
    technologies: [ "C#", "PHP(Laravel)","Vue.js", "React", ".NET Core", "Azure", "Umbraco", "Docker", "Microservices"," MSSQL", "Blazor", "Tailwind CSS", "Git","Agile"]
  },
  {
    position: "Fullstack Developer",
    company: "InnovateMaritime Africa",
    duration: " 2024 – Present (Part-time)",
    description: "Contributing to the development of a web platform for connecting innovators, investors, and partners in the maritime sector",
    achievements: [
      "Designing and developing the organization's official website using WordPress",
      "Collaborating with the team to integrate content, collect stakeholder data, and ensure accessibility",
      "Customizing themes and plugins to meet branding and functionality needs",
      "Implementing responsive design for mobile and desktop users",
      "Collaborating with the team to integrate content, collect stakeholder data, and ensure accessibility",
    ],
    technologies: ["Vue.Js", "Next.Js", "PHP(Laravel)" ,"WordPress", "MYSQL", "GraphQL", "Tailwind CSS", "Stripe API","SQLite", "Git","Agile" ]
  },
  {
    position: "Junior Web Developer ",
    company: "Eziteck Solution",
    duration: "2021 - 2023",
    description: "Developed Ezi Food, a food delivery platform built with Laravel, Vue.js, and PostgreSQL, featuring real-time location tracking, integrated payments (Stripe/Paystack), and a scalable dashboard used by 50+ restaurants",
    achievements: [
      "Engineered high-performance APIs that reduced latency by 40%, leading to a 25% increase in checkout completion rates",
      "Led the adoption of Agile practices (Scrum/Kanban), improving team velocity and delivery timelines by 30%",
      "Redesigned the RAMS Engineering website with WCAG-compliant accessibility, resulting in a 15% increase in lead generation"
    ],
    technologies: ["Html", "Css3" , "TypeScript",  "Vue.Js", "JavaScript", "jQuery", "MySQL", "Bootstrap", "Tailwind CSS", "Agile (Scrum/Kanban)", "Git", "Jest", "PHP(Laravel)", "PostgreSQL", "Stripe API", "Paystack API"]
  }
];

</script>


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
</style>