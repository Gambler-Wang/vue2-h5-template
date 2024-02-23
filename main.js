import Vue from 'vue'
import App from './App'
// 引入全局uView
import uView from '@/uni_modules/uview-ui'
import store from './store'
import globalFunc from '@/common/method.js'
import api from '@/api/index.js'
Vue.prototype.$http = api
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
uni.$u.setConfig({
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    unit: 'rpx',
  },
})
// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif
const app = new Vue({
  store,
  ...App,
})
Vue.use(globalFunc, app)
require('@/utils/http.js')(app)
app.$mount()
