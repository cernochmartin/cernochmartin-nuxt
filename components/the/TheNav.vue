<script setup lang="ts">
const isOpen = ref(false)

const emit = defineEmits(['isNavOpen'])

function isNavOpen() {
    if (isOpen.value === false) {
        emit('isNavOpen', !isOpen.value)
    } else {
        emit('isNavOpen', !isOpen.value)
    }
    isOpen.value = !isOpen.value
}
</script>
<template>
    <nav class="min-height w-20 border-r-2 border-white fixed flex flex-col justify-between items-center py-8">
        <i @click="isNavOpen()"
            class="hover:text-blue-primary duration-300 cursor-pointer fa-solid fa-bars fa-2xl text-white" />
        <div class="flex flex-col items-center gap-4">
            <NuxtLink to="https://www.linkedin.com/in/cernochmartin/" target="_blank">
                <i class="hover:text-blue-primary duration-300 fa-brands fa-linkedin-in fa-md text-white" />
            </NuxtLink>
            <NuxtLink to="https://github.com/cernochmartin" target="_blank">
                <i class="hover:text-blue-primary duration-300 fa-brands fa-github fa-md text-white" />
            </NuxtLink>
            <NuxtLink to="mailto:cernochm@outlook.cz" target="_blank">
                <i class="hover:text-blue-primary duration-300 fa-solid fa-envelope fa-md text-white" />
            </NuxtLink>
        </div>
    </nav>
</template>