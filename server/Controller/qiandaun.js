import Qian from '../model/QianModel'
class qiandaun{
    async getArticle(ctx){
        ctx.body=await Qian.getArticle()
    }
   async getthisArticle(ctx){
        let id = ctx.params.id
       // console.log(ctx);
       ctx.body = await  Qian.getthisArticle(id)
   }
   async guiDang(ctx){
       ctx.body = await  Qian.guiDang()
   }
   async biaoqian(ctx){

            let res= await Qian.biaoqian()
       // console.log(res);
            ctx.body=res
   }
   async bookss(ctx){
        ctx.body = await Qian.bookss()
       console.log(ctx.body);
   }
}
export default new qiandaun()
