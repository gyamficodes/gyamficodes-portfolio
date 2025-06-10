<template>
  <NuxtLayout>
    <section class="overflow-auto !overflow-x-hidden relative">
      <NuxtPage />
      <button
        v-show="isVisible"
        @click="scrollToTop"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          enter: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300 },
          },
          hovered: { scale: 1.05 },
          tapped: { scale: 0.95 },
        }"
        class="fixed bottom-8 right-8 z-50 p-3 rounded-lg shadow-xl bg-[#020040] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,190,255,0.5)]"
        aria-label="Scroll to top"
      >
        <UIcon name="i-heroicons-arrow-up" class="h-6 w-6" />
      </button>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Optional: Add a subtle pulse animation */
button {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(14, 190, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(14, 190, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(14, 190, 255, 0);
  }
}
</style>
