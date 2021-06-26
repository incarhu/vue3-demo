import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './pages/App'
import '@/assets/scss/reset.scss'
import 'amfe-flexible'
import axios from './api/index.js'

import Vant from 'vant'
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'

/* 全局使用组件 */
import Plugin from '@/components/index.js'

// 工具函数
import utils from '@/assets/js/utils.js'
import 'cesium/Widgets/widgets.css'


const app = createApp(App)

// 配置全局使用的工具方法
app.config.globalProperties.$utils = utils
app.config.globalProperties.$axios = axios
app.use(router)
app.use(Vant)
app.use(store)
app.use(Plugin)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
