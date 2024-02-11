<script setup lang="ts">
const props = defineProps<{
    fullBg: boolean
    text: string
    link?: boolean
    path?: string
}>()
</script>
<template>
    <template v-if="props.fullBg">
        <button class="bg-blue-secondary rounded-lg text-white px-4">
            <NuxtLink :to="props.path">{{ props.text }}</NuxtLink>
        </button>
    </template>
    <template v-else-if="!props.fullBg">
        <button class="border-2 border-blue-secondary rounded-lg px-4">
            <NuxtLink :to="props.path">{{ props.text }}</NuxtLink>
        </button>
    </template>
</template>