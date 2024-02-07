<script setup lang="ts">
const app = useAppConfig()

console.log(app.foo)
</script>
<template>
    <div>
        <h1 class="text-blue-primary">Černoch Martin blog</h1>
        <NuxtImg src="/profile-picture.png" alt="Me presenting at konference.tech." />
        {{ app.foo }}
    </div>
</template>