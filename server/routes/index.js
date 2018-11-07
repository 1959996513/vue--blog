import Router from 'koa-router'
const router = new Router();
router.get('/',async ctx=>{
    ctx.body='hello one vue'
})

//所有路由都写这里
export  default router