<script setup lang="ts">
const colorMode = useColorMode()

function changeColorMode() {
    if (colorMode.preference === 'dark') {
        colorMode.preference = 'light'
    } else {
        colorMode.preference = 'dark'
    }
}
</script>
<template>
    <nav class="min-height w-20 border-r-2 border-color fixed flex flex-col justify-end items-center py-8">
        <div class="flex flex-col items-center gap-4">
            <i @click="changeColorMode()"
                class="fa-solid text-[24px] hover-text duration-300 cursor-pointer"
                :class="$colorMode.preference === 'dark' ? 'fa-sun' : 'fa-moon'" />
            <NuxtLink to="https://www.linkedin.com/in/cernochmartin/" target="_blank">
                <i class="hover-text duration-300 fa-brands fa-linkedin-in" />
            </NuxtLink>
            <NuxtLink to="https://github.com/cernochmartin" target="_blank">
                <i class="hover-text duration-300 fa-brands fa-github" />
            </NuxtLink>
            <NuxtLink to="mailto:martin.cernoch@innodex.cz" target="_blank">
                <i class="hover-text duration-300 fa-solid fa-envelope" />
            </NuxtLink>
        </div>
    </nav>
</template>