import Book from '../model/BookModel'
import Article from "../model/ArticleModel";


class BookController {
    async getBook(ctx){
        let message= await Book.getBook();
        ctx.body={
            success:true,
            data:message
        }
    }
    async upBook(ctx){
        const id = ctx.params.id
        const book = ctx.request.body
        const res = await Book.upBook(id,book);
        ctx.body=res
    }
    async delBook(ctx){
        const id = ctx.params.id
        const res = await Book.delBook(id);
        ctx.body=res
    }
    async  addBook(ctx){
        let name = ctx.request.body.name;
        let author = ctx.request.body.author;
        let score = ctx.request.body.score;
        console.log(ctx.request.body)
        const res = await Book.addBook(name,author,score)
          ctx.body=res
    }

}
export default new BookController()
