<script setup lang="ts">
const props = defineProps<{
    img: string
    link: string
    title: string
}>()
</script>
<template>
    <NuxtLink :to="props.link">
        <h3 class="text-secondary">{{ props.title }}</h3>
        <div class="animation-transform w-[480px] h-[80px] rounded-md">
            <NuxtImg :src="props.img" />
        </div>
    </NuxtLink>
</template>