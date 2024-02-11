<script setup lang="ts">
const meta = useSiteMeta()

useSeoMeta({
    title: meta.SiteName,
    ogTitle: meta.SiteName,
    description: meta.SiteDescription,
    ogDescription: meta.SiteDescription
})

const button = [
    {
        text: 'Read articles',
        fullBg: true,
        link: true,
        path: '/articles'
    },
    {
        text: 'See projects',
        fullBg: false,
        link: true,
        path: '/projects'
    }
]
</script>
<template>
    <section class="flex justify-between py-32">
        <div>
            <h1 class="text-blue-secondary">{{ meta.SiteName }}</h1>
            <h2>{{ meta.SiteTagLine }}</h2>
            <div class="flex gap-8 pt-4">
                <BaseButton v-for="content in button" v-bind="content" class="animation-link" />
            </div>
        </div>
        <div>
            <BaseImage image="profile-picture.png" alt="Me presenting at konference.tech in 27th October 2023." class="rounded-lg" />
        </div>
    </section>
</template>