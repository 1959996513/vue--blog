<template>
  <nav class="head-nav">
    <div class="logo-container">
      <img src="" alt="" class="logo">
    </div>
    <div class="content-container">
      <section>
        <h4 class="title">
          刘虎木博客后台
        </h4>
      </section>
      <a class="log-out" @click='logout'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuichu"></use>
        </svg>
        <span>&nbsp;
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-exit"></use>
        </svg>
          <span>登出</span>
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
  import request from '@/utils/request'
  import {removeToken} from '@/utils/auth'
  export default {
   name:"HeadNav",
    data(){
     return{

     }
    },
    methods:{
      logout(){
        request({
          url:'/logout',
          method:'get'
        }).then(res=>{
          console.log(res)
          if(res.success==true){
            this.$store.commit('SET_TOKEN','')
            removeToken()
            location.reload()
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="scss" type='text/scss' scoped>
  @import  "../../assets/style/variable";
  .head-nav {
    font-family: KaiShu, Arial, sans-serif;
    @include flex($justify: flex-start);
    font-size: 1.6rem;
    height: 3em;
    .logo-container {
      @include flex;
      width: 3em;
      height: inherit;
      border-bottom: 2px solid $word;
    }
    .content-container {
      @include flex($justify: space-between);
      padding: 0.5em;
      height: 100%;
      width: calc(100% - 50px);
      border-bottom: 2px solid $base;
      .log-out {
        @include flex;
        color: $word;
      }
    }

    h4 {
      @include flex;
      margin: 0;
    }
    .subhead {
      width: 130px;
    }
    .log-out {
      cursor: pointer;
    }
  }
</style>
