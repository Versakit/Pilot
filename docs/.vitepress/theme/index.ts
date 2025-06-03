import Theme from 'vitepress/theme'
import MyLayout from './Layout.vue'

// 引入样式
import './index.scss'
import 'virtual:group-icons.css'

// 引入组件库
import { VersakitDirectives } from '@versakit/directives'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.use(VersakitDirectives)
  },
}
