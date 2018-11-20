import query from  '../utils/query'
import escape from  '../utils/escape'
class ArticleModel {
    async getArticles(){
        return await query('SELECT * FROM ARTICLE ORDER BY createTime DESC')

    }
    async addArticle(){
        return await query(`INSERT INTO ARTICLE SET title='新文章',tags='',createTime=NOW(),publishTime=NOW(),content=''`)
    }
   async getOneArticle(id){
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
   }
   async updateArticle(id,{title,tags,content,isPublish}){
        return await query(escape`UPDATE ARTICLE SET title=${title},tags=${tags},content=${content} WHERE id = ${id}`)
   }
}
export default  new ArticleModel()