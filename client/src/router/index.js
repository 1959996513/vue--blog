import Vue from 'vue'
import Router from 'vue-router'
import Tags from '../components/Tags'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Tags
    }
  ]
})
