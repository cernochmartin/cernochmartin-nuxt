<script setup lang="ts">
const meta = useSiteMeta()

const banners = [
    {
        img: '/konference-tech.png',
        link: '/references/web',
        title: 'Web development'
    },
    {
        img: '/konference-tech.png',
        link: '/references/marketing',
        title: 'Marketing'
    },
    {
        img: '/konference-tech.png',
        link: '/references/cloud',
        title: 'IT consulting'
    }
]

useSeoMeta({
    title: `${meta.SiteName} - ${meta.SiteTagLine}`,
    description: meta.SiteDescription
})
</script>
<template>
    <section class="flex py-12">
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
            <div class="mt-12 flex flex-col gap-8 items-center">
                <BaseBanner v-for="item in banners" v-bind="item" />
            </div>
        </div>
    </section>
</template>