<template>

</template>

<script>
  import request from '@/utils/request'
    export default {
        name: "ArticleList",
      data(){
          return{
            articleList:[]
          }
      },
      //当组件创建成功时自动执行请求
      created(){
          request({
            method:'get',
            url:'/articles'
          }).then(res=>{
            console.log(res)
            this.articleList.push(...res)
            console.log(this.articleList)
          }).catch(err=>{
            console.log(err)
          })
      }
    }
</script>

<style scoped>

</style>
