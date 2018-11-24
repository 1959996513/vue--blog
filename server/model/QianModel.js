import query from '../utils/query'
import eacape from '../utils/escape'
class QianModel{
    async getArticle(){
        return await query(`SELECT * FROM ARTICLE WHERE isPublished = 1 ORDER BY createTime DESC`)
    }
   async getthisArticle(id){
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
   }
   async guiDang(){
      return await query(`SELECT id,title,tags,publishTime FROM ARTICLE where isPublished=1 ORDER BY publishTime DESC`)
   }
   async biaoqian(){
        return await query(`SELECT id,title,tags,publishTime FROM ARTICLE where isPublished=1 ORDER BY publishTime DESC`)
   }
   async bookss(){
        return await query(`SELECT * FROM RD_LIST`)
   }
}
export default new QianModel()
