<script setup lang="ts">
const isNavOpen = ref(false)
</script>
<template>
    <nav class="min-height w-20 border-r-2 border-white fixed flex flex-col justify-between items-center py-8">
        <i @click="isNavOpen = !isNavOpen" class="fa-solid fa-bars fa-2xl text-white cursor-pointer" />
        <div class="flex flex-col items-center gap-4">
            <NuxtLink to="https://www.linkedin.com/in/cernochmartin/" target="_blank">
                <i class="fa-brands fa-linkedin-in fa-md text-white" />
            </NuxtLink>
            <NuxtLink to="https://github.com/cernochmartin" target="_blank">
                <i class="fa-brands fa-github fa-md text-white" />
            </NuxtLink>
        </div>
    </nav>

    <div v-if="isNavOpen">
        <NuxtLink to="/" class="text-white">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white">About</NuxtLink>
        <NuxtLink to="/contact" class="text-white">Contact</NuxtLink>
    </div>
</template>