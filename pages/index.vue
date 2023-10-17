<script setup lang="ts">
import { useLogger } from '@nuxt/kit'

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
    <div>
        <NuxtLayout>
            <pre>{{ data?.hello + ' content' }}</pre>
            <main>
                <ContentDoc />
            </main>
            <button @click="navigateTo('/posts')
                ">
                posts
            </button>
        </NuxtLayout>
    </div>
</template>


  