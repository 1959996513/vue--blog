<template>
  <div style="height: 100%;">
    <head-nav></head-nav>
    <Aside></Aside>
    <div style="height:100%">
      <div class="list-container main">
        <h2>标签页面
          <span>ARTICLE LIST</span>
        </h2>
        <hr>
        <main>
          <div class="article-list">
            <span v-for="(tag,index) in tags" :key="index" :class="[{active:chooseTags.indexOf(tag)!=-1,tag_list:true}]" @click="chooseTagsAdd(tag)">{{ tag }}</span>
            <article-list ref="articleList"></article-list>
          </div>
          <editor></editor>
        </main>
      </div>
    </div>
  </div>

</template>

<script>
  import ArticleList from '@/components/common/ArticleList'
  import Editor from '@/components/common/Editor'
  import Aside from '@/components/common/Aside'
  import HeadNav from '@/components/common/HeadNav'
  import {mapState,mapGetters} from 'vuex'
  import request from '@/utils/request'
    export default {
        name: "Tag",
      data(){
          return{
            tags: [],
            chooseTags: []
          }
      },
      components:{
        Editor,
        ArticleList,
        Aside,
        HeadNav
      },
      computed:{
        // ...mapState(['id','title','tags','content','isPublished']),
      },
      methods: {
        chooseTagsAdd(val) {
          let index = this.chooseTags.indexOf(val);
          if (index == -1) {
            this.chooseTags.push(val);
          } else {
            this.chooseTags.splice(index, 1);
          }
          this.$refs.articleList.showArticlesList(this.chooseTags);
        }
      },
      mounted() {
        request({
          url: "/tags",
          method: "get"
        }).then(res => {
        var aa = res;
          console.log(aa)
          let showTags = [];
          for (let tag of aa) {
            let tags = tag.tags.split(",");
            if (tags.length != 0) {
              for (let t of tags) {
                while(showTags.indexOf(t)==-1&&t != ''){
                  showTags.push(t)
                }
              }
            }
          }
          this.tags = showTags;
        });
      }

    }
</script>

<style lang="scss" type="text/scss" scoped>
  @import  "../assets/style/variable";
  main {
    @include flex($justify: space-between);
    height: calc(100% - 48px);
    padding: 0.5em 0;
  }

  .article-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
    .list {
      // margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  .editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
  }
  .tag_list {
    cursor: pointer;
    display: inline-block;
    padding: 2px 5px;
    color: black;
    border: 1px solid black;
    margin: 0 5px;
    transition: all 0.2s;
    &:hover {
      color: white;
      background-color: skyblue;
      border: 1px solid skyblue;
    }
  }
  .active {
    color: white;
    background-color: skyblue;
    border: 1px solid skyblue;
  }
</style>
