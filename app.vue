<script setup lang="ts">
const navPopup = ref<boolean>(false)

const meta = useSiteMeta()

const showIntro = ref<boolean>(true)

onMounted(() => {
  setTimeout(() => {
    showIntro.value = false
  }, 1200)
})

function handleNavEvent(eventData: boolean) {
  if (eventData === true) {
    navPopup.value = true
  } else {
    navPopup.value = false
  }
}
</script>
<template>
  <div v-if="showIntro" class="min-height flex flex-col items-center justify-center">
    <h1>{{ meta.SiteName }}</h1>
    <h2>{{ meta.SiteTagLine }}</h2>
    <div class="loading-slider mt-24" />
  </div>
  <div v-else class="min-height">
    <div>
      <aside>
        <TheNav @isNavOpen="handleNavEvent" />
      </aside>
      <main v-if="navPopup" class="min-height flex items-center justify-center">
        <div>
          <div class="grid grid-cols-2 gap-x-16 gap-y-8 text-blue-primary uppercase font-semibold">
            <NuxtLink @click="navPopup = false" to="/" class="hover:text-white duration-300 text-5xl">Home</NuxtLink>
            <NuxtLink @click="navPopup = false" to="/references" class="hover:text-white duration-300 text-5xl">References</NuxtLink>
            <NuxtLink @click="navPopup = false" to="/skills" class="hover:text-white duration-300 text-5xl">Skills</NuxtLink>
            <NuxtLink @click="navPopup = false" to="/contact" class="hover:text-white duration-300 text-5xl">Contact</NuxtLink>
          </div>
          <div class="mt-8 w-full flex gap-4 items-center">
            <p class="text-2xl">Also on</p>
            <div class="flex gap-4">
              <NuxtLink to="https://www.linkedin.com/in/cernochmartin/" target="_blank">
                <i class="fa-brands fa-linkedin-in fa-md" />
              </NuxtLink>
              <NuxtLink to="https://github.com/cernochmartin" target="_blank">
                <i class="fa-brands fa-github fa-md" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </main>
      <main v-else>
        <NuxtPage />
      </main>
      <TheFooter v-if="!navPopup" />
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

body {
  color: #000000;
  background-color: #ffffff;
}

.dark-mode body {
  color: #ffffff;
  background-color: #000000;
}

h1 {
  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;
}

h2 {
  font-size: 32px;
  font-weight: 500;
}

h3,
a,
span {
  font-size: 24px;
}

p,
input {
  font-size: 16px;
}

p a {
  font-size: 16px;
}

header {
  width: 640px;
  margin: 0 auto;
  text-align: center;
}

.animation-underline {
  position: relative;
  text-decoration: none;
}

.animation-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s;
}

.animation-underline:hover::after {
  width: 100%;
}

.animation-transform {
  position: relative;
  overflow: hidden;
}

.animation-transform::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 200%;
  background: rgba(53, 89, 199, 0.8);
  transform: skewX(-45deg) translateX(-50%);
  transition: transform 0.5s ease-in-out;
}

.animation-transform:hover::after {
  transform: skewX(-45deg) translateX(50%);
}

.loading-slider {
  height: 8px;
  width: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgb(53, 89, 199));
  animation: loading-slider 1.5s infinite;
}

@keyframes loading-slider {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.min-height {
  min-height: 100vh;
}
</style>