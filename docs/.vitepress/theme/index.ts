import Theme from 'vitepress/theme'

// 引入样式
import './index.scss'
import 'virtual:group-icons.css'

// 引入组件库
import { VersakitDirectives } from 'pilot'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(VersakitDirectives)
  },
}
