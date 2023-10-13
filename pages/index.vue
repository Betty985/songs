<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
});

const { data } = await useFetch(
    '/api/hello',
    {
        method: 'post',
        body: {
            need: 'posts/1'
        }
    }
);
</script>

<template>
    <pre>{{ data }}</pre>
    <a-button type="primary">Primary Button</a-button>
    <main>
        <ContentDoc />
    </main>
    <button @click="navigateTo('/posts')
        ">
        posts
    </button>
</template>


  