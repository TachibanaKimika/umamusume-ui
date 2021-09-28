/*
 * @Author: Akarichan
 * @LastEditors: Akarichan
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'


import "animate.css"
import "./assets/icon/iconfont.css"

import './assets/style.css'
import './views/components/style.scss'

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/base16/classic-light.css'
Vue.use(VueHighlightJS)

import UmUI from '../packages'
Vue.use(UmUI)

Vue.config.productionTip = false



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')