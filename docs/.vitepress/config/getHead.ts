import type { HeadConfig } from 'vitepress'

export const getHead = (): HeadConfig[] => {
  return [
    [
      'link',
      {
        rel: 'icon',
        href: '/Pilot/favicon.svg',
      },
    ],
    ['meta', { name: 'theme-color', content: '#0066cc' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#0066cc' }],
    [
      'meta',
      { name: 'keywords', content: 'Vue3, 指令库, Pilot, Vue Directives' },
    ],
  ]
}
