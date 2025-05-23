import { App } from 'vue'
import MHeader from './components/MHeader.vue'
import MFooter from './components/MFooter.vue'

// Export individual components
export { MHeader, MFooter }

// Export as Vue plugin
export default {
  install(app: App) {
    app.component('MHeader', MHeader)
    app.component('MFooter', MFooter)
  },
  MHeader,
  MFooter
} 