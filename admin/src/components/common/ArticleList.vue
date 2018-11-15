<template>
    <div>
      <ul class="list">
        <li class="article" :class="{active:activeIndex === index, published:isPublished ===1}" v-for="{title,createTime,isPublished,isChosen},index in articleList">
          <header>{{title}}</header>
          <p>{{createTime}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import request from '@/utils/request'
  import moment from 'moment'
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "ArticleList",
      data(){
          return{
            activeIndex:-1,
            articleList:[]
          }
      },
      //引入vuex里面的全局方法  吧vue
      computed:{
        ...mapState(['id','title','tags','content','isPublished']),
          ...mapMutations(['SET_CURRENT_ARTICLE'])

      },
      //当组件创建成功时自动执行请求
      created(){
          request({
            method:'get',
            url:'/articles'
          }).then(res=>{
            for(let article of res.data){
             article.createTime = moment(article.createTime).format('YYYY年-MM月--DD日   HH:mm:ss');
              article.isChosen=true
            }
            this.articleList.push(...res.data)
          }).catch(err=>{
            console.log(err)
          })
      },
      methods:{
          updateList(updateId){
            request({
              method:'get',
              url:`/articles/${updateId}`
            }).then(res=>{
              console.log(res)
              const article = res[0]
              article.createTime = moment(article.createTime).format('YYYY年 MM月 DD日 HH:mm:ss')
              article.isChosen = true
              this.articleList.unshift(article)

            }).catch(err=>{
              console.log(err)
            })
          }
      }
    }
</script>

<style  lang="scss" type='text/scss' scoped>
  @import  "../../assets/style/variable";

  .article {
  @include flex($flow: column wrap, $align: flex-start);
    padding: 0.2em 0.5em;
    margin-bottom: 1.5em;
    height: 5em;
    max-width: 100%;
    background: $white;
    border: 0.1em solid $special;
    cursor: pointer;
  header {
    max-width: 100%;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.2em;
  }
  p {
    margin: 0;
    color: $special;
  }
  &:last-child {
     margin-bottom: 0;
   }
  }

  .active {
    border: 1px solid $base;
  }

  .published {
    border-right: 4px solid $base;
  }
</style>
