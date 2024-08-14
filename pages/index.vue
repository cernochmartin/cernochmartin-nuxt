<script setup lang="ts">
const meta = useSiteMeta()

const banners = [
    {
        img: '/konference-tech.png',
        link: '/references/web'
    },
    {
        img: '/konference-tech.png',
        link: '/references/marketing'
    },
    {
        img: '/konference-tech.png',
        link: '/references/cloud'
    }
]

useSeoMeta({
    title: meta.SiteName + ' - Web Developer, IT Consultant, Marketing Coordinator',   
    description: meta.SiteDescription
})
</script>
<template>
    <section class="flex py-20">
        <div class="w-1/2 flex justify-center">
            <NuxtImg :src="meta.SiteLogo" class="rounded-xl" />
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
    </section>
</template>