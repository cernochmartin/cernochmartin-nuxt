<script setup lang="ts">
const icons = [
  {
    link: 'https://github.com/cernochmartin',
    icon: 'fa-brands fa-github fa-2xl'
  },
  {
    link: 'https://www.linkedin.com/in/cernochmartin/',
    icon: 'fa-brands fa-linkedin fa-2xl'
  }
]
</script>
<template>
  <div class="bg-secondary text-primary p-4">
    <div class="min-h-[100vh] flex justify-center items-center gap-16">
      <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-semibold">Martin Černoch</h1>
        <h2 class="text-3xl font-medium">SOFTWARE ENGINEERING STUDENT</h2>
        <div class="flex gap-4">
          <NuxtLink v-for="icon in icons" :key="icon.link" :to="icon.link" target="_blank">
            <i :class="icon.icon" />
          </NuxtLink>
        </div>
        <article>
          <p class="text-lg max-w-[520px]">Hey, I'm a student of Applied Informatics at VŠE Prague pursuing my career as
            a software developer. I'm also a founder and owner of <strong>Innodex s.r.o.</strong>, a company
            focused on web development, cloud solutions, and IT consulting.</p>
        </article>
        <NuxtLink to="https://www.innodex.cz" target="_blank" class="text-xl">Go to my company website <i
            class="fa-solid fa-arrow-right" /></NuxtLink>
      </div>
      <NuxtImg src="profile-picture.png" class="rounded-full max-xl:hidden" />
    </div>
  </div>
</template>