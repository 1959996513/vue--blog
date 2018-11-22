import query from  '../utils/query'
import escape from '../utils/escape'
class BookModel {
    async getBook(){
        return await query(`SELECT * FROM RD_LIST`)
    }
    async upBook(id, { author,name, score}) {
        return await query(escape`UPDATE RD_LIST SET name=${name},author=${author},score=${score} WHERE id=${id}`)
    }
    async delBook(id){
        return await query(`DELETE FROM RD_LIST WHERE id=${id}`)
    }
    async addBook(name,author,score){
        return await query(escape `INSERT INTO RD_LIST SET name=${name},author=${author},score=${score}`)
    }
}
export default  new BookModel()