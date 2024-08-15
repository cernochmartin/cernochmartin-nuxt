<script setup lang="ts">
const props = defineProps<{
    img: string
    link: string
}>()
</script>
<template>
    <NuxtLink :to="props.link">
        <div class="animation-transform w-[480px] h-[80px] rounded-md">
            <NuxtImg :src="props.img" />
        </div>
    </NuxtLink>
</template>