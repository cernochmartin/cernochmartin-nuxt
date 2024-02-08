<script setup lang="ts">
// const { signIn } = useAuth()

definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    }
})
</script>
<template>
    auth
</template>