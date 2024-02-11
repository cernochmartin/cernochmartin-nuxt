<script setup lang="ts">
const props = defineProps<{
    image: string
    alt: string
}>()
</script>
<template>
    <NuxtImg :src="props.image" :alt="props.alt" />
</template>