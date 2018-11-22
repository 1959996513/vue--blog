import request from '@/utils/request'
// actions的方法跟mutation方法区别action可以写异步代码  motation只能写同步代码  通常把业务代码区放在actions里面
const actions={
  async saveArticle({commit,state},{id,title,tags,content,isPublished}){
    request({
      method:'post',
      url:`/articles/updates/${id}`,
      data:{
        title,
        tags,
        content,
        isPublished
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err);
    })
    commit('SET_CURRENT_ARTICLE',{id,title,tags,content,isPublished})
  }

}
export default actions
