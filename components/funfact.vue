<template>
    <section id="fun-facts" class="relative py-20 bg-gradient-to-b from-[#0a0a1a] to-[#03032b] overflow-hidden">
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
              duration: 18000,
              repeat: Infinity,
              ease: 'linear',
              delay: 2000
            }
          }
        }"
        class="absolute w-[400px] h-[400px] rounded-full bg-[#0ebeff]/20 blur-[100px] -right-[200px] -bottom-[200px]"
      ></div>
    </div>

    <div class="relative container mx-auto px-6">
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
                damping: 10
              }
            }
          }"
          class="text-[20px] md:text-[35px] font-[600]"
        >
          
           <span class="text-[#ffA801]"><</span> 🚀 Fun Facts
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
                damping: 10
              }
            }
          }"
          class="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Some numbers that tell my development journey story
        </p>
      </div>

      <!-- Facts Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <!-- Happy Clients -->
        <div 
          v-motion="{
            initial: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 100,
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
          class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 hover:border-[#0ebeff]/60 transition-all duration-300 text-center"
        >
          <div class="text-4xl md:text-5xl font-bold text-[#0ebeff] mb-2">5+</div>
          <div class="text-sm md:text-base text-gray-300">Happy Clients</div>
          <UIcon name="i-heroicons-face-smile" class="mt-3 text-xl text-[#ffA801] mx-auto" />
        </div>

        <!-- Hours Logged -->
        <div 
          v-motion="{
            initial: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 200,
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
          class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 hover:border-[#0ebeff]/60 transition-all duration-300 text-center"
        >
          <div class="text-4xl md:text-5xl font-bold text-[#0ebeff] mb-2">7,900+</div>
          <div class="text-sm md:text-base text-gray-300">Working Hours Logged</div>
          <UIcon name="i-heroicons-clock" class="mt-3 text-xl text-[#ffA801] mx-auto" />
        </div>

        <!-- Awards -->
        <div 
          v-motion="{
            initial: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 300,
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
          class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 hover:border-[#0ebeff]/60 transition-all duration-300 text-center"
        >
          <div class="text-4xl md:text-5xl font-bold text-[#0ebeff] mb-2">2+</div>
          <div class="text-sm md:text-base text-gray-300">Awards / Recognitions</div>
          <UIcon name="i-heroicons-trophy" class="mt-3 text-xl text-[#ffA801] mx-auto" />
        </div>

        <!-- Coffee -->
        <div 
          v-motion="{
            initial: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 400,
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
          class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 hover:border-[#0ebeff]/60 transition-all duration-300 text-center"
        >
          <div class="text-4xl md:text-5xl font-bold text-[#0ebeff] mb-2">300+</div>
          <div class="text-sm md:text-base text-gray-300">Cups of Coffee <span class="text-[#ffA801]">☕</span></div>
          <UIcon name="i-heroicons-mug-hot" class="mt-3 text-xl text-[#ffA801] mx-auto" />
        </div>

        <!-- Projects -->
        <div 
          v-motion="{
            initial: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 500,
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
          class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 hover:border-[#0ebeff]/60 transition-all duration-300 text-center"
        >
          <div class="text-4xl md:text-5xl font-bold text-[#0ebeff] mb-2">15+</div>
          <div class="text-sm md:text-base text-gray-300">Projects Completed</div>
          <UIcon name="i-heroicons-check-badge" class="mt-3 text-xl text-[#ffA801] mx-auto" />
        </div>

        <!-- Lines of Code -->
        <div 
          v-motion="{
            initial: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 600,
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
          class="p-6 rounded-xl bg-gradient-to-br from-[#0a0a2a] to-[#0a0a2a]/50 backdrop-blur-sm border border-[#0ebeff]/20 hover:border-[#0ebeff]/60 transition-all duration-300 text-center"
        >
          <div class="text-4xl md:text-5xl font-bold text-[#0ebeff] mb-2">100k+</div>
          <div class="text-sm md:text-base text-gray-300">Lines of Code Written</div>
          <UIcon name="i-heroicons-code-bracket" class="mt-3 text-xl text-[#ffA801] mx-auto" />
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>