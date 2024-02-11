<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
    <footer class="h-12 flex items-center justify-center border-t-2 border-blue-secondary">
        <p>&#169; {{ year }} - Martin Černoch. All rights reserved.</p>
    </footer>
</template>