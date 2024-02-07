<script setup lang="ts">
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
        path: '/auth',
        name: 'Login'
    },
]

const routeId = useId()
</script>
<template>
    <nav>
        <ul>
            <li v-for="route in routes" :key="routeId">
                <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>