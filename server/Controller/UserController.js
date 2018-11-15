//这是之前的写法,通常我们直接写成函数,直接暴露函数即可


// const login = async ctx=>{
//
// }
//
// export default {
//     login
// }

import User from '../model/UserModel'
import md5 from 'md5'
import createToken from '../utils/createToken'
//现在我们要使用ES6 class类
class UserController {
    //登录逻辑
    async login(ctx){
        let user = ctx.request.body.user
        let password = ctx.request.body.password
        //验证用户名/密码是否合法

    //    检查用户名是否存在
     const res = (await User.getUserByName(user))[0]
      if(res){
         console.log(res);
         if(res.password === md5(password)){
           let token = createToken(res.user)
             ctx.body = {
               sucess:true,
                 message:'成功',
                 token:token
             }
         }else{
             ctx.body={
                 success:false,
                 message:'密码错误,重新输入.....'
             }
         }
      }else{
            ctx.body = {
                success:false,
                message:'用户名不存在,请重新填写.....',

            }
      }

    //    检查密码是否正确


    //    生成token



        // 返回token
    }
    async logout(ctx){
        ctx.body={
            success:true,
            message:'退出成功'
        }
    }
}
export default new UserController()