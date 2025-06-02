import { App } from 'vue'
import MHeader from './components/MHeader.vue'
import MFooter from './components/MFooter.vue'
import MIcon from './components/Icon/MIcon.vue'
import MIconCopy from './components/Icon/MIconCopy.vue'
import MIconTokenM from './components/Icon/tokens/MIconTokenM.vue'
import MIconTokenWM from './components/Icon/tokens/MIconTokenWM.vue'

// Export individual components
export { MHeader, MFooter, MIcon, MIconCopy, MIconTokenM, MIconTokenWM }

// Export as Vue plugin
export default {
  install(app: App) {
    app.component('MHeader', MHeader)
    app.component('MFooter', MFooter)
    app.component('MIcon', MIcon)
    app.component('MIconCopy', MIconCopy)
    app.component('MIconTokenM', MIconTokenM)
    app.component('MIconTokenWM', MIconTokenWM)
  },
  MHeader,
  MFooter,
  MIcon,
  MIconCopy,
  MIconTokenM,
  MIconTokenWM
} 