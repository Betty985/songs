<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logo" />
            <a-menu mode="horizontal" :style="{ lineHeight: '64px' }" @click="handleClick(e)">
                <template v-for="(item, index) in menuItems">
                    <a-menu-item v-if="!item.children" :key="`item-${index}`" :to="item._path">
                        <NuxtLink :key="`item-link-${index}`" :to="item._path">
                            {{ item.icon }} {{ item.title }}
                        </NuxtLink>
                    </a-menu-item>
                    <a-sub-menu v-else :key="`sub-menu-${index}`" :title="item.title">
                        <a-menu-item v-for="(subItem, subIndex) in item.children" :key="`sub-item-${index}-${subIndex}`"
                            :to="subItem._path">
                            <NuxtLink :key="`sub-item-link-${index}-${subIndex}`" :to="subItem._path">
                                {{ subItem.icon }} {{ subItem.title }}
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
const { navigation: menuItems } = useContent()
const handleClick = (e) => {
    console.log(e)
}
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
