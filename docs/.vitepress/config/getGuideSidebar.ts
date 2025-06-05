import { DefaultTheme } from 'vitepress'

export const getGuideSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: '入门',
      items: [
        { text: '项目介绍', link: '/guide/versakit/' },
        { text: '安装指南', link: '/guide/installation/' },
        { text: '快速开始', link: '/guide/quickstart/' },
      ],
    },
    {
      text: '进阶',
      items: [
        { text: '自定义配置', link: '/guide/theme/' },
        { text: '性能优化', link: '/guide/accessibility/' },
        { text: '指令开发', link: '/guide/directives/' },
      ],
    },
    {
      text: '其他',
      items: [
        { text: '常见问题', link: '/guide/faq/' },
        { text: '更新日志', link: '/guide/log/' },
        { text: '贡献指南', link: '/guide/contributing/' },
      ],
    },
  ]
}
