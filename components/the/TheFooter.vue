<script setup lang="ts">
const year = new Date().getFullYear()
const meta = useSiteMeta()
</script>
<template>
    <footer class="h-12 flex flex-col gap-4 items-center justify-center text-footer fixed w-full pb-12">
        <p class="uppercase flex justify-between w-[240px]">
            <NuxtLink to="/contact" class="animation-underline">Contact</NuxtLink>
            <NuxtLink to="/references" class="animation-underline">References</NuxtLink>
        </p>
        <p>All rights reserved (c) {{ year }} - <NuxtLink to="mailto:cernochm@outlook.cz" target="_blank"
                class="animation-underline">{{ meta.SiteName }}</NuxtLink>
        </p>
    </footer>
</template>