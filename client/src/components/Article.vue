<template>
    <div>
      <div v-for="{title,createTime,tags,id} in article" :key='article.createTime' class="box">
        <router-link  :to="'/articles/'+id" style="font-size: 20px;text-decoration: none;    color: rgba(195, 176, 145,.8);">文章标题:{{title}}</router-link>
        <p>创建时间:{{createTime}}</p>
        <router-link :to="'/articles/'+id" class="name">点击查看详细</router-link>
      </div>
    </div>


</template>

<script>
  import HeadNav from '@/components/common/HeadNav'

  import request from '@/util/request'
  import moment from 'moment'
    export default {
        name: "Article",
        components:{
          HeadNav
        },
      data(){
          return{
            article:[]
          }
      },
      created(){

          request({
              method:'get',
              url:'/article'
          }).then(res=>{
            for(let article of res.data){
              article.createTime = moment(article.createTime).format('YYYY年-MM月--DD日   HH:mm:ss');
            }
            this.article.push(...res.data)
            console.log(this.article)
          }).catch(err=>{
            console.log(err);
          })
      }

    }
</script>

<style scoped>
.name{
  text-decoration: none;
  color: orange;

}
  .box{
    color: rgba(195, 176, 145,.8);
    width:80%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid rgba(255,255,255,.5) ;
  }
</style>
