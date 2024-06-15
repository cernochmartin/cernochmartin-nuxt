<script setup lang="ts">
const meta = useSiteMeta()

const showIntro = ref(true)

onMounted(() => {
  setTimeout(() => {
    showIntro.value = false
  }, 1500)
})
</script>
<template>
  <div v-if="showIntro" class="bg-black min-height flex flex-col items-center justify-center">
    <h1>{{ meta.SiteName }}</h1>
    <h2>{{ meta.SiteTagLine }}</h2>
  </div>
    <div v-else class="bg-black text-white min-height">
      <aside>
        <TheNav />
      </aside>
      <main>
        <NuxtPage />
      </main>
      <TheFooter />
    </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
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

.min-height {
  min-height: 100vh;
}
</style>