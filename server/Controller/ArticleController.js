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
    async deleteArticle(ctx){
        const id = ctx.params.id
        console.log(id)
        const res=await Article.deleteArticle(id)
        ctx.body = res
    }
    async publishArticle(ctx){
        const id = ctx.params.id
        const  res = await  Article.publishArticle(id)
        ctx.body = res
    }
    async findTags(ctx){
        const  res = await  Article.findTags()
        ctx.body = res
    }
    async findBook(ctx){
        let data = ctx.request.body
        // console.log(data);
        const  res =await Article.findTags();
        let a = []
        if(data.length==0){
           ctx.body=res
        }else{
        for(let article of res){
            for(let b of data){
                if(article.tags.split(',').indexOf(b)!= -1){
                    a.push(article);
                    break;
                }
            }
        }
        ctx.body=a;
    }
    }
}
export default new ArticleController()