import Router from 'koa-router'
import {base_API} from "../config";
import UserController from  '../Controller/UserController'
import ArticleController from  '../Controller/ArticleController'
import checkToken from  '../utils/checkToken'
const router = new Router();
router.get('/',async ctx=>{
    ctx.body='hello one vue'
})
router.prefix(`${base_API}`)
//所有路由都写这里
router.post('/login',UserController.login)
router.get('/logout',checkToken,UserController.logout)
//获取所有文章
router.get('/articles',checkToken,ArticleController.getArticles)
export  default router