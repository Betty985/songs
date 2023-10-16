<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logo" />
            <a-menu mode="horizontal" :style="{ lineHeight: '64px' }">
                <template v-for="item in menuItems">
                    <a-menu-item v-if="!item.children" :key="item._path" :to="item._path">
                        <NuxtLink :key="item._path" :to="item._path" active-class="font-bold" class="mr-6">
                            {{ item.title }}
                        </NuxtLink>
                    </a-menu-item>
                    <a-sub-menu v-else :key="item._path" :title="item.title">
                        <a-menu-item v-for="subItem in item.children" :key="subItem._path" :to="subItem._path">
                            <NuxtLink :key="subItem._path" :to="subItem._path" active-class="font-bold" class="mr-6">
                                {{ subItem.title }}
                            </NuxtLink>
                        </a-menu-item>
                    </a-sub-menu>
                </template>
            </a-menu>

        </a-layout-header>
        <a-layout-content style="padding: 0 50px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
                <slot />
            </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
    </a-layout>
</template>
<script lang="ts" setup>
const { navigation } = useContent()
const menuItems = navigation
console.log(menuItems)
</script>
<style scoped>
.site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
}

#components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
    background: #141414;
}

.ant-layout-header {
    background: white
}
</style>
