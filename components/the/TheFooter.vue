<script setup lang="ts">
const year = new Date().getFullYear()
const meta = useSiteMeta()
</script>
<template>
    <footer class="h-12 flex flex-col gap-4 items-center justify-center text-footer fixed w-full bottom-6">
        <p>All rights reserved (c) {{ year }} - <NuxtLink to="mailto:martin.cernoch@innodex.cz" target="_blank"
                class="animation-underline">{{ meta.SiteName }}</NuxtLink>
        </p>
    </footer>
</template>