<template>
    <div>
      <div class="box">
        <p>
          <span style='color: #a71d5d;'>文章标题:</span><br>
          {{title}}
        </p>
        <p>
          <span style='color: #a71d5d;'>创建时间:</span><br>
          {{publishTime}}
        </p>
        <p>
          <span style='color: #a71d5d;'>  内容:</span><br>
          {{content}}
        </p>
        <span style='color: #a71d5d;'>标签:</span>
        <p>
          <span style="color:orangered;"   v-for="tag in tags"><span style="color: #a71d5d;">#</span>{{tag}}</span>
        </p>
      </div>
    </div>
</template>

<script>
  import request from '@/util/request'
  import moment from 'moment'
    export default {
        name: "ArticleList",
      data(){
          return{
            title: '',
            publishTime: '',
            tags: '',
            content: ''
          }
      },
      created(){
        const id = this.$route.params.id
        request({
          url:`/articless/${id}`,
          method:'get'
        }).then(res=>{
          const data = res.data[0]
          this.title = data.title
          this.publishTime = moment(data.publishTime).format('YYYY年 MM月 DD日 HH:mm:ss')
          this.content = data.content
          this.tags = data.tags ? data.tags.split(',') :[]
        }).catch(err=>{
          console.log(err);
        })
      }
    }
</script>

<style scoped>
.box span{
  font-size: 25px;
  color: black;
}
  p{
    color: #df5000;
  }


</style>
