import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import ArticleList from '../components/ArticleList'
import Archive from '../components/Archive'
import Tags from '../components/Tags'
import Reading from '../components/Reading'
import My from '../components/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/wen',
      component:Article
    },
    {
      path:'/',
      component:My
    },
    {
      path:'/articles/:id',
      component:ArticleList
    },
    {
      path:'/archive',
      component:Archive
    },
    {
      path:'/reading',
      component:Reading
    },
    {
      path:'/tags',
      component:Tags
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
