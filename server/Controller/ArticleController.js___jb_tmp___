import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
   let message= await Article.getArticles();
        ctx.body={
            success:true,
            data:message
        }
        // console.log(await Article.getArticles())
    }
}
export default new ArticleController()