<template>
<div class="editor">
{{tags}}
  <input type="text" class="title" id="title" v-model='title' @input='autosave'>

  <div class="operate-bar">
    <section class="tag-container">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tag"></use>
      </svg>
      <ul class="tags">
        <li class="tag" v-for='(tag,index) in getTags' :key='index'>
          {{tag}}
          <sup @click='delectTag(index)'>x</sup>
        </li>
      </ul>
      <input type="text" v-if="showTags" class="tag-input" id="tag-input" @keydown.enter='addTags'>
      <span class="tag-add" v-else @click='addTags'>+</span>
    </section>
    <section class="btn-container">
      <button id="delete" class="delete" @click="deleteArticle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shanchu"></use>
        </svg>
        删除文章</button>
      <button id="submit" class="not-del" @click="pushArticle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paperplane"></use>
        </svg>发布文章</button>
    </section>
  </div>
  <p class="tips">标签查询页面只能批量更改标签，修改的文章内容会自动保存</p>
  <div class="content">
    <textarea></textarea>
  </div>
</div>
</template>

<script>
  import 'simplemde/dist/simplemde.min.css'
  import request from '@/utils/request'
  import SimpleMDE from 'simplemde'
  import debounce from "lodash.debounce"
  import {mapState,mapGetters} from 'vuex'
  export default {
    name: "Editor",
    data(){
     return{
       simplemde:"", //编辑
       tags:'',
       showTags:false
     }
    },
    computed:{
     ...mapState(['id','title','content','isPublished']),
      ...mapGetters(['getTags']),
      //title是双向绑定的,英雌,它可能会改变,如果我们直接从mapState中读取他
      //那么如果改变title的话,又因为没有setter的方法,导致无法改变state里面title的值
      title:{
       get(){
         return this.$store.state.title
       },
        set(value){
          this.$store.commit('SET_TITLE',value)
        }
      }

  },
    mounted(){
     this.tags=this.$store.getters.getTags
      this.simplemde = new SimpleMDE({
       placeholder:"Talk to me,what are you say.........",
        spellChecker:false,
        toolbarTips:false,

      });
      //将vuex里面正在编辑信息放到编辑器里
      console.log(this.content);
      this.simplemde.value(this.content)
    //  绑定编辑器的按键事件及复制粘贴事件发生
      this.simplemde.codemirror.on("keyHeadler",()=>this.autosave())
      this.simplemde.codemirror.on("inputRead",()=>this.autosave())
    },
    //监控ID值发生变化,一旦发生变化就将内容变化
    watch:{
      id(val){
        this.simplemde.value(this.content);
      }
    },
    methods:{

        //自动保存
      autosave:debounce(function () {
         if(this.id){
          this.$store.dispatch('saveArticle',{
            id:this.id,
            title:this.title,
            tags:this.getTags.join(','),
            content:this.simplemde.value(),
            isPublished:this.isPublished
          })
         }
       },1000),
      //删除标签
      delectTag:function (index) {

        this.getTags.splice(index,1);
        this.autosave();
      },
      //添加标签
      addTags:function () {
          if(this.showTags) {
            const newTags = document.querySelector('#tag-input').value
            if(newTags && this.tags.indexOf(newTags) === -1){
              this.getTags.push(newTags);
              this.autosave();

            }

          }
          this.showTags=!this.showTags
      },
      //删除文章
      deleteArticle:function () {
        request({
          url:`/articles/${this.id}`,
          method:'delete',
          data:{}
        }).then(res=>{
          this.$store.commit('SET_DELETE_ARTICLE')
        }).catch(err=>{
          console.log(err);
        })
      },
      //添加文章
      pushArticle:function () {
         if(!this.isPublished){
           request({
             url:`/articles/publish/${this.id}`,
             method:'put',
             data:{}
           }).then(res=>{
             this.$store.commit('SET_PUBLISH_ARTICLE')
           }).catch(err=>{
             console.log(err);

           })
         }
      }

    }
  }
</script>

<style type='text/scss' lang='scss' scoped>
  @import "../../assets/style/variable";

  .title {
    margin-bottom: 0.3em;
    width: 100%;
    height: 2em;
    border: none;
    font-size: 2.4rem;
    color: $title;
    outline: none;
    border-bottom: 1px solid $special;
    background: none;
    text-align: center;
  }

  .operate-bar {
    @include flex($justify: space-between);
    height: 4em;
    font-size: 1.3rem;
    margin-bottom: 1em;
    .tag-container {
      @include flex($justify: flex-start);
      .icon {
        width: 1.5em;
        height: 1.5em;
        margin-right: 10px;
      }
      .tags {
        @include flex;
        list-style: none;
        margin-right: 10px;
        padding: 0;
        .tag {
          margin-right: 10px;
          color: $base;
          position: relative;
          &:last-child {
            margin-right: 0px;
          }
        }
      }
      .tag-add {
        font: {
          weight: 600;
          size: 1.6rem;
        }
        color: $special;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .tips {
    color: $quote;
    text-align: center;
  }

  .content {
    font-size: 1.6rem;
  }
</style>
