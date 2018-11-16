const getters={
getTags:state=>{
  if(state.tags.length!=0){

    return state.tags.split(',')
  }
  return[];
}
}
export default getters
