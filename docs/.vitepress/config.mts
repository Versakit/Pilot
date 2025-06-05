import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { getNav } from './config/nav'
import { getGuideSidebar } from './config/getGuideSidebar'
import { getDirectives } from './config/getDirectives'
import { getHead } from './config/getHead'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Pilot/',
  title: 'Pilot 指令库',
  description: '探索未知，引领创新的 Vue3 指令库',
  head: getHead(),
  themeConfig: {
    logo: '/favicon.svg',
    search: {
      provider: 'algolia',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...',
      },
    },
    nav: getNav(),
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/directives/': getDirectives(),
    } as any,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lenran659/Pilot' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/pilot' },
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2023-present Pilot 团队',
    },
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [groupIconVitePlugin() as any],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
      port: 3600,
    },
  },
})
