<script setup lang="ts">
const meta = useSiteMeta()
defineProps(['error'])
const error = useError()

const handleError = () => {
  clearError({
    redirect: '/'
  })
}

useSeoMeta({
  title: meta.SiteName + ` ${error.value?.message}`,
  ogTitle: meta.SiteName + ` ${error.value?.message}`
})
</script>
<template>
    <button @click="handleError()">Go back</button>
    <TheFooter />
</template>