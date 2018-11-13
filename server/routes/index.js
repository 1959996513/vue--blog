import Router from 'koa-router'
import {base_API} from "../config";

const router = new Router();
router.get('/',async ctx=>{
    ctx.body='hello one vue'
})
router.prefix(`${base_API}`)
//所有路由都写这里
router.get('/index',async ctx=>{
    ctx.body="我是首页"
})
export  default router