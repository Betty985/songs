<template>
    <div>
        posts--1
        <button @click="navigateTo('/posts')
            ">
            posts
        </button>
        <button @click="navigateTo('/')
            ">
            home
        </button>
        <main>
            <ContentDoc>
                <template #not-found>
                    <div>对不起，找不到文档。</div>
                </template>
            </ContentDoc>
        </main>
    </div>
</template>