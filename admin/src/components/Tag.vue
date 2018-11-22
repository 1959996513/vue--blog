<template>
  <div style="height: 100%;">
    <head-nav></head-nav>
    <Aside></Aside>
    <div class="tag-container main">
      <h2>标签筛选 /
        <span>CHOOSE BY TAG</span>
      </h2>
      <hr>
      <main>
        <div class="tag-list">
          <section class="tag">
            <h5>标签</h5>
            <ul class="tags">
              <li class="tag">{{ tags }}</li>
            </ul>
          </section>
          <section class="chosen-tag">
            <h5>修改标签</h5>
            <ul class="tags">
              <li class="tag-edit">
                <input type="text" class="tag-input">
                <sup>x</sup>
              </li>
            </ul>
          </section>
          <article-list></article-list>
        </div>
        <editor></editor>
      </main>
    </div>
  </div>

</template>

<script>
  import ArticleList from '@/components/common/ArticleList'
  import Editor from '@/components/common/Editor'
  import Aside from '@/components/common/Aside'
  import HeadNav from '@/components/common/HeadNav'
  import {mapState,mapGetters} from 'vuex'
    export default {
        name: "Tag",
      components:{
        Editor,
        ArticleList,
        Aside,
        HeadNav
      },
      computed:{
        ...mapState(['id','title','tags','content','isPublished']),

      },
    }
</script>

<style lang="scss" type="text/scss" scoped>
  @import  "../assets/style/variable";
  main {
  @include flex($justify: space-between);
    height: calc(100% - 48px);
    padding: 0.5em 0;
  }

  .tag-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
  .tags {
  @include flex($justify: flex-start);
    list-style: none;
    margin-bottom: 2em;
    padding: 0;
  .tag {
    margin: 0 1em 1em 0;
    padding: 0.3em;
    color: $base;
    border-radius: 2px;
    border: 1px solid $base;
    cursor: pointer;
  }
  .chosen {
    color: $white;
    background: $base;
  }

  .tag-edit {
    margin-right: 3px;
  }
  }
  .list {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  }

  .editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
  }
</style>
