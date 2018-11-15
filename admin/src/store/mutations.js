const mutations = {
SET_TOKEN:(state,token)=>{
  state.token=token
},
  SET_USERNAME:(state,username)=>{
  state.username=username
  },
  //设置当前文章,将它存放在vuex中
  SET_CURRENT_ARTICLE:(state,{id,title,tags,content,isPublished})=>{
  state.id=id
    state.title = title
    state.tags = tags
    state.content = content
    state.isPublished = isPublished
  },
  //设置当前文章是否删除
  SET_DELECT_ARTICLE:(state)=>{
  state.toggleDelete = !state.toggleDelete
  },
  //设置当前文章发布状态
  SET_PUBLISH_ARTICLE:(state)=>{
  state.isPublished = 1
  }
}
export  default mutations
