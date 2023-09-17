// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 是否开发SSR服务端渲染，默认开启
  ssr: true,
  // 是否开始调试工具
  devtools: { enabled: true },
  // 应用模块
  modules: ['@vant/nuxt'],
  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      },
    },
  },
})
