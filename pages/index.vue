<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/no-multiple-template-root -->
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
              :class="link.active ? 'text-[#0ebeff]' : ''"
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
                    stiffness: 400, // Snappier spring
                    damping: 25, // Quick settling
                    mass: 0.4, // Lighter feel
                    delay: 150 + index * 50, // Reduced base delay + stagger
                    duration: 300, // Explicit duration
                  },
                },
              }"
              class="w-[23px] h-[23px] p-1 sm:w-[30px] sm:h-[30px] border-1 border-[#0ebeff] hover:bg-[#0ebeff] transition-all duration-300 hover:text-[#020040] rounded-md flex items-center justify-center"
            >
              <UIcon :name="icon.name" class="size-4 sm:size-5" />
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
            <div class="relative">
              <!-- mobile side bar start -->
              <div class="absolute right-0 top-0">
                <div class="flex flex-col overflow-hidden relative z-[999]">
                  <div
                    v-for="(link, index) in links"
                    :key="index"
                    @click="handleScrollToView(link.selector)"
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
          <h3
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
          </h3>
          <h1
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
          </h1>

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
          <div class="shake">
            <img
              :src="BannerImage"
              class="w-full md:h-[450px] object-cover justify-center shadow-xl"
              style="transform: scale(1.083"
            />
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
                <h3 class="text-xl md:text-2xl font-bold text-[#0ebeff]">
                  {{ exp.position }}
                </h3>
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
            <UIcon :name="social.icon" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="h-[70px] border-t border-[#020040a6] bg-[#020040]">
    <p
      class="py-4 text-white font-medium text-base md:text-lg font-work text-center"
    >
      Copyright © {{ new Date().getFullYear() }} – All Rights Reserved
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import BannerImage from "~/assets/images/model-DcS2olqc.png";
import funfact from "/components/funfact";
interface Link {
  to: string;
  text: string;
  active: boolean;
  selector?: string;
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
  { to: "/", text: "Home", active: true, selector: "#home" },
  { to: "/", text: "About", active: false, selector: "#about" },
  // { to: "/skills", text: "Skills", active: false },
  { to: "/", text: "Experience", active: false, selector: "#experience" },
  { to: "/", text: "Projects", active: false, selector: "#projects" },
  { to: "/", text: "Contact", active: false, selector: "#contact" },
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

const getProjectImageUrl = (imagePath) => {
  return new URL(`/assets/images/project/${imagePath}`, import.meta.url).href;
};
const projects = [
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
      "Ag",
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
    title: "NIM Avenue Booking System",
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
    image: "nimavenue.png",
    liveUrl: "https://nimavenuehotel.com",
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
