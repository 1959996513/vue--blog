// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//将状态管理的文件引入进来
import store from  '@/store'
//将图标库中js文件引入
import '@/assets/img/icon/iconfont'
//引入全局样式
import '@/assets/style/index.scss'
//插件在main.js中引入
import  VeeValidate from 'vee-validate'

//我们在这里引入消息提示插件
import Notifications from 'vue-notification'
Vue.use(VeeValidate)
Vue.use(Notifications)
//加入我们的权限判断
import '@/permission'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
