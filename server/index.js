import koa from 'koa'
const app = new koa()
import cros from "koa-cors"
import bodyparser from 'koa-bodyparser'
//路由文件
import router from './routes/index'
const app = new koa()
app.use(cros()).use(bodyparser()).use(router.routes())
app.listen(3000,()=>{
    console.log('china is  one ')
})