import query from '../utils/query'

class UserModel{
    async getUserByName(user){
        return await query(`SELECT * FROM USER WHERE USER='${user}'`)
    }
}
export default  new UserModel()