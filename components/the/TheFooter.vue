<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
    <footer class="h-12 flex flex-col gap-4 items-center justify-center text-white/50">
        <p class="uppercase flex justify-between w-[240px]">
            <NuxtLink to="/contact" class="animation-underline">Contact</NuxtLink>
            <NuxtLink to="/references" class="animation-underline">References</NuxtLink>
        </p>
        <p>&#169; {{ year }} - <NuxtLink to="mailto:cernochm@outlook.cz" target="_blank" class="animation-underline">
                Martin Černoch</NuxtLink>.
            All rights reserved.
        </p>
    </footer>
</template>