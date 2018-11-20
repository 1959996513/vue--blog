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
//添加新文章
router.post('/articles/add',checkToken,ArticleController.addArticles)
//查找新文章的详细信息
router.get('/articles/:id',checkToken,ArticleController.getOneArticles)
//更新
router.post('/articles/updates/:id',checkToken,ArticleController.updateArticle)
//删除文章
router.delete('/articles/:id',checkToken,ArticleController.deleteArticle)
router.put('/articles/publish/:id',checkToken,ArticleController.publishArticle)

export  default router