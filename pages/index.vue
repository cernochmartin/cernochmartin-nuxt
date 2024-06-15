<script setup lang="ts">
const meta = useSiteMeta()

const banners = [
    {
        img: '/konference-tech.png',
        link: '/'
    },
    {
        img: '/konference-tech.png',
        link: '/'
    },
    {
        img: '/konference-tech.png',
        link: '/'
    }
]

useSeoMeta({
    title: meta.SiteName,
    description: meta.SiteDescription
})
</script>
<template>
    <div class="flex py-24">
        <div class="w-1/2 flex justify-center">
            <NuxtImg :src="meta.SiteLogo" />
        </div>
        <div class="w-1/2">
            <header>
                <h1>{{ meta.SiteName }}</h1>
                <h2>{{ meta.SiteTagLine }}</h2>
                <p class="mt-8">
                    {{ meta.SiteDescription }}
                </p>
            </header>
            <div class="mt-24 flex flex-col gap-8 items-center">
                <BaseBanner v-for="item in banners" v-bind="item" />
            </div>
        </div>
    </div>
</template>