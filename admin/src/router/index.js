import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//引入登录组件
import Login from '@/components/Login'
//引入主页
import List from '@/components/List'
//引入标签页面
import Tag from '@/components/Tag'
//引入阅读
import ReadingList from '@/components/ReadingList'
//引入关于我
import About from '@/components/About'
export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/tags',
      component:Tag
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/reading',
      component:ReadingList
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
