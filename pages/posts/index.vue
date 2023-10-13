<template>
    posts
    <button @click="navigateTo('/posts/1')
        ">
        posts--1
    </button>
    <main>
        <ContentDoc />
    </main>
</template>
<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
})
</script>
