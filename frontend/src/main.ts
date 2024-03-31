import '@/assets/reset.css'
import '@/assets/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faS } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

import { createApp } from 'vue'
import App from '@/App.vue'

import router from './routes'

library.add(faS)

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')
