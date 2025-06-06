import type { App } from 'vue'
import { vDrag } from './drag'
import { vLazyLoad } from './lazy-load'
import { vThrottle } from './throttle'
import { vDebounce } from './debounce'
import { vRipple } from './ripple'
import { vIncrease } from './increase'
import { vCopy } from './copy'
import { vLongPress } from './long-press'
import { vTypewriter } from './typewriter'
import { vResize } from './resize'

export default {
  install(app: App) {
    app.directive('pilot-drag', vDrag)
    app.directive('pilot-lazy-load', vLazyLoad)
    app.directive('pilot-throttle', vThrottle)
    app.directive('pilot-debounce', vDebounce)
    app.directive('pilot-ripple', vRipple)
    app.directive('pilot-increase', vIncrease)
    app.directive('pilot-copy', vCopy)
    app.directive('pilot-long-press', vLongPress)
    app.directive('pilot-typewriter', vTypewriter)
    app.directive('pilot-resize', vResize)
  },
}
