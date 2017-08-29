// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'iview/styles/index.less'

import Vue from 'vue'
import router from './router'

//多语言
import VueI18n from 'vue-i18n'
import iView from 'iview'

import axios from 'axios'
import VueAxios from 'vue-axios'

import zhLocale from './lang/zh-CN'
import enLocale from './lang/en-US'

import App from './App'

//全局变量
import store from './store'

Vue.use(VueAxios, axios)
Vue.use(VueI18n)
Vue.use(iView)

Vue.config.lang = 'zh-CN'
Vue.locale('zh-CN', zhLocale)
Vue.locale('en-US', enLocale)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
