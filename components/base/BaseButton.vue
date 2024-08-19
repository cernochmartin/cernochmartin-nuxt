<script setup lang="ts">
const props = defineProps<{
    text: string
    path: string
    icon: boolean
    animation: boolean
    type: 'full' | 'outline'
}>()
</script>
<template>
    <NuxtLink :to="props.path" :class="type === 'full' ? 'full' : 'outline'"
        class="px-2.5 text-white text-center py-1.5 rounded-md text-2xl">
        {{ props.text }} <i v-if="props.icon" class="fas fa-arrow-right" />
    </NuxtLink>
</template>