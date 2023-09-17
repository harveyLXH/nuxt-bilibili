<script setup lang="ts">
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-',
  description:
    '哔哩哔哩(blibli.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
  // 搜索关键词
  keywords: 'B站,blibli,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
})
</script>

<template>
  <!-- Nuxt 页面路由 相当于RouterView -->
  <!-- 缓存10级页面, 提升用户切换体验 -->
  <NuxtPage :keepalive="{ max: 10 }" />
</template>

<style lang="scss">
// 基础样式
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';

:root {
  /* css 变量设置组件库颜色 */
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
