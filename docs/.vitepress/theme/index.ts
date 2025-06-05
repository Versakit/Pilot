import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import { Pilot } from 'pilot'
import './index.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Pilot)
  },
}
