import Router from 'koa-router'
import {base_API} from "../config";
import UserController from  '../Controller/UserController'
import ArticleController from  '../Controller/ArticleController'
import BookController  from  '../Controller/BookController'
import BriefController from '../Controller/BriefController'
import qiandaun from '../Controller/qiandaun'
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
router.get('/book',checkToken,BookController.getBook)
router.post('/book/up/:id',checkToken,BookController.upBook)
router.delete('/book/delete/:id',checkToken,BookController.delBook)
router.post('/book/add',checkToken,BookController.addBook)
//查找标签
router.get('/tags',checkToken,ArticleController.findTags)
router.post('/findbook',checkToken,ArticleController.findBook)

//关于我获取
router.get('/briefs',checkToken,BriefController.getBrief)
router.put('/briefs/:id',checkToken,BriefController.updateBrief)




//前台路由
//文章那个页面
router.get("/article",qiandaun.getArticle)
router.get("/articless/:id",qiandaun.getthisArticle)
router.get("/gui",qiandaun.guiDang)
router.get("/tagss",qiandaun.biaoqian)
router.get("/readings",qiandaun.bookss)
export  default router