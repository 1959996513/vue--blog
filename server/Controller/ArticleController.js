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
    async addArticles(ctx){
        const res = await Article.addArticle();
        ctx.body=res
    }
    async getOneArticles(ctx){
        const res = await Article.getOneArticle(ctx.params.id);
        ctx.body=res
    }
    async updateArticle(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }
}
export default new ArticleController()