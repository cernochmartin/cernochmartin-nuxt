<script setup lang="ts">
const meta = useSiteMeta()

const routes = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/articles',
        name: 'Articles'
    },
    {
        path: '/projects',
        name: 'Projects'
    },
    {
        path: '/auth',
        name: 'Login'
    },
]

const routeId = useId()
</script>
<template>
    <nav class="h-16 border-b-2 border-blue-secondary flex justify-between items-center px-28">
        <ul class="flex gap-8">
            <li v-for="route in routes" :key="routeId">
                <NuxtLink :to="route.path" class="animation-link">{{ route.name }}</NuxtLink>
            </li>
        </ul>
        <ul class="flex gap-8">
            <li v-for="sameAs in meta.SameAs" :key="routeId">
                <NuxtLink :to="sameAs.path" target="_blank" class="animation-link"><i :class="`${sameAs.icon}`" class="fa-xl" /></NuxtLink>
            </li>
        </ul>
    </nav>
</template>