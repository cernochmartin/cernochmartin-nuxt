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
        class="px-2.5 text-white text-center py-1.5 rounded-md text-2xl animation-up">
        {{ props.text }} <i v-if="props.icon" class="fas fa-arrow-right" />
    </NuxtLink>
</template>
<style scoped>
.full {
    background-color: #3559c7;
    color: #ffffff;
}

.outline {
    background-color: transparent;
    border: 0.5px solid #3559c7;
    color: #3559c7;
}

.dark-mode .full {
    background-color: #00a3ff;
    color: #ffffff;
}

.dark-mode .outline {
    background-color: transparent;
    border: 0.5px solid #00a3ff;
    color: #00a3ff;
}
</style>