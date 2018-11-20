<template>
    <div>
      <ul class="list">
        <li class="article" :class="{active:activeIndex === index, published:isPublished ===1}" v-for="{title,createTime,isPublished,isChosen},index in articleList" @click='select(index)'>
          <header>{{title}}</header>
          <p>{{createTime}}</p>
        </li>
      </ul>
      {{id}}
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
        ...mapState(['id','title','tags','content','isPublished','toggleDelete']),


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
            //  如果查询出文章将第一篇作为正在编辑的文章
            if(this.articleList!=0){
              this.SET_CURRENT_ARTICLE(this.articleList[0]);
              this.activeIndex=0;
            }

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
            //  如果发表了新文章的话,当前选中的文章需要下标需要+1
              this.activeIndex++
             //将
            }).catch(err=>{
              console.log(err)
            })
          },
        select(index){
            this.activeIndex=index
          // 将当前选中的文章扔到全局管理中
          this.SET_CURRENT_ARTICLE(this.articleList[index])
        },
        ...mapMutations(['SET_CURRENT_ARTICLE'])
      },
      //监听vuex里面的数据变化
      watch: {
        title(val) {
          if (this.articleList.length != 0) {
            this.articleList[this.activeIndex].title = val
          }
        },
        tags(val) {
          if (this.articleList.length != 0) {
            this.articleList[this.activeIndex].tags = val
          }
        },
        content(val) {
          if (this.articleList.length != 0) {
            this.articleList[this.activeIndex].content = val
          }
        },
        isPublished(val) {
          if (this.articleList.length != 0) {
            this.articleList[this.activeIndex].isPublished = val
          }
        },
        toggleDelete(val) {
          //如果这个值发生变化,从false变成true说明文章需要删除
          this.articleList.splice(this.activeIndex, 1);
          if (this.activeIndex === this.articleList.length) {
            this.activeIndex--
          }
          if (this.articleList.length !== 0) {
            this.SET_CURRENT_ARTICLE(this.articleList[this.activeIndex])
          } else {
            this.SET_CURRENT_ARTICLE({
              id: '',
              title: '',
              tags: '',
              content: '',
              isPublished: ''
            })
          }
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
