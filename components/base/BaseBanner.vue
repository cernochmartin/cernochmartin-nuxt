<script setup lang="ts">
const props = defineProps<{
    img: string
    title: string
}>()
</script>
<template>
    <NuxtLink to="https://www.innodex.cz/services" target="_blank">
        <h3 class="text-secondary">{{ props.title }}</h3>
        <div class="animation-transform w-[480px] h-[80px] rounded-md">
            <NuxtImg :src="props.img" />
        </div>
    </NuxtLink>
</template>