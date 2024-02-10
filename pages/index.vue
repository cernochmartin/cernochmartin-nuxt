<script setup lang="ts">
const meta = useSiteMeta()

useSeoMeta({
    title: meta.SiteName,
    ogTitle: meta.SiteName,
    description: meta.SiteDescription,
    ogDescription: meta.SiteDescription
})
</script>
<template>
    <HeroBanner :image="meta.SiteImage" alt="Me presenting at konference.tech." />
    <div>
        <h1 class="text-blue-primary">{{ meta.SiteName }}</h1>
        <h2>{{ meta.SiteTagLine }}</h2>
        <NuxtImg :src="meta.SiteLogo" alt="Me presenting at konference.tech." />
    </div>
</template>